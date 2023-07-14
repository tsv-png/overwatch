import React, { useState, useEffect } from "react";




function Cardpersonagens(props) {

  function traduzirRole(role) {
    const dicionario = {
      "tank": "Tanque",
      "support": "Suporte",
      "damage": "Dano"
    }

    return dicionario[role];   
  }

  return (
    <>
        <div className="container-card">
      {props?.personagens.map(personagem => (
          <div className="card-body"  >
            <img className="card-img" src={personagem.portrait}/>
            <h5 className="card-title">{personagem.name}<br>
            </br>{traduzirRole(personagem.role)}</h5>
          </div>
      ))}
      </div>
    </>
  );
}

export default Cardpersonagens;