import Icon from './Icon.jsx'

export default function SocialFloat() {
  return (
    <div className="fixed right-2 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-3 sm:right-4">
      <a
        href="https://api.whatsapp.com/send/?phone=%2B918879260310"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition hover:scale-105 sm:h-14 sm:w-14"
      >
        <Icon name="WhatsApp" className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
      <a
        href="https://www.instagram.com/aanchal_therapist_puppy/"
        aria-label="Visit Instagram"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-card transition hover:scale-105 sm:h-14 sm:w-14"
      >
        <Icon name="Instagram" className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
      <a
        href="https://www.linkedin.com/in/aanchal-narang/"
        aria-label="Visit LinkedIn"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-card transition hover:scale-105 sm:h-14 sm:w-14"
      >
        <Icon name="Linkedin" className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
      <a
        href="https://www.youtube.com/@AnotherLightCounselling"
        aria-label="Visit YouTube"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-card transition hover:scale-105 sm:h-14 sm:w-14"
      >
        <Icon name="Youtube" className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>
  )
}
