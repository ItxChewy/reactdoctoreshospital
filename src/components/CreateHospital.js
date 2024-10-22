import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import { Navigate } from 'react-router-dom';

export default class CreateHospital extends Component {
    
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();

    state = {
        mensaje : "",
        status: false
    }

    insertHospital = (e) =>{
        e.preventDefault();
        let request = "webresources/hospitales/post";
        let url = Global.urlHospitales + request;
        
        let id = parseInt(this.cajaId.current.value);
        let nombre = this.cajaNombre.current.value;
        let direccion = this.cajaDireccion.current.value;
        let telefono = this.cajaTelefono.current.value;
        let camas = parseInt(this.cajaCamas.current.value);
        
        let hospital = {
            idhospital :id,
            nombre: nombre,
            direccion:direccion,
            telefono:telefono,
            camas:camas
        }

        axios.post(url, hospital).then(response =>{
            this.setState({
                mensaje:"Hospital insertado: " + nombre,
                status: true
            })
        })
    }


  render() {
    return (
      <div>
        {
            this.state.status == true &&
            (
                <Navigate to="/hospitales"/>
            )
        }
        <h1>New Hospital</h1>
        <h2 style={{color:"blue"}}>{this.state.mensaje}</h2>
        <form>
            <label className="form-label">Id hospital:</label>
            <input className="form-control" ref={this.cajaId}></input>
            <label className="form-label">Nombre:</label>
            <input className="form-control" ref={this.cajaNombre}></input>
            <label className="form-label">Direccion:</label>
            <input className="form-control" ref={this.cajaDireccion}></input>
            <label className="form-label" >Telefono:</label>
            <input className="form-control" ref={this.cajaTelefono}></input>
            <label className="form-label">Camas:</label>
            <input className="form-control" ref={this.cajaCamas}></input>
            <hr></hr>
            <button onClick={this.insertHospital} className="btn btn-primary">Insertar</button>
        </form>
      </div>
    )
  }
}
