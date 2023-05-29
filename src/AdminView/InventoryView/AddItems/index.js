import './index.css'
import { getCookie } from '../../../Utils'

function AddToInventory ({showProducts, showAddProductForm}) {

    const handleSubmitAddProduct = (event) => {
        event.preventDefault();
        const newProductImg = document.getElementById('shouldBeProductImg').value;
        const newProductName = document.getElementById('newProductName').value;
        const newProductPrice = document.getElementById('newProductPrice').value;
        const newProductType = document.getElementById('newProductType').value;

        const newProductBodyRequest = {
            image: newProductImg,
            name: newProductName,
            price: newProductPrice,
            type: newProductType
        }
        console.log(newProductBodyRequest);
        const getCookieResult = getCookie('token');
        fetch('http://localhost:8080/products', {
            method: 'POST',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookieResult}`
            },
            body: JSON.stringify(newProductBodyRequest)
        }).then(answer => answer.json())
        .then(answer => {
            console.log(answer);
            showProducts();
            showAddProductForm(false);
        })
    }
    const handleImage = (event) => {
        const inputImage = document.getElementById('shouldBeProductImg').value;
        console.log(event.target.value);
    }
    return(<div className='addToInventoryGralContainer'>
        <form onSubmit={handleSubmitAddProduct} className='entryAddProductData'>
            <div className='labelAddToInventoryContainer'>
                <label className='productTag'> Imagen URL:
                <div className='inputAddToInventoryContainer'>
                    <input className='addProductInputText' id='shouldBeProductImg' onChange={handleImage}></input>
                </div>
                </label>
            </div>
            <div className='labelAddToInventoryContainer'>
                <label className='productTag'> Nombre:
                <div className='inputAddToInventoryContainer'>
                    <input className='addProductInputText' id='newProductName'></input>
                </div>
                </label>
            </div>
            <div className='labelAddToInventoryContainer'>
                <label className='productTag'> Precio:
                <div className='inputAddToInventoryContainer'>
                    <input className='addProductInputText' id='newProductPrice'></input>
                </div>
                </label>
            </div>
            <div className='labelAddToInventoryContainer'>
                <label className='productTag'> Tipo:
                <div className='inputAddToInventoryContainer'>
                    <input className='addProductInputText' id='newProductType'></input>
                </div>
                </label>
            </div>
            <div className='submitButtonContainer'>
                <input type = 'submit' value = 'Agregar Producto' className ='submitAddProductBtn' />
            </div>
        </form>
    </div>)
}

export default AddToInventory;