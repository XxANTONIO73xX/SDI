import React, { Component } from "react";
import axios from "axios";
import './LoginUser.css'
import { Link } from 'react-router-dom'
export default class LoginUser extends Component {
    state = {
        nickname: '',
        password: '',
    }
    getLogin = async e => {
        e.preventDefault();
        const res = await axios.post(process.env.REACT_APP_HOSTNAME+'/users/login', {
            nickname: this.state.nickname,
            password: this.state.password
        });
        if(res.data.goIn === 1){
            alert("inicio exitoso")
            localStorage.setItem("session", true);
            window.location.href = "/centrales"
        }else{
            alert("Usuario o contraseña incorrectos")
        }
    }

    onChangeNickname = (e) =>{
        this.setState({
            nickname: e.target.value
        })
    }
    onChangePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="title-login">
                    <h1>Transportes App</h1>
                    <img src='/transporteEstadosImg/bien.png' alt="logo"/>
                </div>
                <form className="container-login" onSubmit={this.getLogin}>
                    <div >
                        <h3 className="log">Iniciar Sesión</h3>
                    </div>
                    <div className="form-outline mb-4">
                        <input onChange={this.onChangeNickname} value={this.state.nickname} placeholder="e.g. Juna99" type="text" className="form-control" />
                        <label className="form-label">Nickname</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input onChange={this.onChangePassword} value={this.state.password} placeholder="******" type="password" className="form-control" />
                        <label className="form-label">Password</label>
                    </div>

                    <button type="submit" className="btn btn-primary mb-4">Sign in</button>

                    <div className="text-center">
                        <p>No tienes cuenta? <Link to="/resgistro">Registrate Aqui</Link></p>
                    </div>
                </form>
            </div>
        );
    }
}