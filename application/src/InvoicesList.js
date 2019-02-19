import React, { Component } from 'react';


class InvoicesList extends Component{

    render(){
        const { invoices } = this.props;
        const invoicesList = invoices.map(invoice =>{
            return (
                <div>
                    <h4>{invoice.id}</h4>
                    <h4>{invoice.title}</h4>
                    <h4>{invoice.billTo}</h4>
                </div>
            );
        });

        return(
            <div>
                {invoicesList}
            </div>
        );
    }
}

export default InvoicesList;