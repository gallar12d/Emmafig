import React, { Component } from 'react';



import Cuestionario from './cuestionario/Cuestionario';
import Detalle from './detalle/Detalle';
import Inicio from './inicio/Inicio';
import Inscripcion from './inscripcion/Inscripcion';
import Resultado from './resultado/Resultado';
import './Calculadora.css';

import { Transition, animated } from 'react-spring/renderprops';

class Calculadora extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuestionarioShow: false,
            inicioShow: true,
            index: 1,
            pages:[
                styles=>(                          
                    <animated.div style={styles}>                                                            
                        <Inicio showCuestionario={this.showCuestionario} />
                        {/*<Cuestionario />*/}
                </animated.div>),
                styles=>(                          
                    <animated.div style={styles}> 
                        <Cuestionario />
                </animated.div>),
            ]
        }
        
    }
    
    showCuestionario = e => {this.setState({
       
        index: this.state.index + 1,
        inicioShow: !this.state.inicioShow
    }); console.log(this.state.index)};
    render() {
        
        return (
            console.log('prueba'),
            <div id="contenedor-calculadora">
                
                <Transition
                    native 
                    items={this.state.index}
                    from={{ opacity: 0, transform: 'translate3d(100%,0,0)'}}
                    enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
                    leave={{ transform: 'translate3d(-50%,0,0)' }}                    
                >
                    
                    {show =>                    
                        show &&
                        (this.state.pages[this.state.index - 1]          
                        )}
                </Transition>

                

                {/*<Resultado />
                <Inscripcion />
                <Detalle />*/}
            </div>
        );

    }
}

export default Calculadora; // Don’t forget to use export default!