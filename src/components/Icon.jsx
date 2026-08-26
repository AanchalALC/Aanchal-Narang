import {
  Activity, ArrowRight, ArrowUpRight, Baby, BadgeCheck, BookOpen, Brain, Calendar,
  Camera, Check, CheckCircle2, Circle, CircleDot, Clock, Cloud, Eye, Flame, Flower2,
  Globe2, GraduationCap, HandHeart, Heart, HeartCrack, HeartHandshake, HeartPulse,
  HelpCircle, Home, Image, Instagram, KeyRound, Landmark, Laptop, Layers, Mail, MapPin,
  Menu, MessageCircle, MessageCircleHeart, Minus, MoonStar, Newspaper, PenTool, PersonStanding,
  Phone, Play, Plus, Presentation, Quote, Rainbow, Repeat, Salad, ScanFace, ShieldCheck,
  ShieldHalf, Snowflake, Sparkles, Sprout, Star, UserRound, Users, Wine, X,
} from 'lucide-react'

// String-name -> component map. Add an import + entry to ship a new icon.
const map = {
  Activity, ArrowRight, ArrowUpRight, Baby, BadgeCheck, BookOpen, Brain, Calendar,
  Camera, Check, CheckCircle2, CircleDot, Clock, Cloud, Eye, Flame, Flower2,
  Globe2, GraduationCap, HandHeart, Heart, HeartCrack, HeartHandshake, HeartPulse,
  HelpCircle, Home, Image, Instagram, KeyRound, Landmark, Laptop, Layers, Mail, MapPin,
  Menu, MessageCircle, MessageCircleHeart, Minus, MoonStar, Newspaper, PenTool, PersonStanding,
  Phone, Play, Plus, Presentation, Quote, Rainbow, Repeat, Salad, ScanFace, ShieldCheck,
  ShieldHalf, Snowflake, Sparkles, Sprout, Star, UserRound, Users, Wine, X,
}

export default function Icon({ name, ...props }) {
  const Cmp = map[name] || Circle
  return <Cmp {...props} />
}
