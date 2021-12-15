import React from 'react'
import './footer.css'

import {Instagram, Facebook, Twitter, YouTube, Room, Email} from '@material-ui/icons'
import { Button } from '@material-ui/core'

const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <div className="row">

                    <div className="col-md-12 redes">
                        <Button className="btn mx-1"><Instagram/></Button>
                        <Button className="btn mx-1"><Facebook/></Button>
                        <Button className="btn mx-1"><Twitter/></Button>
                        <Button className="btn mx-1"><YouTube/></Button>
                    </div>

                    <div className="col-md-12 contacto">
                        <h3>CONTACTO</h3>
                        <div className="contacto-items">
                            <div className="ubicacion">
                                <Button  color="inherit" disabled><Room/></Button>
                                <h6> Ciudad de Corrientes, Argentina</h6>
                            </div>

                            <div className="mail">
                                <Button color="inherit" disabled><Email/></Button>
                                <h6>Correo@Correo.com</h6>
                            </div>
                        </div>      
                    </div>

                    <div className="col-md-12 derechos">
                        <p className="mb-0">Copyright © Todos los derechos reservados. GvOprogrammer</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
