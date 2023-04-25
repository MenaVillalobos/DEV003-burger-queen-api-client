import './index.css'

function Product (props) {
    return(
        <div className={`product ${props.productCharacts.type === 'Almuerzo' ? 'allDay': 'breakfast'}`}>
            <img className='images' src={props.productCharacts.image}/>
            <div className='productName'>{props.productCharacts.name}</div>
            <div className='price'>{ `${'$'} ${props.productCharacts.price}`}</div>
        </div>
    )
}

export default Product;