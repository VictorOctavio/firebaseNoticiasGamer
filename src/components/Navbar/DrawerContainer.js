import React from 'react'

//DRAWER CAJON
import {makeStyles, Drawer, Divider} from '@material-ui/core'

//LISTAS
import Lista from './Lista'


const useStyles = makeStyles(theme => ({
    drawer: {
        width: 280,
        flexShrink: 0
    },
    drawerPaper: {
        width: 280
    }
}))

const DrawerComponent = (props) => {

    const clases = useStyles()

    return (
       <Drawer
        variant={props.variant}
        className={clases.drawer}
        classes={{paper: clases.drawerPaper}}
        open={props.open}
        onClose={props.onClose}
        >
        <Divider/>

        <Lista
            onClose={props.onClose}
        />
            
        </Drawer>
        
    )
}

export default DrawerComponent
