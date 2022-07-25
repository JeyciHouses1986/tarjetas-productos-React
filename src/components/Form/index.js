import Card from '../Card'

export default function Form () {
    return(
        <Card>
            <h2>Agregar producto</h2>
            <div className="row">
                <div className="col">
                    <label>Titulo del producto</label>
                    <br />
                    <input className="form-control" type="text" />
                    <br />
                    <label>Precio</label>
                    <br />
                    <input className="form-control" type="text" />
                    <br />
                    <label>Imagen</label>
                    <br />
                    <input className="form-control" type="file" />
                    <br />
                </div>
                <div className="col">
                    <label>Descripcion</label>
                    <br />
                    <textarea className="form-control cuadroTexto "></textarea>
                    <br />
                    <button className="btn btn-primary">Resetear</button>
                    <button className="btn btn-secondary">Guardar</button>
                </div>                
            </div>
        </Card>
    );
}