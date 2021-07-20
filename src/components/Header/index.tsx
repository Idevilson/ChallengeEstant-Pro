import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewInvoiceModal: () => void;
}

export function Header({ onOpenNewInvoiceModal }: HeaderProps) {
    return (
        <Container>
            <Content>          
                <button type="button" onClick={onOpenNewInvoiceModal}>
                    NEW INVOICE
                </button>              
           </Content>
        </Container>
    )
}