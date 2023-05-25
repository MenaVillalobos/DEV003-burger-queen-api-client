import './index.css'
import { getCookie } from '../../Utils'
import { useState, useEffect } from 'react';
import AddToInventory from '../InventoryView/AddItems'
import UpdateInventoryProducts from './UpdateItems'

function InventoryView () {
    const [viewAllProducts, setViewAllProducts] = useState([]);
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
                <section className='addOrUpdateContainer'>
                    <div className='addProductContainer'>
                        <section className='addProductsSection'>
                            <button className='addProduct' onClick={() => addProductsFn()}>AGREGAR PRODUCTO</button>
                            { isAddingProducts && <AddToInventory showAddProductsMenu = {addProductsFn}/>}
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