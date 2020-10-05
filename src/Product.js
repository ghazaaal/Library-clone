
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
                <input
                    type="button"
                    value="Click to Open Popup"
                    onClick={showTitle}
                />
                {des && <Popup
                    content={<div>
                        <b>Design your Popup</b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button>Test button</button>

                    </div>}
                    handleClose={showTitle}

                />}




        </div>
    );
}

export default Product;
