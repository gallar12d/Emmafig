import React, { Component } from 'react';
import axios from 'axios';
import './Citas.css'

class Citas extends Component {    
    constructor(props) {        
        super(props);        
        this.state = {       
        
        };        
      }      
  render() {   
    
    return (
        <section className="page-section layoutSeccion"   id="citas">    
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <form>
                            <div className="form-group"> 
                                <label htmlFor="formGroupExampleInput" className="bmd-label-floating">Example label</label>
                                <input type="text" className="form-control" id="formGroupExampleInput"></input>
                            </div>
                            <div className="form-group bmd-form-group"> 
                                <label htmlFor="formGroupExampleInput2" className="bmd-label-floating">Another label</label>
                                <input type="text" className="form-control" id="formGroupExampleInput2"></input>
                            </div>
                        </form>
                        <form className="form-inline">
                            <div className="form-group">
                                <label htmlFor="exampleInputName2" className="bmd-label-floating">Name</label>
                                <input type="text" className="form-control" id="exampleInputName2"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail2" className="bmd-label-floating">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail2"></input>
                            </div>
                            <span className="form-group bmd-form-group"> 
                                <button type="submit" className="btn btn-primary">Send invitation</button>
                            </span>
                        </form>
                        

                    </div>
                </div>
            </div>
        </section>
      );
    
  }
}

export default Citas; // Don’t forget to use export default!