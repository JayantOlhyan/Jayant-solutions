import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'JAYANT SYSTEMS — Building Digital Systems for Real-World Businesses';
export const size = {
  width: 1200,
  height: 600,
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
          padding: '64px 80px',
          border: '2px solid #1E293B',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '12px',
              background: '#111827',
              border: '2px solid #2563EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F8FAFC',
              fontSize: '24px',
              fontWeight: 800,
            }}
          >
            JS
          </div>
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
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '940px' }}>
          <div
            style={{
              fontSize: '60px',
              fontWeight: 800,
              color: '#F8FAFC',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
            }}
          >
            Building Digital Systems for Real-World Businesses.
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#94A3B8',
              lineHeight: 1.45,
            }}
          >
            Websites, custom software products, and practical AI-powered workflows engineered with clarity and accountability.
          </div>
        </div>

        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '24px',
            borderTop: '1px solid #1E293B',
            fontSize: '18px',
            color: '#60A5FA',
          }}
        >
          <div>jayant-systems.online</div>
          <div style={{ color: '#94A3B8' }}>Founder-Led Technology Studio</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
