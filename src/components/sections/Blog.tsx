import { blogPosts } from "@/data/blogPosts"
import { useI18n } from "@/i18n"
import BlogCard from "@/components/ui/BlogCard"
import SectionHeading from "@/components/ui/SectionHeading"

// Blog (doküman 05 §9.6): Beauty Journal, 3'lü kart gridi.
export default function Blog() {
  const { t } = useI18n()

  return (
    <section id="blog" className="bg-cream-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t.blog.eyebrow}
          title={t.blog.title}
          subtitle={t.blog.subtitle}
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((b, i) => (
            <BlogCard key={b.id} item={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
