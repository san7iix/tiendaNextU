import React, { Component } from 'react';
import './App.css';
import fire from './config/db';
import Inicio from './rutas/inicio';
import Login from './rutas/login';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
    this.verificarLogin = this.verificarLogin.bind(this);
  }

  componentDidMount(){
    this.verificarLogin()
  }

  verificarLogin(){
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div className="App">
            {this.state.user ? (<Inicio/>) :(<Login />)}
      </div>
    );
  }
}


export default App;
