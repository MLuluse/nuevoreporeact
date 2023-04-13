import { createContext, useState } from 'react';

const cartContext = createContext({default:"default"});

const Provider = cartContext.Provider; //va con mayuscula porque es un componente (interno), pero componente al fin




//customProvider
function CartProvider(props){
    
    const [cart, setCart ] = useState([]);
    //estado es inmutable
    //funcion que deberia agregar al carrito()
    function addItem(product, count){

        let itemAlreadyInCart = cart.findIndex(
            (itemInCart) => itemInCart.id === product.id
          );
      
        const newCart = [...cart]; 
        newCart.push({...product, count}) //puedo hacer un push porque es un nuevo arreglo no el original
        setCart(newCart);
         if (itemAlreadyInCart !== -1) {
            newCart[itemAlreadyInCart].count += count;
            setCart(newCart);
          } 
          
          else {
      
            product.count = count;
            newCart.push(product);
      
            setCart(newCart);
          }
        }
        function itemsInCart() {
          let total = 0;
          cart.forEach((itemInCart) => (total = total + itemInCart.count));
          return total;
        }
        function clear() {
          setCart([]);
        }
      
        function removeItem(itemIdR){
          setCart(cart.filter(product =>product.id !== itemIdR));
      }
      
      
        function priceInCart() {
          let total = 0;
          cart.forEach((product) => (total = total + (product.price * product.count)));
          return total;
        }
    

    return(
          /*el primer par de llaves que lleva es porque escribo javaScript y el segunto es porque es un objeto JS */
        <Provider value={{cart, addItem,itemsInCart, priceInCart, clear,removeItem }}>

            {props.children}

        </Provider>

    )
}
export {cartContext, CartProvider}