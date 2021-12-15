import React from 'react'
import './aside.css'

//Redux
import {useDispatch} from 'react-redux'
import {subAction} from '../../../redux/DataDuck'


const Asisde = () => {

    const dispatch = useDispatch()

    const [sub, setSub] = React.useState(false)
 
    const [email, setEmail] = React.useState({
        email: ''
    })

    //getEmail
    const getEmail = (e) => {
        setEmail({
            ...email,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {

        if(!email.email.trim()){
            console.log('campo vacio')
            return
        }

        dispatch(subAction(email, setSub))

        setEmail({email: ''})
    }   
    
    React.useEffect(() => {

        if(localStorage.getItem('sub')){
            setSub(true)
        }else{
            setSub(false)
        }

    }, [])

    return (
        <div className="col-12 col-lg-3 asides">

            <div className="aside12">
                <div className="aside1 mt-5">
                    <div className="card text-dark border-light">
                        <div className="card-header">PUBLICIDAD</div>
                        <div className="card-body">
                            <img className="img-fluid mb-1" alt="publicidad" src="https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2020/05/12182913/games.jpg?w=696&ssl=1"/>
                            <button className="btn btn-block btn-dark" disabled>VER MAS</button>
                        </div>
                    </div>
                </div>

                <div className="aside2 mt-5">
                    <div className="card text-dark border-light">
                        <div className="card-header">EVENTO PROXIMO</div>
                        <div className="card-body">
                            <img className="img-fluid mb-2" alt="publicidad" src="https://fadir.ufms.br/files/2019/05/eventos.jpg"/>
                            <button className="btn btn-block btn-warning" disabled>VER MAS</button>
                        </div>
                    </div>
                </div>
            </div>
          

            <div className="aside3 mt-5">
                <div className="card text-light bg-dark mb-3">
                    <div className="card-header">CONTENIDO EXCLUSIVO</div>
                        {
                            sub ? (
                                <div className="alert alert-success">Estas Subscripto</div>  
                            ):(
                                <div className="card-body">
                                    <input className="form-control mb-2" placeholder="Email:" name="email" onChange={getEmail} value={email.email}/>
                                    <button className="btn btn-block btn-success" onClick={handleSubmit}>SUBSCRIBIRME</button>
                                </div>
                            )
                        }
                </div>
            </div>
        </div>
        
    )
}

export default Asisde
