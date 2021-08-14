
import React, { useState } from "react";
import './App.css';
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Tintuc from "./components/Tintuc/Tintuc";
import Music from "./components/Music/Music";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <header className="App-header">
        <Header />
        <div className="container">
        <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              
            </label>
        </div>
      </div>
      <Button />
      <Tintuc />
      <hr className="gach" width="85%" style={{ color: darkMode ? "red" : "yellow" }} />
      <Music />
      <br />
      </header>
       

    </div>
  );
}

export default App;
