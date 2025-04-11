import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Resume from './pages/resume'
import Portfolio from './pages/portfolio'
import Main from './pages/main'

export default function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="resume" element={<Resume />} />
                <Route path="portfolio" element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    )
}
