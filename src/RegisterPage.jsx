import './App.css'

function RegisterPage() {
  function handleRegister(event) {
    event.preventDefault()
    window.location.assign('/success')
  }

  return (
    <main className="site-shell">
      <nav className="nav-bar" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Supload+ home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>Supload<span>+</span></span>
        </a>
      </nav>
      <section className="account-page" aria-labelledby="register-title">
        <div className="account-copy">
          <p className="eyebrow"><span className="status-dot" /> Join Supload+</p>
          <h1 id="register-title">Your files,<br /><em>in safe hands.</em></h1>
          <p className="hero-text">Create your account to manage transfers, keep a history of your files, and share with confidence.</p>
        </div>
        <form className="account-form" onSubmit={handleRegister}>
          <div className="form-heading"><span>CREATE ACCOUNT</span><span>01 / 01</span></div>
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
          <p className="form-note">Already have an account? <a href="/">Return home</a></p>
        </form>
      </section>
      <footer><span>© 2025 Supload Inc.</span><span>Safe hands for your data.</span></footer>
    </main>
  )
}

export default RegisterPage
