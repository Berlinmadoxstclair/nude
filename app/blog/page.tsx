import PostCard from '@/components/PostCard'

export default function Blog() {
  const posts = [
    {
      slug: 'quiet-dressing',
      title: 'Quiet Dressing',
      excerpt: 'The art of letting your clothes whisper instead of shout. A meditation on minimalism.',
      date: 'March 15, 2024',
      readTime: '5 min read',
    },
    {
      slug: 'on-simplicity',
      title: 'On Simplicity',
      excerpt: 'Why less really does mean more. A look at the philosophy behind our design.',
      date: 'March 8, 2024',
      readTime: '7 min read',
    },
    {
      slug: 'the-edit',
      title: 'The Edit',
      excerpt: 'Curating a wardrobe that works harder for you. Starting with the essentials.',
      date: 'March 1, 2024',
      readTime: '6 min read',
    },
  ]

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-ink mb-4">Journal</h1>
        <p className="text-stone text-lg mb-12">
          Thoughts on fashion, simplicity, and the power of intention.
        </p>

        <div>
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}
