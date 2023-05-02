import './index.css'
import { useNavigate } from 'react-router-dom';

function OrderedItems() {
    const navigate = useNavigate();
    const handleSendTicket = () =>{
        navigate('/chefview')
    }
    return (
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
    )
}

export default OrderedItems;