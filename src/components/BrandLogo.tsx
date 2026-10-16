import React from 'react';

interface BrandLogoProps {
    /**
     * 'dark' = light text on dark background (default for dark navy header/footer)
     * 'light' = dark text on light background
     * 'monochrome' = single-color currentColor rendering
     */
    theme?: 'dark' | 'light' | 'monochrome';
    /**
     * 'horizontal' = JS Monogram + JAYANT SYSTEMS wordmark + optional subtitle
     * 'compact' = JS Monogram + single-line JAYANT SYSTEMS wordmark
     * 'mark' = JS Monogram symbol only
     */
    variant?: 'horizontal' | 'compact' | 'mark';
    showSubtitle?: boolean;
    subtitle?: string;
    className?: string;
}

export function BrandLogo({
    theme = 'dark',
    variant = 'horizontal',
    showSubtitle = true,
    subtitle = 'WEB · SOFTWARE · AI ENGINEERING',
    className = '',
}: BrandLogoProps) {
    const isDark = theme === 'dark';
    const isMono = theme === 'monochrome';

    const markBg = isMono
        ? 'bg-current text-background'
        : isDark
          ? 'bg-[#111827] border-[#1E293B] group-hover:border-[#2563EB]'
          : 'bg-[#0A0F1D] border-[#0A0F1D] group-hover:border-[#2563EB]';

    const primaryTextColor = isMono
        ? 'text-current'
        : isDark
          ? 'text-[#F8FAFC]'
          : 'text-[#0F172A]';

    const accentTextColor = isMono
        ? 'text-current opacity-80'
        : isDark
          ? 'text-[#3B82F6]'
          : 'text-[#2563EB]';

    const subtitleColor = isMono
        ? 'text-current opacity-60'
        : isDark
          ? 'text-[#94A3B8]'
          : 'text-[#475569]';

    return (
        <span className={`inline-flex items-center gap-3 select-none group ${className}`}>
            {/* Geometric JS Monogram Symbol */}
            <span
                className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-colors shrink-0 shadow-xs ${markBg}`}
                aria-hidden="true"
            >
                <svg
                    viewBox="0 0 120 120"
                    fill="none"
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Registration Node */}
                    <rect
                        x="22"
                        y="26"
                        width="10"
                        height="10"
                        rx="2"
                        fill={isMono ? 'currentColor' : '#3B82F6'}
                    />
                    {/* J Stem + Hook */}
                    <path
                        d="M38 26H53V74C53 85.0457 44.0457 94 33 94H22V80H32C35.866 80 38 77.866 38 74V26Z"
                        fill={isMono ? 'currentColor' : '#F8FAFC'}
                    />
                    {/* S Stepped System Waveform */}
                    <path
                        d="M64 26H98V40H76V52H88C94.6274 52 100 57.3726 100 64V82C100 88.6274 94.6274 94 88 94H62V80H85V66H73C66.3726 66 61 60.6274 61 54V38C61 31.3726 66.3726 26 73 26H64Z"
                        fill={isMono ? 'currentColor' : '#3B82F6'}
                    />
                </svg>
            </span>

            {variant !== 'mark' && (
                <span className="flex flex-col leading-none">
                    <span
                        className={`font-display font-extrabold text-[15px] sm:text-base tracking-[0.04em] uppercase ${primaryTextColor}`}
                    >
                        JAYANT <span className={accentTextColor}>SYSTEMS</span>
                    </span>
                    {variant === 'horizontal' && showSubtitle && (
                        <span
                            className={`font-mono text-[9.5px] tracking-[0.14em] uppercase mt-1 ${subtitleColor}`}
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
