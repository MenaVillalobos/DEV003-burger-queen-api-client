import './index.css'
import redHeader from '../imgsBQ/UserHist2/redHeaderMenuView.png'
import waitress from '../imgsBQ/UserHist2/waitress1stOpt.png'
import waiter from '../imgsBQ/UserHist2/waiter1stOpt.png'
// import DeliveryOrders from '../ChefView/Delivery'
import { useEffect, useState } from 'react'
import { getCookie } from '../Utils'
import { json } from 'react-router-dom'

function OdersToDeliver () {
    const [getOrders, setGetOrders] = useState([]);
    const [deliveredOrders, setDeliveredOrders] = useState([]);
    const [deletedOrder, setDeletedOrder] = useState([]);

    const getOrdersRequest = () => {
        console.log('SE HACE LA PETICION GET!!!')
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
    const deleteDeliveredOrders = (id) => {
        console.log('SE BORRA LA ORDENNN')
        const getCookieResult = getCookie('token');
        fetch('http://localhost:8080/orders/'+ id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${getCookieResult}`
            },
        })
        .then(answer => answer.json())
        .then( json => {
            const showDeletedOrders = json;
            console.log(showDeletedOrders);
            setDeletedOrder(showDeletedOrders);
            console.log('ACA YA SE BORRÒ PERO FALTA ACTUALIZAR')
            getOrdersRequest();
        })
    }

    const coordinates = (event) => {
        console.log('X: ' +event.clientX, 'Y: ' + event.clientY);
    }
    
    useEffect(() => {//MONTAJE DEL COMPONENTE!
        console.log('esto es lo primero que se ejecuta, se monta el componente');
        getOrdersRequest();
        document.addEventListener('click', coordinates);
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
                                <div className='deleteBtnContainer'>
                                    <button className='deleteButton' onClick={ () => deleteDeliveredOrders(order.id)}>¡Entregado!</button>
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