import './App.css';
import React from 'react'
import Order from './components/Order/Order'
import axios from 'axios'

function App() {
  const baseURL = process.env.REACT_APP_BASEURL
  const api = axios.create({
    baseURL: baseURL
  })
  const ordersAmount = 3
  const [totalPages, setTotalPages] = React.useState(0)
  const [currentPage, setPage] = React.useState(1)
  const [orders, setOrders] = React.useState([])

  React.useEffect( () => {
    getOrders(currentPage,ordersAmount)
  }
      ,[currentPage])

  const nextPage = () => {
    setPage(currentPage + 1)
  }

  const prevPage = () => {
    setPage(currentPage - 1)
  }
  

  async function getOrders(page, amount) {
    try {

        api.get(
            `${baseURL}/orders?page=${page}&amount=${amount}`
        ).then(res => {
          setOrders(res.data.orders)
          setTotalPages(Math.ceil(res.data.count/amount))
        })
        
    }
     catch( e ) {
        console.error(e)
     }
}

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
        <input className='pageButton' type='button' value="&lt;" onClick={prevPage} disabled={!(currentPage > 1)}/>  
        <p className='pageLabel'>{currentPage}</p>
        <input className='pageButton' type='button' value="&gt;" onClick={nextPage} disabled={currentPage >= totalPages}/>
      </div>
    </div>
    </>
  );
}

export default App;
