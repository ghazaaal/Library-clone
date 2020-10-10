
import React, {useEffect,useState} from 'react'
import './assets/Product.css'
import Popup from './Popup';

function Product({id, authid, category_id, title, translator,summary,image}) {
    const [des, setDes]=useState(false);
    const Show = () => (
        <div>{title}</div>

    );
    const showTitle=()=>{
        setDes(!des);

    };

    return (
        <div className="product" >

                <img className={"product__image"} src={image} onClick={showTitle}/>

                <h4 className={"title"} >{title}</h4>
                <h4 className={"translator"}>{translator}</h4>


        </div>
    );
}

export default Product;
