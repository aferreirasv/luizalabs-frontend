import './App.css';
import React from 'react'
import Order from './components/Order/Order'

function App() {
  const orders = [{
    id: "213719239",
    customer: "Alan Ferreira",
    status: "PENDENTE",
    date:"2024-10-09T17:03:06Z" ,
    cart: [
      {
        name: "ventilador 5 velocidades",
        price: 190.90,
        amount: 2
      }
    ],
    shipping: 20.20,
    subtotal:381.80,
    total: 402.00
  },
  {
    id: "187875454",
    customer: "Alan Ferreira",
    status: "PENDENTE",
    date:"2024-10-09T17:03:06Z" ,
    cart: [
      {
        name: "Aspirador de Pó Vertical e Portátil",
        price: 190.00,
        amount: 1
      }
    ],
    shipping: 20.00,
    subtotal:190.00,
    total: 210.00
  },
  {
    id: "2134634739",
    customer: "Renan Ferreira",
    status: "PENDENTE",
    date:"2024-10-09T17:03:06Z" ,
    cart: [
      {
        name: "ventilador 5 velocidades",
        price: 190.90,
        amount: 1
      }
    ],
    shipping: 20.20,
    subtotal:190.90,
    total: 211.10
  }]
  // const [currentPage, setPage] = React.useState(1)
  
  
  return (
    <>
    <header className='Header'>
      <h1> Listagem de pedidos </h1>
    </header>
    <div className='App'>
      {
        orders.map( (order) => {
          return <Order order={order} key={order.id}/>
        })
      }

    <div className='pageNavigator'>
      <input className='pageButton' type='button' value="&lt;" />  
      <input className='pageButton' type='button' value=" &gt;" />
    </div>
    </div>
    </>
  );
}

export default App;
