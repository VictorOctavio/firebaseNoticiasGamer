import React from 'react'

//REDUX
import {useDispatch} from 'react-redux'
import {SaveNoticiaAccion, UpdateAction} from '../../redux/AdminDuck'

//COMPONENTS
import AdminList from './AdminList'
import Admin from './Admin'


const AdminContainer = () => {

    const dispatch = useDispatch()

    const [noticia, setNoticia] = React.useState({
        title: '',
        subtitle: '',
        description: '',
        category: 'accion',
        plataforma: 'all',
        photoURL: '',
        info: '',
        minimos: {sistema: '', procesador: '', grafica: '', espacio: '', ram: ''},
        recomendados: {sistema: '', procesador: '', grafica: '', espacio: '', ram: ''}
    })
    
    const [error, setError] = React.useState(false)
    const [correcto, setCorrecto] = React.useState(false)
    const [modoEdit, setModoEdit] = React.useState(false)


    //OBTENER DATA
    const getNoticia = e => {
        setNoticia({
            ...noticia,
            [e.target.name]: e.target.value
        })
    }

    //ObtnerRequisitosMinitmos
    const getMinimos = (e) => {
        setNoticia({
            ...noticia,
            minimos: {...noticia.minimos, [e.target.name]: e.target.value}
        })
    }
    
    //ObtnerRequisitosRecomendados
    const getRecomendados = (e) => {
        setNoticia({
            ...noticia,
            recomendados: {...noticia.recomendados, [e.target.name]: e.target.value}
        })
    }

    //SUBMIT
    const handleSumbit = (e) => {
        e.preventDefault()

        if(!noticia.title.trim() || !noticia.description.trim() || !noticia.photoURL.trim() || !noticia.info.trim()){
            console.log('Campos Obligatorios')

            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
            return

        }

        if(modoEdit){
            dispatch(UpdateAction(noticia))
            setModoEdit(false)
        }else{
            dispatch(SaveNoticiaAccion(noticia))
        }

        setNoticia({
            title: '',
            subtitle: '',
            description: '',
            category: 'accion',
            plataforma: 'all',
            photoURL: '',
            info: '',
            minimos: {sistema: '', procesador: '', grafica: '', espacio: '', ram: ''},
            recomendados: {sistema: '', procesador: '', grafica: '', espacio: '', ram: ''}
        })

        setCorrecto(true)
        setTimeout(() => {
            setCorrecto(false)
        }, 3000)
        
    }


    return (
        <>
            <Admin 
                noticia={noticia}
                getNoticia={getNoticia}
                getMinimos={getMinimos}
                getRecomendados={getRecomendados}
                handleSumbit={handleSumbit}
                error={error}
                correcto={correcto}
                modoEdit={modoEdit}
            />

            <AdminList 
                    setModoEdit={setModoEdit}
                    setNoticia={setNoticia}
            />
        </>
         
    )
}

export default AdminContainer
