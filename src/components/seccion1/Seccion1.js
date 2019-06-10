import React, { Component } from 'react';
import axios from 'axios';
import './Seccion1.css'

class Seccion1 extends Component {    
    constructor(props) {        
        super(props);        
        this.state = {       
        
        };        
      }      
  render() {   
    
    return (
        <section className="page-section layoutSeccion"   id="seccion1">    
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        

                    </div>
                </div>
            </div>
        </section>
      );
    
  }
}

export default Seccion1; // Don’t forget to use export default!