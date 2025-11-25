import styles from './ArticleList.module.css'

interface ArticleListProps {
  articles: unknown[]
}

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className={styles.articleList}>
      <h1 className={styles.title}>Articles</h1>

      <div className={styles.articles}>
        <p>Articles coming soon.</p>
      </div>
    </div>
  )
}

