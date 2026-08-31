import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark-only' | 'light' | 'compact';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  size = 'md'
}) => {
  const sizeMap = {
    sm: { height: 28, text: 'text-lg', sub: 'text-[9px]' },
    md: { height: 36, text: 'text-xl', sub: 'text-[10px]' },
    lg: { height: 48, text: 'text-2xl', sub: 'text-[11px]' },
    xl: { height: 60, text: 'text-3xl', sub: 'text-[13px]' }
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Green Bean Symbol + Bridge + Sovereign Trade Emblem */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          width={currentSize.height}
          height={currentSize.height}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-500 hover:scale-105"
        >
          {/* Subtle Outer Ring / Sovereign Latitude */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="#C9A227"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            strokeOpacity="0.45"
          />

          {/* Solid Geometric Outer Frame */}
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="#09111D"
            stroke="#2E7D32"
            strokeWidth="2"
          />

          {/* Bridge Architectural Arch (Base Foundation) */}
          <path
            d="M22 68 C 22 48, 78 48, 78 68"
            stroke="#C9A227"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M32 68 L 32 57 M 50 68 L 50 52 M 68 68 L 68 57"
            stroke="#C9A227"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />

          {/* Signature Green Bean Organic Curve (Left Primary Pod - Bridge Green) */}
          <path
            d="M34 50 C 26 34, 38 20, 52 22 C 60 23, 62 30, 54 38 C 46 46, 38 48, 34 50 Z"
            fill="url(#greenBeanGradPrimary)"
          />

          {/* Sprouting Seed / High-Growth Apple Green Leaf */}
          <path
            d="M51 22 C 62 16, 74 24, 68 37 C 63 46, 52 42, 51 22 Z"
            fill="url(#appleGreenGrad)"
          />

          {/* Golden Core Seed Meridian / Golden Axis */}
          <circle cx="48" cy="32" r="3" fill="#C9A227" />
          <circle cx="58" cy="28" r="2" fill="#F7F5EE" />

          {/* Gradients */}
          <defs>
            <linearGradient id="greenBeanGradPrimary" x1="28" y1="20" x2="60" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6BBF59" />
              <stop offset="0.6" stopColor="#2E7D32" />
              <stop offset="1" stopColor="#1E5622" />
            </linearGradient>
            <linearGradient id="appleGreenGrad" x1="50" y1="16" x2="74" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8BE278" />
              <stop offset="1" stopColor="#2E7D32" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {variant !== 'mark-only' && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline tracking-tight">
            <span className={`font-serif font-bold text-[#F7F5EE] ${currentSize.text}`}>
              Bridge<span className="text-[#6BBF59]">afri</span><span className="text-[#C9A227]">port</span>
            </span>
          </div>
          <span className={`font-mono text-[#E6E2D3]/60 uppercase tracking-[0.2em] font-medium mt-1 ${currentSize.sub}`}>
            Market Expansion Corp
          </span>
        </div>
      )}
    </div>
  );
};
