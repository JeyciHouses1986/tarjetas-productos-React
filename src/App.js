import './App.css';
//import Card from './components/Card';
import Form from './components/Form';
import Product from './components/Producto';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Form />
          <br />
          <Product />

        </div>
      </div>
    </div>
  );
}

export default App;
