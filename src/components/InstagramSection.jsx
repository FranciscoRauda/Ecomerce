import SafeImage from './SafeImage'
import { unsplashPhoto } from '../lib/unsplashUrl'

const FEED = [
  'photo-1523381210434-271e8be1f52b',
  'photo-1529139574466-a303027c1d8b',
  'photo-1490481651871-ab68de25d43d',
  'photo-1503342217505-b0a15ec3261c',
  'photo-1512436991641-6745cdb1723f',
  'photo-1525507119028-ed4c629a60a3',
].map((id) => unsplashPhoto(id, 600))

export default function InstagramSection() {

  return (
    <section className="bg-white px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-display text-2xl font-bold text-dark sm:text-3xl">
          Follow Us On Instagram
        </h2>
        <p className="mt-2 text-slate">@capile_store</p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {FEED.map((img, index) => (
            <a
              key={index}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <SafeImage
                src={img}
                alt={`Instagram ${index + 1}`}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-dark/0 transition duration-300 group-hover:bg-dark/20" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
