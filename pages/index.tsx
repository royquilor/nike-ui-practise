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
          {trendingLinks.map((trendingLink, index) => (
            <Link
              key={index}
              title={trendingLink.title}
              href={trendingLink.href}
              className="whitespace-nowrap pl-6 text-base font-medium capitalize text-slate-800 hover:text-slate-900 dark:text-slate-100 hover:dark:text-slate-50"
            >
              {trendingLink.title}
            </Link>
          ))}
        </div>
      </ScrollArea>
      <div className="sticky top-0 z-10 flex items-end justify-between bg-white px-6 py-5 transition-all dark:border-b-slate-700 dark:bg-slate-900 lg:px-10">
        <h2
          className={`flex origin-left gap-x-1 text-left text-sm font-semibold  transition-transform lg:text-2xl lg:tracking-tight ${
            small ? "scale-75" : "scale-100"
          }`}
        >
          <span className="hidden lg:flex">New Clothing & Gear</span>
          <span className="lg:hidden">Results</span> (800)
        </h2>

        <div className="flex gap-x-10">
          <button className="text-sm font-medium" onClick={handleDisplay}>
            {marginLeft ? "Hide" : "Show"} Filters
          </button>
          <button className="hidden text-sm font-medium lg:flex">
            Sort By
          </button>
        </div>
      </div>

      <section className="flex">
        <aside
          className="w-80 pl-10 transition-all "
          // style={{ display: display ? "block" : "none" }}
          style={{ marginLeft: marginLeft ? "" : "-20rem" }}
          // style={{ display: marginLeft ? "block" : "none" }}
        >
          <div className="sticky top-24">
            <ScrollArea className="h-[220px] overflow-hidden">
              <ScrollBar orientation="vertical"></ScrollBar>
              <div className="mb-10 flex flex-col gap-y-3">
                {trendingLinks.map((trendingLink, index) => (
                  <Link
                    key={index}
                    title={trendingLink.title}
                    href={trendingLink.href}
                    className="whitespace-nowrap text-base font-medium capitalize text-slate-800 hover:text-slate-900 dark:text-slate-100 hover:dark:text-slate-50"
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
                    {brands.map((brand, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={brand} />
                        <Label htmlFor={brand}>{brand}</Label>
                      </div>
                    ))}
                    <Collapsible>
                      <CollapsibleContent>
                        <div className="flex flex-col gap-y-2">
                          {brandsMore.map((brandMore, index) => (
                            <div
                              key={index}
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
          <div className="grid w-full grid-cols-2 gap-x-5 gap-y-20 transition-all ease-in-out lg:grid-cols-3 lg:px-10">
            <ProductCard index="1" title="Nike DRI-FIT" description="Hoody" price="59.95">
              <Image src={Image2} alt="" />
            </ProductCard>
            <Link
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              scroll={false}
              href="/"
              className="relative flex overflow-hidden"
            >
              <motion.div
                animate={{ x: `-${index * 100}vw` }}
                className="relative flex"
              >
                {images.map((image, index) => (
                  <div className="relative w-screen  ">
                    <Image
                      key={index}
                      src={image}
                      className="w-full object-contain object-left-top"
                      fill
                      alt=""
                    />
                  </div>
                ))}
              </motion.div>

              {index > 0 && (
                <Button
                  className="absolute left-0 top-1/2 flex items-center justify-center opacity-0"
                  variant="ghost"
                  onClick={() => setIndex(index - 1)}
                >
                  Prev
                </Button>
              )}

              {index + 1 < images.length && (
                <Button
                  className="absolute right-0 top-1/2 flex items-center justify-center opacity-0"
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
                  <div className="relative z-50 flex h-16 gap-x-2">
                    {images.map((image, i) => (
                      <motion.button
                        onMouseEnter={() => setIndex(i)}
                        animate={{
                          scale: i === index ? 1 : 0.9,
                        }}
                        transition={{ duration: 0.1 }}
                        className="shrink-0"
                        key={i}
                      >
                        <Image
                          src={image}
                          className="!relative aspect-[2/3] w-full object-cover object-left-top"
                          fill
                          alt=""
                        />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {!isShown && (
                <div className="absolute bottom-0 z-10 h-28 w-full px-3 pt-4 lg:px-0">
                  <h2 className="font-semibold">Nike Blazer Mid &apos;77 Vintage</h2>
                  <p>Men&apos;s Shoes</p>
                </div>
              )}
              <p className="absolute bottom-0 z-10 mt-2 px-3 font-semibold lg:px-0">
                £99.95
              </p>

              <div className="absolute bottom-0 h-28 w-full bg-white dark:bg-slate-900"></div>
            </Link>
            <ProductCard
            index="2"
              title="Retro Comfort"
              description="Fleece"
              price="59.95"
            >
              <Image src={Image3} alt="" />
            </ProductCard>
            <ProductCard
            index="3"
              title="Nike Swoosh"
              description="Women's Pad Sports Bra"
              price="39.95"
            >
              <Image src={Image5} alt="" />
            </ProductCard>
            <ProductCard
            index="4"
              title="Nike DRI-FIT Miler"
              description="Men's Running Top"
              price="27.95"
            >
              <Image src={Image6} alt="" />
            </ProductCard>
            <ProductCard
            index="4"
              title="Nike DRI-FIT"
              description="Men's Training Tee"
              price="27.95"
            >
              <Image src={Image7} alt="" />
            </ProductCard>
            <ProductCard index="5" title="Nike DRI-FIT" description="Hoody" price="69.95">
              <Image src={Image8} alt="" />
            </ProductCard>
            <ProductCard index="6" title="Nike DRI-FIT" description="Hoody" price="49.95">
              <Image src={Image9} alt="" />
            </ProductCard>
            <ProductCard index="7" title="Nike DRI-FIT" description="Hoody" price="59.95">
              <Image src={Image4} alt="" />
            </ProductCard>
          </div>
        </MotionConfig>
      </section>
    </Layout>
  )
}
