import './index.css'
import redHeader from '../imgsBQ/UserHist2/redHeaderMenuView.png'
import waitress from '../imgsBQ/UserHist2/waitress1stOpt.png'
import waiter from '../imgsBQ/UserHist2/waiter1stOpt.png'
import Product from './Product'
import coffe1 from '../imgsBQ/UserHist2/americanCoffe2ndOpt.png'
import coffe2 from '../imgsBQ/UserHist2/coffeeMilk1stOpt.png'
import sandwich from '../imgsBQ/UserHist2/sandwich1stOpt.png'
import juice from '../imgsBQ/UserHist2/fruitJuice1stOpt.png'
import burger1 from '../imgsBQ/UserHist2/Menu Icons/modalIcons/Hamburguesas/Copia de burgerMenu1stOpt.png'
import burger2 from '../imgsBQ/UserHist2/Menu Icons/modalIcons/Hamburguesas/doublBurg1stOpt.png'
import fries from '../imgsBQ/UserHist2/Menu Icons/modalIcons/Acompañamientos/modalFries1stOpt.png'
import onion from '../imgsBQ/UserHist2/Menu Icons/modalIcons/Acompañamientos/onionRg1stOpt.png'
import water1 from '../imgsBQ/UserHist2/Menu Icons/modalIcons/Para tomar/water500ml.png'
import water2 from '../imgsBQ/UserHist2/Menu Icons/modalIcons/Para tomar/water750ml.png'
import soda1 from '../imgsBQ/UserHist2/Menu Icons/modalIcons/Para tomar/sodaCan1stOpt.png'
import soda2 from '../imgsBQ/UserHist2/Menu Icons/modalIcons/Para tomar/bigSoda1stOpt.webp'
import { useEffect, useState } from 'react'
import { getCookie } from '../Utils'



function MenuView() {

    const [breakfastMenu, setbreakfastMenu] = useState([]);
    const [allDayMenu, setallDayMenu] = useState([]);

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

                    return (product.type === 'Desayuno')// return false;
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

    const array = [{
        imagen: coffe1,
        producto: 'Café Americano',
        precio: 'Precio: $5',
        allDay: false,
    },
    {
        imagen: coffe2,
        producto: 'Café con leche',
        precio: 'Precio: $7',
        allDay: false,
    },
    {
        imagen: sandwich,
        producto: 'Sándwich',
        precio: 'Precio: $10',
        allDay: false,
    },
    {
        imagen: juice,
        producto: 'Jugo de frutas',
        precio: 'Precio: $7',
        allDay: false,
    }]
    const array2 = [{
        imagen: burger1,
        producto: 'Hamburguesa Simple',
        precio: 'Precio: $5',
        allDay: true,
    },
    {
        imagen: burger2,
        producto: 'Hamburguesa Doble',
        precio: 'Precio: $7',
        allDay: true,
    },
    {
        imagen: fries,
        producto: 'Papas Fritas',
        precio: 'Precio: $10',
        allDay: true,
    },
    {
        imagen: onion,
        producto: 'Aros de Cebolla',
        precio: 'Precio: $7',
        allDay: true,
    },
    {
        imagen: water1,
        producto: 'Agua 500ml',
        precio: 'Precio: $5',
        allDay: true,
    },
    {
        imagen: water2,
        producto: 'Agua 750ml',
        precio: 'Precio: $7',
        allDay: true,
    },
    {
        imagen: soda1,
        producto: 'Gaseosa 500ml',
        precio: 'Precio: $10',
        allDay: true,
    },
    {
        imagen: soda2,
        producto: 'Gaseosa 750ml',
        precio: 'Precio: $7',
        allDay: true,
    }]
    return(
        <div className="menuGralContainer">
            <div className="redHeaderCont">
                <img className='headerImg' src={redHeader}/>
                <div className='waitersContainer'>
                    <img className='headerWaitress' src={waitress}/>
                    <img className='headerWaiter' src={waiter}/>
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
                                    return (<Product productCharacts={producto} />)
                                }
                            )}
                        </div>
                        <div className='allDayBtns'>
                            {allDayMenu.map(
                                (producto) => {
                                    return (<Product productCharacts={producto} />)
                                }
                            )}
                        </div>
                    </div>
                </div>
                <div className='items'></div>
            </div>
        </div>
    )
}

export default MenuView;