# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SimWeGo eSIM e-commerce web application - A **React/Vite SPA** for purchasing eSIM bundles with multi-environment deployment support.

**Core Features:**
- Triple authentication (temporary guest, email OTP, Google/Facebook social login)
- Stripe payment integration with multi-currency support
- Firebase Cloud Messaging for push notifications
- i18next internationalization (RTL/LTR support)
- Multi-environment builds (dev, simwego, qa, sales, production)

**Tech Stack:**
- **Frontend**: React 18 + Vite 5 + TypeScript/JSX
- **State**: Redux Toolkit + Redux Persist
- **Routing**: React Router v6
- **Styling**: Tailwind CSS + Material-UI
- **Auth**: Supabase + Firebase Auth
- **Payment**: Stripe
- **API Client**: Axios with interceptors
- **Backend**: Connects to SimWeGo API (see simwego-api project)

## Development Commands

### Core Commands
- `npm run dev` - Start dev server (default mode, port 5173)
- `npm run build` - Production build to `dist/`
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment-Specific Development
- `npm run simwego` - Start with simwego environment
- `npm run qa` - Start with QA environment
- `npm run sales` - Start with sales environment
- `npm run production` - Start with production environment

### Environment-Specific Builds
All builds output to `build/` directory:
- `npm run build:dev` - Development build
- `npm run build:simwego` - SimWeGo environment build
- `npm run build:qa` - QA environment build
- `npm run build:sales` - Sales environment build
- `npm run build:production` - Production environment build

### Testing
- `vitest` - Run tests in watch mode
- `vitest run` - Run tests once
- `vitest --coverage` - Generate coverage report (HTML + lcov)

Test files: `*.test.{js,jsx,ts,tsx}` alongside source files

## Environment Configuration

Multi-environment deployment via Vite's `--mode` flag. Variables loaded from `.env`, `.env.simwego`, `.env.qa`, etc.

### Required Environment Variables
```bash
# Backend API
VITE_API_URL                           # SimWeGo API endpoint

# Supabase (authentication)
VITE_SUPABASE_URL
VITE_SUPABASE_KEY

# Firebase (FCM push notifications + social auth)
VITE_APP_API_KEY
VITE_APP_AUTH_DOMAIN
VITE_APP_PROJECT_ID
VITE_APP_STORAGE_BUCKET
VITE_APP_MESSAGING_SENDER_ID
VITE_APP_APP_ID
VITE_APP_MEASUREMENT_ID
VITE_APP_VAPID_KEY                     # Web push key pair

# Application Settings
VITE_APP_HOME_VISIBLE=true             # true: show home page, false: redirect to /plans
VITE_APP_PROJECT_TITLE                 # Project display name
VITE_APP_TITLE                         # Browser tab title
VITE_ENVIRONMENT                       # Environment name (dev/qa/prod)
VITE_SUPPORT_PROMO=true                # Enable promotional features
```

### Environment Files
- `.env` - Default/shared variables
- `.env.simwego` - SimWeGo environment
- `.env.qa` - QA environment
- `.env.sales` - Sales environment
- `.env.production` - Production environment

## Architecture Overview

### Core Structure
- **Type**: React SPA with Vite build system
- **State**: Redux Toolkit with localStorage persistence
- **Auth**: Supabase (backend) + Firebase (social) + temporary guest sessions
- **API**: Axios client with automatic token refresh
- **Styling**: Tailwind CSS (custom theme) + Material-UI components
- **i18n**: i18next with RTL/LTR support

