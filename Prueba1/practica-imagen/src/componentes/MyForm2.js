import React from 'react';

class MyForm2 extends React.Component{

    state={
        color:'',
        nombre:''
    }

    myOnSubmit=(evn)=>{
        evn.preventDefault();
        this.props.añadirElementoPractica1(this.state.color, this.state.nombre);
    }

    myOnChange=(env)=>{
  //console.log("myOnChange", env.target.value, " name: ", env.target.name)
        this.setState({
            [env.target.name]:env.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.myOnSubmit} >
                <input name="color"
                    type="text" 
                    placeholder="Ingrese el color" 
                    onChange={this.myOnChange} 
                    value={this.state.color} />
                <br />
                <br />
                <input name="nombre"
                    type="text" 
                    placeholder="Ingrese el nombre de la imagen" 
                    onChange={this.myOnChange} 
                    value={this.state.nombre}/>
                <br /><br />
                <input type="submit" />
            </form>
        )
    }
}

export default MyForm2;