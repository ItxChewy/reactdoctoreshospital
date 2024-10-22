import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import MenuHospitales from './MenuHospitales'
import Home from './Home'
import Doctores from './Doctores'
import DetalleDoctor from './DetalleDoctor'

export default class Router extends Component {
    render() {

        function DoctoresElement(){
            let {idhospital} = useParams();
            return <Doctores idhospital={idhospital}/>
        }
        function DoctorElemnt(){
            let {idhospital , iddoctor} = useParams();
            return <DetalleDoctor idhospital={idhospital} iddoctor={iddoctor}/>
        }

        return (
            <BrowserRouter>
                <MenuHospitales />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='doctores/:idhospital' element={<DoctoresElement/>}/>
                    {/* <Route path='doctores/:idhospital/:iddoctor' element={<DoctorElemnt/>}/> */}
                </Routes>
            </BrowserRouter>
        )
    }
}
