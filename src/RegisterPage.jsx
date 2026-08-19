import { useState } from 'react'
import { CognitoIdentityProviderClient, SignUpCommand } from '@aws-sdk/client-cognito-identity-provider'
import './App.css'

const cognitoClient = new CognitoIdentityProviderClient({ region: 'us-east-1' })

function RegisterPage({ auth, onNavigate }) {
  const [formError, setFormError] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleRegister(event) {
    event.preventDefault()
    setFormError('')
    setFormMessage('')
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const username = String(formData.get('username'))
    const email = String(formData.get('email'))
    const name = String(formData.get('name'))
    const password = String(formData.get('password'))
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
    const clientId = auth.settings?.client_id

    if (!clientId) {
      setFormError('Cognito is not configured: set VITE_COGNITO_CLIENT_ID in the deployment environment and rebuild.')
      setIsSubmitting(false)
      return
    }

    try {
      await cognitoClient.send(new SignUpCommand({
        ClientId: clientId,
        Username: username,
        Password: password,
        UserAttributes: [
          { Name: 'email', Value: email },
          { Name: 'name', Value: name },
          { Name: 'zoneinfo', Value: timezone },
        ],
      }))
      setFormMessage('Account created. Check your email for the confirmation code, then sign in.')
      event.currentTarget.reset()
    } catch (error) {
      setFormError(error.name === 'UsernameExistsException'
        ? 'An account with this email already exists.'
        : error.message || 'Unable to create your account.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="site-shell">
      <nav className="nav-bar" aria-label="Main navigation">
        <a className="brand" href="/" onClick={(event) => onNavigate(event, '/')} aria-label="Supload+ home">
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
          <input id="name" name="name" type="text" placeholder="Alex Morgan" autoComplete="name" required />
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" placeholder="alexmorgan" autoComplete="username" pattern="[A-Za-z0-9_]{3,128}" title="Use 3-128 letters, numbers, or underscores." required />
          <label htmlFor="email">Work email</label>
          <input id="email" name="email" type="email" placeholder="alex@company.com" autoComplete="email" required />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" placeholder="At least 8 characters" autoComplete="new-password" minLength="8" required />
          <label className="checkbox-label">
            <input type="checkbox" required />
            <span>I agree to the terms and privacy policy.</span>
          </label>
          {formError && <p className="form-note" role="alert">{formError}</p>}
          {formMessage && <p className="form-note" role="status">{formMessage}</p>}
          <button className="primary-button form-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating account...' : 'Create account'} <span aria-hidden="true">→</span>
          </button>
          <p className="form-note">Already have an account? <a href="/" onClick={(event) => onNavigate(event, '/')}>Return home</a></p>
        </form>
      </section>
      <footer><span>© 2025 Supload Inc.</span><span>Safe hands for your data.</span></footer>
    </main>
  )
}

export default RegisterPage
