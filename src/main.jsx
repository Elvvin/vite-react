import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Audio from './Audio'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Audio />
  </StrictMode>,
)