import React, {Component} from 'react';


class Producto extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="card col-md-3 m-4">
        <img src={this.props.img} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{this.props.nombre}</h5>
          <p className="card-text">Precio: {this.props.precio}</p>
          <p className="card-text">Unidades disponibles: {this.props.unidades}</p>
          <div className="row form-inline form-group">
            <div className="col-xs-4 mr-2 ml-3">
              <button className="btn btn-primary">Ver más</button>
            </div>
            <div className="col-xs-5 mr-2">
              <button className="btn btn-warning">Añadir</button>
            </div>
            <div className="col-md-4 mt-2">
              <input type="number" className="form-control col"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Producto
