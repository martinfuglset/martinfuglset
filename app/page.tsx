'use client'

import { useState } from 'react'
import { Popover } from '@base-ui/react'
import { Copy, ExternalLink, Github, Linkedin, Mail, Send } from 'lucide-react'

export default function Home() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('fuglsetm@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <main className="landing">
      <div className="content">
        <header className="intro">
          <h1 className="name-title">Martin Fuglset</h1>
        </header>

        <section className="main-links">
          <p className="study-text">
            Currently studying MSc in Business at{' '}
            <a href="https://www.bi.edu/" target="_blank" rel="noreferrer">
              <u>BI Norwegian Business School</u>
            </a>
          </p>
          <p className="work-text">Currently working at</p>

          <div className="card-grid">
            <a
              className="link-card"
              href="https://asterisk.digital"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-heading">
                <img
                  className="card-icon"
                  src="/favicons/asterisk.svg"
                  alt="Asterisk favicon"
                  width="20"
                  height="20"
                />
                <h1>asterisk.digital</h1>
              </div>
              <p>Data &amp; AI</p>
            </a>
          </div>
        </section>

        <footer className="social-buttons" aria-label="Social links">
          <div className="social-popover">
            <a
              className="social-button"
              href="https://github.com/martinfuglset"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github aria-hidden="true" />
            </a>
            <div className="social-tooltip" role="tooltip">
              <span>GitHub</span>
              <ExternalLink aria-hidden="true" />
            </div>
          </div>

          <div className="social-popover">
            <a
              className="social-button"
              href="https://www.linkedin.com/in/martinfuglset/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin aria-hidden="true" />
            </a>
            <div className="social-tooltip" role="tooltip">
              <span>LinkedIn</span>
              <ExternalLink aria-hidden="true" />
            </div>
          </div>

          <Popover.Root>
            <Popover.Trigger className="social-button" aria-label="Email">
              <Mail aria-hidden="true" />
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Positioner sideOffset={8}>
                <Popover.Popup className="mail-menu" role="menu" aria-label="Email actions">
              <button type="button" className="mail-action" onClick={handleCopyEmail}>
                <Copy aria-hidden="true" />
                <span>{copied ? 'Copied' : 'Copy email'}</span>
              </button>
              <a
                className="mail-action"
                href="mailto:fuglsetm@gmail.com"
              >
                <Send aria-hidden="true" />
                <span>Send email</span>
              </a>
                </Popover.Popup>
              </Popover.Positioner>
            </Popover.Portal>
          </Popover.Root>
        </footer>
      </div>
    </main>
  )
}
