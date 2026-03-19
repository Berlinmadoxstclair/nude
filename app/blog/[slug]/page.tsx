import Link from 'next/link'
import { notFound } from 'next/navigation'

interface BlogPost {
  slug: string
  title: string
  date: string
  readTime: string
  content: string
}

const blogPosts: Record<string, BlogPost> = {
  'quiet-dressing': {
    slug: 'quiet-dressing',
    title: 'Quiet Dressing',
    date: 'March 15, 2024',
    readTime: '5 min read',
    content: `The concept of quiet dressing has evolved from a whisper into a movement. It's not about invisibility, but about intentionality. It's about choosing pieces that speak through their quality, their cut, their silence.

In a world of constant noise and visual chaos, our clothes can be a refuge. They can be a statement not of excess, but of restraint. A well-made linen shirt says more than a wardrobe of trends ever could.

Quiet dressing is for those who understand that true style is invisible. It's the quality of fabric, the precision of a seam, the way a garment moves with your body. It's knowing that the person sitting across from you will see you, not your clothes.

This philosophy extends beyond aesthetics. When we choose to dress quietly, we're making an environmental choice. We're choosing durability over disposability, quality over quantity, meaning over decoration.

The greatest luxury is simplicity. The rarest thing in fashion is restraint. And in a world that constantly asks us to consume, to buy, to replace—to dress quietly is a radical act.`,
  },
  'on-simplicity': {
    slug: 'on-simplicity',
    title: 'On Simplicity',
    date: 'March 8, 2024',
    readTime: '7 min read',
    content: `Simplicity is not about deprivation. It's about clarity. It's about knowing what matters and removing everything that doesn't.

In fashion, simplicity has been misunderstood for decades. It's been called boring, minimal, austere. But the greatest designers in history have always understood that simplicity is the hardest aesthetic to achieve. It requires more thought, more editing, more courage than decoration ever will.

Consider the white t-shirt. How many versions exist? Yet a perfectly cut white t-shirt—one with the right weight, the right sleeve length, the right neckline—is rarer than you might think. That's because true simplicity requires precision. It leaves nowhere to hide.

Our design philosophy is built on this principle. We don't add elements for the sake of detail. We don't create variations just to fill a catalog. Every piece we make is an exercise in asking: what is essential? What serves the wearer? What will endure?

Simplicity also grants freedom. When your wardrobe is intentional, when each piece speaks to your values and your body, dressing becomes a pleasure rather than a burden. You have clarity. You have confidence. You have more time and energy for the things that actually matter.

This is not minimalism for its own sake. This is maximalism of meaning. Every single piece, maximum impact.`,
  },
  'the-edit': {
    slug: 'the-edit',
    title: 'The Edit',
    date: 'March 1, 2024',
    readTime: '6 min read',
    content: `Curation is the highest form of compliment. When you curate something, you're saying: I've thought about this. I've made choices. I've eliminated the unnecessary.

A wardrobe is the same. It should be curated, not accumulated. This starts with the basics, the foundation, the things you'll reach for again and again.

The essential wardrobe contains pieces that work together, that mix and match, that serve you across seasons and situations. It's not about owning "everything," but about owning things that work together to create infinite combinations.

Start with basics: a white tee, a black tee, neutral trousers. Add a layer: a simple blazer, a linen shirt. Include texture: a knit, something in natural fiber. These pieces are your alphabet. Everything else is just different sentences made from the same words.

The secret to a functional wardrobe is that everything should speak the same visual language. When your clothes come from the same place—same aesthetic, same quality level, same color story—they naturally work together. Getting dressed becomes automatic, peaceful, confident.

This is also about investment. One well-made piece that you'll wear fifty times is better than five cheap pieces you'll wear a few times and discard. Quality compounds. Good pieces get better with time.

The edit is ongoing. You'll learn what works for your body, your life, your aesthetic. You'll refine. You'll remove. You'll invest in one incredible piece rather than ten mediocre ones. This is the beginning of true style.`,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="inline-block text-sm text-stone hover:text-ink transition mb-8 tracking-wide"
        >
          ← Back to Journal
        </Link>

        <article>
          <header className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex justify-between items-center text-sm text-stone">
              <p>{post.date}</p>
              <p>{post.readTime}</p>
            </div>
          </header>

          <div className="prose prose-neutral max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed mb-6 text-ink">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-nude">
            <div className="space-y-4">
              <p className="text-sm text-stone">Share this article</p>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-ink hover:text-stone transition">
                  Twitter
                </a>
                <a href="#" className="text-sm text-ink hover:text-stone transition">
                  Facebook
                </a>
                <a href="#" className="text-sm text-ink hover:text-stone transition">
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
