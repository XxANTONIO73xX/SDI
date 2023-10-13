import React, { Component } from "react";

export default class Contactos extends Component {
    render(){
        console.log(localStorage.getItem("isLogged"),
        localStorage.getItem("user_name"),
        localStorage.getItem("user_id"))
        return(
        <div>
        <h1>Contactos</h1>
        </div>
    )
    }
}