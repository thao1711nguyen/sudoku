import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CustomRouter from './components/custom-router/CustomRouter.jsx'
import Welcome from './components/welcome/Welcome.jsx'

const router = [
  {
    path: "/", 
    element: <Welcome />
  }, 
  {
    path: "/game",
    element: <App />
  }
]
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomRouter router={router} />
  </StrictMode>,
)
