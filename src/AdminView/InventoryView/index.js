import './index.css'
import { getCookie } from '../../Utils'
import { useState, useEffect } from 'react';

function InventoryView () {
    const [viewAllProducts, setViewAllProducts] = useState([]);
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
                <div className='inventoryListContainer'>
                    {viewAllProducts.map((product) => {
                        return(<div className='inventoryList'>
                            <img className='images' src={product.image}/>
                            <div className='productname'>{product.name}</div>
                            <div className='productPrice'>{'$ ' + product.price}</div>
                        </div>)
                    })}
                </div>
            </main>
        </div>
    )
}
export default InventoryView;