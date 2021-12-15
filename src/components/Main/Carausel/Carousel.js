import React from 'react'
import './carousel.css'

//REDUX
import {useDispatch, useSelector} from 'react-redux'
import {getPortadaAction, getNoticiaAction} from '../../../redux/DataDuck'

const carouselActive = 'https://firebasestorage.googleapis.com/v0/b/gamingpage.appspot.com/o/carousel%2Ffifa21.jpg?alt=media&token=0ca4f73a-5cdc-4d4d-9b1a-529db8e7914f'


const Carousel = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getPortadaAction())
    }, [dispatch])

    const portada = useSelector(store => store.data.portada)

    const handleNoticia = (item) => {
        dispatch(getNoticiaAction(item))
    }

    return (    
        <div className="row">

            <div className="col-12 col-lg-3 carousel-1" >
                {
                   portada.map(item => (
                    <div className="card my-1" key={item.id} onClick={() => handleNoticia(item)}>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p>{item.subtitle}</p>    
                        </div>
                    </div>
                   )) 
                }          
            </div>

            <div className="carousel-2 col-12 col-lg-9 py-1">
                <div id="carouselGame" className="carousel slide" data-ride="carousel">
                    
                    <ol className="carousel-indicators">
                        <li data-target="#carouselGame" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselGame" data-slide-to="1"></li>
                        <li data-target="#carouselGame" data-slide-to="2"></li>
                        <li data-target="#carouselGame" data-slide-to="3"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={carouselActive} className="d-block w-100" alt="img-carousel"/>
                        </div>
                        {
                            portada.map(item => (
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
    )
}

export default Carousel
