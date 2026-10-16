import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'RideChecks — Vehicle History Reports'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080c18',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{
            width: 64, height: 64, background: '#c4953a', borderRadius: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 36, fontWeight: 900, color: 'white',
          }}>R</div>
          <span style={{ fontSize: 52, fontWeight: 900, color: 'white' }}>
            Ride<span style={{ color: '#c4953a' }}>Checks</span>
          </span>
        </div>
        <p style={{ fontSize: 28, color: '#94a3b8', textAlign: 'center', maxWidth: 700, margin: 0 }}>
          Vehicle History Reports — VIN Check USA
        </p>
        <p style={{ fontSize: 20, color: '#c4953a', marginTop: 16 }}>
          ridechecks.us
        </p>
      </div>
    ),
    { ...size }
  )
}
