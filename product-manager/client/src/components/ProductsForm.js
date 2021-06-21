import React, {
    useEffect,
    useState
} from 'react';
import axios from 'axios';
import {
    Link,
    navigate
} from "@reach/router";

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log("i sent this product " + title + price + description);
        axios.post('http://localhost:8000/api/products', {
                title: title,
                price: price,
                description: description
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err)
            });
        navigate("/products");
    }
    
    return ( <
        div >
        <
        form onSubmit = {
            onSubmitHandler
        } >
        <
        h1 > Product Manager < /h1> <
        p >
        <
        label > Title < /label> <
        input type = "text"
        onChange = {
            (e) => setTitle(e.target.value)
        }
        /> <
        /p> <
        p >
        <
        label > Price < /label> <
        input type = "text"
        onChange = {
            (e) => setPrice(e.target.value)
        }
        /> <
        /p> <
        p >
        <
        label > description < /label> <
        input type = "text"
        onChange = {
            (e) => setDescription(e.target.value)
        }
        /> <
        /p> <
        input type = "submit"
        value = "Create" / >
        <
        /form> <
        /div>
    )

}

export default ProductForm;