import React from 'react'
import './admin.css'

const Admin = (props) => {

    return (
        <div className="admin-container">

           <nav className="navbar navbar-expand-lg bg-primary">
                <div className="navbar-nav">
                    <button className="nav-item nav-link btn">PORTADA</button>
                    <button className="nav-item nav-link btn">ADD NOTICIA</button>
                    <button className="nav-item nav-link btn">EDITAR NOTOCIAS</button>
                </div>
            </nav>

            <div className="secciones">
                <div className="row">
                    <div className="col-md-8">
                        <h3>AGREGAR NOTICIA</h3>
                        {   
                            props.error === true && (
                                <div className="alert alert-danger text-center" role="alert">
                                    ERROR! CAMPO INCORRECTO
                                </div>
                            )
                        }
                        {
                            props.correcto === true && (
                                <div className="alert alert-success text-center" role="alert">
                                    SE AGREGO CORRECTAMENTE
                                </div>
                            )
                        }   
                        <form onSubmit={props.handleSumbit}>
                            <input type="text"
                                className="form-control"
                                placeholder="TITULO"
                                name="title"
                                onChange={props.getNoticia}
                                value={props.noticia.title}
                            />

                            <input type="text"
                                className="form-control my-2"
                                placeholder="SUBTITULO"
                                name="subtitle"
                                onChange={props.getNoticia}
                                value={props.noticia.subtitle}
                            />

                            <textarea type="text"
                                className="form-control my-2"
                                placeholder="DESCRIPCION"
                                name="description"
                                onChange={props.getNoticia}
                                value={props.noticia.description}
                                maxLength="140"
                            />
                            <select name="category" className="form-control" onChange={props.getNoticia} value={props.noticia.category}>
                                <option value="accion">ACCION</option>
                                <option value="aventura">AVENTURA</option>
                                <option value="deporte">DEPORTE</option>
                                <option value="terror">TERROR</option>
                            </select>

                            <select name="plataforma" className="form-control my-2" onChange={props.getNoticia}  value={props.noticia.plataforma}>
                                <option value="all">ALL</option>
                                <option value="pc">PC</option>
                                <option value="xbox">XBOX</option>
                                <option value="playstation">PLAYSTATION</option>
                                <option value="nintendo">NINTENDO</option>
                            </select>

                            <input type="photoURL"
                                className="form-control my-2"
                                placeholder="URL PHOTO"
                                name="photoURL"
                                onChange={props.getNoticia}
                                value={props.noticia.photoURL}
                            />

                            <textarea
                                className="form-control"
                                placeholder="TEXTO"
                                name="info"
                                onChange={props.getNoticia}
                                value={props.noticia.info}
                            />            
                            
                            <div className="col-md-12 d-flex mt-4">
                                <div className="requisitos-min col-md-6">
                                    <h6>Minimos</h6>
                                    <input name="sistema" className="form-control" placeholder="Sistema" type="text" onChange={props.getMinimos}/>
                                    <input name="procesador" className="form-control my-1" placeholder="Procesador" type="text" onChange={props.getMinimos}/>
                                    <input name="grafica" className="form-control my-1" placeholder="Grafica" type="text" onChange={props.getMinimos}/>
                                    <input name="espacio" className="form-control my-1" placeholder="Espacio Requerido" type="text" onChange={props.getMinimos}/>
                                    <input name="ram" className="form-control" placeholder="Ram" type="text" onChange={props.getMinimos} />
                                </div>

                                <div className="requisitos-rec col-md-6">
                                    <h6>Recomendados</h6>
                                    <input name="sistema" className="form-control" placeholder="Sistema" type="text" onChange={props.getRecomendados}/>
                                    <input name="procesador" className="form-control my-1" placeholder="Procesador" type="text" onChange={props.getRecomendados}/>
                                    <input name="grafica" className="form-control my-1" placeholder="Grafica" type="text" onChange={props.getRecomendados}/>
                                    <input name="espacio" className="form-control my-1" placeholder="Espacio Requerido" type="text" onChange={props.getRecomendados} />
                                    <input name="ram" className="form-control" placeholder="Ram" type="text" onChange={props.getRecomendados}/>
                                </div>
                            </div>
                            
                            {
                                props.modoEdit ? (
                                <button className="btn btn-warning btn-block my-2">EDITAR</button>

                                ):(
                                <button className="btn btn-success btn-block my-2">AGREGAR</button>
                                )
                            }

                        </form>
                    </div>
                </div>
                

            </div>

        </div>
    )
}

export default Admin
