import React, { useEffect } from 'react'
import './noticia.css'

import { useDispatch, useSelector } from 'react-redux'
import { getNoticia2Action } from '../../redux/DataDuck'

//component
import Relacionado from './Relacionado'
import Loading from '../Loading/Loading'

const Noticia = () => {

    const dispatch = useDispatch()
    const noticia2 = useSelector(store => store.data.noticia)
    const relacionado = useSelector(store => store.data.relacionado)

    useEffect(() => {
        dispatch(getNoticia2Action())
    }, [dispatch])


    return (
        noticia2 ? (
            <>
                <div className="row-img">
                    <div className="noticia-img">
                        <img src={noticia2.photoURL} alt="noticia" />
                    </div>
                </div>

                <div className="noticia-container">

                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="col-md-12 titles">
                                <h2>{noticia2.title}</h2>
                                <h6 className="subtitle">{noticia2.subtitle}</h6>
                            </div>

                            <div className="col-md-12 noticia-info">

                                <div className="description">
                                    <h5>Descripción</h5>
                                    <p>{noticia2.description}</p>
                                </div>

                                <div className="texto">
                                    <h5>Sobre el Juego</h5>
                                    <p>{noticia2.info}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 tabla">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Requisitos</th>
                                        <th scope="col">Minimos</th>
                                        <th scope="col">Recomendados</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Sistema</td>
                                        <td>{noticia2.minimos.sistema}</td>
                                        <td>{noticia2.recomendados.sistema}</td>
                                    </tr>

                                    <tr>
                                        <td>Procesador</td>
                                        <td>{noticia2.minimos.procesador}</td>
                                        <td>{noticia2.recomendados.procesador}</td>
                                    </tr>

                                    <tr>
                                        <td>Grafica</td>
                                        <td>{noticia2.minimos.grafica}</td>
                                        <td>{noticia2.recomendados.grafica}</td>
                                    </tr>

                                    <tr>
                                        <td>Ram</td>
                                        <td>{noticia2.minimos.ram}</td>
                                        <td>{noticia2.recomendados.ram}</td>
                                    </tr>

                                    <tr>
                                        <td>Espacio</td>
                                        <td>{noticia2.minimos.espacio}</td>
                                        <td>{noticia2.recomendados.espacio}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>


                    </div>


                    <Relacionado
                        relacionado={relacionado}
                        id={noticia2.id}
                    />

                </div>
            </>
        ):(
            <div style={{minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Loading />
            </div>
        )
    )
}

export default Noticia
