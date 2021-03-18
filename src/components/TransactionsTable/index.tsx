import React from 'react';

import { Container } from './styles';

const TransactionsTable: React.FC = () => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="income">R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Aluguel do apartamento</td>
            <td className="outcome">- R$ 500,00</td>
            <td>Casa</td>
            <td>27/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionsTable;