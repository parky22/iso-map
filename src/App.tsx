import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPrompt from "./components/LandingPrompt";
import MapContainer from "./components/MapContainer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header className="header" />
      <div className="main-content">
        <div className="landing-prompt-column">
          <LandingPrompt />
        </div>
        <div className="map-column">
          <MapContainer />
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
