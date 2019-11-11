import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Logo from './components/Logo';
import SearchField from './components/SearchField';
import Main from './components/Main';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <Logo />
        <SearchField />
        <Main />
      </div>
      <Footer />
    
    </div>
  );
}

export default App;
