import React, { Component } from 'react';
import axios from 'axios';

class Seccion1 extends Component {    
    constructor(props) {        
        super(props);        
        this.state = {
         
          users : []
        };
        
      }     

     
   traerDatos(){       
        
       axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const users = res.data;
            this.setState({ users: users });            
            
        }).catch(function(data){
            alert(data)
        })
      
   }  
   eliminarUser = (deletePostId) => {    
    this.setState({
        users: this.state.users.filter(item => item.id != deletePostId)
      })
  }

  
  render() {
    const usuarios = this.state.users
    const listUsuario = usuarios.map((user) =>
    <li  key={user.id} >{user.name}
        <button onClick={this.eliminarUser.bind(this, user.id)}>
            Eliminar
        </button>
    </li>
    );
    
    return (
        <section className="page-section bg-primary" id="seccion1">    
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <button onClick={this.traerDatos.bind(this)}>Traer datos </button>
                        <ul>
                            {listUsuario}
                        </ul>


                    </div>
                </div>
            </div>
        </section>
      );
    
  }
}

export default Seccion1; // Don’t forget to use export default!