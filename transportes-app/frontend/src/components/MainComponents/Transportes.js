import React, {Component} from "react";
export default class Transportes extends Component{
    state = {
        isLogged: localStorage.getItem("session")
    }
    render(){
        console.log(localStorage.getItem("session"));
        return(
            <div>
                <h1>Transportes</h1>
            </div>
        )
    }
}