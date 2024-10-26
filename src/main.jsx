import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './styles/App.css'
import Audio from './Audio'
// import Tabs from './tabs'
// import CntrAndTmr from './CounterAndTimer'
// import Counter from './Counter.jsx'
// import UseRef_ from './useRef_.jsx'
// import Learn from './learn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <UseRef_ /> */}
    {/* <CntrAndTmr /> */}
    {/* <Tabs /> */}
    <Audio />
  </StrictMode>,
)