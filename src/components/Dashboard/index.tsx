import React from 'react'
import { InvoicesTable } from '../NewInvoiceTable'
import {Container} from './styles'

export function Dashboard () {
    return (
        <Container>
            <InvoicesTable />
        </Container>
    )
}