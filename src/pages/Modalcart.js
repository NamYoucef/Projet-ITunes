import App from "./App";
import '../style/Modalcart.css'
import { Link } from "react-router-dom";
function Modalcart(){

    return (
        <div className="Model-container">

            <div className="cart-div">
                <h2>Votre panier</h2>
               
                <div className="link-return">
                <Link to="/">Retour</Link>
            </div>
            </div>
        </div>
    )


}
export default Modalcart