//FIREBASE 
import {db} from '../Firebase'

//Data Inicial
const dataInicial = {
    noticias: [],
    destacados: [],
    portada: [],
    noticia: null,
    relacionado: null
}


//TYPES
const GET_NOTICIAS = 'GET_NOTICIAS'
const GET_NOTICIAS_DESTACADAS = 'GET_NOTICIAS_DESTACADAS'
const GET_NOTICIAS_PORTADA = 'GET_NOTICIAS_PORTADA'
const GET_NOTICIA = 'GET_NOTICIA'


//REDUCER
export default function dataReducer(state = dataInicial, action){
    switch(action.type){
        case GET_NOTICIAS:
            return {...state, noticias: action.payload}

        case GET_NOTICIAS_DESTACADAS:
            return {...state, destacados: action.payload}

        case GET_NOTICIAS_PORTADA:
            return {...state, portada: action.payload}

        case GET_NOTICIA:
            return {...state, noticia: action.payload.juego, relacionado: action.payload.relacionado}

        default:
            return state
    }
}


//ACCIONES




    //OBTENER NOTICIAS
export const getNoticiasAction = () => async(dispatch) => {
    try{
        
        if(localStorage.getItem('noticias')){
            dispatch({
                type: GET_NOTICIAS,
                payload: JSON.parse(localStorage.getItem('noticias'))
            })
        }
        
        const data = await db.collection('noticias')
        .orderBy('fecha', "desc")
        .get()

        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))

        localStorage.setItem('noticias', JSON.stringify(arrayData))

        dispatch({
            type: GET_NOTICIAS,
            payload: arrayData
        })

    }catch(err){
        console.log(err)
    }
}    




    //OBTENER NOTICIAS DESTACADAS
export const getDestacadosAction = (setUltimo) => async(dispatch) => {

    try{
        

        const data = await db.collection('noticias')
        .limit(6)
        .orderBy('fecha', "desc")
        .get()

        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))

        setUltimo(data.docs[data.docs.length - 1])

        dispatch({
            type: GET_NOTICIAS_DESTACADAS,
            payload: arrayData
        })


    }catch(err){
        console.log(err)
    }
}






//OBTENER PORTADA
export const getPortadaAction = () => async(dispatch) => {
    try{
        
        if(localStorage.getItem('portada')){
            dispatch({
                type: GET_NOTICIAS_PORTADA,
                payload: JSON.parse(localStorage.getItem('portada'))
            })
            return
        }

        const data = await db.collection('noticias')
        .limit(3)
        .orderBy('fecha', "desc")
        .get()

        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        
        localStorage.setItem('portada', JSON.stringify(arrayData))
        
        dispatch({
            type: GET_NOTICIAS_PORTADA,
            payload: arrayData
        })

    }catch(err){
        console.log(err)
    }
}

//OBTENER NOTICIA
export const getNoticia2Action = (data) => async(dispatch) => {
    
    try{
       
        const id = window.location.pathname.split('/')[2]
        const data = await db.collection('noticias').where('id', '==', id).get()
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))

        const dataRelacionados = await db.collection('noticias').where('category', '==', arrayData[0].category).get()
        const arrayDataRelacionados = dataRelacionados.docs.map(doc => ({id: doc.id, ...doc.data()}))
        

        dispatch({
            type: GET_NOTICIA,
            payload: {juego: arrayData[0], relacionado: arrayDataRelacionados}
        })

    }catch(err){
        console.log(err)
    }

}



//NEXT PAGE USER
export const nextPageAction = (ultimo, setUltimo, setDesactivar) => async(dispatch) => {

    try{

        const data = await db.collection('noticias')
        .limit(6)
        .orderBy('fecha', "desc")
        .startAfter(ultimo)
        .get()

        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))

        dispatch({
            type: GET_NOTICIAS_DESTACADAS,
            payload: arrayData
        })

        setUltimo(data.docs[data.docs.length - 1])
        
       const query = await db.collection('noticias')
        .limit(6)
        .orderBy('fecha', "desc")
        .startAfter(data.docs[data.docs.length - 1])
        .get()
        if(query.empty){
            setDesactivar(true)
        }else{
            setDesactivar(false)
        } 

    }catch(err){
        console.log(err)
    }
} 





//SUBSCRIPTCION USER
export const subAction = (email, setSub) => async(dispatch) => {
    try{

        await db.collection('subs').add(email)
        
        localStorage.setItem('sub', JSON.stringify(email))

        setSub(true)
        
    }catch(err){
        console.log(err)
    }
} 




//NAV ITEM REDIRECT
export const getCategoriaAction = (data) => () => {

    if(localStorage.getItem('plataforma') || localStorage.getItem('search')){

        localStorage.removeItem('plataforma')

        localStorage.removeItem('search')

        localStorage.setItem('categoria', JSON.stringify(data))

        window.location.href = (`/noticias/${data}`)

        return
        
    }else{
        localStorage.setItem('categoria', JSON.stringify(data))
        window.location.href = (`/noticias/${data}`)
    }

   

}

//NAV ITEM REDIRECT
export const getPlataformaAction = (data) => () => {
    
    if(localStorage.getItem('search') || localStorage.getItem('plataforma')){
        localStorage.removeItem('categoria')
        localStorage.removeItem('search')


        localStorage.setItem('plataforma', JSON.stringify(data))
 
        window.location.href = (`/noticias/${data}`)
     return

    }else{

        localStorage.setItem('plataforma', JSON.stringify(data))
 
        window.location.href = (`/noticias/${data}`)
    }

    
 }

 //NAV SEARCH REDIRECT
export const getSearchAction = (data) => () => {

    if(localStorage.getItem('categoria') || localStorage.getItem('plataforma')){

        localStorage.removeItem('categoria')
        localStorage.removeItem('plataforma')

        localStorage.setItem('search', JSON.stringify(data))
        window.location.href = (`/noticias/${data}`)

     return

    }else{
        localStorage.setItem('search', JSON.stringify(data))
        window.location.href = (`/noticias/${data}`)
    }

    
 }
