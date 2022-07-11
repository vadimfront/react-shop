import { useEffect, useState } from "react";
import {API_KEY, API_URL} from '../config'
import { BasketList } from "./BasketList";
import { Cart } from "./Cart";
import { GoodsList } from "./GoodsList";
import { Preloader } from "./Preloader";

function Shop()  {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);


    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        }).then(response => response.json())
            .then(data => {
            
                setGoods(transformationObj(data))
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
            })
    },[])

    const transformationObj = ({shop}) => {
        return shop.map(item => {
            return {
                id: item.mainId,
                name: item.granted[0].name,
                description: item.granted[0].description,
                price: item.price.finalPrice,
                img: item.granted[0].images.full_background
            }
            
        })
    }

    const addToBasket = (item ) => {
        const inBacket = order.findIndex(el => el.id === item.id);
        if(inBacket < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((el, index) => {
                if(index === inBacket) {
                    return {
                        ...el,
                        quantity: el.quantity+1
                    }
                }
                else {
                    return el
                }
            })
            setOrder(newOrder)
        }
  
        
    }

    const handleBacketShow = () => {
        setBasketShow(!isBasketShow)
    }

    const removeFromBacket = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId)
        setOrder(newOrder)
       
    }

    const incQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if(el.id === itemId) {
                const newQuantity = el.quantity+1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el;
            }
        })
        setOrder(newOrder);
    }

    const decQuantity = (itemId) => {
        console.log(itemId)
        const newOrder = order.map(el => {
            if(el.id === itemId) {
                const newQuantity = el.quantity-1;
                return {
                    ...el,
                    quantity: newQuantity > 0 ? newQuantity : 1
                }
            } else {
                return el;
            }
        })
        console.log(newOrder)
        setOrder(newOrder)
    }




    return <main className="content">

        <div className="container">
            <div className="row">
                <Cart quantity={order.length} handleBacketShow={handleBacketShow}/>
                {loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>}
                {
                    isBasketShow && <BasketList 
                                        order={order} 
                                        handleBacketShow={handleBacketShow} 
                                        removeFromBacket={removeFromBacket}
                                        incQuantity={incQuantity}
                                        decQuantity={decQuantity}
                                        /> 
                }
            </div>
        </div>
    </main>
}

export {Shop}