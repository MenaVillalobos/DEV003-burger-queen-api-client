import { useEffect } from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';
import trashIcon from '../../imgsBQ/trashAgain.webp'

function OrderedItems({selectedProducts, selectedProductsFn}) {
    useEffect(() => {
        console.log('cambió la prop selectedProducts!!!!')
        // aqui va codigo para calcular el total
        // hacer un map sobre selectedProducts, tener una variable suma que ira
        // acumulando las cantidades por cada producto
        // y usar otra variable con useState para mostrar la suma en la UI
        // tener cuidado con el campo price pq es un string, convertir a numb
        // hacer que se vea bonito
    }, [selectedProducts]);

    const navigate = useNavigate();
    const handleSendTicket = () =>{
        navigate('/chefview')
    }
    console.log(selectedProducts);
    const increaseQuantity = (id) => {
        const noSeQueHago = selectedProducts.map(producto => {
            if (producto.id === id) {
                return {...producto, quantity: producto.quantity+1};
            }
            return producto;
        })
        selectedProductsFn(noSeQueHago);
    }
    const decreaseQuantity = (id) => {
        const noSeQueHago = selectedProducts.map(producto => {
            if (producto.id === id && producto.quantity > 1) {
                return {...producto, quantity: producto.quantity-1};
            }
            return producto;
        })
        selectedProductsFn(noSeQueHago);
    }

    const deleteProduct = (id) => {
        const noSeQueHago = selectedProducts.filter((producto) => {
            if(producto.id !== id) {
                return producto;
            }
        })
        selectedProductsFn(noSeQueHago);
    }
    return (
        <div className='items'>
            <div className='orderContainer'>
                <div className='customersNameContainer'>
                    Clientx:
                    <input className='customersName'></input>
                </div>
                <div className='selectedItemsContainer'>
                    {selectedProducts.map(
                        (producto) => {
                            return (<div className='orderListProducts'>{producto.name}
                            <button className='decrease' onClick={() => decreaseQuantity(producto.id)}>
                                <span className='minusSign'>-</span>
                            </button>
                            <span className='quantitySpan'>{producto.quantity}</span>
                            <button className='increase' onClick={() => increaseQuantity(producto.id)}>
                                <span className='plusSign'>+</span>
                            </button>
                            <button className='deleteBtn' onClick={() => deleteProduct(producto.id)}>
                                <img src={trashIcon} className='deleteIcon'></img>
                            </button>
                            </div>);
                        }
                    )}
                </div>
                <div className='orderBtnsContainer'>
                    <p className='total'>Total: </p>
                    <button className='kitchenBtn' onClick={handleSendTicket}>
                        ¡Enviar a cocina!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderedItems;