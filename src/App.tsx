import { useState } from "react";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import TransactionModal from "./components/TransactionModal";

import { GlobalStyle } from "./styles/global";

function App() {
  const [isOpenTransactionModal, setIsOpenTransactionModal] = useState(false);

  function handleOpenTransactionModal(){
    setIsOpenTransactionModal(true);
  }

  function handleCloseTransactionModal(){
    setIsOpenTransactionModal(false);
  }

  return (
    <>
      <Header onOpenModal={handleOpenTransactionModal}/>
      <Dashboard />
      <TransactionModal
        isOpen={isOpenTransactionModal}
        onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
