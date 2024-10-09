import './Order.css';

export default function Order ({order}) {


    return (
        <>
            <div className='orderContainer'>
                <div className='orderHeader'>
                    <div>
                        <p className='orderHeaderLabel'> Numero do Pedido</p>
                        <p className='orderHeaderContent'> { order.id } </p>
                    </div>
                    <div>
                        <p className='orderHeaderLabel'> Pedido feito em </p>
                        <p className='orderHeaderContent'> { order.date }</p>
                    </div>
                </div>
                <div className='orderContent'>
                    <div>
                        <p> Cliente: <b>{order.customer}</b></p>
                        <hr/>
                    </div>
                    <div>
                        <p className='orderStatus'> Pedido {order.status.toLowerCase()}</p>
                        <div>
                            {order.cart.map(product => {
                                return (
                                <div className='orderOrganizer'> 
                                    <div> 
                                    <p>{ product.name }</p>
                                    <p>Quantidade: <b>{ product.amount }</b></p>
                                    </div>
                                    <p className='orderPricing'> {`R$ ${product.price.toFixed(2)}`}</p>
                                </div>
                                )
                            })}
                        </div> 
                    </div>
                    <div>
                        <p>Pagamento</p>
                        <hr/>
                        <div>
                            <div className='orderOrganizer'>
                                Subtotal
                                <p className='orderPricing'>
                                    { `R$ ${order.subtotal.toFixed(2)}` }
                                </p>
                            </div>
                            <div className='orderOrganizer'>
                                Frete
                                <p className='orderPricing'>
                                    { `R$ ${order.shipping.toFixed(2)}` }
                                </p>
                            </div>
                            <hr/>
                        </div>
                        <div className='orderOrganizer'>
                            Total do pedido
                            <p className='orderPricing'>{`R$ ${order.total.toFixed(2)}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}