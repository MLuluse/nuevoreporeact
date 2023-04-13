import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../../storeContext/cartContext";
import { Link } from "react-router-dom";




function ItemDetail(props){
  

  const{cart, addItem} = useContext(cartContext);
  console.log("cart: ", cart)

  //ACA
  const [addedToCart, setAddedToCart] = useState(false);


  function onAddToCart(count){
    setAddedToCart (count);
  
    addItem(props, count)
    //ACA
  }

    return(
    <div className="item-card">
       <div className="item-card_header">
       <h4>{props.title}</h4>
       </div>
       <img src={props.img} alt="imagen" />
       <h3>{props.category}</h3>
       <h3>Precio: ${props.price}</h3>
       <h5>{props.description}</h5>
       {/*aca va el render condicional */}
       {/*if addedToCart === true?  <ItemCount> : <> ir al carrito (link)<>¡¡¡¡¡¡ ACA!!!!!!! */}
       { addedToCart ? 
         <Link to="/cart"> <button> Ir al carrito </button> </Link> 
        : <ItemCount onAddToCart={onAddToCart} stock={props.stock}/>}
     
       
    </div>
    )

}

export default ItemDetail;