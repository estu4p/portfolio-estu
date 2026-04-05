import projectDashboardWNC from '../assets/images/project-dashboard-wnc.png'
import landingPageWNC from '../assets/images/project-landingPageWNC.png'

export const PROJECTS_DATA = [
  {
    id: '1',
    project: 'Wash & Care',
    desc: 'A modern landing page for a shoe cleaning service, designed to showcase services clearly while focusing on performance, responsive design, and an intuitive user experience to increase customer engagement.',
    image: landingPageWNC,
    year: '2025',
    tools: 'Next.js, TypeScript, Tailwind CSS',
    features: [
      'Responsive design',
      'Smooth scrolling & interactive UI',
      'Optimized performance',
      'Clean & modern UI/UX design',
    ],
    previewLink: 'https://wncshoes.com/',
  },
  {
    id: '2',
    project: 'Dashboard WnC',
    desc: 'A management dashboard for a shoe cleaning service, built to streamline order tracking, inventory management, and financial reporting while ensuring efficiency, scalability, and seamless daily operations.',
    image: projectDashboardWNC,
    year: '2025',
    tools: 'Next.js, TypeScript, PostgreSQL, Prisma ORM',
    features: [
      'Role-based access',
      'Order management & tracking',
      'Financial reports & analytics',
      'Order history & reports',
      'WhatsApp integration',
    ],
    previewLink: 'https://github.com/estu4p/managemen-wnc.git',
  },
  {
    id: '3',
    project: 'Msan',
    desc: 'An e-commerce web application for shoe sales, featuring secure online payments and an integrated management dashboard to handle product stock, ensuring efficient transactions and scalable business operations.',
    image: landingPageWNC,
    year: '2026',
    tools: 'React.js, Laravel, MySQL, Midtrans Payment Gateway',
    features: [
      'Product catalog & detail pages',
      'Shopping cart & checkout system',
      'Payment integration (Midtrans)',
      'Stock management dashboard',
    ],
    previewLink: '#',
  },
]
