import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import DetalleDoctor from './DetalleDoctor'

export default class Doctores extends Component {
    state = {
        doctores: [],
        doctorSeleccionado:null
    }

    loadDoctores = () => {
        let request="api/doctores/doctoreshospital/" + this.props.idhospital
        axios.get(Global.urlDoctores + request).then(response =>{
            this.setState({
                doctores:response.data,
                doctorSeleccionado:null
            })
        })
    }

    mostrarDetalle = (doctor) =>{
        this.setState({
            doctorSeleccionado:doctor
        })
    }
    
    componentDidMount = () => {
        this.loadDoctores();
    }

    componentDidUpdate = (oldProps) =>{
        if(this.props.idhospital != oldProps.idhospital){
            this.loadDoctores();
        }
    }

    render() {
        return (
            <div>
                <h2>Doctores del hospital:
                    {this.props.idhospital}
                </h2>
                <table border={"1px"} className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Especialidad</th>
                            <th>Salario</th>
                            <th>Id Hospital</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctores.map((doctor,index) =>{
                                return(
                                    <tr key={index}>
                                        <td>{doctor.apellido}</td>
                                        <td>{doctor.especialidad}</td>
                                        <td>{doctor.salario}</td>
                                        <td>{doctor.idHospital}</td>
                                        <td>
                                            <button onClick={() => this.mostrarDetalle(doctor)} className="btn btn-info">Detalle</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                {
                    this.state.doctorSeleccionado &&
                    (
                        <DetalleDoctor doctor={this.state.doctorSeleccionado}/>
                    )
                }
            </div>
        )
    }
}
