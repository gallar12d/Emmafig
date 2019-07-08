import React, { Component } from 'react';
import axios from 'axios';
import './Testimonios.css'
import Slider from "react-slick";
import M from "materialize-css";


class CustomSlide extends Component {
    render() {
        const { index, ...props } = this.props;
        return (
            <div {...props}>
                <div className=" center-align espaciado" >
                    <div className=" hoverable  card panel_radius">
                        <div className="card-content white-text">                            
                        <p className="text-green">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s standard dummy standard dumm
                        </p>
                        <img src="img/perfil.jpg" alt="" className=" center-align avatar circle">
                        </img>
                         <h6 className="nombres">Pedro - <strong>Patólogo</strong></h6>
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
            background: process.env.PUBLIC_URL + "/img/backTestimonios.jpg"

        };
    }


    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            centerMode: false,
            slidesToShow: 3,
            slidesToScroll:2,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };

        return (
            <div className="parallax-container">
                <div className="parallax">
                    <img alt="algo" src={this.state.background}></img>
                </div>
                <h2 className="espacioTitulo tituloTestimonials">Testimonios EmmaFIG</h2>
                <h6 className="subtituloTestimonials">Don't take our word for it. Here is what our customers say about our products and our awesome support!</h6>
                <div className="espaciado2">
                    <Slider {...settings}>
                        <CustomSlide index={1} />
                        <CustomSlide index={1} />
                        <CustomSlide index={1} />
                        <CustomSlide index={1} />
                        <CustomSlide index={1} />
                        <CustomSlide index={1} />
                        <CustomSlide index={1} />
                        <CustomSlide index={1} />
                        <CustomSlide index={1} />
                    </Slider>
                </div>
                
            </div>
        );

    }
}

export default Testimonios; 