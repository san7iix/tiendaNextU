import React, {Component} from 'react'
import fire from '../config/db';

class Catalogo extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div className="container mt-4 card">
        <div class="row card-header">
          <div class="col-md-6">
            <h1>Catálogo</h1>
          </div>
          <div class="col-md-6 col-md-offset-2">
            <h6>¿Qué estás buscando?</h6>
          </div>
        </div>
        <div className="row col-md-5 pt-4">
          <div className="card">
            <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/10/03/15385788043643.jpg" className="card-img-top" />
            <div className="card-body">
              <h5 class="card-title">Ajo</h5>
              <p class="card-text">Precio </p>
              <p class="card-text">Unidades disponibles: </p>
              <div className="row form-inline form-group">
                <div className="col-xs-4 mr-2 ml-3">
                  <button className="btn btn-primary">Ver más</button>
                </div>
                <div className="col-xs-4 mr-2">
                  <button className="btn btn-warning">Añadir</button>
                </div>
                <div className="col-xs-2">
                  <input type="number" value="1" className="form-control"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Catalogo
