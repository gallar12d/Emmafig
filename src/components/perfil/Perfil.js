import React, { Component } from 'react';
import './Perfil.css'
import M from "materialize-css";


class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        M.Tabs.init(this.Tabs);
    }


    



    render() {

        return (

            <div className="Perfil">


                <div className="container emp-profile">
                    <form method="post">
                        <div className="row">
                            <div className="col m5">
                                <div className="profile-img">
                                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                                    <div className="file btn btn-lg btn-primary">
                                        Change Photo
                                <input type="file" name="file" />
                                    </div>
                                </div>
                            </div>
                            <div className="col md6">
                                <div className="profile-head">
                                    <h5>
                                        Kshiti Ghelani
                                    </h5>
                                    <h6>
                                        N° identificacion: 1002846988
                                    </h6>
                                    <p className="proile-rating">Fecha de nacimiento : <span>8/10</span></p>
                                    

                                </div>
                            </div>
                            <div className="col m2">
                                <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col m12">
                                <h6>REGISTRO DE ACTIVIDAD</h6>
                            <div className="row">
                                    <div className="col s12">
                                        <ul ref={Tabs => {
                                            this.Tabs = Tabs;
                                        }} className="tabs">
                                            <li className="tab  col s6"><a className="active resetPading" href="#test1">Citas</a></li>
                                            <li className="tab  col s6"><a className="resetPading" href="#test2">Resultados</a></li>
                                            
                                        </ul>
                                    </div>
                                    <div id="test1" className="col s12">
                                   
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Kshiti123</p>
                                            </div>
                                        
                                       
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Kshiti Ghelani</p>
                                            </div>
                                       
                                       
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>kshitighelani@gmail.com</p>
                                            </div>
                                        
                                       
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>123 456 7890</p>
                                            </div>
                                       
                                        
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Web Developer and Designer</p>
                                            </div>
                                       
                                    </div>

                                    <div id="test2" className="col s12">
                                    
                                            <div class="col-md-6">
                                                <label>Experience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                       
                                        
                                            <div class="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                      
                                        
                                            <div class="col-md-6">
                                                <label>Total Projects</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                      
                                        
                                            <div class="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                      
                                        
                                            <div class="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                    
                                </div>
                                </div>
                                
                                    


                            </div>
                        </div>
                    </form>
                </div>

            </div>

        );
    }
}
export default Perfil;