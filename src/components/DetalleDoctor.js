import React, { Component } from 'react'

export default class DetalleDoctor extends Component {
  render() {
    return (
      <div>
        <h1 style={{color:"red"}}>Detalle del Doctor</h1>
        <ul className="list-group">
            
             <li className="list-group-item list-group-item-danger">  
                Apellido: {this.props.doctor.apellido}
                
            </li>
            <li className="list-group-item list-group-item-danger">
                Especialidad : {this.props.doctor.especialidad}
            </li>
            <li className="list-group-item list-group-item-danger">
                Salario: {this.props.doctor.salario}
            </li>
            <li className="list-group-item list-group-item-danger">
                Id doctor: {this.props.doctor.idDoctor}
            </li> 
        </ul>
      </div>
    )
  }
}
