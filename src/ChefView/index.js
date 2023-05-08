import './index.css'
import redHeader from '../imgsBQ/UserHist2/redHeaderMenuView.png'
import femChef from '../imgsBQ/UserHist3/femChef1stOpt.png'
import chef from '../imgsBQ/UserHist3/maleChef1stOpt.png'
import { useEffect, useState } from 'react'
import { getCookie } from '../Utils'

function ChefView() {
    const [getOrders, setGetOrders] = useState([]);
    useEffect(() => {
        const getCookieResult = getCookie('token');
        console.log(getCookieResult);
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
        })
    }, [])
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
                        {getOrders.map(
                            (order) => {
                                    return(<div className='orderPostIt'>
                                        <div className='postItClientName'>Clientx: {order.client}</div>
                                        <div className='productNameQuantContainer'>
                                            {order.products.map((producto)=> {
                                                return(<div className='postItProduct'>({producto.quantity}) {producto.name}</div>)
                                            })}
                                        </div>
                                        <div className='deliveryBtnContainer'>
                                            <button className='deliveryBtn'>Para Entregar</button>
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
                </div>
            </div>
        </div>
    )
}
export default ChefView;