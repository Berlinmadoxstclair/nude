interface ProductCardProps {
  id: string
  title: string
  price: number
  category: string
  image: string
}

export default function ProductCard({ id, title, price, category, image }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="mb-4 overflow-hidden bg-gradient-to-br from-nude to-blush aspect-square flex items-center justify-center">
        <div className="text-center text-warm-white opacity-20 font-light">
          {image}
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-xs text-stone tracking-wide uppercase">{category}</p>
        <h3 className="text-ink font-semibold text-base group-hover:opacity-70 transition">
          {title}
        </h3>
        <p className="text-sm text-ink font-medium">${price}</p>
      </div>
    </div>
  )
}
