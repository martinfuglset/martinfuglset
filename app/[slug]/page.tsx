import { notFound } from 'next/navigation'
import { getArticles, getArticleBySlug } from '@/lib/articles'
import MainLayout from '@/components/MainLayout'
import ArticleDetail from '@/components/ArticleDetail'
import Sidebar from '@/components/Sidebar'

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <MainLayout>
      <ArticleDetail article={article} />
      <Sidebar />
    </MainLayout>
  )
}

