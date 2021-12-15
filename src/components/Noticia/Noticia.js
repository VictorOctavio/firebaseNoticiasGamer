import React from 'react'
import './noticia.css'

//component
import Relacionado from './Relacionado'


const Noticia = () => {

    const noticia = JSON.parse(localStorage.getItem('noticia'))
    const ficha_tecnica = ["Sistema", "Procesador", "Gráfica", "Ram", "Disco Duro"]

    return (
        <>
        <div className="row-img">
            <div className="noticia-img">
                 <img src={noticia.photoURL} alt="noticia"/>
            </div>
        </div>

        <div className="noticia-container">

            <div className="row">                
                <div className="col-12 col-lg-8"> 
                    <div className="col-md-12 titles">
                        <h2>{noticia.title}</h2>
                        <h6 className="subtitle">{noticia.subtitle}</h6>
                    </div>

                    <div className="col-md-12 noticia-info">

                        <div className="description">
                            <h5>Descripción</h5>
                            <p>{noticia.description}</p>
                        </div>

                        <div className="texto">
                            <h5>Sobre el Juego</h5>
                            <p>{noticia.info}</p>
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
                             <td>{noticia.minimos.sistema}</td>
                             <td>{noticia.recomendados.sistema}</td>
                         </tr>

                         <tr>
                             <td>Procesador</td>
                             <td>{noticia.minimos.procesador}</td>
                             <td>{noticia.recomendados.procesador}</td>
                         </tr>

                         <tr>
                             <td>Grafica</td>
                             <td>{noticia.minimos.grafica}</td>
                             <td>{noticia.recomendados.grafica}</td>
                         </tr>

                         <tr>
                             <td>Ram</td>
                             <td>{noticia.minimos.ram}</td>
                             <td>{noticia.recomendados.ram}</td>
                         </tr>

                         <tr>
                             <td>Espacio</td>
                             <td>{noticia.minimos.espacio}</td>
                             <td>{noticia.recomendados.espacio}</td>
                         </tr>
                    </tbody>

                    </table>
                </div>


            </div>

            
            <Relacionado
                categoria={noticia.category}
                id={noticia.id}
            />
            
        </div>
        </>
    )
}

export default Noticia