### Directory Structure
```
src/
├── core/                    # Core application infrastructure
│   ├── apis/               # API layer (9 API modules)
│   │   ├── axios.jsx       # Configured Axios instance with interceptors
│   │   ├── authAPI.jsx     # Authentication endpoints
│   │   ├── bundlesAPI.jsx  # eSIM bundle endpoints
│   │   ├── userAPI.jsx     # User profile endpoints
│   │   ├── walletAPI.jsx   # Wallet/balance endpoints
│   │   └── ...
│   ├── routes/             # Routing system
│   │   ├── AppRouter.jsx
│   │   ├── allRoutes.jsx   # Route definitions with dynamic home
│   │   ├── ProtectedRoutes.jsx
│   │   └── UnprotectedRoutes.jsx
│   ├── supabase/           # Supabase client (SupabaseClient.jsx)
│   ├── custom-hook/        # Custom hooks (useAbortOnRouteChange, etc.)
│   ├── context/            # React contexts
│   └── variables/          # Constants and configuration
│
├── redux/                   # State management (6 slices)
│   ├── store.jsx           # Redux store with persist config
│   └── reducers/
│       ├── authReducer.jsx        # Auth tokens, user info, tmp sessions
│       ├── currencyReducer.jsx    # Currency + WhatsApp config
│       ├── orderReducer.jsx       # Order state
│       ├── searchReducer.jsx      # Search/filter state
│       ├── deviceReducer.jsx      # Device info
│       └── directionSlice.jsx     # RTL/LTR direction
│
├── pages/                   # Page components (22 pages)
│   ├── home/               # Landing page (conditional)
│   ├── plans/              # Bundle selection (PlansWrapper, Plans)
│   ├── checkout/           # Payment flow
│   ├── my-esim/           # Purchased eSIMs + details
│   ├── order/             # Order history + OrderDetails
│   ├── profile/           # User profile management
│   ├── my-wallet/         # Wallet management
│   ├── refer-earn/        # Referral program
│   ├── blog/              # Blog pages
│   └── ...
│
├── components/              # Reusable components
│   ├── layout/             # MainLayout, Navbar, Footer, AuthLayout
│   ├── stripe-payment/     # Stripe integration
│   ├── payment/            # Payment components
│   ├── ui/                 # UI primitives
│   └── ...
│
├── App.jsx                  # Root component with device fingerprinting
├── main.jsx                # Entry point with QueryClient setup
└── i18n.js                 # i18next configuration

config/well-known/          # Deep linking (Android/iOS per environment)
public/
├── firebase-messaging-sw.js  # FCM service worker
└── .well-known/             # Copied from config/ at build time
```

### Key Components

#### 1. Multi-Environment Build System (vite.config.js)
Custom Vite plugin handles environment-specific builds:
- Loads variables from `.env.{mode}` files
- Copies deep linking files: `config/well-known/{mode}/*` → `public/.well-known/`
- Injects Firebase env vars into service worker at build time
- Strips console logs in production/sales builds (`buildDrop` config)

#### 2. API Client (src/core/apis/axios.jsx)
Centralized Axios instance with interceptors:

**Request Interceptor:**
- Attaches headers: `Authorization` (JWT), `x-device-id`, `x-currency`, `x-platform`, `x-timezone`, `accept-language`
- Uses AbortController for request cancellation (tracked in `controllerMap`)

**Response Interceptor:**
- **401 (Unauthorized)**: Auto-refreshes token via `/auth/refresh-token` with `x-refresh-token` header
- **403 (Forbidden)**: Signs out user, clears cache, deletes FCM token
- Extracts backend error messages from `error.response.data.message`

#### 3. Triple Authentication System
**Three authentication types** managed in `authReducer.jsx`:

1. **Temporary Guest Login** (`tmp` state):
   - Limited access (bundle purchase only)
   - Stored separately in Redux: `authentication.tmp`

2. **Standard Email/OTP Login**:
   - User enters email → receives OTP → backend returns JWT
   - Tokens stored in `authentication.access_token` / `authentication.refresh_token`

3. **Social Login** (Google/Facebook):
   - Firebase Auth + Supabase integration
   - Requires configuration in Firebase Console, Google Console, Supabase, Facebook Dev Console

**Device Fingerprinting:**
- FingerprintJS generates stable `x-device-id` (stored in sessionStorage)
- Sent with every API request for device tracking

#### 4. Multi-Currency System
Frontend-managed currency switching:
- **System default**: Fetched from API via `currencyReducer.jsx` (stored in Redux)
- **User preference**: Stored in `sessionStorage` as `user_currency`
- Axios injects `x-currency` header: user preference > system default
- Currency can be changed in profile page without backend persistence

