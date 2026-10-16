import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'JAYANT SYSTEMS — Building Digital Systems for Real-World Businesses';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0F1D',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          fontFamily: 'sans-serif',
          padding: '72px 84px',
          border: '2px solid #1E293B',
        }}
      >
        {/* Top Row: JS Monogram + Brand Wordmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              border: '4px solid white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '32px',
              fontWeight: 900,
              position: 'relative',
            }}
          >
            J
            <div
              style={{
                position: 'absolute',
                bottom: '8px',
                left: '8px',
                width: '12px',
                height: '12px',
                background: '#F37021',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 800,
                color: '#F8FAFC',
                letterSpacing: '0.06em',
              }}
            >
              JAYANT SYSTEMS
            </div>
            <div
              style={{
                fontSize: '13px',
                color: '#94A3B8',
                letterSpacing: '0.16em',
                marginTop: '4px',
              }}
            >
              WEB · SOFTWARE · AI ENGINEERING
            </div>
          </div>
        </div>

        {/* Center Headline & Positioning */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '960px' }}>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#F8FAFC',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}
          >
            Building Digital Systems for Real-World Businesses.
          </div>
          <div
            style={{
              fontSize: '26px',
              color: '#94A3B8',
              lineHeight: 1.45,
              maxWidth: '860px',
            }}
          >
            Founder-led technology studio designing and building websites, custom software products, and practical AI-powered workflows.
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '28px',
            borderTop: '1px solid #1E293B',
            fontSize: '18px',
            color: '#FF8A00',
            letterSpacing: '0.04em',
          }}
        >
          <div>jayant-systems.online</div>
          <div style={{ color: '#94A3B8' }}>
            Technology built with clarity, purpose, and accountability.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
