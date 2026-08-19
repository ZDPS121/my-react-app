import './App.css'

function App() {
  return (
    <main className="site-shell">
      <nav className="nav-bar" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Supload+ home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>Supload<span>+</span></span>
        </a>
        <div className="nav-links">
          <a href="#security">Security</a>
          <a href="#workflow">How it works</a>
          <a href="#pricing">Pricing</a>
        </div>
        <button className="nav-login" type="button">Log in <span aria-hidden="true">↗</span></button>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Secure by design</p>
          <h1 id="hero-title">Move sensitive files<br /><em>with confidence.</em></h1>
          <p className="hero-text">The simple, secure way to send important data. Encrypted end-to-end, built for the moments that matter.</p>
          <div className="hero-actions">
            <button className="primary-button" type="button">Start uploading <span aria-hidden="true">→</span></button>
            <button className="play-button" type="button" aria-label="Watch how Supload+ works"><span aria-hidden="true">▶</span> See how it works</button>
          </div>
          <p className="trust-note"><span aria-hidden="true">✦</span> Trusted by teams who handle the important stuff</p>
        </div>

        <div className="upload-preview" aria-label="Supload upload preview">
          <div className="preview-topline"><span>NEW TRANSFER</span><span className="encrypted-label"><span aria-hidden="true">⌁</span> Encrypted</span></div>
          <div className="upload-zone">
            <div className="upload-icon" aria-hidden="true">↑</div>
            <h2>Drop files here</h2>
            <p>or <button type="button">browse your computer</button></p>
            <small>Up to 10 GB per transfer</small>
          </div>
          <div className="preview-footer"><span><span className="mini-lock" aria-hidden="true">⌑</span> AES-256 encryption</span><span>Private link · 7 days</span></div>
        </div>
      </section>

      <section className="feature-strip" id="security" aria-label="Supload features">
        <div><span className="feature-number">01</span><div><strong>Private by default</strong><p>No accounts. No tracking. No noise.</p></div></div>
        <div><span className="feature-number">02</span><div><strong>Encrypted end-to-end</strong><p>Your files stay yours, always.</p></div></div>
        <div><span className="feature-number">03</span><div><strong>Ready in seconds</strong><p>Fast enough to keep work moving.</p></div></div>
      </section>
      <footer><span>© 2025 Supload Inc.</span><span>Safe hands for your data.</span></footer>
    </main>
  )
}

export default App
