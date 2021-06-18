import './App.css';
import ProductForm from './components/ProductsForm';
import EditProduct from './components/EditProduct';
import ProductList from './components/ProductList';
import ProductDetails from "./components/ProductDetails";
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to Product Inquiry</h1>
      <Router>  
                <ProductList default/>
                <ProductForm path="/products/new"/>
                <EditProduct path="/products/:id/edit"/>
                <ProductDetails path="/products/:id"/>
                
      </Router>
                
      </header>
    </div>
  );
}

export default App;
