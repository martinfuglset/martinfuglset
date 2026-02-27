export default function Home() {
  return (
    <main className="landing">
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

        <a
          className="link-card"
          href="https://fabillio.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="card-heading">
            <img
              className="card-icon"
              src="/favicons/fabillio.svg"
              alt="Fabillio favicon"
              width="20"
              height="20"
            />
            <h1>fabillio.com</h1>
          </div>
          <p>Complex Financial Systems</p>
        </a>
      </div>
    </main>
  )
}
