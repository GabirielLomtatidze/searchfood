import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'
import "./styles/index.scss"

// https://www.themealdb.com/api/json/v1/1/search.php?s=

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
)