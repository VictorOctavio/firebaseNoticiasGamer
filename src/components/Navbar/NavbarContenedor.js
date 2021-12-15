import React from 'react'

//COMPONENTS
import Navbar from './Navbar'
import DrawerContainer from './DrawerContainer'

//MUI
import {makeStyles, Hidden} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    }
}))

const NavbarContenedor = () => {

    const clases = useStyles()
    const [abrir, setAbrir] = React.useState(false)

    const abrirNavegacion = () => {
        setAbrir(!abrir)
    }

    return (
        <div className={clases.root}>
            <Navbar 
                abrirNavegacion={abrirNavegacion}
            />

            <Hidden>
                <DrawerContainer
                    variant="temporary"
                    open={abrir}
                    onClose={abrirNavegacion}
                />
            </Hidden>

           
            
        </div>
    )
}

export default NavbarContenedor
