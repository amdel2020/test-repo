import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

const HeroPost = ({
  title,
  excerpt,
  slug,
}: Props) => {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
