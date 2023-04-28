import './index.css'

function Product ({productCharacts, addProductFn}) {
    return(
        <div className={`product ${productCharacts.type === 'Almuerzo' ? 'allDay': 'breakfast'}`} onClick={() => addProductFn(productCharacts)}>
            <img className='images' src={productCharacts.image}/>
            <div className='productName'>{productCharacts.name}</div>
            <div className='price'>{ `${'$'} ${productCharacts.price}`}</div>
        </div>
    )
}

export default Product;