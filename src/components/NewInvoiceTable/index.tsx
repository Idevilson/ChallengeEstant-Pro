import { Container, Invoice, LineItem } from "./styles";

export function InvoicesTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Invoice</th>
                        <th>category</th>
                        <th>Status</th>
                        <th>Value</th>
                        <th>Notes</th>
                    </tr>
                </thead>

            </table>

            <Invoice>
                <LineItem>
                    <h1>INVOICE 1</h1>

                    <h1>FOOD</h1>  

                    <h1>PAID</h1>  

                    <h1>R$30,00</h1>   

                    <h1>TICKET</h1>                   
                </LineItem>                              
            </Invoice>

            <Invoice>
                <LineItem>
                    <h1>INVOICE 1</h1>

                    <h1>FOOD</h1>  

                    <h1>PAID</h1>  

                    <h1>R$90,00</h1>   

                    <h1>TICKET</h1>                   
                </LineItem>                              
            </Invoice>


        </Container> 
    );
}