#### 5. State Management (Redux Persist)
Six Redux slices persisted to localStorage (`hardSet` reconciler):
- `authentication` - JWT tokens, user info, `tmp` sessions
- `currency` - System currency, WhatsApp number
- `order` - Order state
- `search` - Search filters
- `device` - Device information
- `direction` - RTL/LTR direction state

#### 6. Routing System
**Dynamic routing** based on `VITE_APP_HOME_VISIBLE`:
- `true`: Root `/` shows Home page with MainLayout
- `false`: Root `/` shows PlansWrapper (no layout) → bundle selection

**Route protection:**
- `ProtectedRoutes.jsx` - Requires authentication
- `UnprotectedRoutes.jsx` - Public access
- `MainLayout` - Navbar + content + Footer + WhatsApp button
- `AuthLayout` - Minimal layout for auth pages

#### 7. Push Notifications (Firebase Cloud Messaging)
- FCM for web push notifications (Safari not supported)
- Service worker: `public/firebase-messaging-sw.js`
- VAPID key required (`VITE_APP_VAPID_KEY`)
- Token management in `firebaseconfig.js`
- Background messages handled by service worker

#### 8. Payment Integration (Stripe)
Flow: Bundle selection → API returns client secret → Stripe Payment Element
- Components: `src/components/stripe-payment/`
- Uses `@stripe/react-stripe-js` + `@stripe/stripe-js`

#### 9. Internationalization (i18next)
- RTL/LTR support (Arabic + other languages)
- Language detection: `i18next-browser-languagedetector`
- Language stored in localStorage (`i18nextLng`)
- dayjs locale synced with language changes
- HTTP backend for loading translations

#### 10. Affiliate/Referral System
**Dual affiliate system** - Internal referrals + Rewardful integration:

**Internal Referral Program:**
- Each user gets a `referral_code` (stored in `user_info`)
- Share page: `/refer-earn` with social sharing (WhatsApp, Facebook, X, LinkedIn, Telegram, Email)
- Referral link format: `{origin}/referral?referralCode={code}`
- Landing page: `/referral` → extracts code from URL query → saves to localStorage
- Code applied automatically at checkout if found in localStorage
- Validated via `/api/v1/promotion/validate-promo` endpoint
- Removed from localStorage after successful order

**Rewardful Integration (External Affiliate Tracking):**

**1. Initialization (`index.html:14-15`)**
```javascript
// Queue function setup
(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful');

// Async script load with account ID
<script async src='https://r.wdfl.co/rw.js' data-rewardful='7026d4'></script>
```
- Creates `window.rewardful()` queue function before script loads
- Script sets `window.Rewardful.referral` when user arrives via affiliate link
- Account ID: `7026d4`

**2. Referral Capture (`PaymentFlow.jsx:78`)**
```javascript
const referralId = window.Rewardful && window.Rewardful.referral;
```
- Captures referral ID when user initiates payment
- Safe check: `window.Rewardful &&` prevents errors if script not loaded

**3. Backend Communication (`PaymentFlow.jsx:84-95`)**
```javascript
assignBundle({
  bundle_code: props?.bundle?.bundle_code,
  payment_type: typeSelected,
  promo_code: state?.promo_code || "",
  affiliate_code: "",  // Legacy field (unused)
  rewardful_referral: referralId || null,  // Sent to backend
})
```
- Sends `rewardful_referral` to `/api/v1/user/bundle/assign` or `/api/v1/user/bundle/assign-top-up`
- Backend validates referral and returns `rewardful_discount_percent`

**4. Discount Application (`PaymentFlow.jsx:105-110` → `PaymentSummary.jsx`)**
```javascript
// Backend response contains rewardful_discount_percent
if (setRewardfulDiscountPercent && res?.data?.data?.rewardful_discount_percent) {
  setRewardfulDiscountPercent(res?.data?.data?.rewardful_discount_percent);
}
```
- `PaymentSummary` receives discount via props: `rewardfulDiscountPercent`
- Creates coupon object: `{ name: "Affiliate Discount", percent_off: 10 }`
- Calculates discount: `price * percent_off / 100`
- Displays in green with `-10%` label
- Recalculates total: `price * (1 - percent_off / 100)`

