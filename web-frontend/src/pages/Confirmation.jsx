import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import './Confirmation.css';

function Confirmation() {
    const { user } = useAuth();

    return ( 
        <div className="confirmation">
            <div className="confirmation-content">
                <h2>Thank You For Your Order!</h2>

                <p>
                    Your order has been successfully placed and is now being processed.
                </p>

                {user?.email && (
                    <p>
                        A confirmation email has been sent to <strong>{user.email}</strong>.
                    </p>
                )}

                <p>
                    We appreciate you choosing FORMA and hope you enjoy your new Pilates essentials.
                </p>

                <Link to="/">
                    <button>Continue Shopping</button>
                </Link>
            </div>
        </div> );
}

export default Confirmation;