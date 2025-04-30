import React from 'react';
import './Botao.css';

type BotaoProps = {
  texto: string;
};

const Botao: React.FunctionComponent<BotaoProps> = ({ texto }) => {
  return (
    <button className="botao-projetos">
      {texto}
    </button>
  );
};

export default Botao;