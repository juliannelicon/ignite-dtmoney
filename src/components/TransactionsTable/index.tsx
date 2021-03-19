import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

interface ITransaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}
const TransactionsTable: React.FC = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api('transactions').then(response =>
      setTransactions(response.data.transactions)
    );
  },[]);

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
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionsTable;