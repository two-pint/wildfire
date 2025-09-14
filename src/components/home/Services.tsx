import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  CubeIcon,
  GlobeAltIcon,
  ServerIcon,
} from "@heroicons/react/20/solid"

const features = [
  {
    name: "WordPress Development",
    description:
      "Custom WordPress sites built for performance and scalability. From simple blogs to complex business websites.",
    icon: GlobeAltIcon,
  },
  {
    name: "Shopify E-commerce",
    description:
      "Complete Shopify stores with custom themes, payment integration, and inventory management for seamless online selling.",
    icon: CubeIcon,
  },
  {
    name: "Custom Web Applications",
    description:
      "Tailored web apps built with modern frameworks like React, Next.js, and Ruby on Rails to meet your unique business needs.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Managed Hosting",
    description:
      "Reliable, secure hosting with automatic backups, SSL certificates, and 99.9% uptime. We handle the technical details.",
    icon: ServerIcon,
  },
  {
    name: "AI Integration",
    description:
      "Smart AI features that enhance user experience - from chatbots and content generation to personalized recommendations.",
    icon: ArrowPathIcon,
  },
  {
    name: "Performance Optimization",
    description:
      "Lightning-fast loading speeds with CDN integration, image optimization, and caching strategies that boost conversions.",
    icon: CloudArrowUpIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-zinc-100 py-24 sm:py-32 mt-8">
      <div className="mx-auto max-w-8xl">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-bold text-sky-600">
            Full-service digital solutions
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-zinc-800 sm:text-5xl">
            From concept to launch, we&apos;ve got you covered.
          </p>
          <p className="mt-6 text-lg/8 text-zinc-800">
            Whether you need a stunning WordPress site, a powerful e-commerce
            store, or a custom web application, we deliver complete digital
            solutions that drive real results for your business.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-zinc-700 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-zinc-800">
                <feature.icon
                  aria-hidden="true"
                  className="absolute top-1 left-1 size-5 text-sky-600"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
