import { ImageResponse } from 'next/og'

export const alt = 'Jayant Web & AI Systems — Custom AI & Software Development'
export const size = {
  width: 1200,
  height: 600,
}
export const contentType = 'image/png'

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0f1e 0%, #111827 50%, #0a0f1e 100%)',
          fontFamily: 'Arial, Helvetica, sans-serif',
          position: 'relative',
          overflow: 'hidden',
          gap: '60px',
          padding: '60px',
        }}
      >
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
            borderRadius: '32px',
            width: '160px',
            height: '160px',
            flexShrink: 0,
            position: 'relative',
            border: '2px solid rgba(255,255,255,0.1)',
          }}
        >
          <span
            style={{
              fontSize: '110px',
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
              top: '18px',
              right: '24px',
              width: '28px',
              height: '28px',
              background: '#F37021',
              borderRadius: '5px',
              display: 'flex',
            }}
          />
        </div>

        {/* Text content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <span
            style={{
              fontSize: '44px',
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1.1,
              letterSpacing: '-1px',
            }}
          >
            Jayant Web & AI Systems
          </span>
          <span
            style={{
              fontSize: '22px',
              color: '#94a3b8',
              lineHeight: 1.4,
            }}
          >
            Custom AI, Software & Web Development Agency
          </span>

          {/* Tags */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              marginTop: '12px',
            }}
          >
            {['AI', 'SaaS', 'Web Apps', 'Automation'].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: '6px 16px',
                  borderRadius: '999px',
                  border: '1px solid rgba(243, 112, 33, 0.3)',
                  color: '#F37021',
                  fontSize: '14px',
                  display: 'flex',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
