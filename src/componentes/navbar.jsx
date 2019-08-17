import React, {Component} from 'react'

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      titulo: 'La bodega'
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="brand-logo">{this.state.titulo}</a>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link">
                <ion-icon name="home"></ion-icon>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <ion-icon name="cart"></ion-icon>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <ion-icon name="log-in"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      )
  }
}

export default Navbar
