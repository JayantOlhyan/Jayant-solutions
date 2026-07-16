import { ImageResponse } from 'next/og'

export const alt = 'Jayant Web & AI Systems — Building AI Solutions That Automate, Scale & Transform Businesses'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0f1e 0%, #111827 50%, #0a0f1e 100%)',
          fontFamily: 'Arial, Helvetica, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            display: 'flex',
            background:
              'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.1) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.1) 60px)',
          }}
        />

        {/* Orange accent line at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #F37021, #ff9a56, #F37021)',
            display: 'flex',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#111111',
            borderRadius: '24px',
            width: '120px',
            height: '120px',
            marginBottom: '32px',
            position: 'relative',
            border: '2px solid rgba(255,255,255,0.1)',
          }}
        >
          <span
            style={{
              fontSize: '80px',
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1,
            }}
          >
            J
          </span>
          <div
            style={{
              position: 'absolute',
              top: '14px',
              right: '18px',
              width: '22px',
              height: '22px',
              background: '#F37021',
              borderRadius: '4px',
              display: 'flex',
            }}
          />
        </div>

        {/* Title */}
        <span
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.2,
            letterSpacing: '-1px',
          }}
        >
          Jayant Web & AI Systems
        </span>

        {/* Subtitle */}
        <span
          style={{
            fontSize: '24px',
            color: '#94a3b8',
            textAlign: 'center',
            marginTop: '16px',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Custom AI, Software & Web Development Agency
        </span>

        {/* Tags row */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '32px',
          }}
        >
          {['AI Development', 'SaaS', 'Web Apps', 'Automation', 'Cloud'].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: '8px 20px',
                  borderRadius: '999px',
                  border: '1px solid rgba(243, 112, 33, 0.3)',
                  color: '#F37021',
                  fontSize: '16px',
                  display: 'flex',
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>

        {/* Bottom URL */}
        <span
          style={{
            position: 'absolute',
            bottom: '24px',
            color: '#64748b',
            fontSize: '18px',
          }}
        >
          jayantwebai.com
        </span>
      </div>
    ),
    {
      ...size,
    }
  )
}
