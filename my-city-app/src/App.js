import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CityInfo from './components/CityInfo';
import FamousLandmark from './components/FamousLandmark';
import OtherLandmarks from './components/OtherLandmarks';
import CityPhotos from './components/CityPhotos';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Інформація про місто</Link>
            </li>
            <li>
              <Link to="/famous-landmark">Найвідоміша пам'ятка</Link>
            </li>
            <li>
              <Link to="/other-landmarks">Інші пам'ятки</Link>
            </li>
            <li>
              <Link to="/city-photos">Фотографії міста</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CityInfo />} />
          <Route path="/famous-landmark" element={<FamousLandmark />} />
          <Route path="/other-landmarks" element={<OtherLandmarks />} />
          <Route path="/city-photos" element={<CityPhotos />} />
          <Route path="/city/:cityId" element={<CityInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;