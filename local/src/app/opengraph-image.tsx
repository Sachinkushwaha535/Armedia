import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Armedia — Marketing Media Agency Auckland & New Zealand'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(145deg, #0a0a0a 0%, #141414 55%, #1a1a0f 100%)',
          color: '#f5f5f5',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: '#d4f04a',
          }}
        >
          ARMEDIA
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 900 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            Marketing media agency for smarter campaign growth
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.4, color: 'rgba(245,245,245,0.82)' }}>
            Strategy · Advertising · AI · BI · Digital and offline media · Auckland and NZ
          </div>
        </div>
        <div style={{ fontSize: 22, color: 'rgba(212,240,74,0.9)' }}>www.armedia.co.nz</div>
      </div>
    ),
    { ...size },
  )
}
