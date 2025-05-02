import React from 'react';
import './Botao.css';

type BotaoProps = {
  texto: string;
};

const Botao: React.FunctionComponent<BotaoProps> = ({ texto }) => {
  return (
    <button className="botao-projetos-branco">
      {texto}
    </button>
    
  );
};


export default Botao;