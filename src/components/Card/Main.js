import React from "react";


import { useState, useEffect } from 'react';
import api from '../../api';



function Cardpersonagens(props) {
    const [personagens, setPersonagens] = useState([]);
    const [filtrado, setFiltrado] = useState([]);
   
    useEffect(() => { async function LoadHeroes() {
        try {
          const response = await api.get('/heroes');
          console.log("Personagens selecionados carregados com sucesso");
          console.log(response.data);
          setPersonagens(response.data);
        } catch (error) {
          console.log("Não foi possível carregar os personagens	selecionados");
          console.log(error);
        }
      }
      LoadHeroes();
      }, []);
    


       function TraduzirRole(role) {
           const dicionario = {
             "tank": "Tanque",
             "support": "Suporte",
             "damage": "Dano"
           }
           return dicionario[role];   
          }   


        


    return (
      <div className="container-personagens">
          {personagens.map(personagens => (
        <div className="card-body" >
            <img className="card-img" src={personagens.portrait} />
            <h5 className="card-title">{personagens.name}<br></br>{TraduzirRole(personagens.role)}</h5>
            
            </div>
          ))}
          
        </div>
        
        );

       
        
     
}

export default Cardpersonagens;