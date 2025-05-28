import Footer from './components/Footer'
import Header from './components/Header'
import LandingPrompt from './components/LandingPrompt'

import './App.css'

function App() {
  return (
    <div className="app">
      <Header className="header" />
      <div className="main-content">
        <LandingPrompt />
      </div>
      <Footer className="footer" />
    </div>
  )
}

export default App
