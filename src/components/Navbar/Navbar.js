import React from 'react'
import './navbar.css'

//appBar
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
//Icons
import { Menu, Search } from '@material-ui/icons'
//ReactRouter
import {Link} from 'react-router-dom'

//REDUS
import {useDispatch} from 'react-redux'
import {getSearchAction} from '../../redux/DataDuck'

const Navbar = (props) => {

    const dispatch = useDispatch()
    const noticias = JSON.parse(localStorage.getItem('noticias'))

    const [search, setSearch] = React.useState(false)
    const [valSearch, setValSearch] = React.useState('')
    

    //ACTIVAR BUSCADOR
    const handleSearch = () => {
        setSearch(!search)
    }


    const getSearch = (e) => {
        setValSearch(e.target.value.toLowerCase())
    }

    //Capturar esos datos
    const handleBusqueda = () => {
        
       noticias.map(item => {

            let result = item.title.toLowerCase()

            if(result.indexOf(valSearch) !== -1){   

                dispatch(getSearchAction(item.title))
                return

            }
        })  
    }

    return (
            <AppBar>
                <div className="navegacion">
                <Toolbar className="navegacion-items">
                    <div className="listas-left">
                        <IconButton aria-label="menu" color="inherit" onClick={() => props.abrirNavegacion()}><Menu /></IconButton>
                        <Link to="/">
                            <Typography variant="h6" className="tecnologia">INFOGAME</Typography>
                        </Link>  
                    </div>
                                      
                    <div className="listas-right">

                        <div className="buscador">
                            {
                                search && (
                                <div>
                                    <div className="d-flex">
                                        <input type="search" className="form-control mb-0 mx-1" placeholder="Buscar:" onChange={getSearch} value={valSearch}/>    
                                        <button className="btn btn-info btn-sm" onClick={() => handleBusqueda()}>buscar</button>
                                    </div>   
                                </div>   
                                )
                            }
                            <IconButton aria-label="search" color="inherit" onClick={handleSearch} className="icon"><Search/></IconButton>
                        </div>
                    </div>
                </Toolbar>
                </div>
            </AppBar>
    )
}

export default Navbar
