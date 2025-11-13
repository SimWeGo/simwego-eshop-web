import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useSearchParams } from "react-router-dom";
import { Gift } from "lucide-react";

const PaymentSummary = ({ data, rewardfulDiscountPercent, isCheckoutPage }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const state = location.state;
  const [rewardfulCoupon, setRewardfulCoupon] = useState(null);
  const [hasAffiliateDiscount, setHasAffiliateDiscount] = useState(false);
  const [searchParams] = useSearchParams();

  console.log('📊 PaymentSummary - Received props:', { data: data?.bundle_code, rewardfulDiscountPercent });

  useEffect(() => {
    console.log('📊 PaymentSummary - useEffect triggered, discount:', rewardfulDiscountPercent);
    // Use discount from backend if provided
    if (rewardfulDiscountPercent) {
      console.log('✅ PaymentSummary - Setting coupon with discount:', rewardfulDiscountPercent);
      setRewardfulCoupon({
        id: "affiliate-discount",
        name: "Affiliate Discount",
        percent_off: rewardfulDiscountPercent,
        duration: "once"
      });
    } else {
      console.log('❌ PaymentSummary - No discount to apply');
    }
  }, [rewardfulDiscountPercent]);

  // Check if user came via affiliate link
  useEffect(() => {
    const via = searchParams.get("via");
    const referral = searchParams.get("referral");
    const hasRewardful = window.Rewardful && window.Rewardful.referral;

    if (via || referral || hasRewardful) {
      setHasAffiliateDiscount(true);
    }
  }, [searchParams]);

  console.log('📊 PaymentSummary - Current rewardfulCoupon state:', rewardfulCoupon);

  return (
    <div
      className={
        "bg-primary-50 p-4 rounded-2xl flex flex-col gap-8 w-full sm:basis-[50%] shadow-sm grow-0 min-w-0"
      }
    >
      <h1 className={"font-bold text-2xl"}>{t("checkout.summary")}</h1>

      {/* Affiliate discount reminder - only on email page (NOT on checkout page) */}
      {hasAffiliateDiscount && !isCheckoutPage && (
        <div className="bg-secondary/10 border-l-4 border-secondary/30 rounded-r-lg p-3 sm:p-4 flex items-start gap-3">
          <div className="flex-shrink-0">
            <Gift className="text-secondary" size={28} />
          </div>
          <div className="flex-1">
            <p className="text-sm sm:text-base font-semibold text-secondary mb-1">
              {t("affiliate.discountReminder")}
            </p>
            <p className="text-xs sm:text-sm text-content-600 leading-snug">
              {t("affiliate.discountAppliedNextStep")}
            </p>
          </div>
        </div>
      )}

      <div className={"flex flex-col gap-2 min-w-0"}>
        <div
          className={
            "flex flex-row justify-between items-start gap-[1rem] min-w-0"
          }
        >
          <label className={"flex-1 font-semibold"}>
            {t("checkout.bundleName")}
          </label>
          <p
            dir={"ltr"}
            className={`flex-1 font-bold truncate ${
              localStorage.getItem("i18nextLng") === "en"
                ? "text-right"
                : "text-left"
            }`}
          >
            {data?.display_title || t("common.notAvailable")}
          </p>
        </div>
        <div className={"flex flex-row justify-between items-start gap-[1rem]"}>
          <label className={"flex-1 font-semibold"}>
            {t("checkout.subtotal")}
          </label>
          <p
            dir={"ltr"}
            className={`flex-1 font-bold ${
              localStorage.getItem("i18nextLng") === "en"
                ? "text-right"
                : "text-left"
            }`}
          >
            {state?.new_price_display || data?.price_display}
          </p>
        </div>

        {/* Rewardful Coupon Discount */}
        {rewardfulCoupon && (
          <div className={"flex flex-row justify-between items-start gap-[1rem]"}>
            <label className={"flex-1 font-semibold text-secondary"}>
              {rewardfulCoupon.name || "Affiliate Discount"}
              {rewardfulCoupon.percent_off && ` (-${rewardfulCoupon.percent_off}%)`}
            </label>
            <p
              dir={"ltr"}
              className={`flex-1 font-bold text-secondary ${
                localStorage.getItem("i18nextLng") === "en"
                  ? "text-right"
                  : "text-left"
              }`}
            >
              {rewardfulCoupon.percent_off
                ? `-${((data?.price || 0) * rewardfulCoupon.percent_off / 100).toFixed(2)} ${data?.currency_code || 'EUR'}`
                : rewardfulCoupon.amount_off
                ? `-${(rewardfulCoupon.amount_off / 100).toFixed(2)} ${rewardfulCoupon.currency?.toUpperCase()}`
                : ''}
            </p>
          </div>
        )}
      </div>
      <hr />
      <div className={"flex flex-row justify-between items-start gap-[1rem]"}>
        <label className={"font-semibold"}>{t("checkout.total")}</label>
        <p
          dir={"ltr"}
          className={`font-bold text-2xl ${
            localStorage.getItem("i18nextLng") === "en"
              ? "text-right"
              : "text-left"
          }`}
        >
          {rewardfulCoupon && rewardfulCoupon.percent_off
            ? `${((data?.price || 0) * (1 - rewardfulCoupon.percent_off / 100)).toFixed(2)} ${data?.currency_code || 'EUR'}`
            : rewardfulCoupon && rewardfulCoupon.amount_off
            ? `${((data?.price || 0) - rewardfulCoupon.amount_off / 100).toFixed(2)} ${data?.currency_code || 'EUR'}`
            : state?.new_price_display || data?.price_display}
        </p>
      </div>
    </div>
  );
};

export default PaymentSummary;
