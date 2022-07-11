function BacketItem(props) {

    const {
        id,
        name,
        quantity,
        price,
        removeFromBacket,
        incQuantity,
        decQuantity
    } = props;

    
    console.log(props)

    return <li 
                key={id} 
                className="collection-item"
            >
        {name} <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>remove</i> x = {quantity}{' '} 
        <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}>add</i> = price: {price*quantity}
        <span className="secondary-content basket-delete" onClick={() => removeFromBacket(id)}>
            <i className='material-icons' >close</i>
        </span>
    </li>
}

export {BacketItem}
