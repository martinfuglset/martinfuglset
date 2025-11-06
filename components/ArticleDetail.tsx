import Link from 'next/link'
import Image from 'next/image'
import styles from './ArticleDetail.module.css'
import { Article } from '@/lib/articles'

interface ArticleDetailProps {
  article: Article
}

export default function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <div className={styles.articleDetail}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>
          ← Back to articles
        </Link>
        <h1 className={styles.title}>Articles</h1>
      </header>

      <article className={styles.content}>
        <div className={styles.articleHeader}>
          <h2 className={styles.articleTitle}>{article.title}</h2>
          <span className={styles.articleId}>{article.id}</span>
        </div>

        {article.image && (
          <div className={styles.imageContainer}>
            <Image 
              src={article.image} 
              alt={article.title}
              width={800}
              height={400}
              style={{ objectFit: 'cover' }}
            />
          </div>
        )}

        <div className={styles.articleBody}>
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className={styles.meta}>
          <span className={styles.date}>{article.date}</span>
          {article.category && (
            <span className={styles.category}>{article.category}</span>
          )}
        </div>
      </article>
    </div>
  )
}

