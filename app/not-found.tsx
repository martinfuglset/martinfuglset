import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Article not found</p>
      <Link href="/" className={styles.link}>
        ← Back to articles
      </Link>
    </div>
  )
}

