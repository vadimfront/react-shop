import { BacketItem } from "./BacketItem";


function BasketList(props) {
    const {
        order, 
        handleBacketShow, 
        removeFromBacket,
        incQuantity,
        decQuantity
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)
   
    return  <div className="cart-modal">
                <span 
                    className="secondary-content modal-close" 
                    onClick={handleBacketShow}
                >
                    <i className='material-icons '>close</i>
                </span>
                <ul className="collection">
                    <li className="collection-item active">Cart</li>
                        {
                            order.length ? order.map((item) => {
                            
                                return <BacketItem 
                                    key={item.id} 
                                    removeFromBacket={removeFromBacket} 
                                    incQuantity={incQuantity}
                                    decQuantity={decQuantity}
                                    {...item} />
                            }) : <li className="collection-item">Cart is empty</li>
                        }
                    <li className="collection-item active">Total: {totalPrice}</li>
                </ul>
            </div>
}

export {BasketList}