//FIREBASE 
import {db} from '../Firebase'

//Data Inicial
const dataInicial = {
    noticias: []
}

//TYPES
const GET_NOTICIAS = 'GET_NOTICIAS'


//REDUCER
export default function adminReducer(state = dataInicial, action){
    switch(action.type){
        case GET_NOTICIAS:
            return{...state, noticias: action.payload}
        default:
            return state
    }
}


//ACCIONES
    //GUARDAR
export const SaveNoticiaAccion = (data) => async(dispatch) => {
    try{

        const noticia = {
            title: data.title,
            subtitle: data.subtitle,
            description: data.description,
            category: data.category,
            plataforma: data.plataforma,
            photoURL: data.photoURL,
            info: data.info,
            minimos: data.minimos,
            recomendados: data.recomendados,
            fecha: Date.now()
        }

        await db.collection('noticias').add(noticia)

    }catch(err){
        console.log(err)
    }
}

    //OBETENER
export const GetNoticiasAction = () => async(dispatch) => {

    try{

        const data = await db.collection('noticias').orderBy('fecha').get()
        const arrayDataGet = data.docs.map(doc => ({id: doc.id, ...doc.data()}))

        dispatch({
            type: GET_NOTICIAS,
            payload: arrayDataGet
        })

    }catch(err){
        console.log(err)
    }
}


//ACTUALIZAR NOTICIA
export const UpdateAction = (data) => async(dispatch, getState) => {

    const {noticias} = getState().admin

    const noticiaEditada = {
        id: data.id,
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        category: data.category,
        plataforma: data.plataforma,
        photoURL: data.photoURL,
        info: data.info,
        minimos: data.minimos,
        recomendados: data.recomendados,
    }


    try{
        await db.collection('noticias').doc(data.id).update(noticiaEditada)
        const arrayEditado = noticias.map(item => item.id === data.id ? noticiaEditada : item)

        dispatch({
            type: GET_NOTICIAS,
            payload: arrayEditado
        })

    }catch(err){
        console.log(err)
    }
}


//ELIMINAR NOTICIA
export const deleteAction = (id) => async(dispatch, getState) => {

    const {noticias} = getState().admin

    try{
        await db.collection('noticias').doc(id).delete()
        const arrayFiltrado = noticias.filter(item => item.id !== id)
        dispatch({
            type: GET_NOTICIAS,
            payload: arrayFiltrado
        })

    }catch(err){
        console.log(err)
    }

}