import React from 'react';

import './Product.css'
function Product({id, authid, category_id, title, translator,summary,image}) {
    return (
        <div className="product">

                <img className={"product__image"} src={image}/>
                <h4 >{title}</h4>
                <h4>{translator}</h4>


        </div>
    );
}

export default Product;
