/** Parámetros recomendados para hotlink estable en images.unsplash.com */
export function unsplashPhoto(idWithSlug, width, quality = 80) {
  const base = `https://images.unsplash.com/${idWithSlug}`
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: String(width),
    q: String(quality),
  })
  return `${base}?${params.toString()}`
}
