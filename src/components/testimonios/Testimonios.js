import React, { Component } from 'react';
import axios from 'axios';
import './Testimonios.css'
import Slider from "react-slick";
import M from "materialize-css";


class CustomSlide extends Component {
    



    render() {
        const {texto, imagen, nombres, profesion, ...props } = this.props;
        return (
            <div {...props}>
                <div className=" center-align espaciado" >
                    <div className=" hoverable  card panel_radius">
                        <div className="card-content white-text">                            
                        <p className="text-green">
                        {texto}
                        </p>
                        <img src= {'http://emmafig.com/api1/public/images/' +imagen} alt="" className=" center-align avatar circle">
                        </img>
                         <h6 className="nombres">{nombres} - <strong>{profesion}</strong></h6>
                        </div>                        
                    </div>
                    
                   
                    
                   
                </div>
            </div>
        );
    }
}

class Testimonios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: process.env.PUBLIC_URL + "/img/backTestimonios.jpg",
            testimonios: []

        };
    }
    componentDidMount() {
        fetch("http://emmafig.com/api1/testimonials")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
              this.setState({                
                testimonios: result
              });
            },
            
            (error) => {
              alert('Error');
            }
          )
      }


    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll:1,
            centerPadding: '0px',
            responsive: [
                {
                  breakpoint: 1000,
                  settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    centerMode: false,
                    slidesToShow: 2,
                    slidesToScroll:1,
                  }
                },
                {
                  breakpoint: 670,
                  settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll:1,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll:1,
                  }
                }
              ]
        };

        const listItems = this.state.testimonios.map((d) => <CustomSlide key={d.id_testimonio} texto={d.texto} imagen={d.url_imagen} nombres={d.nombre} profesion={d.profesion}></CustomSlide>);

        return (
            <div className="parallax-container">
                <div className="parallax">
                    <img alt="algo" src={this.state.background}></img>
                </div>
                <h2 className="espacioTitulo tituloTestimonials">Testimonios EmmaFIG</h2>
                <h6 className="subtituloTestimonials">Don't take our word for it. Here is what our customers say about our products and our awesome support!</h6>
                <div className="espaciado2">
                    <Slider {...settings}>                        
                        {listItems}
                    </Slider>
                </div>
                
            </div>
        );

    }
}

export default Testimonios; 