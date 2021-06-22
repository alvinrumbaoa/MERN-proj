import React, {useEffect, useState} from  'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router";


const DeleteProduct = (props) =>{    
        const {id , afterDelete} = props;

        const deleteHandler = (e,id) =>{
            
            e.preventDefault();
            axios.delete("http://localhost:8000/api/products/" + id)
            
        .then((res) =>{
            console.log(res.data);
            afterDelete(id);
            navigate("/products");
        })
        .catch((err) => {
            console.log(err);
        });   
    }
    return(
        <div>
            <button onClick={(e) => deleteHandler(e,id )}>Remove</button>
        </div>
    
    )
}

export default DeleteProduct;