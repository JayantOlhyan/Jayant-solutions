import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
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
          borderRadius: '6px',
          position: 'relative',
        }}
      >
        <span
          style={{
            fontSize: '24px',
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
            top: '4px',
            right: '5px',
            width: '8px',
            height: '8px',
            background: '#F37021',
            borderRadius: '1px',
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
