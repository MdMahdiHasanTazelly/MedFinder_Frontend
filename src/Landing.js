import './css/Landing.css';
import { useState } from 'react';
function Landing() {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const sessiontoken = localStorage.getItem('sessiontoken');  //getting session token from local storage
  
    const handleSearchInput = (e) => {
      setSearchQuery(e.target.value);
      setShowSuggestions(e.target.value.length > 0);
    };
  
    return (
      <div className="app">
        <div className="background-image"></div>
  
        <div className="content-wrapper">
  
          <section className="search-section">
            <h2 className="main-title">
              MedFinder: Integrated Platform for <br /> Location-Based Doctor and Diagnostic Center Finder
            </h2>
  
            <h3 className="subtitle">Find a Doctor or Hospital Near You</h3>
  
            <div className="search-container">
              <input
                type="text"
                id="searchBox"
                placeholder="Search for doctors, hospitals, diagnostic centers..."
                className="search-input"
                value={searchQuery}
                onChange={handleSearchInput}
                disabled
              />
              
              {showSuggestions && (
                <div className="suggestions">
                  <p className="suggestion-item">🔍 Doctor</p>
                  <p className="suggestion-item">🏥 Hospital</p>
                  <p className="suggestion-item">🩺 Diagnostic Center</p>
                </div>
              )}
            </div>
          </section>
  
        </div>
      </div>
    );
}

export default Landing;