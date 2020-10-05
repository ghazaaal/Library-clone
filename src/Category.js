import React, {useState} from 'react';

import './assets/Category.css'
import {useStateValue} from "./StateProvider";

import {booksData} from './data_books';


function Category({title,id}) {
    const results = [];
    const [{}, dispatch]=useStateValue();
    const getData=()=>{
        if(id !== -1) {
            booksData.filter(book => book.category === id).map(filteredcategory => (

                results.push({
                    id: filteredcategory.id,
                    auth: filteredcategory.auth,
                    category: filteredcategory.category,
                    title: filteredcategory.title,
                    translator: filteredcategory.translator,
                    sum: filteredcategory.summary,
                    image: filteredcategory.image
                })


            ));

        }else {
            booksData.map(book =>(
                results.push({
                    id: book.id,
                    auth: book.auth,
                    category: book.category,
                    title: book.title,
                    translator: book.translator,
                    sum: booksData.summary,
                    image: book.image

                })
            ))
        }


        return results;

    };
    const addToBasket = () => {
        setDes(!des);

        if (!des){
            getData();
            dispatch({

                type : 'ADD_TO_BASKET',
                item :{
                    id: id,
                    title: title,
                    results : results

                }


            })
        }
        if(des){

            dispatch({

                type : 'REMOVE_FROM_BASKET',
                item :{
                     id: id,
                     title: title,
                     results : results

                }


            })

        }



    };


    const [des, setDes]=useState(false);





    return (


        <div >


            <label className="container">
                <input type="checkbox" />
                <span className="checkmark" >
                </span>
                <p onClick={addToBasket}>{title}</p>
            </label>








        </div>
    );
}

export default Category;
