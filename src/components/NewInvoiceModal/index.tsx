import { useState } from 'react';
import Modal from 'react-modal';

import IncomeImg from './../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, InvoiceTypeContainer, RadioBox } from './styles';


interface NewInvoiceModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal ({ isOpen, onRequestClose }: NewInvoiceModalProps) {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
          <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
          >
              <img src={closeImg} alt="Close Modal" />
              
          </button>  
          <Container >
                <h2>CREATE INVOICE</h2>

                <input 
                    placeholder="Title" 
                    value={title}
                    onChange={event => setTitle(event.target.value)}      
                />
                <input 
                    type="number"
                    placeholder="Value" 
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}      
                />

                <InvoiceTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={IncomeImg} alt="Entrada" />
                        <span>PAID</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={OutcomeImg} alt="Saída" />
                        <span>INVOICE NOT PAID </span>
                    </RadioBox>
                

                </InvoiceTypeContainer>

                <input 
                    placeholder="Category"
                    value={category}
                    onChange={event => setCategory(event.target.value)}        
                />

                <button type="submit">
                    REGISTER
                </button>
          </Container>
        </Modal>
    );
}