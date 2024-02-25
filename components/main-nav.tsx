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
        className={`z-20 flex w-full gap-6 md:gap-10 ${
          isActive ? "search-open" : ""
        }`}
      >
        <Link
          href="/"
          className={`relative z-20 flex items-center space-x-2 lg:flex-1 ${
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
                  <div className="relative z-10 w-full dark:bg-slate-900">
                    <div className="mx-auto grid max-w-5xl gap-3 p-6 pb-10 md:grid-cols-4">
                      <div className="flex flex-col gap-y-2">
                        <h3 className="mb-2 text-base font-medium capitalize">
                          Featured
                        </h3>
                        {items.map((item, index) => (
                          <Link
                            key={index}
                            title={item.title}
                            href={item.href}
                            className="text-sm font-medium capitalize text-slate-500 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-50"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <h3 className="mb-2 text-base font-medium capitalize">
                          Shop icons
                        </h3>
                        {shopIconsLinks.map((shopIconsLink, index) => (
                          <Link
                            key={index}
                            title={shopIconsLink.title}
                            href={shopIconsLink.href}
                            className="text-sm font-medium capitalize text-slate-500 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-50"
                          >
                            {shopIconsLink.title}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <h3 className="mb-2 text-base font-medium capitalize">
                          Best reads
                        </h3>
                        {bestReadsLinks.map((bestReadsLink, index) => (
                          <Link
                            key={index}
                            title={bestReadsLink.title}
                            href={bestReadsLink.href}
                            className="text-sm font-medium capitalize text-slate-500 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-50"
                          >
                            {bestReadsLink.title}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <h3 className="mb-2 text-base font-medium capitalize">
                          Nike Stories
                        </h3>
                        {nikeStoriesLinks.map((nikeStoriesLink, index) => (
                          <Link
                            key={index}
                            title={nikeStoriesLink.title}
                            href={nikeStoriesLink.href}
                            className="text-sm font-medium capitalize text-slate-500 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-50"
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
                  <div className="relative z-10 w-full dark:bg-slate-900">
                    <div className="mx-auto grid max-w-7xl gap-3 p-6 pb-10 md:grid-cols-5">
                      <div className="flex flex-col gap-y-2">
                        <h3 className="mb-2 text-base font-medium capitalize">
                          Featured
                        </h3>
                        {menFeaturedLinks.map((menFeaturedLink, index) => (
                          <Link
                            key={index}
                            title={menFeaturedLink.title}
                            href={menFeaturedLink.href}
                            className="text-sm font-medium capitalize text-slate-500 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-50"
                          >
                            {menFeaturedLink.title}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <h3 className="mb-2 text-base font-medium capitalize">
                          Shoes
                        </h3>
                        {menShoesLinks.map((menShoesLink, index) => (
                          <Link
                            key={index}
                            title={menShoesLink.title}
                            href={menShoesLink.href}
                            className="text-sm font-medium capitalize text-slate-500 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-50"
                          >
                            {menShoesLink.title}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <h3 className="mb-2 text-base font-medium capitalize">
                          Shop By Sport
                        </h3>
                        {menShopBySportLinks.map(
                          (menShopBySportLink, index) => (
                            <Link
                              key={index}
                              title={menShopBySportLink.title}
                              href={menShopBySportLink.href}
                              className="text-sm font-medium capitalize text-slate-500 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-50"
                            >
                              {menShopBySportLink.title}
                            </Link>
                          )
                        )}
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <h3 className="mb-2 text-base font-medium capitalize">
                          Nike Stories
                        </h3>
                        {nikeStoriesLinks.map((nikeStoriesLink, index) => (
                          <Link
                            key={index}
                            title={nikeStoriesLink.title}
                            href={nikeStoriesLink.href}
                            className="text-sm font-medium capitalize text-slate-500 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-50"
                          >
                            {nikeStoriesLink.title}
                          </Link>
                        ))}
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <h3 className="mb-2 text-base font-medium capitalize">
                          Accessories and Equipment
                        </h3>
                        {menAccessoriesEquipmentLinks.map(
                          (menAccessoriesEquipmentLink, index) => (
                            <Link
                              key={index}
                              title={menAccessoriesEquipmentLink.title}
                              href={menAccessoriesEquipmentLink.href}
                              className="text-sm font-medium capitalize text-slate-500 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-50"
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

        <div className="relative z-20 flex flex-1 items-center justify-end space-x-4">
          <div className="search-box w-full dark:bg-gray-900 lg:w-auto">
            <div className="search-input flex items-center space-x-1">
              <Input
                className="rounded-full border-0 bg-gray-100 px-5 text-base font-medium placeholder:text-base placeholder:text-gray-400 hover:bg-gray-200 hover:placeholder:text-gray-800 focus:ring-white dark:bg-gray-800"
                placeholder="Search"
                onClick={handleToggle}
              />
            </div>
            <div
              className={`mx-auto mt-10 max-w-2xl ${
                isActive ? "z-10" : "hidden"
              }`}
            >
              <h3 className="mb-4 text-base font-medium text-slate-500">
                Popular Search Terms
              </h3>
              <ul className="flex flex-col gap-y-2 text-xl font-medium">
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
              isActive ? "fixed z-10" : "hidden"
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
                    {siteConfig.featuredLinks.map((featuredLink, index) => (
                      <div className="">
                        <Link
                          key={index}
                          title={featuredLink.title}
                          href={featuredLink.href}
                          className="text-2xl font-medium capitalize text-slate-500 hover:text-slate-900 dark:text-slate-400 hover:dark:text-slate-50"
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
        className={`background-white fixed inset-0 z-10 overflow-hidden backdrop-blur-md transition-all ${
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
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
