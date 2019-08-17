import React, { Component } from 'react'
import Navbar from '../componentes/navbar'
import Catalogo from '../componentes/catalogo'



class Login extends Component{
  constructor() {
    super()
  }

  render(){
    return(
      <div className="container">
        <Navbar></Navbar>
        <Catalogo></Catalogo>
      </div>
    )
  }
}

export default Login
