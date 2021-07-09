import React from 'react';

import Elemento from './elemento';

class Elementos extends React.Component{

    render(){
        //console.log(this.props)
        return this.props.practica1.map((s)=><Elemento 
        key={s.id} 
        elem = {s} 
        eliminarElementoPractica1 = {this.props.eliminarElementoPractica1} />)
    }
}

export default Elementos;