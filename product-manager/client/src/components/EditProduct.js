import React, {useEffect, useState} from  'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router";


const EditProduct = (props) =>{
        const {id} = props;
        const  [title ,setTitle]    = useState("");
        const [price, setPrice ] = useState(0);
        const [description,  setDescription] = useState("");
        
        useEffect(() => {
            axios.get("http://localhost:8000/api/products/" + id)
            .then((res) =>{
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                 //set state from API
            })

        }, [])
        
        const updatedProduct = (e) => { 
            e.preventDefault();
            axios.put("http://localhost:8000/api/products/" + id, {
                title, price, description
            })
            .then(res => console.log(res))
            .catch(err => console.log (err));
            navigate("/products");
        }
    return(
        <div>
            <h1>Edit Product</h1>
            <form onSubmit ={updatedProduct}>
                <p>
                    <label>Title:</label><br/>
                    <input type="text" name="title" value={title} onChange ={(e) => {setTitle(e.target.value)}} />
                </p>
                <p>
                    <label>Price:</label><br/>
                    <input type="text" name="price" value={price} onChange ={(e) => {setPrice(e.target.value)}} />
                </p>
                <p>
                    <label>Description:</label><br/>
                    <input type="text" name="description" value={description} onChange ={(e) => {setDescription(e.target.value)}} />
                </p>
                <input className="updateBtn" type="submit" value="Update"/>
                
            </form>
            <Link to={"/products"}>
                        <input type="submit" value="Back"/>
                        
            </Link>
        </div>
    )
}

export default EditProduct;