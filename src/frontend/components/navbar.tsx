import * as React from "react";
import {Link} from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <Link to="/" className="nav-link">
                        Nasa and aliens
                    </Link>
                </li>
                <li>
                    <Link to="/anomaly" className="nav-link">
                        Anomalies IRL
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
