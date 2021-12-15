import React from 'react'
import './allNoticias.css'

//REDUX
import {useDispatch, useSelector} from 'react-redux'
import {getNoticiaAction} from '../../redux/DataDuck'

//MOMENT
import moment from 'moment'
import 'moment/locale/es' // Pasar a español

const carouselActive = 'https://firebasestorage.googleapis.com/v0/b/gamingpage.appspot.com/o/carousel%2Ffifa21.jpg?alt=media&token=0ca4f73a-5cdc-4d4d-9b1a-529db8e7914f'

const AllNoticias = () => {

    const dispatch = useDispatch()

    const noticias = JSON.parse(localStorage.getItem('noticias'))

    const categoriaActual = JSON.parse(localStorage.getItem('categoria'))
    const plataformaActual = JSON.parse(localStorage.getItem('plataforma'))
    const Search = JSON.parse(localStorage.getItem('search'))


    const handleNoticia = (item) => {
        dispatch(getNoticiaAction(item))
    }

    return (
        <>
        <div className="row carouselContainer">
            <div className="col-md-12">
                <div id="carouselGame" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={carouselActive} className="d-block w-100" alt="img-carousel"/>
                        </div>
                        {
                            noticias.map(item => (
                                <div className="carousel-item" key={item.id}>
                                    <img src={item.photoURL} className="d-block w-100" alt="img-carousel"/>
                                </div>
                            ))
                        }
                    </div>

                    <a className="carousel-control-prev" href="#carouselGame" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselGame" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    
                </div>
            </div>
        </div>

        <div className="row">
            <div className="noticiasContainer">
                <div className="col-md-12">
                    <h2>ULTIMOS LANZAMIENTOS</h2>
                </div>

                <div className="card-deck">
                        {
                        noticias.map(item => (
                        item.category === categoriaActual || item.plataforma === plataformaActual || item.title === Search ? (
                        <div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
                            <div className="card">
                                <img className="card-img-top" src={item.photoURL} alt="Card image cap" onClick={() => handleNoticia(item)}/>
                                <div className="card-body">
                                    <h5 className="card-title mb-2">{item.title}</h5>
                                    <h6 className="card-subtitle">{item.category}</h6>
                                    <p className="card-text description mb-0">{item.description}</p>
                                    <button className="btn" onClick={() => handleNoticia(item)}>ver más</button>
                                    <p className="card-text"><small className="text-muted">{moment(item.fecha).format('Do MMMM YYYY')}</small></p>
                                </div>
                            </div>
                        </div>
                        ): null
                        ))
                        }  
                    </div>        
            </div>
        </div>
        </>
    )
}

export default AllNoticias
