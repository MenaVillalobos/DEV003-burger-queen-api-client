import './index.css'
import { getCookie } from '../../../Utils'

function UpdateInventoryProducts () {
    const handleSubmitUpdateProduct = (event) => {
        event.preventDefault();
        const updatedProductImg = document.getElementById('shouldBeProductImg').value;
        const updatedProductName = document.getElementById('updateProductName').value;
        const updatedProductPrice = document.getElementById('updateProductPrice').value;
        const updatedProductType = document.getElementById('updateProductType').value;
    }
    const handleImage = (event) => {
        const inputImage = document.getElementById('shouldBeProductImg').value;
        document.getElementById('previewImg').setAttribute('src', inputImage);
        console.log(event.target.value);
    }
    return(<div className='updateInventoryGralContainer'>
        <form className='entryUpdateProductData'>
            <div className='labelUpdateInventoryContainer'>
                <label className='productTag'> Imagen URL:
                <div className='inputUpdateInventoryContainer'>
                    <input className='updateProductInputText' id='shouldBeProductImg' onChange={handleImage}></input>
                </div>
                <div className='imgPreViewContainer'>
                <label className='imgPreviewLabel'> Vista previa de imagen:
                    <div className='inputImgPreview'>
                        <img className='previewImg' id='previewImg'></img>
                    </div>
                    </label>
            </div>
                </label>
            </div>
            <div className='labelUpdateInventoryContainer'>
                <label className='productTag'> Nombre:
                <div className='inputUpdateInventoryContainer'>
                    <input className='updateProductInputText' id='shouldBeProductImg'></input>
                </div>
                </label>
            </div>
            <div className='labelUpdateInventoryContainer'>
                <label className='productTag'> Precio:
                <div className='inputUpdateInventoryContainer'>
                    <input className='updateProductInputText' id='shouldBeProductImg'></input>
                </div>
                </label>
            </div>
            <div className='labelUpdateInventoryContainer'>
                <label className='productTag'> Tipo:
                <div className='inputUpdateInventoryContainer'>
                    <input className='updateProductInputText' id='shouldBeProductImg'></input>
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