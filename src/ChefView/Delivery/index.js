import './index.css'
import { getCookie } from '../../Utils'
import { useEffect, useState } from 'react'

function DeliveryOrders ({deliveryOrders}) {
    return(
        <div className='postItContainer2'>
            {deliveryOrders.map(
                (order) => {
                        return(<div className='orderPostIt'>
                            <div className='postItClientName'>{order.client}</div>
                            <div className='productNameQuantContainer'>
                                {order.products.map((producto)=> {
                                    return(<div className='postItProduct'>({producto.quantity}) {producto.name}</div>)
                                })}
                            </div>
                        </div>)
                    }
                )
            }
        </div>
    )
}

export default DeliveryOrders;