import React from "react";

export const BackgroundBeams = React.memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <g clipPath="url(#clip)">
          <g filter="url(#filter)">
            <circle
              cx="200"
              cy="200"
              r="100"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="transparent"
              className="animate-pulse"
            />
            <circle
              cx="200"
              cy="200"
              r="150"
              stroke="url(#gradient2)"
              strokeWidth="1"
              fill="transparent"
              className="animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <circle
              cx="200"
              cy="200"
              r="200"
              stroke="url(#gradient3)"
              strokeWidth="0.5"
              fill="transparent"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip">
            <rect width="400" height="400" />
          </clipPath>
          <filter id="filter">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(125, 37, 37, 0.3)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.1)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.05)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.03)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Points flottants */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
});

BackgroundBeams.displayName = "BackgroundBeams";