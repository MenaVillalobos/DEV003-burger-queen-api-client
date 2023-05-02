import './index.css'
import redHeader from '../imgsBQ/UserHist2/redHeaderMenuView.png'
import waitress from '../imgsBQ/UserHist2/waitress1stOpt.png'
import waiter from '../imgsBQ/UserHist2/waiter1stOpt.png'
import Product from './Product'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getCookie } from '../Utils'



function MenuView() {

    const [breakfastMenu, setbreakfastMenu] = useState([]);
    const [allDayMenu, setallDayMenu] = useState([]);

    const [selectedProducts, setSelectedProducts] =useState([]);

    const addProduct = (product) => {
        const matchingId = selectedProducts.find(productElement => productElement.id === product.id);
        const quantityProducts = {...product, quantity: 1};
        if (!matchingId) {
            selectedProducts.push(quantityProducts);
        }
        console.log(selectedProducts);
    }

    useEffect(() => { // EN CICLO DE VIDA ESTO ES componentDidMount
        console.log('SE CREÓ EL MENU!!!!!')
        const getCookieResult = getCookie('token');
        console.log(getCookieResult);
        const response = fetch('http://localhost:8080/products', {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${getCookieResult}`
            },
        })
            .then(answer => answer.json())
            .then(json => {
                const productosDesayuno = json.filter((product) => {
                    // if(product.type === 'Desayuno') {
                    //     return true;
                    // } else {
                    //     return false;
                    // }

                    return (product.type === 'Desayuno')
                })
                console.log(productosDesayuno);
                setbreakfastMenu(productosDesayuno);

                const productosAlmuerzo = json.filter((product) => {
                    return (product.type === 'Almuerzo')
                })
                console.log(productosAlmuerzo);
                setallDayMenu(productosAlmuerzo);
            }); //console.log(json)
            
    }, []);
    const navigate = useNavigate();
    const handleSendTicket = () =>{
        navigate('/chefview')
    }
    return(
        <div className="menuGralContainer">
            <div className="redHeaderCont">
                <img className='headerImg' src={redHeader} alt='logo del header'/>
                <div className='waitersContainer'>
                    <img className='headerWaitress' src={waitress} alt='logo header meserA'/>
                    <img className='headerWaiter' src={waiter} alt='logo header mesero'/>
                    <p className='waitersName'>:__________</p>
                </div>
            </div>
            <div className='mainAndItemsCont'>
                <div className='menusView'>
                    <div className='menusLetter'>
                        <div className='breakfastLetter'>
                            <p className='breakfastTxt'>Menú Desayuno</p>
                        </div>
                        <div className='allDayLetter'>
                            <p className='allDayTxt'>Menú Todo El Día</p>
                        </div>
                    </div>
                    <div className='menuOptions'>
                        <div className='breakfastBtns'>
                            {breakfastMenu.map(
                                (producto) => {
                                    return (<Product productCharacts={producto} addProductFn = {addProduct} />)
                                }
                            )}
                        </div>
                        <div className='allDayBtns'>
                            {allDayMenu.map(
                                (producto) => {
                                    return (<Product productCharacts={producto} addProductFn = {addProduct} />)
                                }
                            )}
                        </div>
                    </div>
                </div>
                <div className='items'>
                    <div className='orderTitle'>
                        <p className='artTxt'>ARTÍCULOS</p>
                        <p className='artTxt2'>SELECCIONADOS</p>
                    </div>
                    <div className='orderContainer'>
                        <div className='customersNameContainer'>
                            Clientx:
                            <input className='customersName'></input>
                        </div>
                        <div className='orderBtnsContainer'>
                            <p className='total'>Total: </p>
                            <button className='kitchenBtn' onClick={handleSendTicket}>
                                ¡Enviar a cocina!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuView;