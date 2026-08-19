import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('home')

  function handleRegister(event) {
    event.preventDefault()
    setPage('success')
  }

  return (
    <main className="site-shell">
      <nav className="nav-bar" aria-label="Main navigation">
        <button className="brand" type="button" onClick={() => setPage('home')} aria-label="Supload+ home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>Supload<span>+</span></span>
        </button>
        {page === 'home' && <>
          <div className="nav-links">
            <a href="#security">Security</a>
            <a href="#workflow">How it works</a>
            <a href="#pricing">Pricing</a>
          </div>
          <button className="nav-login" type="button" onClick={() => setPage('register')}>Register <span aria-hidden="true">↗</span></button>
        </>}
      </nav>

      {page === 'home' && <>
        <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Secure by design</p>
          <h1 id="hero-title">Move sensitive files<br /><em>with confidence.</em></h1>
          <p className="hero-text">The simple, secure way to send important data. Encrypted end-to-end, built for the moments that matter.</p>
          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={() => setPage('register')}>Start uploading <span aria-hidden="true">→</span></button>
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
      </>}

      {page === 'register' && <section className="account-page" aria-labelledby="register-title">
        <div className="account-copy">
          <p className="eyebrow"><span className="status-dot" /> Join Supload+</p>
          <h1 id="register-title">Your files,<br /><em>in safe hands.</em></h1>
          <p className="hero-text">Create your account to manage transfers, keep a history of your files, and share with confidence.</p>
        </div>
        <form className="account-form" onSubmit={handleRegister}>
          <div className="form-heading">
            <span>CREATE ACCOUNT</span>
            <span>01 / 01</span>
          </div>
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" placeholder="Alex Morgan" required />
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" placeholder="alex@company.com" required />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="At least 8 characters" minLength="8" required />
          <label className="checkbox-label">
            <input type="checkbox" required />
            <span>I agree to the terms and privacy policy.</span>
          </label>
          <button className="primary-button form-submit" type="submit">Create account <span aria-hidden="true">→</span></button>
          <p className="form-note">Already have an account? <button type="button" onClick={() => setPage('home')}>Return home</button></p>
        </form>
      </section>}

      {page === 'success' && <section className="success-page" aria-labelledby="success-title">
        <div className="success-mark" aria-hidden="true">✓</div>
        <p className="eyebrow"><span className="status-dot" /> Account ready</p>
        <h1 id="success-title">Welcome to<br /><em>Supload+.</em></h1>
        <p className="hero-text">Your account has been created successfully. You are ready to send your first secure transfer.</p>
        <button className="primary-button" type="button" onClick={() => setPage('home')}>Go to dashboard <span aria-hidden="true">→</span></button>
      </section>}

      <footer><span>© 2025 Supload Inc.</span><span>Safe hands for your data.</span></footer>
    </main>
  )
}

export default App
