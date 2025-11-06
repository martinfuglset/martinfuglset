import Link from 'next/link'
import { getArticles } from '@/lib/articles'
import MainLayout from '@/components/MainLayout'
import ArticleList from '@/components/ArticleList'
import Sidebar from '@/components/Sidebar'

export default async function Home() {
  const articles = await getArticles()

  return (
    <MainLayout>
      <ArticleList articles={articles} />
      <Sidebar />
    </MainLayout>
  )
}

