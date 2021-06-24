import React from 'react';
import axios from 'axios';
import {Router} from '@reach/router';
import PetDetails from "./component/PetDetails";
import PetsMainView from "./component/PetsMainView";
import UpdatePets from  "./component/UpdatePets";
import PetCreator from "./component/PetCreator";
import './App.css';

function App() {
  return (
    <div className="App">
          <Router>
              <PetsMainView default />
              <PetCreator path="/pets/new"/>
              <UpdatePets path="/pets/:id/edit"/>
              <PetDetails path="/products/:id"/>
          </Router>
          
    </div>
  );
}

export default App;
