function Cart(props) {
    const { quantity = 0, handleBacketShow } = props;


    return (
        <div 
            className="cart"
            onClick={handleBacketShow}
        >
            <i className="material-icons">shopping_cart</i>
                {quantity ? (<span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    )
}

export {Cart}