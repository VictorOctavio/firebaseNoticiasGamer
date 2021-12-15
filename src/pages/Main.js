import React from 'react'

//components
import Carousel from '../components/Main/Carausel/Carousel'
import Noticias from '../components/Main/Noticias/Noticias'
import Footer from '../components/Footer/Footer'

//REDUX
import {useDispatch} from 'react-redux'
import {getNoticiasAction} from '../redux/DataDuck'

const Main = () => {
   
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getNoticiasAction())
    }, [dispatch])
    return (
        <div className="main">
            <Carousel/>

            <Noticias/>

            <Footer/>
        </div>
    )
}

export default Main
