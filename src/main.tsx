import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './index.css'
import App from './App.tsx'
import { LoginForm } from './components/login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/Noticiero'>
      <Routes>
        <Route path='/App' element={<App />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
