import React, { Component } from 'react';
import axios from 'axios';
import './Gestion.css'
import M from "materialize-css";
import Slider from "react-slick";

class Testimonios extends Component {    
    constructor(props) {        
        super(props);        
        this.state = { 
            testimonios: []      
        
        };        
      }    
      
      componentDidMount() {  
        //let collapsible = document.querySelectorAll(".carousel.carousel-slider");
        //M.Carousel.init(Testimonios, {fullWidth: true, indicators: true});
        
        axios.get(`http://emmafig.com/api1/testimonials`)
          .then(res => {               
                const testimonios = res.data;
                this.setState({ testimonios });
          })
        
      }
        componentDidUpdate() {
            let collapsible = document.querySelectorAll(".carousel.carousel-slider");    
            M.Carousel.init(collapsible, {fullWidth: true, indicators: true});
      }

      iteratingTestimonials(){
        let testimonios = this.state.testimonios;
        if(testimonios.length){
          let htmlTestimonios = testimonios.map(function(v){
            let urlimg = 'http://emmafig.com/api1/public/images/' + v.url_imagen;            
            return      <div key={v.id_testimonio} className="carousel-item blue white-text" href="#one!">
                            <h2>{v.nombre}</h2>
                            <p className="white-text">{v.texto}</p>
                            <div className="card-image ">
                                <img className="" width="500px" height="auto" src={urlimg}   alt={v.txt}></img>
                            </div>
                        </div>
                    
          })
          return  <div  className="carousel carousel-slider center">{htmlTestimonios}</div>
        }         
        
                 
      }

      
  render() { 
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    
    return (
        <section> 
            <div className="row">
              <div className="col s12">
                <h4 className="tituloCitas">Testimonios</h4>
                <h6 className="subtituloCitas">Nuestros testimonios</h6>

              </div>
            </div>
             
            <div>
              
              <Slider {...settings}>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </div>           
        </section>
      );
    
  }
}

export default Testimonios; 