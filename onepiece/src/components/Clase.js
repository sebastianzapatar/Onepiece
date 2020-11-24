import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
class Clase extends Component {
    
    state={
        contador:0,
        historia:'mirada que juzga a Yaya, el profe quiere guaro'
    }
    sumar=()=>{
        this.setState({ 
            contador:(this.state.contador + 1)
        })
    }
    restar=()=>{
        this.setState({ 
            contador:(this.state.contador - 1)
        })
    }
    change=(event)=>{
        this.setState({
            historia:event.target.value
        })
    }

    render() {
        let edad=18;
        let mostrar;
        if(edad>=18){
            mostrar=(
                <React.Fragment>
                    <h1>Puedes ingresar a beber tranquilamente</h1>
                    <h2>Con responsabilidad</h2>
                </React.Fragment>
            );
        }
        else{
            mostrar=(
                <React.Fragment>
                    <h1>No Puedes ingresar a beber tranquilamente</h1>
                    <h2>Vaya tome leche</h2>
                </React.Fragment>
            );
        }
        
        return (

            <React.Fragment>
                {mostrar}
                {this.state.contador}<br/>
                <button type="button" className="btn btn-primary" onClick={this.sumar}>Sumar</button>
                <button type="button" className="btn btn-dark" onClick={this.restar}>Restar</button>
                <br/>
                <p>{this.state.historia}</p>
                <input type="text" onChange={this.change} />

            </React.Fragment>
        )
    }
}
export default Clase;