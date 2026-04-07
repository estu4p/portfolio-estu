import { Gauge, Layers, Settings, ShieldCheck, Sparkle } from 'lucide-react'
import photo from '../assets/images/aboutMe.png'

export const ABOUT_ME_DATA = {
  title: 'How I Work',
  // p1: 'I have experience working with technologies such as Laravel, Vue.js, React, Next.js, Express.js. While I use modern tools, my main priority is choosing the right approach based on project needs rather than relying on a specific framework.',
  p1: 'As a Full-Stack Web Developer, I build scalable web applications by selecting the right technologies—such as Laravel, React, Next.js, or Express.js—while focusing on performance, security, and maintainable code aligned with business needs.',
  p2: 'Great software combines clean code, strong architecture, and scalability to build reliable systems that support long-term growth.',
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
      text: 'Maintainable',
      icon: Settings,
    },
  ],
}
