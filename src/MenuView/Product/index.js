import './index.css'

function Product (props) {
    return(
        <div className={`product ${props.productCharacts.allDay ? 'allDay': 'breakfast'}`}>
            <img className='images' src={props.productCharacts.imagen}/>
            <div className='productName'>{props.productCharacts.producto}</div>
            <div className='price'>{props.productCharacts.precio}</div>
        </div>
    )
}

export default Product;