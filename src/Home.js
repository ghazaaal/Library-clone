import React, {useEffect, useState} from 'react';
import Product from "./Product";
import banner from './assets/images/banner.png';
import './assets/Home.css'
import Category from "./Category";
import Pagination from "react-js-pagination";
import {useStateValue} from "./StateProvider";



function Home() {
    const [{basket}]=useStateValue();

    const [results, setResults ] = useState( [] );
    const todosPerPage = 3;
    const [ activePage, setCurrentPage ] = useState( 1 );




    const getData=()=>
    {basket.map((item) =>

        item.results.map((filteredcategory)=>
            results.push({
                id : filteredcategory.id,
                auth : filteredcategory.auth,
                category : filteredcategory.category,
                title : filteredcategory.title,
                translator:filteredcategory.translator,
                sum:filteredcategory.summary,
                image:filteredcategory.image})

        )

    );
        console.log(results);
        return results;

    };
    const res = getData();


    const indexOfLastTodo  = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos     = res.slice( indexOfFirstTodo, indexOfLastTodo );


    const renderTodos = currentTodos.map( ( todo, index ) => {
        console.log(indexOfFirstTodo,indexOfLastTodo);


        return <Product
                    id={todo.id}
                    image={todo.image}
        />;
    } );

    const handlePageChange = ( pageNumber ) => {
        console.log( `active page is ${ pageNumber }` );
        setCurrentPage( pageNumber )
    };
    const show =(f)=>{


        return <div className={"item"}>
            <Product
                id={f.id}
                image={f.image}/>
        </div>





    };

    return (


        <div className={"home__container"}>

            <img className="home__image" src={banner} alt={"homeImage"}/>


            <div className={"home"}>
                <div className={"cont"}>
                    { basket.map((item) =>
                    item.results.slice(indexOfFirstTodo, indexOfLastTodo).map(filteredcategory=>
                        <div className={"item"}>
                            <Product
                                id={filteredcategory.id}
                                image={filteredcategory.image}
                                translator={filteredcategory.translator}
                                category_id={filteredcategory.category}
                                title={filteredcategory.title}
                                authid={filteredcategory.auth}
                            />
                        </div>
                    )   )
                }</div>





                <div className={"cat"}>
                    <div className={"category__title"}>
                        <h1>دسته بندی</h1>
                    </div>

                    <div className={"category"} >
                        <Category
                            title={"همه"}
                            id={-1}
                        />

                        <Category
                            title={"کتاب های انگلیسی"}
                            id={0}
                        />

                        <Category
                            title={"کتاب های رایگان فارسی"}
                            id={1}

                        />


                        <Category
                            title={"مجلات"}
                            id={2}
                        />
                        <Category
                            title={"میکروبوک"}
                            id={3}
                        />
                        <Category
                            title={"بسته های شگفت انگیز کتاب"}
                            id={4}
                        />
                        <Category
                            title={"داستان و رمان"}
                            id={5}
                        />
                        <Category
                            title={"شعر"}
                            id={6}
                        />
                        <Category
                            title={"تبلیغات و بازیابی"}
                            id={7}
                        />
                        <Category
                            title={"روانشناسی"}
                            id={8}
                        />
                        <Category
                            title={"مدیریت"}
                            id={9}
                        />
                        <Category
                            title={"دین و عرفان"}
                            id={10}
                        />
                        <Category
                            title={"کتاب صوتی  سبک زندگی"}
                            id={11}
                        />
                        <Category
                            title={"زنان و فمنیسم"}
                            id={12}
                        />
                        <Category
                            title={"تاریخ"}
                            id={13}
                        />
                        <Category
                            title={"فلسفه"}
                            id={14}
                        />
                        <Category
                            title={"اقتصاد"}
                            id={15}
                        />
                        <Category
                            title={"حقوق"}
                            id={16}
                        />
                        <Category
                            title={"کودک"}
                            id={17}
                        />
                        <Category
                            title={"نوجوان"}
                            id={18}
                        />
                        <Category
                            title={"هنر"}
                            id={19}
                        />
                        <Category
                            title={"دانشنامه جهان و اسلام"}
                            id={20}
                        />
                        <Category
                            title={"درسی و کمک درسی"}
                            id={21}
                        />
                        <Category
                            title={"دانشگاهی"}
                            id={22}
                        />
                    </div>


                </div>



            </div>
            <div className="pagination">
                <Pagination
                    activePage={ activePage }
                    itemsCountPerPage={ 3 }
                    totalItemsCount={ 4 }
                    pageRangeDisplayed={ 3 }
                    onChange={ handlePageChange }
                />
            </div>


        </div>


    );
}

export default Home;
