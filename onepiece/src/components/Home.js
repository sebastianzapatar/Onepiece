import React,{Component} from 'react';
import axios from 'axios';
import Global from './Global'
import {NavLink} from 'react-router-dom'
class Home extends Component {
    state = {
        piratas:[],
        
    }
    url=Global.url;
    
    componentDidMount(){
        this.getPiratas();
        console.log(this.url);
    }
    getPiratas=()=>{
        axios.get(this.url).then(res=>{
            if(res){
                this.setState({
                    piratas:res.data
                })
            }
            console.log(this.state)
        })
    }
    deletePirata=(id)=>{
        axios.delete(this.url+id).then(res=>{
            alert("Pirata borrado");
            this.componentDidMount();    
        })
    }
    render(){
        
        return(
            <React.Fragment>
            <h1>Lista Piratas</h1>
            <table align="center" border="1px ">
                <thead>
                    <tr>
                        <th>
                            id
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Fuerza
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.piratas.map((pirata)=>{
                        return(<tr key={pirata.id}>
                            
                            <td>
                                {pirata.id}
                            </td>
                            <td>{pirata.nombre}</td>
                            <td>{pirata.fuerza}</td>
                            <th>
                                <button type="button" className="btn btn-dark"
                                onClick={()=>{this.deletePirata(pirata.id)}}>Eliminar</button>
                                <NavLink to={"/editar/"+pirata.id} className="btn btn-primary"
                                >Editar</NavLink>
                            </th>
                            
                        </tr>)
                    })}
                </tbody>
            </table>
            </React.Fragment>
        )
    }
}
export default Home;