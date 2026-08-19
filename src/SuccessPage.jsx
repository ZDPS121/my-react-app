import './App.css'

function SuccessPage({ onNavigate }) {
  return (
    <main className="site-shell">
      <nav className="nav-bar" aria-label="Main navigation">
        <a className="brand" href="/" onClick={(event) => onNavigate(event, '/')} aria-label="Supload+ home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>Supload<span>+</span></span>
        </a>
      </nav>
      <section className="success-page" aria-labelledby="success-title">
        <div className="success-mark" aria-hidden="true">✓</div>
        <p className="eyebrow"><span className="status-dot" /> Account ready</p>
        <h1 id="success-title">Welcome to<br /><em>Supload+.</em></h1>
        <p className="hero-text">Your account has been created successfully. You are ready to send your first secure transfer.</p>
        <a className="primary-button" href="/" onClick={(event) => onNavigate(event, '/')}>Go to dashboard <span aria-hidden="true">→</span></a>
      </section>
      <footer><span>© 2025 Supload Inc.</span><span>Safe hands for your data.</span></footer>
    </main>
  )
}

export default SuccessPage
