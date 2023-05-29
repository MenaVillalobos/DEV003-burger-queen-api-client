import './index.css'
import adminLogo from '../../imgsBQ/UserHist5/adminLogo.png'
import staffIcon from '../../imgsBQ/UserHist5/staffIcon.png'
import { getCookie } from '../../Utils'
import { useState, useEffect } from 'react';
import AddToInventory from '../InventoryView/AddItems'
import UpdateInventoryProducts from './UpdateItems'

function InventoryView () {
    const [viewAllProducts, setViewAllProducts] = useState([]);
    const [breakfastItems, setBreakfastItems] = useState([]);
    const [allDayItems, setAllDayItems] = useState([]);
    const [isAddingProducts, setIsAddingProducts] = useState(false);
    const [isUpdatingProducts, setIsUpdatingProducts] = useState(false);

    const showProductsRequest = () => {
        const getCookieResult = getCookie('token');
        fetch('http://localhost:8080/products', {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${getCookieResult}`
            },
        })
            .then(answer => answer.json())
            .then(json => {
                console.log(json);
                setViewAllProducts(json);
                const desayunoItems = json.filter((product) => {
                    return (product.type === 'Desayuno')
                })
                setBreakfastItems(desayunoItems);
                const almuerzoItems = json.filter((product) => {
                    return (product.type === 'Almuerzo')
                })
                setAllDayItems(almuerzoItems);
            })
        }
    const addProductsFn = (id) => {
        setIsAddingProducts(!isAddingProducts);
    }
    const updateProductsFn = (id) => {
        setIsUpdatingProducts(!isUpdatingProducts);
    }

        useEffect(() => {
            showProductsRequest();
        }, [])
    return(
        <div className='inventoryViewGralContainer'>
            <header className='inventoryHeader'>
            <img className='adminLogoImg' src={adminLogo} alt='logo del header admin view'></img>
                <span className='helloInventory'>¡Bienvenidx A Inventario!</span>
                <img className='staffHeaderImg' src={staffIcon} alt='staff icon'></img>
            </header>
            <main className='inventoryMain'>
                <section className='inventoryListContainer'>
                    <span className='breakfastCategory'>PRODUCTOS MENÚ DESAYUNO</span>
                    <div className='breakfastItems'>
                        {breakfastItems.map(
                            (producto)=> {
                                return(<div className='inventoryList'>
                                <img className='images' src={producto.image}/>
                                <div className='productname'>{producto.name}</div>
                                <div className='productPrice'>{'$ ' + producto.price}</div>
                            </div>)
                        })}
                    </div>
                    <span className='allDayCategory'>PRODUCTOS MENÚ TODO EL DÍA</span>
                    <div className='allDayItems'>
                        {allDayItems.map(
                            (producto)=> {
                                return(<div className='inventoryList'>
                                <img className='images' src={producto.image}/>
                                <div className='productname'>{producto.name}</div>
                                <div className='productPrice'>{'$ ' + producto.price}</div>
                            </div>)
                        })}
                    </div>
                    {/* {viewAllProducts.map((product) => {
                        return(<div className='inventoryList'>
                            <img className='images' src={product.image}/>
                            <div className='productname'>{product.name}</div>
                            <div className='productPrice'>{'$ ' + product.price}</div>
                        </div>)
                    })} */}
                </section>
                <section className='addOrUpdateContainer'>
                    <div className='addProductContainer'>
                        <section className='addProductsSection'>
                            <button className='addProduct' onClick={() => addProductsFn()}>AGREGAR PRODUCTO</button>
                            { isAddingProducts && <AddToInventory showAddProductsMenu = {addProductsFn} showProducts = {showProductsRequest} showAddProductForm = {setIsAddingProducts}/>}
                        </section>
                    </div>
                    <div className='updateProductContainer'>
                        <section className='addProductsSection'>
                            <button className='updateProduct' onClick={() => updateProductsFn()}>ACTUALIZAR PRODUCTO</button>
                            { isUpdatingProducts && <UpdateInventoryProducts showUpdateProductsMenu = {updateProductsFn}/>}
                        </section>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default InventoryView;