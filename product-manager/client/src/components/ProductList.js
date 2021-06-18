import React, {useEffect, useState} from  'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router";

const ProductList = (props) =>{
    //create some state to hold objects
    const [products, setProduct] = useState([]);
    //need useEffect and axios to communicate to database server
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) =>{
            console.log(res.data);
            setProduct(res.data); //set state from API
        })
        .catch((err) => {
            console.log(err);
        });
    },[]) 
    return(
        <div>
            <h1>All Product List</h1> 
            
            {/* we need to map state to display all products */}
            {
                products.map((item, index) => (
                    <div key={index}>
                        <Link to={"/products/" + item._id}>
                        {item.title}
                        </Link>
                    </div>
                
                ))
            }
            {/* create a link to details page */}
        </div>
    )
}

export default ProductList;