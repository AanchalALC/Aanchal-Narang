import Icon from './Icon.jsx'

export default function SocialFloat() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col gap-3">
      <a href="https://api.whatsapp.com/send/?phone=%2B918879260310" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer nofollow"
         className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white
                    shadow-card transition hover:scale-105">
        <Icon name="MessageCircle" className="h-7 w-7" />
      </a>
    </div>
  )
}
