import { useEffect, useState } from 'react'

const PLACEHOLDER =
  'data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000"><rect fill="#ececec" width="800" height="1000"/><text x="400" y="510" text-anchor="middle" fill="#888" font-family="system-ui,sans-serif" font-size="24">Capile</text></svg>'
  )

/** Imágenes remotas: evita bloqueos por referrer y muestra marcador si el enlace falla. */
export default function SafeImage({ src, alt, className = '', loading, decoding, ...rest }) {
  const [current, setCurrent] = useState(src)

  useEffect(() => {
    setCurrent(src)
  }, [src])

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      referrerPolicy="no-referrer"
      onError={() => {
        setCurrent((c) => (c === PLACEHOLDER ? c : PLACEHOLDER))
      }}
      {...rest}
    />
  )
}
