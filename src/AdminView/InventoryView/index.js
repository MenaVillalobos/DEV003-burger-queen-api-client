import './index.css'
import { getCookie } from '../../Utils'
import { useState, useEffect } from 'react';
import AddToInventory from '../InventoryView/AddItems'

function InventoryView () {
    const [viewAllProducts, setViewAllProducts] = useState([]);
    const [isAddingProducts, setIsAddingProducts] = useState(false);
    const [isDeletingProducts, setIsDeletingProducts] = useState(false);

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
            })
        }
        useEffect(() => {
            showProductsRequest();
        }, [])
    return(
        <div className='inventoryViewGralContainer'>
            <header className='inventoryHeader'>
                HOLA
            </header>
            <main className='inventoryMain'>
                <section className='inventoryListContainer'>
                    {viewAllProducts.map((product) => {
                        return(<div className='inventoryList'>
                            <img className='images' src={product.image}/>
                            <div className='productname'>{product.name}</div>
                            <div className='productPrice'>{'$ ' + product.price}</div>
                        </div>)
                    })}
                </section>
                <section className='addOrDeleteContainer'>
                    <div className='addProductContainer'>
                        <section className='addProductsSection'>
                            <button className='addProduct'>AGREGAR PRODUCTO</button>
                            <AddToInventory/>
                        </section>
                    </div>
                    <div className='deleteProductContainer'>
                        <section className='addProductsSection'>
                            <button className='deleteProduct'>ELIMINAR PRODUCTO</button>
                        </section>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default InventoryView;