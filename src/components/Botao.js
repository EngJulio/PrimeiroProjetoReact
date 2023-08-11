import { useState } from 'react';
function Botao({cont, onClick}){
      return (
        <button onClick={onClick}>
          um botão que foi clicado {cont} vezes
        </button>
        );
  }

  export default Botao;