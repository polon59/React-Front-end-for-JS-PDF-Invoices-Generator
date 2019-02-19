import React, { Component } from 'react';


class InvoicesList extends Component{

    render(){
        const { invoices } = this.props;
        const invoicesList = invoices.map(invoice =>{
            return (
                <tr>
                    <td>{invoice.id}</td>
                    <td>{invoice.title}</td>
                    <td>{invoice.billTo}</td>
                </tr>
            );
        });

        return(
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>BILL TO</th>
                    </tr>
                    {invoicesList}
                </table>
                
            </div>
        );
    }
}

export default InvoicesList;