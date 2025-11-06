'use client'

import { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import CVPanel from './CVPanel'

export default function Sidebar() {
  const [currentTime, setCurrentTime] = useState('')
  const [showCV, setShowCV] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleOpenCV = () => {
    setShowCV(true)
  }

  const handleCloseCV = () => {
    setIsClosing(true)
    setTimeout(() => {
      setShowCV(false)
      setIsClosing(false)
    }, 300)
  }

  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <h1 className={styles.title}>{showCV || isClosing ? 'MARTIN FUGLSET (CV)' : 'MARTIN FUGLSET'}</h1>
        {showCV || isClosing ? (
          <button onClick={handleCloseCV} className={styles.closeButton}>
            CLOSE →
          </button>
        ) : (
          <div className={styles.time}>{currentTime}</div>
        )}
      </header>
      <div className={styles.headerDivider}></div>

      <div className={styles.contentWrapper}>
        {showCV || isClosing ? (
          <div className={styles.cvPanelContainer}>
            <CVPanel isClosing={isClosing} />
          </div>
        ) : (
          <div className={styles.content}>
            <section className={styles.contact}>
              <p className={styles.email}>fuglsetm@gmail.com</p>
              <a 
                href="https://www.linkedin.com/in/martinfuglset/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.social}
              >
                LinkedIn
              </a>
            </section>

            <section className={styles.about}>
              <div className={styles.textBlock}>
                <div className={styles.textContent}>
                  <p>
                    This is a personal blog dedicated to publishing research articles and essays. 
                    The design follows minimal Swiss design principles, emphasizing clarity, 
                    readability, and structured layouts.
                  </p>
                </div>
              </div>

              <div className={styles.textBlock}>
                <div className={styles.textContent}>
                  <p>
                    Each article represents independent research and thoughtful analysis. 
                    The content spans various topics, maintaining a focus on depth and 
                    intellectual rigor.
                  </p>
                </div>
              </div>
            </section>

            <section className={styles.links}>
              <button onClick={handleOpenCV} className={styles.cvLink}>
                CV →
              </button>
            </section>

            <footer className={styles.footer}>
              <p className={styles.copyright}>
                ©{new Date().getFullYear()}, Martin Fuglset
              </p>
            </footer>
          </div>
        )}
      </div>
    </aside>
  )
}

