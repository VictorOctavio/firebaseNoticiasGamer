import React from 'react'
import './noticia.css'

const Relacionado = ({id, relacionado}) => {

    const handleNoticia = (item) => {
        window.location.href = (`/noticia/${item.id}`)
    }

    return (
        <div className="row recomendado">
            <div className="col-md-12">
                <h3>PODRIA INTERESARTE</h3>
            </div>

            <div className="col-md-12 recomendado-list">
                {
                relacionado.map(item => (
                    item.id !== id ? ( 
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
