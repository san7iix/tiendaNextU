import React, {Component} from 'react'
import fire from '../config/db';
import Producto from './producto'

class Catalogo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productos: []
    }
    this.app = fire;
    this.db = this.app.database().ref().child('productos');
  }

  componentDidMount() {
    const { productos } = this.state;
    this.db.on('child_added', snap => {
      productos.push({id: snap.key, precio: snap.val().precio, unidades: snap.val().unidades});
      this.setState({ productos });
    });
    this.db.on('child_removed', snap => {
      for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === snap.key) {
          productos.splice(i, 1);
        }
      }
      this.setState({productos});
    });
    console.log(this.state.productos);
  }

  render() {
    const productos = this.state.productos.map((productos,i)=>{
      const imagen = require
      return(
        <Producto
          key={productos.id}
          img={}
          nombre={productos.id}
          precio={productos.precio}
          unidades={productos.unidades}/>
      )
    })

    return (<div className="container mt-4 card">
      <div className="row card-header">
        <div className="col-md-6">
          <h1>Catálogo</h1>
        </div>
        <div className="col-md-6 col-md-offset-2">
          <h6>¿Qué estás buscando?</h6>
        </div>
      </div>
      <div className="row pt-4">
        {productos}
      </div>
    </div>)
  }
}

export default Catalogo
