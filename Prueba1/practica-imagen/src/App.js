import React from 'react';
import './App.css';
import practica1 from './datos/practica1.json';
import Elementos from './componentes/elementos';
import MyForm2 from './componentes/MyForm2';

class App extends React.Component{

  state ={
    practica1:practica1
  }

  añadirElementoPractica1=( colorIn, nombreIn )=>{
    const newElement  = {
      id : this.state.practica1.slice(-1)[0].id+1,
      color:{"backgroundColor":colorIn},
      nombre:nombreIn,
      flag:true
    }
    this.setState({
      practica1: [...this.state.practica1, newElement]//this.state.practica1.push(newElement)
    })
  }

  eliminarElementoPractica1=(id)=>{
    console.log("Metodo eliminar elemento Practica1")
  }

  render(){
    return<div>
      <MyForm2 añadirElementoPractica1={this.añadirElementoPractica1} />
      <Elementos practica1={this.state.practica1} eliminarElementoPractica1={this.eliminarElementoPractica1} />
    </div>
  }
}


export default App;