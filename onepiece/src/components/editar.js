import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Global from './Global'
class Editar extends Component{
    state = {
        pirata:{},
        id:null,
        
    }
    componentDidMount(){
        this.getPirata(this.props.match.params.id);
        
    }
    url=Global.url;
    nombreref=React.createRef();
    fuerzaref=React.createRef();
    
    getPirata(id){
        axios.get(this.url+id).then(res=>{
            if(res){
                this.setState({
                    pirata:res.data,
                    id:id,
                })
            }
            console.log(this.state.pirata);
        })
    }
    /**/
    recibirformulario=(e)=>{
        e.preventDefault();
        let pirata={
            nombre:this.nombreref.current.value,
            fuerza:this.fuerzaref.current.value,
        }
        axios.put(this.url+this.state.id+"/",pirata).then(res=>{
            if(res.data){
                console.log(res.data);
            }
            else{
                console.log(res)
            }
        })

    }
    changeState=()=>{
        this.setState({
            pirata:{
                nombre:this.nombreref.current.value,
            }
        })
        console.log(this.state.pirata);
    }
    render(){
        return(
            <React.Fragment>
                <form className="full-form" onSubmit={this.recibirformulario} method="POST">
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" ref={this.nombreref}
                        defaultValue={this.state.pirata.nombre} onChange={this.changeState}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fuerza">Fuerza</label>
                        <input type="number" name="fuerza" ref={this.fuerzaref}
                        defaultValue={this.state.pirata.fuerza} onChange={this.changeState}></input>
                    </div>
                    <input type="submit" value="enviar" className="btn bnt-success"/> 
                </form>
            </React.Fragment>
        )
    }
}
export default Editar;