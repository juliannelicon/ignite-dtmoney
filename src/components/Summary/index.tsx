import React, { useContext } from 'react';

import totalImg from '../../assets/total.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { TransactionsContext } from '../../TransactionsContext';

import { Container } from './styles';

const Summary: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income'){
      acc.income += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.outcome += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;

  }, {
    income: 0,
    outcome: 0,
    total: 0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt=""/>
        </header>

        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'brl'
          }).format(summary.income)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt=""/>
        </header>

        <strong>
          - {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'brl'
          }).format(summary.outcome)}
        </strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt=""/>
        </header>

        <strong>
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'brl'
          }).format(summary.total)}
        </strong>
      </div>

    </Container>
  );
}

export default Summary;