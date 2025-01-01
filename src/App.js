import './App.css'

import { PUBLIC_URL } from './config'

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={`${PUBLIC_URL}/logo512.png`} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    )
}
