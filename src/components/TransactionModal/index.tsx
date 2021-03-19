import React, { FormEvent, useState } from 'react';

import ReactModal from 'react-modal';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import api from '../../services/api';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

ReactModal.setAppElement('#root');

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {title, amount, category, type}

    api.post('/transactions', data)
  }
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal"
      overlayClassName="react-modal-overlay"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal"/>
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            activeColor="green"
            isActive={type === 'income'}
            onClick={() => setType('income')}
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            activeColor="red"
            isActive={type === 'outcome'}
            onClick={() => setType('outcome')}
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input
         type="text"
         placeholder="Categoria"
         value={category}
         onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
};

export default Modal;