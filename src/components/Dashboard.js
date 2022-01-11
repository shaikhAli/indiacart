import React, { Component } from "react";
import './Dashboard.scss';
import Home from './Home';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

class Dashboard extends Component {

    // constructor(props)
    // {
    //     super(props)
    // }

    render() {
        return (
            <React.Fragment>

                <div className="app-container">
                    <nav
                        style={{
                            fontSize: "18px",
                            fontWeight: "700",
                            textAlign: "center"
                        }}
                    >
                        dashboard
                        {/* <Link to="/">Home</Link> |{" "} */}
                        {/* <Link to="/invoices">Invoices</Link> |{" "} */}
                        <Link to="/expenses">Expenses</Link>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}

export default Dashboard;