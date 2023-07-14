import React from 'react';
import { useState, useEffect } from 'react';
import api from './api';
import './App.css';



import Header from './components/Header';
import ButtonPrincipal from './components/buttons/ButtonIcon/ButtonPrincipal';
import Button from './components/buttons/Button/Button';
import Cardpersonagens from './components/Card/Main';


import Dano from './components/img/IconButton/Dano.svg'
import Suporte from './components/img/IconButton/Suporte.svg'
import Tanque from './components/img/IconButton/Tanque.svg'
import Ana from './components/img/Personagens/Suporte/Ana.png'



const imagem = { Dano, Suporte, Tanque }
const personagens = { Ana }



function App(props) {

  const [personagens, setPersonagens] = useState([]);
  const [personagensFiltrados, setPersonagensFiltrados] = useState([]);

  useEffect(() => { 
    async function loadHeroes() {
      try {
        const response = await api.get('/heroes');
        console.log("Personagens selecionados carregados com sucesso");
        console.log(response.data);
        setPersonagens(response.data);
        setPersonagensFiltrados(response.data)
      } catch (error) {
        console.log("Não foi possível carregar os personagens	selecionados");
        console.log(error);
      }
    }
    loadHeroes();
    }, []);


    
    const handleFilter = (role) => {
      if(role === "Todos"){ 
        setPersonagensFiltrados(personagens)
      }
      else {
     setPersonagensFiltrados(personagens.filter((personagem) => personagem.role === role));
    }
    };
 

    
  return (
    <div className="App">
          <Header />
          <div className="container">
          <Button name="Todos" onClick={ () => handleFilter("Todos")} />
          <ButtonPrincipal  name="Tanque" imagem={Tanque} onClick={() => handleFilter("tank")} />
          <ButtonPrincipal name="Dano" imagem={Dano} onClick={() => handleFilter("damage")} />
          <ButtonPrincipal  name="Suporte" imagem={Suporte} onClick={() => handleFilter("support")}/>
          </div>
          <p className="text">Overwatch conta com um elenco internacional de heróis poderosos com
        personalidades e histórias pessoais cativantes. Explore todo o elenco abaixo.</p>
        <Cardpersonagens personagens={personagensFiltrados} />
 </div>
    
  );
        
}

export default App;
