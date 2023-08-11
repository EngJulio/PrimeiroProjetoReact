import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Botao from './components/Botao';

const nome = "um nome Qualquer"
const insta = 'C:\Users\CENTI\Desktop\insta.png';
function App() {
  const [contador, setContador] = useState(0);
  function clique() {
    setContador(contador + 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Botao cont = {contador} onClick = {clique} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        {contador}
        </a>
        <img src={insta} className="ico_insta"/>
      </header>
    </div>
    
  );
  
}

export default App;
