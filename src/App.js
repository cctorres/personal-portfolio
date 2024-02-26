import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Side from './components/Side/Side';
import Main from './components/Main/Main';

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [activeMenuSection, setActiveMenuSection] = useState(null);

  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <div className={isDarkTheme ? 'page-wrapper dark-theme' : 'page-wrapper'}>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}/>
      <main className='main-content'>
        <Side activeMenuSection = {activeMenuSection}/>
        <Main setActiveMenuSection ={setActiveMenuSection}/>
      </main>
    </div>
  );
}

export default App;
