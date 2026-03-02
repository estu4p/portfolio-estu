import { Code2, Gauge, Layers, ShieldCheck, Sparkle } from 'lucide-react'
import photo from '../assets/images/banner.jpg'

export const ABOUT_ME_DATA = {
  title: 'How I Work',
  p1: 'I have experience working with technologies such as Laravel, Vue.js, React, Next.js, Express.js. While I use modern tools, my main priority is choosing the right approach based on project needs rather than relying on a specific framework.',
  p2: 'For me, good software is not only about delivering features, but also about stability, efficiency, and long-term sustainability.',
  photo: photo,
  badge: [
    {
      text: 'Modern',
      icon: Sparkle,
    },
    {
      text: 'Scalable',
      icon: Layers,
    },
    {
      text: 'Secure',
      icon: ShieldCheck,
    },
    {
      text: 'Performant',
      icon: Gauge,
    },
    {
      text: 'Clean Code',
      icon: Code2,
    },
  ],
}
