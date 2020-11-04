import React from "react"
import logo from './logo.svg';
import Navbar from './components/Navbar'
import Content from './components/Content'
import "./App.css"

function App() {
  return (
    <div style={{fontFamily:"Raleway"}}className="App .html">  
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
