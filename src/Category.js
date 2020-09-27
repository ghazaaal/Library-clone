import React from 'react';
import Select from 'react-select';
import './Category.css'

function Category({title,id}) {
    return (

        <div>

            <label className="container">
                <input type="checkbox" />
                <span className="checkmark">

                </span>
                <p>{title}</p>

            </label>


        </div>
    );
}

export default Category;
