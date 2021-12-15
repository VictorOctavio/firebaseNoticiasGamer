import React from 'react'
import './admin.css'

//redux
import {useDispatch, useSelector} from 'react-redux'
import {GetNoticiasAction, deleteAction} from '../../redux/AdminDuck'

const AdminList = (props) => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(GetNoticiasAction())
    }, [dispatch])

    const noticias = useSelector(store => store.admin.noticias)


    //EDITAR TAREA
    const handleEdit = (item) => {

        props.setModoEdit(true)

        props.setNoticia({
            id: item.id,
            title: item.title,
            subtitle: item.subtitle,
            description: item.description,
            category: item.category,
            plataforma: item.plataforma,
            photoURL: item.photoURL,
            info: item.info
        })

    }

    //BORRAR NOTICIA
    const handleDelete = (item) => {
        dispatch(deleteAction(item.id))
    }

    return (
        <div className="listaNoticias">
            <h3>LISTA DE NOTICIAS</h3>
            <div className="list-group">
                {
                    noticias.map(item => (
                    <li className="list-group-item list-group-item-action list-group-item-secondary" key={item.id}>
                        <div className="info">
                            <h6 className="text-info mb-0">{item.title}</h6>
                        </div>
                        <div className="botones">
                            <button className="btn btn-md btn-danger mx-1" onClick={() => handleDelete(item)}>Eliminar</button>
                            <button className="btn btn-md btn-warning mx-1" onClick={() => handleEdit(item)}>Editar</button>
                        </div>
                    </li> 
                    ))
                }
            </div>
        </div>
    )
}

export default AdminList
