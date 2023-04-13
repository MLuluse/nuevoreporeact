import Button from '../Button/Button';
import './item.css';
import {Link} from 'react-router-dom'
import { useState } from 'react';

//aca lo exporto desde la fundacion

export default function Item(props){
  const [fav, setFav]=useState(false);

  function handleFavourite(evt){
    evt.preventDefault();
    setFav(!fav);
  }

  let classNameFavourite;

  if(fav === true){
    classNameFavourite = "item-card_favicon favourite";
  } else{
    classNameFavourite = "item-card_favicon";
  }
 
    return(
   
       <div id={props.id} className="item-card">
       <button onClick={handleFavourite} className={classNameFavourite}> ♥ </button>

       <div className="item-card_header">
       <h4>{props.title}</h4>
       </div>

       <div className='item-card_img'>
       <img className={props.stock === 0 &&"disables"} src={props.img} alt="imagen" />
       </div>

       <div className='item-card_detail'>

        {/*solo mostrar si tengo producto asi */}
        {/*3. rendering condicional con op ogico && fuciona con valor falsy y truty */}
        {/*Condicion && entonces renderizo </A> el pedazo de codigo que quiero 
        ¡¡¡¡¡¡ACA!!!!!!*/}


        {props.offer && <h3 style = {{color:"green"}}> {props.offer}%</h3>}

       <h3>${props.price}</h3>
       <small>{props.description}</small>
       </div>
       {
        props.stock === 0 && <small>No quedan mas pelis</small> 
       }
       {
        props.stock > 0 &&(
          <Link to={`/detalle/${props.id}`}>
          <Button> Ver Detalles</Button>
          </Link>
        )
       }



      </div>

    )

}

