import React, {Component} from 'react'
import './css/login.css'
import fire from '../config/db';

class Login extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      error: ''
    }

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {}).catch((error) => {
      this.setState({ error :'Error en el inicio de sesión.'})
    });
  }

  render() {
    const style = {
      color:'red'
    }
    return (<div className="login-container d-flex align-items-center justify-content-center">
      <div className="row col-md-6">
        <div className="col">
          <form className="login-form" method="POST">
            <div className="form-group">

              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" className="form-control" required="required" value={this.state.email} onChange={this.handleChange}/>

              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" id="password" className="form-control" required="required" value={this.state.password} onChange={this.handleChange}/>

            </div>
            <p style={style}>{this.state.error}</p>
            <div className="form-group text-center">
              <button type="submit" onClick={this.login} className="btn btn-success">Ingresar</button>
            </div>
          </form>
        </div>
      </div>
    </div>)
  }
}

export default Login
