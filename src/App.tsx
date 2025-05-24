import Footer from './components/Footer'
import Header from './components/Header'
import MapContainer from './components/MapContainer'

import './App.css'

function App() {
  return (
    <div className="app">
      <Header className="header" />
      <div className="main-content">
        <MapContainer />
      </div>
      <Footer className="footer" />
    </div>
  )
}

export default App
