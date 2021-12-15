import React from 'react'
//REACT ROUTER DOM
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

//COMPONENTS
import NavbarContenedor from '../components/Navbar/NavbarContenedor'
import Main from './Main'
import AdminContainer from '../components/Admin/AdminContainer'
import NoticiaPage from './NoticiaPage'
import Noticias from '../pages/Noticias'

const ContenedorPrincipal = () => {
    return (
       
            <Router>
                <NavbarContenedor/>
                <Switch>
                    <Route path="/" exact component={Main}/>

                    <Route path="/admin" exact component={AdminContainer}/>

                    <Route path={`/noticias/:id`} exact component={Noticias}/>

                    <Route path={`/noticia/:id`} exact component={NoticiaPage}/>
                </Switch>
            </Router>
        
    )
}

export default ContenedorPrincipal
