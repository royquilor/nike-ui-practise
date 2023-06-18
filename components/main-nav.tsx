import * as React from "react"
import { useState } from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { trendingLinks } from "@/config/data"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "./ui/input"

const shopIconsLinks: { title: string; href: string }[] = [
  {
    title: "Air Force 1",
    href: "/",
  },
  {
    title: "Air Jordan 1",
    href: "/",
  },
  {
    title: "Air Max",
    href: "/",
  },
  {
    title: "Dunk",
    href: "/",
  },
  {
    title: "Blazer",
    href: "/",
  },
  {
    title: "Pegasus",
    href: "/",
  },
  {
    title: "Mercurial",
    href: "/",
  },
]
const bestReadsLinks: { title: string; href: string }[] = [
  {
    title: ".Swoosh",
    href: "/",
  },
  {
    title: "Jordan Collection",
    href: "/",
  },
  {
    title: "Nike SB - The Vault",
    href: "/",
  },
  {
    title: "Sustainability",
    href: "/",
  },
  {
    title: "Trained Podcast - Body Positivity",
    href: "/",
  },
  {
    title: "Never Done Making History - Tigerbelles",
    href: "/",
  },
  {
    title: "Bust Through Any Mental Blocks",
    href: "/",
  },
]
const nikeStoriesLinks: { title: string; href: string }[] = [
  {
    title: "All Stories",
    href: "/",
  },
  {
    title: "Athletes*",
    href: "/",
  },
  {
    title: "Department of Nike Archives (DNA)",
    href: "/",
  },
  {
    title: "Coaching",
    href: "/",
  },
  {
    title: "Culture",
    href: "/",
  },
  {
    title: "Innovation",
    href: "/",
  },
  {
    title: "Community",
    href: "/",
  },
]
const menFeaturedLinks: { title: string; href: string }[] = [
  {
    title: "New releases",
    href: "/",
  },
  {
    title: "SNKRS launch calendar",
    href: "/",
  },
  {
    title: "Fleece shop",
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
]
const menShoesLinks: { title: string; href: string }[] = [
  {
    title: "All shoes",
    href: "/",
  },
  {
    title: "Lifestyle",
    href: "/",
  },
  {
    title: "Jordan",
    href: "/",
  },
  {
    title: "Running",
    href: "/",
  },
  {
    title: "Football",
    href: "/",
  },
  {
    title: "Basketball",
    href: "/",
  },
  {
    title: "Training and gym",
    href: "/",
  },
  {
    title: "Skateboarding",
    href: "/",
  },
  {
    title: "Nike by you",
    href: "/",
  },
]
const menClothingLinks: { title: string; href: string }[] = [
  {
    title: "All clothing",
    href: "/",
  },
  {
    title: "Hoodies and sweatshirts",
    href: "/",
  },
  {
    title: "Tracksuits",
    href: "/",
  },
  {
    title: "Jackets",
    href: "/",
  },
  {
    title: "Tops and T-Shirts",
    href: "/",
  },
  {
    title: "Trousers and tights",
    href: "/",
  },
  {
    title: "Shorts",
    href: "/",
  },
  {
    title: "Kits and Jerseys",
    href: "/",
  },
]
const menShopBySportLinks: { title: string; href: string }[] = [
  {
    title: "All sports",
    href: "/",
  },
  {
    title: "Running",
    href: "/",
  },
  {
    title: "Football",
    href: "/",
  },
  {
    title: "Basketball",
    href: "/",
  },
  {
    title: "Training and Gym",
    href: "/",
  },
  {
    title: "Tennis",
    href: "/",
  },
  {
    title: "Golf",
    href: "/",
  },
]
const menAccessoriesEquipmentLinks: { title: string; href: string }[] = [
  {
    title: "All accessories and equipment",
    href: "/",
  },
  {
    title: "Bags and backpacks",
    href: "/",
  },
  {
    title: "Socks",
    href: "/",
  },
]
interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [container, setContainer] = React.useState(null)
  // { featuredItems }: FeaturedLinkProps
  const [isActive, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <>
      <header
        className={`flex w-full gap-6 md:gap-10 z-20 ${
          isActive ? "search-open" : ""
        }`}
      >
        <Link
          href="/"
          className={`flex lg:flex-1 items-center space-x-2 relative z-20 ${
            isActive ? "fixed top-0 z-50" : ""
          }`}
        >
          <Icons.logo className="" />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>
        <div className="hidden lg:flex">
          <NavigationMenu className={`${isActive ? "hidden" : "flex"}`}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>New & Featured</NavigationMenuTrigger>
                <NavigationMenuContent className="navigation-menu-content">
                  <div className="dark:bg-slate-900 w-full relative z-10">
                    <div className="grid gap-3 p-6 pb-10 md:grid-cols-4 max-w-5xl mx-auto">
                      <div className="flex flex-col gap-y-2">
                        <h3 className="text-base font-medium mb-2 capitalize">
                          Featured
                        </h3>
                        {items.map((item) => (
                          <Link
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-slate-50 font-medium capitalize"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <h3 className="text-base font-medium mb-2 capitalize">
                          Shop icons
                        </h3>
                        {shopIconsLinks.map((shopIconsLink) => (
                          <Link
                            key={shopIconsLink.title}
                            title={shopIconsLink.title}
                            href={shopIconsLink.href}
                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-slate-50 font-medium capitalize"
                          >
                            {shopIconsLink.title}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <h3 className="text-base font-medium mb-2 capitalize">
                          Best reads
                        </h3>
                        {bestReadsLinks.map((bestReadsLink) => (
                          <Link
                            key={bestReadsLink.title}
                            title={bestReadsLink.title}
                            href={bestReadsLink.href}
                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-slate-50 font-medium capitalize"
                          >
                            {bestReadsLink.title}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <h3 className="text-base font-medium mb-2 capitalize">
                          Nike Stories
                        </h3>
                        {nikeStoriesLinks.map((nikeStoriesLink) => (
                          <Link
                            key={nikeStoriesLink.title}
                            title={nikeStoriesLink.title}
                            href={nikeStoriesLink.href}
                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-slate-50 font-medium capitalize"
                          >
                            {nikeStoriesLink.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Men</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="dark:bg-slate-900 w-full relative z-10">
                    <div className="grid gap-3 p-6 pb-10 md:grid-cols-5 max-w-7xl mx-auto">
                      <div className="flex flex-col gap-y-2">
                        <h3 className="text-base font-medium mb-2 capitalize">
                          Featured
                        </h3>
                        {menFeaturedLinks.map((menFeaturedLink) => (
                          <Link
                            key={menFeaturedLink.title}
                            title={menFeaturedLink.title}
                            href={menFeaturedLink.href}
                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-slate-50 font-medium capitalize"
                          >
                            {menFeaturedLink.title}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <h3 className="text-base font-medium mb-2 capitalize">
                          Shoes
                        </h3>
                        {menShoesLinks.map((menShoesLink) => (
                          <Link
                            key={menShoesLink.title}
                            title={menShoesLink.title}
                            href={menShoesLink.href}
                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-slate-50 font-medium capitalize"
                          >
                            {menShoesLink.title}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <h3 className="text-base font-medium mb-2 capitalize">
                          Shop By Sport
                        </h3>
                        {menShopBySportLinks.map((menShopBySportLink) => (
                          <Link
                            key={menShopBySportLink.title}
                            title={menShopBySportLink.title}
                            href={menShopBySportLink.href}
                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-slate-50 font-medium capitalize"
                          >
                            {menShopBySportLink.title}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <h3 className="text-base font-medium mb-2 capitalize">
                          Nike Stories
                        </h3>
                        {nikeStoriesLinks.map((nikeStoriesLink) => (
                          <Link
                            key={nikeStoriesLink.title}
                            title={nikeStoriesLink.title}
                            href={nikeStoriesLink.href}
                            className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-slate-50 font-medium capitalize"
                          >
                            {nikeStoriesLink.title}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <h3 className="text-base font-medium mb-2 capitalize">
                          Accessories and Equipment
                        </h3>
                        {menAccessoriesEquipmentLinks.map(
                          (menAccessoriesEquipmentLink) => (
                            <Link
                              key={menAccessoriesEquipmentLink.title}
                              title={menAccessoriesEquipmentLink.title}
                              href={menAccessoriesEquipmentLink.href}
                              className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-slate-50 font-medium capitalize"
                            >
                              {menAccessoriesEquipmentLink.title}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Women</NavigationMenuTrigger>
                <NavigationMenuContent></NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Kids</NavigationMenuTrigger>
                <NavigationMenuContent></NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Sale</NavigationMenuTrigger>
                <NavigationMenuContent></NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4 relative z-20">
          <div className="search-box w-full lg:w-auto dark:bg-gray-900">
            <div className="search-input flex items-center space-x-1">
              <Input
                className="rounded-full text-base bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 border-0 placeholder:text-gray-400 hover:placeholder:text-gray-800 placeholder:text-base font-medium px-5 focus:ring-white"
                placeholder="Search"
                onClick={handleToggle}
              />
            </div>
            <div
              className={`mx-auto max-w-2xl mt-10 ${
                isActive ? "z-10" : "hidden"
              }`}
            >
              <h3 className="text-base font-medium text-slate-500 mb-4">
                Popular Search Terms
              </h3>
              <ul className="text-xl font-medium flex flex-col gap-y-2">
                <li>Air Force 1</li>
                <li>Jordan</li>
                <li>Air Max</li>
                <li>Blazer</li>
              </ul>
            </div>
          </div>
          <ThemeToggle />
          <Button
            variant="ghost"
            onClick={handleToggle}
            className={`text-base font-medium ${
              isActive ? "z-10 fixed" : "hidden"
            }`}
          >
            Cancel
          </Button>

          <Dialog>
            <DialogTrigger className="lg:hidden">Menu</DialogTrigger>
            <DialogContent>
              {/* <DialogHeader>
                <DialogTitle>Are? you sure absolutely sure</DialogTitle>
              </DialogHeader> */}
              <DialogDescription>
                <div className="flex flex-col gap-y-10 p-3">
                  <div className="flex flex-col gap-y-4">
                    {siteConfig.featuredLinks.map((featuredLink) => (
                      <div className="">
                        <Link
                          key={featuredLink.title}
                          title={featuredLink.title}
                          href={featuredLink.href}
                          className="text-2xl text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-slate-50 font-medium capitalize"
                        >
                          {featuredLink.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-y-6">
                    <div className="text-lg font-medium">
                      Become a Nike Member for the best products, inspiration
                      and stories in sport.
                      <Link href="/" className="text-white">
                        {" "}
                        Learn more
                      </Link>
                    </div>
                    <div className="flex gap-x-2">
                      <Button pill={true}>Join Us</Button>
                      <Button variant="outline" pill={true}>
                        Sign In
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
      </header>
      <div
        className={`overflow-hidden fixed inset-0 z-10 background-white backdrop-blur-md transition-all ${
          isActive ? "visible" : "invisible"
        }`}
      ></div>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug text-slate-500 line-clamp-2 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
