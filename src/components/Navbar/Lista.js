import React from 'react'

//LISTAS 
import {List, ListItem, ListItemIcon, ListItemText, Collapse ,Divider, makeStyles} from '@material-ui/core'

//ICONS
import {LabelImportant, ExpandMore, ExpandLess, Category, Gamepad, SportsEsports} from '@material-ui/icons'

//WITCHROUTER
import {withRouter} from 'react-router-dom'

import {useDispatch} from 'react-redux'
import {getCategoriaAction, getPlataformaAction} from '../../redux/DataDuck'

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(4)
    }
}))

const Lista = (props) => {

    const dispatch = useDispatch()

    const clases = useStyles()

    const [row, setRow] = React.useState(false)

    const [plataforma, setPlataforma] = React.useState(false)

    
    const categorias = ["accion", "aventura", "deporte", "terror"]
    const plataformas = ["all", "pc", "playstation", "xbox", "nintendo"]

    const handleClickCategoria = () => {
        setRow(!row)
    }

    const handleClickPlataforma = () => {
        setPlataforma(!plataforma)
    }

    const handleMain = () => {
        props.onClose()
        props.history.push('/')
    }

    const handleNav = (item) => {
        dispatch(getCategoriaAction(item))
    }

    const handleNavPlataforma = (item) => {
        dispatch(getPlataformaAction(item))
    }

    return (
        <div>
            <List component='nav'>
                <ListItem onClick={handleMain} className="redirect-main"> 
                    <ListItemIcon><SportsEsports/></ListItemIcon>
                    <ListItemText primary="GAMEINFO" />
                </ListItem>

                <ListItem button onClick={handleClickCategoria}>
                    <ListItemIcon><Category/></ListItemIcon>
                    <ListItemText primary="CATEGORIA" />
                    {row ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>

                {
                    categorias.map(item => (
                        <Collapse in={row} timeout="auto" unmountOnExit key={item}>
                            <List component="div" disablePadding>
                                <ListItem button className={clases.nested}>
                                    <ListItemIcon><LabelImportant /></ListItemIcon>
                                    <ListItemText primary={item} onClick={() => handleNav(item)}/>
                                </ListItem>
                            </List>
                        </Collapse>
                    ))
                }

                <ListItem button onClick={handleClickPlataforma}>
                    <ListItemIcon><Gamepad/></ListItemIcon>
                    <ListItemText primary="PLATAFORMAS" />
                    {plataforma ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                
                {
                    plataformas.map(item => (
                        <Collapse in={plataforma} timeout="auto" unmountOnExit key={item}>
                            <List component="div" disablePadding>
                                <ListItem button className={clases.nested}>
                                    <ListItemIcon><LabelImportant /></ListItemIcon>
                                    <ListItemText primary={item} onClick={() => handleNavPlataforma(item)}/>
                                </ListItem>
                            </List>
                        </Collapse>
                    ))
                }
                
                

                <Divider/>

            </List>
        </div>
    )
}

export default withRouter(Lista)
