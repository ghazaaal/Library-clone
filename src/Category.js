import React from 'react';
import Select from 'react-select';
import './Category.css'

function Category({title,id}) {
    return (

        <div className="category">

            <label className="container">
                {title}
                <input type="checkbox" />
            </label>


        </div>
    );
}

export default Category;
