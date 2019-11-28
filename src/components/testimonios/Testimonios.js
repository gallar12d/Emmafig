import React, { Component } from 'react';
import axios from 'axios';
import './Testimonios.css'
import Slider from "react-slick";
import M from "materialize-css";
import $ from 'jquery';

class CustomSlide extends Component {
  render() {
    const {fecha_testimonio,  texto, imagen, nombres, profesion, ...props } = this.props;
    return (
      <div {...props}>
        <div className=" center-align espaciado" >
          <div className=" hoverable  card panel_radius">
            <div className="card-content white-text">
              <div className="textofijo">
                <p className="text-green">
                  {texto}
                </p>
              </div>
              <img src={'http://emmafig.com/api1/public/images/' + imagen} alt="" className=" center-align avatar circle">
              </img>

            </div>
          </div>
        </div>
        <div className="text-c center-align">
          <h6 className=" center-align nombres">  <strong>{nombres}</strong></h6>
          <h6 className="fecha"><i>{profesion}</i></h6>
          <h6 className="fecha2"><i>{fecha_testimonio}</i></h6>
         
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


  countTestimonials(){
    let  primero =  $("div[data-index ='0']");
    console.log(primero)
    let next = primero.next();
    next.addClass('slick-slide slick-active slick-center slick-cloned slick-current')

    
  }
  componentDidMount() {

    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, {});


    fetch("https://emmafig.com/api1/testimonials")
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result)
          this.setState({
            testimonios: result
          });
          this.countTestimonials();
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
      slidesToShow:3,
      slidesToScroll: 0,
      centerPadding: '0px',
      initialSlide: 2,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            dots: true,
            infinite: true,
            speed: 500,
            centerMode: false,
            slidesToShow: 2,
            slidesToScroll: 1,
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
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            dots: true,
            infinite: true,
            speed: 500,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };

    const listItems = this.state.testimonios.map((d, index) =>  <CustomSlide key={d.id_testimonio} texto={d.texto} imagen={d.url_imagen} nombres={d.nombre} profesion={d.profesion} fecha_testimonio={d.fecha_testimonio}></CustomSlide>);
   
    return (
      <div  className="parallax-container" id="testimonios">
        <div className="parallax">
          <img alt="algo" src={this.state.background}></img>
        </div>
        <h2 className="espacioTitulo tituloTestimonials">Testimonios </h2>
        <h5 className="subtituloTestimonials">Espacio donde nuestros clientes expresan sus experiencias con nuestros servicios</h5>
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