**5. Conversion Tracking (`Checkout.jsx:75-91`)**
```javascript
if (window.rewardful && typeof window.rewardful === 'function') {
  window.rewardful('convert', {
    email: user_info?.email || user_info?.phone,
    amount: state?.new_price ?? data?.price
  });
}
```
- Called in `handleSuccessOrder()` after payment completion
- Sends conversion event to Rewardful with customer email and order amount
- Triggers affiliate commission calculation

**Complete Flow:**
1. User clicks affiliate link → Rewardful script sets `window.Rewardful.referral`
2. User browses site, selects bundle, proceeds to checkout
3. `PaymentFlow` captures `window.Rewardful.referral` when payment method selected
4. Frontend sends referral ID to backend in `assignBundle` API call
5. Backend validates referral, applies discount, returns `rewardful_discount_percent`
6. `PaymentSummary` displays discount line item and recalculated total
7. Payment completed → `window.rewardful('convert', {...})` tracks conversion
8. Rewardful processes commission for affiliate

**Key Files:**
- `index.html:13-15` - Script initialization
- `src/components/payment/PaymentFlow.jsx:78-110` - Referral capture & backend communication
- `src/components/payment/PaymentSummary.jsx:5-120` - Discount display
- `src/pages/checkout/Checkout.jsx:75-91` - Conversion tracking

### Testing Rewardful Integration

**Prerequisites:**
- Rewardful account with test affiliate links
- Backend configured to accept `rewardful_referral` parameter
- Backend returning `rewardful_discount_percent` in response
- Browser DevTools (Console tab)

**Test Scenario 1: Verify Script Loading**
```bash
# 1. Start dev server
npm run dev  # or npm run simwego

# 2. Open browser: http://localhost:5173
# 3. Open DevTools Console
# 4. Check Rewardful loaded:
window.rewardful  // Should be: function
window.Rewardful  // Should be: undefined (no referral yet)
```

**Test Scenario 2: Simulate Affiliate Referral**
```javascript
// In DevTools Console, manually set referral ID:
window.Rewardful = { referral: 'test-affiliate-123' };
console.log('✅ Simulated referral:', window.Rewardful.referral);
```

**Test Scenario 3: Complete Purchase Flow**
1. **Set test referral** (Console):
   ```javascript
   window.Rewardful = { referral: 'test-affiliate-123' };
   ```

2. **Navigate to plans**: Select any bundle

3. **Proceed to checkout**: Watch Console logs:
   ```
   🎫 Rewardful referral ID captured: test-affiliate-123
   🌐 Full Rewardful object: {referral: 'test-affiliate-123'}
   ```

4. **Select payment method**: Check Network tab:
   - Request: `POST /api/v1/user/bundle/assign`
   - Payload should include:
     ```json
     {
       "bundle_code": "...",
       "rewardful_referral": "test-affiliate-123"
     }
     ```

5. **Check backend response** (Network tab):
   ```json
   {
     "data": {
       "order_id": "...",
       "rewardful_discount_percent": 10
     }
   }
   ```

6. **Verify discount display** (UI):
   - Summary should show: `"Affiliate Discount (-10%)"`
   - Discount amount in green
   - Total recalculated

7. **Complete payment**: Watch for conversion log:
   ```
   ✅ Rewardful conversion tracked successfully
   ```

**Test Scenario 4: Check API Payload**
```javascript
// In PaymentFlow.jsx:84, add temporary log:
console.log('🚀 API Payload:', {
  bundle_code: props?.bundle?.bundle_code,
  payment_type: typeSelected,
  rewardful_referral: referralId,
});
```

**Test Scenario 5: Mock Backend Response**
```javascript
// In PaymentFlow.jsx:97, add temporary override:
.then((res) => {
  // Force discount for testing
  res.data.data.rewardful_discount_percent = 15;

  console.log('🔍 PaymentFlow - Full API Response:', res?.data?.data);
  // ... rest of code
})
```

