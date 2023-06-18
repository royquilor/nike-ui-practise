import { ReactNode } from "react"

interface Props {
  index: string
  title: string
  description: string
  price: string
  children: ReactNode
}

export default function ProductCard({
  index,
  title,
  description,
  price,
  children,
}: Props) {
  return (
    <div key={index} className="">
      {children}
      <div className="px-3 lg:px-0">
        <div className="my-5">
          <h2 className="font-semibold">{title}</h2>
          <p className="text-slate-500">{description}</p>
        </div>
        <p className="font-semibold">£{price}</p>
      </div>
    </div>
  )
}
