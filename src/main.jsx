import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from 'react-oidc-context'
import './index.css'
import App from './App.jsx'

const cognitoAuthConfig = {
  authority: import.meta.env.VITE_COGNITO_ISSUER,
  client_id: import.meta.env.VITE_COGNITO_CLIENT_ID,
  redirect_uri: `${window.location.origin}/success`,
  response_type: 'code',
  scope: 'phone openid email',
  onSigninCallback: () => {
    window.history.replaceState({}, document.title, '/success')
  },
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>,
)