**Test Scenario 6: Test Conversion Tracking**
```javascript
// In Checkout.jsx:75, verify conversion call:
if (window.rewardful && typeof window.rewardful === 'function') {
  console.log('📞 Calling rewardful convert with:', {
    email: user_info?.email,
    amount: data?.price
  });
  window.rewardful('convert', { ... });
}
```

**Test Scenario 7: Real Affiliate Link**
1. Get real affiliate link from Rewardful dashboard
   - Format: `https://yourdomain.com/?via=affiliate-name`
2. Open link in incognito window
3. Check Console:
   ```javascript
   window.Rewardful  // Should show {referral: 'actual-uuid'}
   ```
4. Complete purchase and verify in Rewardful dashboard

**Common Issues & Debugging:**

| Issue | Check | Solution |
|-------|-------|----------|
| `window.Rewardful` undefined | Script blocked by ad blocker | Disable ad blocker or whitelist domain |
| No discount applied | Backend not configured | Verify backend accepts `rewardful_referral` |
| Conversion not tracked | `window.rewardful` not function | Check script loaded before checkout |
| Wrong discount amount | Backend calculation error | Check backend logs for discount logic |

**Console Commands for Debugging:**
```javascript
// Check current state
console.log('Rewardful Status:', {
  scriptLoaded: typeof window.rewardful === 'function',
  hasReferral: !!window.Rewardful?.referral,
  referralId: window.Rewardful?.referral
});

// Clear referral (for testing)
delete window.Rewardful;

// Simulate different discount
window.testDiscount = 20;  // Use in code temporarily
```

**End-to-End Test Checklist:**
- [ ] Script loads on page load
- [ ] Referral ID captured from URL or manual set
- [ ] Console logs show `🎫 Rewardful referral ID captured`
- [ ] API request includes `rewardful_referral` field
- [ ] Backend returns `rewardful_discount_percent`
- [ ] Console logs show `🎯 Rewardful discount percent from backend`
- [ ] PaymentSummary displays green discount line
- [ ] Total price recalculated correctly
- [ ] Payment completes successfully
- [ ] Conversion tracked: `✅ Rewardful conversion tracked successfully`
- [ ] Conversion appears in Rewardful dashboard (may take few minutes)

### Quick Local Testing Guide

**Step 1: Start Development Server**
```bash
cd /Users/felicien/Desktop/simwego/simwego-eshop-web

# Start with environment of your choice
npm run dev          # Default
npm run simwego      # SimWeGo environment
npm run qa           # QA environment

# Server starts at: http://localhost:5173
```

**Step 2: Open Browser & DevTools**
```bash
# Open in browser
open http://localhost:5173

# Or manually navigate to: http://localhost:5173
# Press F12 or Cmd+Option+I (Mac) to open DevTools
# Go to Console tab
```

**Step 3: Verify Rewardful Script Loaded**
```javascript
// In Console tab, run:
console.log('Rewardful loaded:', typeof window.rewardful);
// Expected output: "Rewardful loaded: function"

console.log('Has referral:', window.Rewardful);
// Expected output: "Has referral: undefined" (normal - no referral yet)
```

**Step 4: Simulate Affiliate Referral (Method 1 - Console)**
```javascript
// Manually inject referral ID for testing
window.Rewardful = { referral: 'local-test-12345' };

// Verify it's set
console.log('✅ Test referral set:', window.Rewardful.referral);
// Expected output: "✅ Test referral set: local-test-12345"
```

**Step 5: Test Complete Purchase Flow**

1. **Navigate to plans page**:
   - Click on any destination/bundle
   - Or go directly to: `http://localhost:5173/plans`

2. **Select a bundle**:
   - Choose any eSIM bundle
   - Click "Buy Now" or similar button

3. **Watch Console for first logs**:
   ```
   🎫 Rewardful referral ID captured: local-test-12345
   🌐 Full Rewardful object: {referral: 'local-test-12345'}
   ```

4. **Select payment method**:
   - Choose "Card" or any payment method
   - Click "Checkout"

