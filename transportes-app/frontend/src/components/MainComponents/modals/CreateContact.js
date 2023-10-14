import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import axios from 'axios';

export default class CreateContact extends Component {
    state = {
        show: false,
        title: 'Agrega Un Contacto',
        btnLabel: 'Agregar Contacto',
        contacto: {
            nombre: '',
            apellidos: '', 
            telefono: '',
            categoria:''
        },
        user_id: localStorage.getItem("user_id"),
        categorias: []
    }
    async componentDidMount(){
        const res = await axios.get(process.env.REACT_APP_HOSTNAME+"/categorias");
        this.setState({categorias: res.data, contacto:{categoria: res.data[0].name}})
        const {contacto} = this.props
        if(contacto){
            this.setState({
                title: 'Modificar Contacto ' + contacto.nombre + ' ' + contacto.apellidos,
                btnLabel: "Editar",
                contacto: {
                    nombre: contacto.nombre,
                    apellidos: contacto.apellidos,
                    telefono: contacto.telefono,
                    categoria: contacto.categoria
                },
            })
        }
    }

    onInputChange = (e) => {
        const {name, value} = e.target;
        this.setState((prevState)=>({
            contacto:{
                ...prevState.contacto,
                [name]: value
            }
        }))
    }
    onSubmit = async (e)=>{
        e.preventDefault();
        const {contacto} = this.props
        const newContacto ={
            nombre: this.state.contacto.nombre,
            apellidos: this.state.contacto.apellidos,
            telefono: this.state.contacto.telefono,
            categoria: this.state.contacto.categoria
        }
        if(contacto){
            // esta editando
            console.log(process.env.REACT_APP_HOSTNAME+"/contactos/"+contacto._id, newContacto)
            const res = await axios.put(process.env.REACT_APP_HOSTNAME+"/contactos/"+contacto._id, newContacto)
            console.log(res)
        }else{
            // esta guardando
            newContacto.idUsuario = this.state.user_id
            console.log(process.env.REACT_APP_HOSTNAME+"/contactos",newContacto)
            const res = await axios.post(process.env.REACT_APP_HOSTNAME+"/contactos",newContacto)
            console.log(res)
        }
        window.location.reload();
    }
    HandleClose = () => this.setState({ show: false });
    HandleShow = () => this.setState({ show: true });
    render() {
        return (
            <div>
                <Button className=" m-2" variant="primary" onClick={this.HandleShow}>
                    {this.state.btnLabel}
                </Button>
                <Modal show={this.state.show} onHide={this.HandleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.title}</Modal.Title>
                    </Modal.Header>
                    <form>
                        <Modal.Body>
                        <div className="form-group mb-2">
                            <label className="mb-2">Nombre</label>
                            <input type="text" className="form-control" placeholder="Juan" required name="nombre"
                                onChange={this.onInputChange} value={this.state.contacto.nombre}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-2">Apellidos</label>
                            <input type="text" className="form-control" placeholder="Navarro" required name="apellidos"
                                onChange={this.onInputChange} value={this.state.contacto.apellidos}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-2">Telefono</label>
                            <input type="text" className="form-control" placeholder="+526221018849" required name="telefono"
                                onChange={this.onInputChange} value={this.state.contacto.telefono}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="mb-2">Categoria</label>
                            <select className="form-control" name="categoria" onChange={this.onInputChange}
                            value={this.state.contacto.categoria}>
                                {
                                    this.state.categorias.map(categoria =>
                                        <option key={categoria._id} value={categoria.name}>
                                            {categoria.name}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.HandleClose}>
                                Cancelar
                            </Button>
                            <Button variant="success" onClick={this.onSubmit}>
                                Guardar
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        )
    }
}