import './index.css'

function UpdateInventoryProducts () {
    const handleImage = (event) => {
        const inputImage = document.getElementById('shouldBeProductImg').value;
        console.log(event.target.value);
    }
    return(<div className='updateInventoryGralContainer'>
        <form className='entryUpdateProductData'>
            <div className='labelUpdateInventoryContainer'>
                <label className='productTag'> Imagen URL:
                <div className='inputUpdateInventoryContainer'>
                    <input className='addProductInputText' id='shouldBeProductImg' onChange={handleImage}></input>
                </div>
                </label>
            </div>
            <div className='labelUpdateInventoryContainer'>
                <label className='productTag'> Nombre:
                <div className='inputUpdateInventoryContainer'>
                    <input className='addProductInputText' id='shouldBeProductImg'></input>
                </div>
                </label>
            </div>
            <div className='labelUpdateInventoryContainer'>
                <label className='productTag'> Precio:
                <div className='inputUpdateInventoryContainer'>
                    <input className='addProductInputText' id='shouldBeProductImg'></input>
                </div>
                </label>
            </div>
            <div className='labelUpdateInventoryContainer'>
                <label className='productTag'> Tipo:
                <div className='inputUpdateInventoryContainer'>
                    <input className='addProductInputText' id='shouldBeProductImg'></input>
                </div>
                </label>
            </div>
            <div className='submitButtonContainer'>
                <input type = 'submit' value = 'Actualizar Datos' className ='submitUpdateProductBtn' />
            </div>
        </form>
    </div>)
}

export default UpdateInventoryProducts;