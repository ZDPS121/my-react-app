import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from 'react-oidc-context'
import './index.css'
import App from './App.jsx'

const cognitoAuthConfig = {
  authority: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1Vw17P3wH',
  client_id: '5bdsh32mtko9aa6rqtt6lr14jr',
  redirect_uri: `${window.location.origin}/success`,
  response_type: 'code',
  scope: 'phone openid email',
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>,
)
