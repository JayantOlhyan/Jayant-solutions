import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#111111',
          borderRadius: '36px',
          position: 'relative',
        }}
      >
        <span
          style={{
            fontSize: '120px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Arial, Helvetica, sans-serif',
            lineHeight: 1,
          }}
        >
          J
        </span>
        <div
          style={{
            position: 'absolute',
            top: '24px',
            right: '32px',
            width: '36px',
            height: '36px',
            background: '#F37021',
            borderRadius: '6px',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
