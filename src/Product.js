
import React, {useEffect,useState} from 'react'
import './Product.css'
import { Button, Popup } from 'semantic-ui-react'

const PopupExample = () => (
    <Popup content='Add users to your feed' trigger={<Button icon='add' />} />
)

export default PopupExample
function Product({id, authid, category_id, title, translator,summary,image}) {
    const [des, setDes]=useState(false);
    const Show = () => (
        <div>{title}</div>

    );
    const showTitle=()=>{
        setDes(true);

    };

    return (
        <div className="product" onClick={showTitle}>

                <img className={"product__image"} src={image}/>

                <h4 className={"title"} >{title}</h4>
                <h4 className={"translator"}>{translator}</h4>
                { des ? <Show /> : null }




        </div>
    );
}

export default Product;
