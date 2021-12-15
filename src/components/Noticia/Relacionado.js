import React from 'react'
import './noticia.css'

import {useDispatch} from 'react-redux'
import {getNoticiaAction} from '../../redux/DataDuck'

const Relacionado = ({categoria, id}) => {

    const dispatch = useDispatch()

    const recomendado = JSON.parse(localStorage.getItem('noticias'))

    const handleNoticia = (item) => {
        dispatch(getNoticiaAction(item))
    }

    return (
        <div className="row recomendado">
            <div className="col-md-12">
                <h3>PODRIA INTERESARTE</h3>
            </div>

            <div className="col-md-12 recomendado-list">
                {
                recomendado.map(item => (
                    item.category === categoria && item.id !== id ? ( 
                        <div className="card col-12 col-md-6 col-lg-4" key={item.id}>
                            <img className="card-img-top" src={item.photoURL} alt="recomendado" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.subtitle}</p>
                                <a className="btn btn-primary btn-block" onClick={() => handleNoticia(item)}>ver más</a>
                            </div>
                        </div> 
                    ):(
                        null
                    )
                ))
                }
            </div>
        </div>
    )
}

export default Relacionado
