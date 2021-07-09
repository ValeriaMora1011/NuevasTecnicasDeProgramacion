import React from 'react';

class Elemento extends React.Component{
    
    eliminarElemento=()=>{
        this.props.eliminarElementoPractica1();
    }

    render(){
        const {elem}= this.props;
        console.log(this.props);
        return <div> 
        <button style= {elem.color} onClick={this.eliminarElemento}>
            {elem.nombre}
        </button>
        </div>
    }
}

export default Elemento;