5. **Monitor Network Tab**:
   - Go to DevTools > Network tab
   - Look for: `POST /api/v1/user/bundle/assign`
   - Click on request → Preview tab
   - Verify payload contains:
     ```json
     {
       "rewardful_referral": "local-test-12345"
     }
     ```

6. **Check Backend Response**:
   - In same Network request → Response tab
   - Look for:
     ```json
     {
       "data": {
         "rewardful_discount_percent": 10
       }
     }
     ```
   - **Note**: If backend returns `null` or no discount, that's normal - backend needs configuration

7. **Watch Console for discount logs**:
   ```
   🔍 PaymentFlow - Full API Response: {...}
   🎯 Rewardful discount percent from backend: 10
   ✅ Setting rewardful discount to parent: 10
   📊 PaymentSummary - Received props: {...}
   ✅ PaymentSummary - Setting coupon with discount: 10
   ```

8. **Verify UI displays discount** (if backend returned discount):
   - Look at Payment Summary section
   - Should show green line: "Affiliate Discount (-10%)"
   - Total should be recalculated

**Step 6: Alternative - Mock Backend Response**

If backend is not configured yet, you can mock the response:

```javascript
// In src/components/payment/PaymentFlow.jsx
// After line 97, modify temporarily:

.then((res) => {
  console.log('🔍 PaymentFlow - Full API Response:', res?.data?.data);

  // 🧪 MOCK: Force discount for testing
  if (!res?.data?.data?.rewardful_discount_percent) {
    res.data.data.rewardful_discount_percent = 15;
    console.log('🧪 MOCK: Forcing 15% discount for testing');
  }

  console.log('🎯 Rewardful discount percent from backend:', res?.data?.data?.rewardful_discount_percent);
  // ... rest of code
})
```

Then restart dev server:
```bash
# Ctrl+C to stop server
npm run dev  # Restart
```

**Step 7: Test Multiple Scenarios**

**Scenario A: No referral (normal user)**
```javascript
// Clear referral
delete window.Rewardful;

// Complete purchase - should work without discount
```

**Scenario B: Different referral IDs**
```javascript
// Test with different IDs
window.Rewardful = { referral: 'affiliate-A' };
// Complete purchase

// Then test another
window.Rewardful = { referral: 'affiliate-B' };
// Complete another purchase
```

**Scenario C: Referral persists across navigation**
```javascript
// Set referral
window.Rewardful = { referral: 'test-persist' };

// Navigate between pages
// Referral should persist until page reload
```

**Step 8: Debug Command Reference**

```javascript
// === Quick Status Check ===
console.table({
  'Script Loaded': typeof window.rewardful === 'function',
  'Has Referral Object': !!window.Rewardful,
  'Referral ID': window.Rewardful?.referral || 'none',
  'Current URL': window.location.href
});

// === Monitor Rewardful Object ===
setInterval(() => {
  if (window.Rewardful) {
    console.log('📊 Rewardful:', window.Rewardful);
  }
}, 5000);

// === Test Convert Function ===
if (typeof window.rewardful === 'function') {
  window.rewardful('convert', {
    email: 'test@example.com',
    amount: 9.99
  });
  console.log('✅ Test conversion sent');
}

// === Clear Everything ===
delete window.Rewardful;
delete window._rwq;
console.log('🧹 Cleared all Rewardful data');
```

**Step 9: Test with Real Affiliate Link (Optional)**

If you want to test with a real Rewardful link:

1. Get your affiliate link from Rewardful dashboard
   - Format: `https://yourdomain.com/?via=your-affiliate`

2. Modify to use localhost:
   ```
   http://localhost:5173/?via=your-affiliate
   ```

3. Open link in **incognito window** (to avoid cached data)

4. Rewardful script should automatically set `window.Rewardful.referral`

5. Check Console:
   ```javascript
   console.log(window.Rewardful);
   // Should show real UUID from Rewardful
   ```

**Common Local Testing Issues:**

