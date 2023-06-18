import { useEffect, useState } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { MotionConfig, motion } from "framer-motion"
import { ChevronsUpDown, Plus, X } from "lucide-react"

import { trendingLinks } from "@/config/data"
import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import ProductCard from "@/components/ui/ProductCard"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button, buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
// import { Collapsible } from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
// import Image1 from "../public/mark-broadhead-3CH1nBz3UZM-unsplash.jpg"
import Image7 from "../public/ashkan-forouzani-S5_t6VIMClE-unsplash.jpg"
import Image10 from "../public/bannon-morrissy-hJDXQKtMML0-unsplash.jpg"
import Image11 from "../public/dushawn-jovic-8RYYhooSTF4-unsplash.jpg"
import Image9 from "../public/mike-von-2UTk-Nip5aM-unsplash.jpg"
import Image6 from "../public/pexels-fars-woldai-6739730.jpg"
import Image5 from "../public/pexels-trarete-8502210.jpg"
import Image2 from "../public/project-290-O9PGFf7fDEI-unsplash.jpg"
import Image13 from "../public/sag-ilija-4wobiQuDdVg-unsplash.jpg"
import Image3 from "../public/sinitta-leunen-bBw0JMlqNyE-unsplash.jpg"
import Image8 from "../public/toro-tseleng-GKINSnzTWPI-unsplash.jpg"
import Image4 from "../public/tyrell-james-v5Z4EGm8dyM-unsplash.jpg"
import Image12 from "../public/wassim-chouak-zH2ZWyKztNY-unsplash.jpg"

