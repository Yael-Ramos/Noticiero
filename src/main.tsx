import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { LoginForm } from './components/login.tsx'
import { AuthProvider } from './hook/useAuth.tsx'
import { RegisterForm } from './components/RegisterForm.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter basename='/Noticiero'>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/Login' element={<LoginForm />} />
          <Route path= '/registro' element={<RegisterForm/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
