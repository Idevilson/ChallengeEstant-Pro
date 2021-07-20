import React, { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewInvoiceModal';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewModalInvoiceModalOpen, setIsNewModalInvoiceModalOpen] = useState(false);

  function handleOpenNewInvoiceModal() {
    setIsNewModalInvoiceModalOpen(true);
  }

  function handleCloseNewInvoiceModal() {
    setIsNewModalInvoiceModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewInvoiceModal={handleOpenNewInvoiceModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewModalInvoiceModalOpen}
        onRequestClose={handleCloseNewInvoiceModal}
      />

      <GlobalStyle />
    </>
  );
}
