import { useState, useEffect } from 'react';
import productsDatabase from '../../data/products';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';


/*-----------mock async <Service----------></Service---------->*/

function getItems(){
  const promesa = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(productsDatabase);
    },1500);
  });


  return promesa;

}
function getItemsByCategory(categoryURL){
  const promesa = new Promise((resolve)=>{
    setTimeout(()=>{
      //filtro de Array
     const filtrocategoria = productsDatabase.filter(item=> item.category===categoryURL);
     resolve(filtrocategoria);
    },1500);
  });


  return promesa;

}
/*--------------------------------------------------*/
function ItemListContainer(){
//useState es para que renderice otra vez una vez que el getItem haga una pasada por el asincro
 const [products, setProducts ] = useState([]);
 console.log("Renderizando.....")
//useefect es para que renderize solo una vez

let { categoryid } = useParams();

 useEffect( ()=>{
          if(categoryid===undefined){
             //aca levanta con el then el resolve la promesa 
           getItems().then((respuesta) => {

           console.log("promesa cumplida", respuesta);

           setProducts(respuesta) ;
           });
          }
           else{
            getItemsByCategory(categoryid).then(
              (respuesta)=> setProducts(respuesta)
            )

           }
          },
          [categoryid]);



  if(products.length === 0){
    return <Loader/>

  }




    return(
      <ItemList products={products}/>

    )
}

export default ItemListContainer