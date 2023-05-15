import './index.css'
import redHeader from '../imgsBQ/UserHist2/redHeaderMenuView.png'
import waitress from '../imgsBQ/UserHist2/waitress1stOpt.png'
import waiter from '../imgsBQ/UserHist2/waiter1stOpt.png'
// import DeliveryOrders from '../ChefView/Delivery'
import { useEffect, useState } from 'react'
import { getCookie } from '../Utils'

function OdersToDeliver () {
    const [getOrders, setGetOrders] = useState([]);
    const [deliveredOrders, setDeliveredOrders] = useState([]);

    const getOrdersRequest = () => {
        const getCookieResult = getCookie('token');
        const response = fetch('http://localhost:8080/orders', {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${getCookieResult}`
            },
        })
        .then(answer => answer.json())
        .then(json => {
            const gettinOrders = json;
            console.log(gettinOrders);
            setGetOrders(gettinOrders);

            const statusDelivered = json.filter((order) => {
                return (order.status === 'delivered')
            })
            setDeliveredOrders(statusDelivered);
        })
    }
    
    useEffect(() => {
        getOrdersRequest();
    }, [])
    return(
        <div className='deliverGralContainer'>
            <header className="redHeaderCont">
                <img className='headerImg' src={redHeader} alt='logo del header'/>
                <div className='tittle'>
                    ¡Órdenes Listas!
                </div>
                <div className='waitersContainer'>
                    <img className='headerWaitressToDeliver' src={waitress} alt='logo header meserA'/>
                    <img className='headerWaiterToDeliver' src={waiter} alt='logo header mesero'/>
                </div>
            </header>
            <div className='deliveryView'>
                <div className='postItContainer'>
                    {deliveredOrders.map(
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
                    )}
                </div>
            </div>
        </div>
    )
}

export default OdersToDeliver;