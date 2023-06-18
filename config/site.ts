import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  featuredLinks: NavItem[]
  links: {
    twitter: string
    github: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Nike",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  featuredLinks: [
    {
      title: "New & Featured",
      href: "/",
    },
    {
      title: "Men",
      href: "/",
    },
    {
      title: "Women",
      href: "/",
    },
    {
      title: "Kids",
      href: "/",
    },
    {
      title: "Sale",
      href: "/",
    },
  ],
  mainNav: [
    {
      title: "Shop all new arrivals",
      href: "/",
    },
    {
      title: "New shoes",
      href: "/",
    },
    {
      title: "New clothing",
      href: "/",
    },
    {
      title: "SNKRS launch calendar",
      href: "/",
    },
    {
      title: "Valentine's day gifts",
      href: "/",
    },
    {
      title: "Bestsellers",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