export default function IndexPage() {
  const brands = ["Nike Sportswear", "Jordan", "Nike By You", "NikeLab"]
  const brandsMore = ["ACG", "Nike Pro"]
  const [marginLeft, setDisplay] = useState(false)
  const [toggle, setToggle] = useState(true)
  const [isShown, setIsShown] = useState(false)

  // const [toggleHide, setToggleHide] = useState(true)

  const handleClick = () => {
    setToggle(!toggle)
  }
  const handleDisplay = () => {
    setDisplay(!marginLeft)
  }
  let images = [
    "/bannon-morrissy-hJDXQKtMML0-unsplash.jpg",
    "/dushawn-jovic-8RYYhooSTF4-unsplash.jpg",
    "/wassim-chouak-zH2ZWyKztNY-unsplash.jpg",
    "/sag-ilija-4wobiQuDdVg-unsplash.jpg",
  ]
  let [index, setIndex] = useState(0)
  const [small, setSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 64))
    }
  }, [])

  return (
    <Layout>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ScrollArea className="py-4 lg:hidden">
        <ScrollBar orientation="horizontal"></ScrollBar>
        <div className="flex [&>a:last-child]:pr-6">
          {trendingLinks.map((trendingLink) => (
            <Link
              key={trendingLink.title}
              title={trendingLink.title}
              href={trendingLink.href}
              className="text-base whitespace-nowrap pl-6 text-slate-800 dark:text-slate-100 hover:text-slate-900 hover:dark:text-slate-50 font-medium capitalize"
            >
              {trendingLink.title}
            </Link>
          ))}
        </div>
      </ScrollArea>
      <div className="bg-white dark:bg-slate-900 flex items-end justify-between px-6 lg:px-10 py-5 sticky top-0 z-10 dark:border-b-slate-700 transition-all">
        <h2
          className={`flex gap-x-1 font-semibold text-sm lg:text-2xl lg:tracking-tight  text-left transition-transform origin-left ${
            small ? "scale-75" : "scale-100"
          }`}
        >
          <span class="hidden lg:flex">New Clothing & Gear</span>
          <span class="lg:hidden">Results</span> (800)
        </h2>

        <div className="flex gap-x-10">
          <button className="text-sm font-medium" onClick={handleDisplay}>
            {marginLeft ? "Hide" : "Show"} Filters
          </button>
          <button className="hidden lg:flex text-sm font-medium">
            Sort By
          </button>
        </div>
      </div>

      <section className="flex relativex">
        <aside
          className="w-80 pl-10 transition-all "
          // style={{ display: display ? "block" : "none" }}
          style={{ marginLeft: marginLeft ? "" : "-20rem" }}
          // style={{ display: marginLeft ? "block" : "none" }}
        >
          <div className="sticky top-24">
            <ScrollArea className="h-[220px] overflow-hidden">
              <ScrollBar orientation="vertical"></ScrollBar>
              <div className="flex flex-col gap-y-3 mb-10">
                {trendingLinks.map((trendingLink) => (
                  <Link
                    key={trendingLink.title}
                    title={trendingLink.title}
                    href={trendingLink.href}
                    className="text-base whitespace-nowrap text-slate-800 dark:text-slate-100 hover:text-slate-900 hover:dark:text-slate-50 font-medium capitalize"
                  >
                    {trendingLink.title}
                  </Link>
                ))}
              </div>
            </ScrollArea>
            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger>Gender</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Men</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Women</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Unisex</Label>
                    </div>
                    <Collapsible>
                      <CollapsibleContent>
                        <div className="flex flex-col gap-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">Men</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">Women</Label>
                          </div>
                        </div>
                      </CollapsibleContent>
                      <CollapsibleTrigger>
                        <div className="pt-5 text-base" onClick={handleClick}>
                          {toggle ? "+ More" : "- Less"}
                        </div>
                      </CollapsibleTrigger>
                    </Collapsible>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Kids</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Boys</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Girls</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Shop by Promotion</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Buy 2, Get 25% off</Label>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Brand</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox id={brand} />
                        <Label htmlFor={brand}>{brand}</Label>
                      </div>
                    ))}
                    <Collapsible>
                      <CollapsibleContent>
                        <div className="flex flex-col gap-y-2">
                          {brandsMore.map((brandMore) => (
                            <div
                              key={brandMore}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox id={brandMore} />
                              <Label htmlFor={brandMore}>{brandMore}</Label>
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                      <CollapsibleTrigger>
                        <div className="pt-5 text-base" onClick={handleClick}>
                          {toggle ? "+ More" : "- Less"}
                        </div>
                      </CollapsibleTrigger>
                    </Collapsible>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </aside>

        <MotionConfig transition={{ duration: 0.3, ease: "circOut" }}>
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-20 transition-all ease-in-out lg:px-10">
            <ProductCard title="Nike DRI-FIT" description="Hoody" price="59.95">
              <Image src={Image2} alt="" />
            </ProductCard>
            <Link
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              scroll={false}
              href="/"
              className="flex relative overflow-hidden"
            >
              <motion.div
                animate={{ x: `-${index * 100}vw` }}
                className="flex relative xflex-1 xbg-red-200 xw-full"
              >
                {images.map((image) => (
                  <div className="relative w-screen  ">
                    <Image
                      key={image}
                      src={image}
                      className="xaspect-2/3 object-contain object-left-top x!relative w-full xh-[40rem]"
                      fill
                      alt=""
                    />
                  </div>
                ))}
              </motion.div>

              {index > 0 && (
                <Button
                  className="absolute left-0 opacity-0 top-1/2 flex items-center justify-center"
                  variant="ghost"
                  onClick={() => setIndex(index - 1)}
                >
                  Prev
                </Button>
              )}

              {index + 1 < images.length && (
                <Button
                  className="absolute right-0 opacity-0 top-1/2 flex items-center justify-center"
                  variant="ghost"
                  onClick={() => setIndex(index + 1)}
                >
                  Next
                </Button>
              )}

              {isShown && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-10 mt-4"
                >
                  <div className="flex gap-x-2 h-16 relative z-50">
                    {images.map((image, i) => (
                      <motion.button
                        onMouseEnter={() => setIndex(i)}
                        animate={{
                          scale: i === index ? 1 : 0.9,
                        }}
                        transition={{ duration: 0.1 }}
                        className="shrink-0"
                        key={image}
                      >
                        <Image
                          src={image}
                          className="aspect-[2/3] object-cover object-left-top !relative w-full"
                          fill
                          alt=""
                        />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {!isShown && (
                <div className="absolute bottom-0 z-10 w-full h-28 pt-4 px-3 lg:px-0">
                  <h2 className="font-semibold">Nike Blazer Mid '77 Vintage</h2>
                  <p>Men's Shoes</p>
                </div>
              )}
              <p className="mt-2 absolute bottom-0 z-10 font-semibold px-3 lg:px-0">
                £99.95
              </p>

              <div className="bg-white dark:bg-slate-900 absolute bottom-0 h-28 w-full"></div>
            </Link>
            <ProductCard
              title="Retro Comfort"
              description="Fleece"
              price="59.95"
            >
              <Image src={Image3} alt="" />
            </ProductCard>
            <ProductCard
              title="Nike Swoosh"
              description="Women's Pad Sports Bra"
              price="39.95"
            >
              <Image src={Image5} alt="" />
            </ProductCard>
            <ProductCard
              title="Nike DRI-FIT Miler"
              description="Men's Running Top"
              price="27.95"
            >
              <Image src={Image6} alt="" />
            </ProductCard>
            <ProductCard
              title="Nike DRI-FIT"
              description="Men's Training Tee"
              price="27.95"
            >
              <Image src={Image7} alt="" />
            </ProductCard>
            <ProductCard title="Nike DRI-FIT" description="Hoody" price="69.95">
              <Image src={Image8} alt="" />
            </ProductCard>
            <ProductCard title="Nike DRI-FIT" description="Hoody" price="49.95">
              <Image src={Image9} alt="" />
            </ProductCard>
            <ProductCard title="Nike DRI-FIT" description="Hoody" price="59.95">
              <Image src={Image4} alt="" />
            </ProductCard>
          </div>
        </MotionConfig>
      </section>
    </Layout>
  )
}
