import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//BOOTSTRAP CSS
import  'bootstrap/dist/css/bootstrap.min.css'

//REDUX
import {Provider} from 'react-redux'
import generateStore from './redux/Store'

const store = generateStore()

ReactDOM.render(

  <Provider store={store}>

    <App />
    
  </Provider>,

  document.getElementById('root')
  
)
