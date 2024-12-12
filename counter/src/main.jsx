import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './Counter.jsx'
import Form from './Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter /> */}
    <Form />
  </StrictMode>,
)