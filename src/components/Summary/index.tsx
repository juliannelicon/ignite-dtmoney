import React from 'react';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from './styles';

const Summary: React.FC = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt=""/>
        </header>

        <strong>R$ 17.400,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt=""/>
        </header>

        <strong>R$ 17.400,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt=""/>
        </header>

        <strong>R$ 17.400,00</strong>
      </div>

    </Container>
  );
}

export default Summary;