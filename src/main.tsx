import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { LoginForm } from './components/login.tsx'
import { AuthProvider } from './hook/useAuth.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    a<AuthProvider>
      <BrowserRouter basename='/Noticiero'>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/Login' element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
