import React from 'react'
import './noticias.css'

//REDUX
import {useSelector, useDispatch} from 'react-redux'
import {getNoticiaAction, getDestacadosAction, nextPageAction} from '../../../redux/DataDuck'

//MOMENT
import moment from 'moment'
import 'moment/locale/es' // Pasar a español

//Components
import Asisde from '../Aside/Asisde'

const Noticias = () => {

     //states botones paginación
     const [ultimo, setUltimo] = React.useState(null)
     const [desactivar, setDesactivar] = React.useState(false)
     
    const dispatch = useDispatch()
    const destacados = useSelector(store => store.data.destacados)


    const handleNoticia = (item) => {
        dispatch(getNoticiaAction(item))
    }

    React.useEffect(() => {
        dispatch(getDestacadosAction(setUltimo))
    }, [dispatch])


    const handleNext = async() => {
        dispatch(nextPageAction(ultimo, setUltimo, setDesactivar))
    }  

    document.addEventListener("DOMContentLoaded", function() {

        var largoNoticias = document.querySelector('.noticias').clientWidth
        return largoNoticias
    });
    
  

    return (
        <div className="noticias-container"> 

            <div className="row row-noticias">
                <div className="col-12 col-lg-9 noticias">
                    
                    <div className="col-md-12">
                        <h3>NUEVOS LANZAMIENTOS</h3>
                    </div>
                    
                    <div className="card-deck">
                        {
                        destacados.map(item => (
                        <div className="col-sm-12 col-lg-6" key={item.id}>
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
                        ))
                        }  
                    </div>
                    
                    <div className="col-md-12 text-center mt-5 mb-5">
                        <button disabled={desactivar} className="btn btn-dark btn-md mx-1" onClick={() => handleNext()}>Siguiente</button>
                    </div>
                    
                
                </div>

               
                <Asisde/>
               
            </div>

        </div>
    )
}

export default Noticias
