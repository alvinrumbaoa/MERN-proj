import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const  PetMainView = (props) =>{
    const [ likes, setLikes ] = useState(0);
    const addLikesHandler = (event) => {
            likes === 1? 
            setLikes(likes - 1):
            setLikes(likes + 1)
    }
return (
    <div className="projectClass">
            
        <button onClick={ (event) => addLikesHandler(event) }>Like</button>
        <p>Likes: { likes }</p>
    </div>  
    )


}

export default PetMainView;