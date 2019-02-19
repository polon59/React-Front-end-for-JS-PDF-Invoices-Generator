import React, { Component } from 'react';
import Navbar from './navbar';
import InvoicesList from './InvoicesList';


class App extends Component {
  state = {
    invoices : [
      {id: 1, title: "invoice1", billTo:"bill to one"},
      {id: 2, title: "invoice2", billTo:"bill to two"},
      {id: 3, title: "invoice3", billTo:"bill to three"},
      {id: 4, title: "invoice4", billTo:"bill to four"}
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
          <p>
            React application
          </p>

          <InvoicesList invoices={this.state.invoices}/>
        </header>
      </div>
    );
  }
}

export default App;
