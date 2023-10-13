import React, { Component } from "react";
import { Link, Outlet } from 'react-router-dom'
import './Navigator.css'
export default class Navigator extends Component {
    makeFalse = () =>{
        localStorage.setItem("session", false)
        window.location.href = "/"
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/centrales">
                            <img className="logo" src='/transporteEstadosImg/bien.png' alt="logo" />
                            Transportes App
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/transportes">Transportes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/centrales">Centrales</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={this.makeFalse}>Cerrar sesión</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet/>
            </div>
        )
    }
}