| Issue | Cause | Fix |
|-------|-------|-----|
| Script not loading | CORS or network | Check Network tab for failed requests |
| Referral not persisting | Page reload clears it | Set again after each reload |
| Backend 401/403 error | Not logged in | Complete login flow first |
| No discount shown | Backend not configured | Use mock method (Step 6) |
| Console errors | React strict mode | Ignore double logs in dev mode |

**Quick Test Script (Copy-Paste to Console):**

```javascript
// === REWARDFUL LOCAL TEST SCRIPT ===
console.log('🚀 Starting Rewardful test...\n');

// 1. Check script loaded
const scriptLoaded = typeof window.rewardful === 'function';
console.log('1️⃣ Script loaded:', scriptLoaded ? '✅' : '❌');

// 2. Set test referral
window.Rewardful = { referral: 'local-test-' + Date.now() };
console.log('2️⃣ Set referral:', window.Rewardful.referral);

// 3. Show instructions
console.log('\n📋 Next steps:');
console.log('  1. Navigate to /plans');
console.log('  2. Select a bundle');
console.log('  3. Proceed to checkout');
console.log('  4. Watch for logs: 🎫, 🔍, 🎯, ✅');
console.log('\n💡 Run this to check status anytime:');
console.log('  console.log(window.Rewardful)');
```

**Clean Up After Testing:**

```bash
# Stop dev server
Ctrl+C

# Remove any mock code added to PaymentFlow.jsx
# Commit your changes if needed
git status
```

## Important Notes

### Path Aliases
- `@` → `./src` (configured in vite.config.js)
- Use `@/components/...` instead of relative imports

### Request Cancellation
- `useAbortOnRouteChange` hook cancels pending API requests on navigation
- Prevents memory leaks and race conditions
- Tracked via `controllerMap` in axios.jsx

### Service Worker Build Process
Vite plugin processes Firebase service worker:
1. Reads `public/firebase-messaging-sw.js` template
2. Replaces `__VITE_FIREBASE_*__` placeholders with env vars
3. Writes processed file to `dist/` at build time
4. Also handles dev server middleware for hot reloading

### Deep Linking for Mobile Apps
Config files in `config/well-known/{environment}/`:
- `assetlinks.json` (Android deep linking)
- `apple-app-site-association` (iOS universal links)

Copied to `public/.well-known/` at build time via Vite config.

### Console Logging
- **Removed**: production, sales builds
- **Kept**: dev, qa, simwego builds

### Styling System
**Tailwind Config** (`tailwind.config.js`):
- Custom colors: primary (#2E3786), secondary (#7dcef0)
- Custom font families: `font-bold`, `font-medium`, `font-semibold` classes
- Custom utility: `.action-button` for consistent button styling
- Typography: h1-h6 global styles

**Material-UI**: Used for complex components (DatePicker, Select, etc.)

### Social Login Setup
Requires configuration across **4 platforms**:

1. **Firebase Console** → Authentication → Sign-in Methods:
   - Enable Google + Facebook providers
   - Add authorized domains
   - Copy OAuth redirect URL

2. **Google Console** → APIs & Services → Credentials:
   - Use Firebase auto-generated OAuth 2.0 Client ID
   - Add authorized JavaScript origins
   - Add authorized redirect URIs

3. **Supabase** → Authentication → External OAuth Providers:
   - Add Google Client ID
   - Add Facebook App ID + Secret
   - Copy callback URLs

4. **Facebook Developer Console** → App Settings → Facebook Login:
   - Add valid OAuth redirect URIs from Firebase
   - Add valid OAuth redirect URIs from Supabase
   - Configure use cases

### API Error Handling
Backend errors extracted from `error.response.data.message` and set as `error.message` in axios interceptor. Always use `error.message` for user-facing error messages.

### WhatsApp Integration
- WhatsApp number fetched from API and stored in `currencyReducer`
- Fixed button appears in bottom-right corner
- Number formatted by removing hyphens before generating `wa.me` link

### Development Workflow
1. Copy `.env.simwego` or create custom `.env` file
2. Run `npm install`
3. Start dev server: `npm run dev` or `npm run simwego`
4. Access at `http://localhost:5173`
5. Build for deployment: `npm run build:{environment}`
