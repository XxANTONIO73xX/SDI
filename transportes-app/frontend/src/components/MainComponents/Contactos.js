import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import axios from 'axios'
import CreateContact from "./modals/CreateContact";
import SendMessage from "./modals/sendMessage";
import { Button } from 'react-bootstrap';

export default class Contactos extends Component {
    state = {
        contactos: []
    }
    async componentDidMount() {
        const res = await axios.get(process.env.REACT_APP_HOSTNAME + "/contactos/user/" + localStorage.getItem("user_id"));
        this.setState({ contactos: res.data })
    }

    eliminarContacto = async(id) =>{
        await axios.delete(process.env.REACT_APP_HOSTNAME+"/contactos/" + id);
        window.location.reload();
    }
    
    render() {
        return (
            <div className="container">
                <h1>Contactos</h1>
                <CreateContact/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Email</th>
                            <th>Categoria</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contactos.map(contacto =>
                                <tr key={contacto._id}>
                                    <td>{contacto.nombre}</td>
                                    <td>{contacto.apellidos}</td>
                                    <td>{contacto.email}</td>
                                    <td>{contacto.categoria}</td>
                                    <td><SendMessage contacto={contacto}/> <CreateContact contacto={contacto}/>
                                    <Button onClick={() => this.eliminarContacto(contacto._id)} className="btn-danger">Eliminar</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}