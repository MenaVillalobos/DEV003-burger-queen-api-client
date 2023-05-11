import './index.css'
import redHeader from '../imgsBQ/UserHist2/redHeaderMenuView.png'
import femChef from '../imgsBQ/UserHist3/femChef1stOpt.png'
import chef from '../imgsBQ/UserHist3/maleChef1stOpt.png'
import { useEffect, useState } from 'react'
import { getCookie } from '../Utils'
import DeliveryOrders from '../ChefView/Delivery'

function ChefView() {
    const [getOrders, setGetOrders] = useState([]);
    const [pendingOrders, setPendingOrders] = useState([]);
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
            const statusPending = json.filter((order) => {
                return (order.status === 'pending')
            })
            setPendingOrders(statusPending);

            const statusDelivered = json.filter((order) => {
                return (order.status === 'delivered')
            })
            setDeliveredOrders(statusDelivered);
        })
    }
    
    useEffect(() => {
        getOrdersRequest();
    }, [])
    const markOrderToDelivery = (id) => {
        const getCookieResult = getCookie('token');
        fetch('http://localhost:8080/orders/' + id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${getCookieResult}`
            },
            body: JSON.stringify({status: 'delivered'})
        }).then(answer => answer.json())
        .then(answer => {
            getOrdersRequest();
        });
    }
    return(
        <div className="chefViewGralContainer">
            <div className="redHeader">
                <img className='headerImg' src={redHeader} alt='logo del header'/>
                <div className='welcomeKitchenLetter'>
                    ¡Bienvenidx a cocina!
                </div>
                <div className='chefsContainer'>
                    <img className='headerFemChef' src={femChef} alt='logo header chef fem'/>
                    <img className='headerChef' src={chef} alt='logo header chef'/>
                </div>
            </div>
            <div className='ticketsContainer'>
                <div className='ticketsViewContainer'>
                    <div className='ticketsViewLetter'>
                        <p className='ticketsViewTxt1'>
                            ÓRDENES
                        </p>
                        <p className='ticketsViewTxt2'>
                            RECIBIDAS
                        </p>
                    </div>
                    <div className='postItContainer'>
                        {pendingOrders.map(
                            (order) => {
                                    return(<div className='orderPostIt'>
                                        <div className='postItClientName'>{order.client}</div>
                                        <div className='productNameQuantContainer'>
                                            {order.products.map((producto)=> {
                                                return(<div className='postItProduct'>({producto.quantity}) {producto.name}</div>)
                                            })}
                                        </div>
                                        <div className='deliveryBtnContainer'>
                                            <button className='deliveryBtn' onClick={ () => markOrderToDelivery(order.id)}>Para Entregar</button>
                                        </div>
                                    </div>)
                                }
                            )
                        }
                    </div>
                </div>
                <div className='ticketsToDeliveryContainer'>
                    <div className='ticketsDeliveryLetter'>
                        <p className='deliveryTxt1'>
                            ÓRDENES
                        </p>
                        <p className='deliveryTxt2'>
                            LISTAS
                        </p>
                    </div>
                    <div className='deliveryPostIt'>
                        <DeliveryOrders deliveryOrders= {deliveredOrders}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChefView;