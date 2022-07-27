import React from 'react'

//Conponents
import Noticia from '../components/Noticia/Noticia'
import Footer from '../components/Footer/Footer'

const NoticiaPage = () => {
    return (
        <div style={{minHeight: '100vh'}}>
            <Noticia/>

            <Footer/>
        </div>
    )
}

export default NoticiaPage
