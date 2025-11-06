'use client'

import styles from './CVPanel.module.css'

interface CVPanelProps {
  isClosing?: boolean
}

export default function CVPanel({ isClosing = false }: CVPanelProps) {
  return (
    <div className={`${styles.cvPanel} ${isClosing ? styles.closing : ''}`}>
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Education</h2>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.entries}>
              <div className={styles.entry}>
                <div className={styles.entryContent}>
                  <div>Vestibulum Euismod Ultrices</div>
                  <div>(Congue)</div>
                  <div>Suspendisse Aenean Lectus</div>
                  <div>2023</div>
                </div>
              </div>

              <div className={styles.entry}>
                <div className={styles.entryContent}>
                  <div>Vestibulum Euismod Ultrices</div>
                  <div>(Tincidunt)</div>
                  <div>Aliquam Faucibus Tellus</div>
                  <div>(3 years)</div>
                </div>
              </div>
            </div>
            <div className={styles.divider}></div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Employment</h2>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.entries}>
            <div className={styles.entry}>
              <div className={styles.entryContent}>
                <div>Vestibulum Ultricies</div>
                <div>Suspendisse Aenean Vestibulum</div>
                <div>2023 - 2024</div>
              </div>
            </div>

            <div className={styles.entry}>
              <div className={styles.entryContent}>
                <div>Pellentesque Habitant</div>
                <div>&apos;Morbi Tristique Senectus&apos;</div>
                <div>Nunc Euismod Faucibus,</div>
                <div>Porta Libero</div>
                <div>2024</div>
              </div>
            </div>

            <div className={styles.entry}>
              <div className={styles.entryContent}>
                <div>Volutpat Ultricies</div>
                <div>Curabitur Fringilla Ornare,</div>
                <div>Duis Quis</div>
                <div>(since 2020)</div>
              </div>
            </div>

            <div className={styles.entry}>
              <div className={styles.entryContent}>
                <div>Aliquam Convallis</div>
                <div>TEMPUS, TEMPUS, TEMPUS</div>
                <div>Molestie Vulputate</div>
                <div>Lacus Venenatis</div>
                <div>2023</div>
              </div>
            </div>

            <div className={styles.entry}>
              <div className={styles.entryContent}>
                <div>Nunc Consequat</div>
                <div>Donec Euismod Imperdiet,</div>
                <div>Pharetra Massa</div>
                <div>2023</div>
              </div>
            </div>

            <div className={styles.entry}>
              <div className={styles.entryContent}>
                <div>Volutpat Ultricies</div>
                <div>Mauris Tristique Congue, Tellus,</div>
                <div>Suspendisse Aenean, Porta</div>
                <div>Libero,</div>
                <div>Gravida Faucibus</div>
                <div>2023</div>
              </div>
            </div>

            <div className={styles.entry}>
              <div className={styles.entryContent}>
                <div>Fusce Suscipit Ligula / Bibendum</div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </div>
    </div>
  )
}

