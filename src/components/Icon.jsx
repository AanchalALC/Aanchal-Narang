import {
  Activity, ArrowRight, ArrowUpRight, Baby, BadgeCheck, BookOpen, Brain, Calendar,
  Camera, Check, CheckCircle2, ChevronLeft, ChevronRight, Circle, CircleDot, Clock, Cloud, Eye, Flame, Flower2,
  Globe2, GraduationCap, HandHeart, Heart, HeartCrack, HeartHandshake, HeartPulse,
  HelpCircle, Home, Image, Instagram, KeyRound, Landmark, Laptop, Layers, Linkedin, Mail, MapPin,
  Menu, MessageCircle, MessageCircleHeart, Minus, MoonStar, Newspaper, PenTool, PersonStanding,
  Phone, Play, Plus, Presentation, Quote, Rainbow, Repeat, Salad, ScanFace, ShieldCheck,
  ShieldHalf, Snowflake, Sparkles, Sprout, Star, UserRound, Users, Wine, X, Youtube,
} from 'lucide-react'

function WhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.46 0 .1 5.36.1 11.94c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.91 11.91 0 0 0 5.78 1.47h.01c6.58 0 11.94-5.36 11.94-11.94a11.86 11.86 0 0 0-3.46-8.41zm-8.48 18.34h-.01a9.89 9.89 0 0 1-5.03-1.37l-.36-.21-3.71.97.99-3.62-.24-.37a9.84 9.84 0 0 1-1.51-5.27c0-5.46 4.44-9.9 9.91-9.9 2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 0 1 2.9 7c-.01 5.46-4.45 9.9-9.93 9.9zm5.43-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.06 2.88 1.21 3.08c.15.2 2.09 3.2 5.07 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z" />
    </svg>
  )
}

// String-name -> component map. Add an import + entry to ship a new icon.
const map = {
  Activity, ArrowRight, ArrowUpRight, Baby, BadgeCheck, BookOpen, Brain, Calendar,
  Camera, Check, CheckCircle2, ChevronLeft, ChevronRight, CircleDot, Clock, Cloud, Eye, Flame, Flower2,
  Globe2, GraduationCap, HandHeart, Heart, HeartCrack, HeartHandshake, HeartPulse,
  HelpCircle, Home, Image, Instagram, KeyRound, Landmark, Laptop, Layers, Linkedin, Mail, MapPin,
  Menu, MessageCircle, MessageCircleHeart, Minus, MoonStar, Newspaper, PenTool, PersonStanding,
  Phone, Play, Plus, Presentation, Quote, Rainbow, Repeat, Salad, ScanFace, ShieldCheck,
  ShieldHalf, Snowflake, Sparkles, Sprout, Star, UserRound, Users, Wine, X, WhatsApp, Youtube,
}

export default function Icon({ name, ...props }) {
  const Cmp = map[name] || Circle
  return <Cmp {...props} />
}
