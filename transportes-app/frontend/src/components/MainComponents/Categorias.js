import axios from "axios";
import React, { Component } from "react";

export default class Categorias extends Component {
    state={
        name:'',
        categorias:[]
    }
    async componentDidMount(){
        this.getCategorias();
    }
    getCategorias = async () =>{
        const res = await axios.get(process.env.REACT_APP_HOSTNAME+"/categorias")
        this.setState({categorias: res.data})
    }
    onSubmit = async e => {
        e.preventDefault();
        await axios.post(process.env.REACT_APP_HOSTNAME+"/categorias", {
            name: this.state.name
        })
        this.setState({ name: '' });
        this.getCategorias();
    }
    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    deleteCategoria = async (id) => {
        await axios.delete(process.env.REACT_APP_HOSTNAME+"/categorias/" + id);
        this.getCategorias();
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Crea Una Categoria</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={this.onChangeName}
                                    value={this.state.name}
                                />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary">
                                    Guardars
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.categorias.map(categoria => (
                                <li className="list-group-item list-group-item-action" key={categoria._id} onDoubleClick={() => this.deleteCategoria(categoria._id)}>
                                    {categoria.name}
                                </li>)
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}