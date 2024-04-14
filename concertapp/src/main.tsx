import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './css/default.css'
import './css/div.css'
import './css/main.css'
import './css/slider.css'
import './css/theme.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
)