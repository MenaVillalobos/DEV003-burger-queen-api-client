import { useEffect, useState } from 'react';
import './index.css'
import { useNavigate } from 'react-router-dom';
import trashIcon from '../../imgsBQ/trashAgain.webp'

function OrderedItems({selectedProducts, selectedProductsFn}) {
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        let sum = 0;
        selectedProducts.map(producto => {
            const subTotal = parseFloat(producto.price) * producto.quantity;
            sum += subTotal;
        })
        setTotalAmount(sum);
        console.log('RESULTADO: ' + sum);
    }, [selectedProducts]);

    const navigate = useNavigate();
    const handleSendTicket = () =>{
        navigate('/chefview')
    }
    console.log(selectedProducts);
    const increaseQuantity = (id) => {
        const increasing = selectedProducts.map(producto => {
            if (producto.id === id) {
                return {...producto, quantity: producto.quantity+1};
            }
            return producto;
        })
        selectedProductsFn(increasing);
    }
    const decreaseQuantity = (id) => {
        const decreasing = selectedProducts.map(producto => {
            if (producto.id === id && producto.quantity > 1) {
                return {...producto, quantity: producto.quantity-1};
            }
            return producto;
        })
        selectedProductsFn(decreasing);
    }

    const deleteProduct = (id) => {
        const deleting = selectedProducts.filter((producto) => {
            if(producto.id !== id) {
                return producto;
            }
        })
        selectedProductsFn(deleting);
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
                    <p className='total'>Total: {'$' + totalAmount} </p>
                    <button className='kitchenBtn' onClick={handleSendTicket}>
                        ¡Enviar a cocina!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderedItems;