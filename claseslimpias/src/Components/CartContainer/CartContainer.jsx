import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../storeContext/cartContext'

function CartContainer() {
  const context = useContext(cartContext);
  const cart = context.cart;
  const getPriceInCart = context.getPriceInCart;
  //1. Rendering condicional -> si el carrito está vacío mostramos un mensaje "Volve al home"
  if (cart.length ===0){
    return <h5>Su carrito esta vacio</h5>
  }

  //2. Desglose del carrito -> mostrar el contenido
  return (
    <div>
      <h1>Tu Carrito</h1>
      {cart.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <p>cantidad: {item.count}</p>
          <p>precio: {item.price}</p>
        </div>
      ))}
      <span>El total de tu compra es: {getPriceInCart()} </span>
    </div>
  );
}

export default CartContainer;