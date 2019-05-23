import React from "react";
import {Link} from "@version/react-router-v3";

export class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                        <li>
                            <Link to={"/home"} activeStyle={{color: "red"}}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/user/" + 2} activeStyle={{color: "red"}}>User</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}