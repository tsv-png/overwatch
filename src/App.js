import React from 'react';

import './App.css';



import Header from './components/Header';
import ButtonPrincipal from './components/buttons/ButtonIcon/ButtonPrincipal';
import Button from './components/buttons/Button/Button';
import Cardpersonagens from './components/Card/Main';


import Dano from './components/img/IconButton/Dano.svg'
import Suporte from './components/img/IconButton/Suporte.svg'
import Tanque from './components/img/IconButton/Tanque.svg'
import Ana from './components/img/Personagens/Suporte/Ana.png'

import { useState, useEffect } from 'react';


const imagem = { Dano, Suporte, Tanque }
const personagens = { Ana }

const dicionario = {
  "Tank": "Tanque",
  "Support": "Suporte",
  "Damage": "Dano"
}



function App() {
 

  return (
    <div className="App">
    <Header />
    <div className="container">
      <Button name="Todos" />
    <ButtonPrincipal  name="Tanque" imagem={Tanque} />
    <ButtonPrincipal name="Dano" imagem={Dano} />
    <ButtonPrincipal  name="Suporte" imagem={Suporte} />
    </div>
    <p className="text">Overwatch conta com um elenco internacional de heróis poderosos com
 personalidades e histórias pessoais cativantes. Explore todo o elenco abaixo.</p>
  <Cardpersonagens  />
 </div>
    
  );

}

export default App;
