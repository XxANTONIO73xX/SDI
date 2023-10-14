import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

export default class SendMessage extends Component {
    state = {
        show: false,
    }
    HandleClose = () => this.setState({show: false });
    HandleShow = () => this.setState({show: true });
    render() {
        return (
            <div>
                <Button variant="success" onClick={this.HandleShow}>
                    WhatsApp
                </Button>
                <Modal show={this.state.show} onHide={this.HandleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Envia un Mensaje</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Aqui enviaras tu mensaje</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.HandleClose}>
                            Cancelar
                        </Button>
                        <Button variant="success" onClick={this.HandleClose}>
                            Enviar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}