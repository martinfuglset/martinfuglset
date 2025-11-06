import Link from 'next/link'
import Image from 'next/image'
import styles from './ArticleList.module.css'
import { Article } from '@/lib/articles'

interface ArticleListProps {
  articles: Article[]
}

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className={styles.articleList}>
      <header className={styles.header}>
        <h1 className={styles.title}>Articles</h1>
      </header>
      <div className={styles.headerDivider}></div>

      <div className={styles.articles}>
        {articles.map((article, index) => (
          <article key={article.slug} className={styles.article}>
            <div className={styles.articleContent}>
              {article.image && (
                <Link href={`/${article.slug}`} className={styles.imagePlaceholder}>
                  <Image 
                    src={article.image} 
                    alt={article.title}
                    width={300}
                    height={180}
                    style={{ objectFit: 'cover' }}
                  />
                </Link>
              )}
              
              <div className={styles.articleText}>
                <div className={styles.articleHeader}>
                  <h2 className={styles.articleTitle}>
                    {String(index + 1).padStart(3, '0')}-{article.title}
                  </h2>
                  <span className={styles.articleId}>{article.id}</span>
                </div>
                
                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                
                <Link href={`/${article.slug}`} className={styles.readMore}>
                  Read more...
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

