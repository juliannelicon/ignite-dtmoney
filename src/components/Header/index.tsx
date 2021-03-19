import React from 'react';

import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>
      <button type="button" onClick={onOpenModal}>Nova transação</button>
      </Content>
    </Container>
    );
}

export default Header;