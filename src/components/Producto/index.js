import './product.css'
import Card from '../Card';


const comprar = () => {
    console.log("Estoy comprando")
}

export default function Product  () {
    return (
        <Card isProduct={true}>
        <div className="product-cmp row">
            <div className="col-3">
                <img src="http://fpoimg.com/300x250?text=Preview" />
            </div>          
            <div className="col content">
                <h3>Este es el titulo del producto</h3>
                <h4>$1000</h4>
                <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                </p>
                <button className="btn btn-secondary">Guardar</button>
                <button className="btn btn-primary" onClick={comprar}>Comprar</button>                
            </div>          
        </div>
        </Card>
    );
}