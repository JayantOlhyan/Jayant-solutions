import React from 'react';

interface BrandLogoProps {
    theme?: 'dark' | 'light' | 'monochrome';
    variant?: 'horizontal' | 'compact' | 'mark';
    showSubtitle?: boolean;
    subtitle?: string;
    accentColor?: string;
    className?: string;
}

export function BrandLogo({
    theme = 'dark',
    variant = 'horizontal',
    showSubtitle = true,
    subtitle = 'AI & SOFTWARE DEVELOPMENT',
    accentColor = '#FF8A00',
    className = '',
}: BrandLogoProps) {
    const isDark = theme === 'dark';
    const isMono = theme === 'monochrome';

    const markBg = isMono
        ? 'bg-current text-background'
        : isDark
          ? 'bg-[#0B0F19] border-white/10 group-hover:border-[#FF8A00]/60'
          : 'bg-[#0B0F19] border-[#0B0F19] group-hover:border-[#C25E00]';

    const primaryTextColor = isMono
        ? 'text-current'
        : isDark
          ? 'text-white'
          : 'text-[#0B0F19]';

    const subtitleColor = isMono
        ? 'text-current opacity-60'
        : isDark
          ? 'text-white/55'
          : 'text-[#475569]';

    return (
        <span className={`inline-flex items-center gap-3.5 select-none group ${className}`}>
            {/* Original J Monogram Symbol */}
            <span
                className={`size-10 p-1.5 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02] shrink-0 text-white shadow-sm ${markBg}`}
                aria-hidden="true"
            >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <rect
                        x="10"
                        y="10"
                        width="180"
                        height="180"
                        rx="42"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="16"
                    />
                    <path
                        d="M 100 50 L 132 50 L 132 115 C 132 135, 115 152, 95 152 C 78 152, 65 140, 65 125 L 89 125 C 89 130, 91 132, 95 132 C 99 132, 108 128, 108 115 L 108 72 L 100 72 Z"
                        fill="currentColor"
                    />
                    <path
                        d="M 52 108 L 82 108 L 82 128 L 67 141 L 65 128 L 52 128 Z"
                        fill={isMono ? 'currentColor' : accentColor}
                    />
                </svg>
            </span>

            {variant !== 'mark' && (
                <span className="flex flex-col leading-none">
                    <span
                        className={`font-display font-extrabold text-sm md:text-base tracking-tight ${primaryTextColor}`}
                    >
                        JAYANT SYSTEMS
                    </span>
                    {variant === 'horizontal' && showSubtitle && (
                        <span
                            className={`font-mono text-[9.5px] tracking-[0.08em] uppercase mt-1 ${subtitleColor}`}
                        >
                            {subtitle}
                        </span>
                    )}
                </span>
            )}
        </span>
    );
}

export default BrandLogo;
