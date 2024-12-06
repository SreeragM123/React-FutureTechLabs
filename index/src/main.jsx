import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Json from './Json.jsx'
import ParComp from './ParComp.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Json /> */}
    <ParComp/>
  </StrictMode>,
)
