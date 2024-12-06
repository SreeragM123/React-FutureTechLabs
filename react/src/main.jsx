import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Aboutmore from './Aboutmore.jsx'
import Footer from './Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <About />
    <Aboutmore />
    <Footer />
  </StrictMode>,
)
