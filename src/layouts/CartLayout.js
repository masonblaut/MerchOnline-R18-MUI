import { Outlet, NavLink } from "react-router-dom";
import Cart from "../cart/Cart";
export default function CartLayout(){
    return(
        <div className="cart-layout">
            <Cart />

            <h2>CartLayout Displaying</h2>
            <p>LoremIpsum;</p>

            <nav>
                <NavLink to="checkout">Checkout</NavLink>
                <NavLink to="terms">Terms and Conditions</NavLink>
                <NavLink to="privacypolicy">Privacy Policy</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}