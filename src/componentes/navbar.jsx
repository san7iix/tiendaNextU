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
      <nav className="navbar navbar-expand-sm navbar-light bg-faded">
        <a className="brand-logo">{this.state.titulo}</a>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <ion-icon name="cart"></ion-icon>
            </li>
          </ul>
        </div>
      </nav>

      )
  }
}

export default Navbar
