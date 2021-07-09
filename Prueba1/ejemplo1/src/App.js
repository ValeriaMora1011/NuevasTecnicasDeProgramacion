import React from 'react';
import './App.css';

/*function IngresarDatos(props){
  return (
  <div>
    <h3> {props.nombre}</h3>
  </div>)
}*/

/*const IngresarDatos = (props)=>{
  return (
    <div>
      <h3> {props.nombre}</h3>
    </div>)
}*/


class IngresarDatos extends React.Component {

  state={
    bandera : true
  }

  cambiarEstado = ()=>{
    this.setState({bandera:!this.state.bandera});
  }

  render(){
    if(this.state.bandera){
      return (<div>
        <h3> {this.props.nombre}</h3>
        <button onClick={this.cambiarEstado} >cambiar estado</button>
      </div>)
    }else{
      return <div><h1>Estado false</h1><button onClick={this.cambiarEstado} >cambiar estado</button></div>
    }
    
  }

}




function App() {
  return (
  <div id="principal">
    <h1 id="titulo" > 
      <IngresarDatos nombre="ITQ" />
    </h1>
    <h2 id="nombre" > 
      <IngresarDatos nombre="Freddy Catucuamba" />
    </h2>
    <h3 id="materia"> 
      <IngresarDatos nombre="Nuevas Técnicas de Programación" />
    </h3>
  </div>);
}

export default App;