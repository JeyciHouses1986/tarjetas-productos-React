import './tarjeta.css';

function Card (props) {



    return (
        <div className={`card-cmp ${ props.isProduct ? 'product-card' : ''  }`}>
            {props.children}
        </div>
    );
}

export default Card;