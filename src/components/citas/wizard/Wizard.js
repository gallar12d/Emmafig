import React, { Component } from 'react';


class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }
   
    render() {
        return (            
                <div className="row wizardCitas">
                   <h1>{this.props.nombre_servicio}</h1>
                   <br />
                   <a onClick = {() => this.props.change_item(null, null)}>Atras</a>                                            
                </div> 
                        

        );

    }
}

export default Wizard; // Don’t forget to use export default!