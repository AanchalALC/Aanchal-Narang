import { pressLogos } from '../data/mediaFeatures.js'

function Logo({ name, image, href, decorative = false }) {
  const content = (
    <img
      src={image}
      alt={decorative ? '' : name}
      aria-hidden={decorative || undefined}
      className="h-[52px] w-[132px] object-contain"
      loading="eager"
    />
  )

  return (
    <div className="flex h-[104px] w-[168px] flex-shrink-0 items-center justify-center rounded-[18px] border border-line bg-white px-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card">
      {decorative ? content : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label={`Read ${name} feature`}
          className="flex h-full w-full items-center justify-center rounded-[18px] focus-visible:outline-offset-[-3px]"
        >
          {content}
        </a>
      )}
    </div>
  )
}

export default function LogoCarousel() {
  return (
    <div className="logo-carousel" aria-label="Publications featuring Aanchal Narang">
      <div className="logo-carousel__track">
        <div className="logo-carousel__group">
          {pressLogos.map((logo) => <Logo key={logo.name} {...logo} />)}
        </div>
        <div className="logo-carousel__group" aria-hidden="true">
          {pressLogos.map((logo) => <Logo key={logo.name} {...logo} decorative />)}
        </div>
      </div>
    </div>
  )
}
