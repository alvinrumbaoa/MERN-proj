import React, {useEffect, useState} from  'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router";

const ProductDetails = (props) =>{
    const [products, setProduct] = useState({});
    //need useEffect and axios to communicate to database server
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
        .then((res) =>{
            console.log(res.data);
            setProduct(res.data); //set state from API
        })
        .catch((err) => {
            console.log(err);
        });
    },[props.id]);
    
    return(
        <div>
            <h1>Product Details</h1>   
            <p>Title: {products.title}</p>
            <p>Price: {products.price}</p>
            <p>Description: {products.description}</p>
        </div>
    )
}

export default ProductDetails;