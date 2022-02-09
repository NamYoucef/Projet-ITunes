import { Link } from 'react-router-dom';
import cart from '../assets/cart1.png';
import '../style/cart.css';

function Cart(){
    return(
        <div className="cart">
            <Link className='nav_link' to="/panier">
                <img src={cart} alt="cart"className="img_cart"/>
            </Link>
        </div>
    )

}
export default Cart;