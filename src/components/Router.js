import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import MenuHospitales from './MenuHospitales'
import Home from './Home'
import Doctores from './Doctores'
import DetalleDoctor from './DetalleDoctor'
import CreateHospital from './CreateHospital'
import Hospitales from './Hospitales'

export default class Router extends Component {
    render() {

        function DoctoresElement(){
            let {idhospital} = useParams();
            return <Doctores idhospital={idhospital}/>
        }
        

        return (
            <BrowserRouter>
                <MenuHospitales />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='doctores/:idhospital' element={<DoctoresElement/>}/>
                    <Route path='/create' element={<CreateHospital/>}/>
                    <Route path='/hospitales' element={<Hospitales/>}/>
                    
                </Routes>
            </BrowserRouter>
        )
    }
}
