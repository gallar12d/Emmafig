import React, { Component } from "react";
import "./Seccion1.css";
import { Fade } from "react-slideshow-image";
import M from "materialize-css";

const fadeImages = ["img/img1.jpg", "img/fondo.png", "img/slide_3.png"];

class CustomSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { id, imagen, textoppal, textosec, url_ver_mas, url_sec_boton, titulo, alineacion, ...props } = this.props;
    return (
      <div  {...props}>
        <div id="div-seccion1" className="each-fade">
          <div className="image-container">
            <img className="panel" src={'http://emmafig.com/api1/public/images/sliders/' + imagen} />
            <img className="panelFondo" src={ "img/blanco-nada"+alineacion+".png"} />
            console.log(imagen)
            <div className={"info" + alineacion}>            
                <div className="inner">
                  <div className="divTexto"><h3 className="textTitulo"><b>{titulo}</b><br /><br /></h3>
                    <h4>
                    <b>{textoppal}</b><br />
                      {textosec}<br />
                    </h4>
                    <div>
                      <a className="waves-effect waves-light btn-small buttonSmall" href="#">Conoce más</a>
                      <a className="waves-effect waves-light btn-small buttonSmall" href="#">Calcula tu riesgo</a>
                      <br />
                    </div>
                  </div>
                </div>            
            </div>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
        </div>

      </div>
    );
  }
}

const fadeProperties = {
  duration: 4000,
  transitionDuration: 600,
  infinite: true,
  indicators: false,
  arrows: true
};

class Seccion1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: []
    };
  }

  componentDidMount() {
    fetch("https://emmafig.com/api1/getSliders")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            sliders: result
          });
        },

        (error) => {
          alert('Error');
        }
      )
  }

  render() {
    const listItems = this.state.sliders.map((d) => <CustomSlide id={d.id_Slider} imagen={d.imagen} textoppal={d.texto_principal} textosec={d.texto_secundario} url_ver_mas={d.url_ver_mas} url_sec_boton={d.url_segundo_boton} titulo={d.nombre} alineacion={d.alineacion}></CustomSlide>);

    return (
      <section className="page-section layoutSeccion1" id="seccion1">
        <div className="containerSection1">
          <div className="col-lg-12 text-center">
            <Fade {...fadeProperties}>
              {listItems}
            </Fade>
          </div>
        </div>
      </section>
    );
  }
}

export default Seccion1; // Don’t forget to use export default!
