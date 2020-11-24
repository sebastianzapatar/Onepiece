import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Global from './Global'
class Agregar extends Component{
    url=Global.url;
    nombreref=React.createRef();
    fuerzaref=React.createRef();
    state={
        pirata:null
    }
    /**/
    recibirformulario=(e)=>{
        console.log(this.nombreref.current.value+" "+this.fuerzaref.current.value);
        e.preventDefault();
        let pirata={
            nombre:this.nombreref.current.value,
            fuerza:this.fuerzaref.current.value
        }
        
        axios.post(this.url,pirata).then(res=>{
            if(res.data){
                console.log(res.data);
            }
            else{
                console.log(res)
            }
        })

    }

    render(){
        return(
            <React.Fragment>
                <form className="full-form" onSubmit={this.recibirformulario} method="POST">
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" ref={this.nombreref}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fuerza">Fuerza</label>
                        <input type="text" name="fuerza" ref={this.fuerzaref}></input>
                    </div>
                    <input type="submit" value="enviar" className="btn bnt-success"/> 
                </form>
            </React.Fragment>
        )
    }
}
export default Agregar;