import type { BlogPost } from "@/data/blogPosts"
import { useI18n } from "@/i18n"
import Placeholder from "@/components/ui/Placeholder"

interface BlogCardProps {
  item: BlogPost
  index: number
}

export default function BlogCard({ item, index }: BlogCardProps) {
  const { lang, t } = useI18n()

  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div className="overflow-hidden">
        <Placeholder
          seed={index + 2}
          label={item.category[lang]}
          className="h-44 w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 text-left">
        <span className="rounded-full bg-powder px-3 py-1 text-xs font-semibold tracking-wider text-ink">
          {item.category[lang]}
        </span>
        <h3 className="mt-3 font-serif text-lg text-ink transition-colors group-hover:text-rose">
          {item.title[lang]}
        </h3>
        <p className="mt-2 text-sm text-muted">{item.excerpt[lang]}</p>
        <div className="mt-4 flex items-center justify-between text-sm">
          <time className="text-muted">{item.date}</time>
          <span className="font-medium text-rose">{t.actions.readArticle} →</span>
        </div>
      </div>
    </article>
  )
}
