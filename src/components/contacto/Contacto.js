import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';


import axios from 'axios';
import './Contacto.css'

const Marker = ({ src }) => <img src={src} id="marker" />;
/*window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    alert(window.orientation);
}, false);*/

//const Marker = ({ txt }) => <div>{txt}</div>  ;
class Contacto extends Component {
    static defaultProps = {
        center: {
            lat: 2.451669,
            lng: -76.601446
        },
        zoom: 17
    };



    constructor(props) {
        super(props);
        this.state = {
            img_marker: process.env.PUBLIC_URL + "/img/marker.png",
            hide: 0
        }
    }





    hideOrShowDiv() {

        var info_div = document.getElementById("info_div_small");
        var info_div_medium = document.getElementById("info_div_medium");
        var btn_animate_info_div = document.getElementById("btn_animate_info_div");
        var btn_animate_div_medium = document.getElementById("btn_animate_info_div_medium");
        var arrow = document.getElementById("arrow_hide_or_show");
        var arrow_medium = document.getElementById("arrow_hide_or_show_medium");
        if (info_div_medium.classList.contains('info_div_medium') && this.state.hide === 0) {
            arrow_medium.innerHTML = "keyboard_arrow_right";
            info_div_medium.classList.remove("info_div_medium");

            info_div_medium.classList.add("info_div_hide");

            btn_animate_div_medium.classList.remove("btn_animate_div_in");

            btn_animate_div_medium.classList.add("btn_animate_div_out")

            this.setState({
                hide: 1
            })
        } else {
            if (this.state.hide === 0) {
                arrow_medium.innerHTML = "keyboard_arrow_right";

                info_div_medium.classList.remove("info_div_show")
                info_div_medium.classList.add("info_div_hide");
                info_div_medium.classList.add("show-on-small");
                btn_animate_div_medium.classList.remove("btn_animate_div_in")
                btn_animate_div_medium.classList.add("btn_animate_div_out")
                this.setState({
                    hide: 1
                })


            } else {
                arrow_medium.innerHTML = "keyboard_arrow_left";

                info_div_medium.classList.remove("info_div_hide");
                info_div_medium.classList.add("info_div_show");
                info_div_medium.classList.add("show-on-small");
                btn_animate_div_medium.classList.remove("btn_animate_div_out")
                btn_animate_div_medium.classList.add("btn_animate_div_in")
                //info_div.classList.add("info_div");
                this.setState({
                    hide: 0
                })

            }


        }

        if (info_div.classList.contains('info_div_small') && this.state.hide === 0) {
            arrow.innerHTML = "keyboard_arrow_right";
            info_div.classList.remove("info_div_small");

            info_div.classList.add("info_div_hide");
            info_div.classList.add("show-on-small");
            btn_animate_info_div.classList.remove("btn_animate_div_in")
            btn_animate_info_div.classList.add("btn_animate_div_out")
            this.setState({
                hide: 1
            })
        } else {

            if (this.state.hide === 0) {
                arrow.innerHTML = "keyboard_arrow_right";

                info_div.classList.remove("info_div_show")
                info_div.classList.add("info_div_hide");
                info_div.classList.add("show-on-small");
                btn_animate_info_div.classList.remove("btn_animate_div_in")
                btn_animate_info_div.classList.add("btn_animate_div_out")
                this.setState({
                    hide: 1
                })


            } else {
                arrow.innerHTML = "keyboard_arrow_left";

                info_div.classList.remove("info_div_hide");
                info_div.classList.add("info_div_show");
                info_div.classList.add("show-on-small");
                btn_animate_info_div.classList.remove("btn_animate_div_out")
                btn_animate_info_div.classList.add("btn_animate_div_in")
                //info_div.classList.add("info_div");
                this.setState({
                    hide: 0
                })

            }
        }




    }









    createMapOptions(maps) {
        // next props are exposed at maps
        // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
        // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
        // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
        // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
        // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
        return {
            zoomControlOptions: {
                position: maps.ControlPosition.RIGHT_CENTER,
                style: maps.ZoomControlStyle.SMALL
            },
            mapTypeControlOptions: {
                position: maps.ControlPosition.TOP_RIGHT
            },
            mapTypeControl: true,
            styles: [
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#e0efef"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "hue": "#1900ff"
                        },
                        {
                            "color": "#c0e8e8"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 100
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "lightness": 700
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#7dcdcd"
                        }
                    ]
                }
            ]
        };
    }

    render() {



        const handleApiLoaded = (map, maps) => {
            return {
                zoomControlOptions: {
                    position: maps.ControlPosition.RIGHT_CENTER,
                    style: maps.ZoomControlStyle.SMALL
                },
                mapTypeControlOptions: {
                    position: maps.ControlPosition.TOP_RIGHT
                },
                mapTypeControl: true,

            };
        };


        return (

            <div id="contacto">
                <div className="row layoutMap" style={{ height: '85vh', width: '100%' }}>
                    <GoogleMapReact
                        options={this.createMapOptions}
                        bootstrapURLKeys={{ key: 'AIzaSyAp9u7X1d-wgHul4HPXzoDj93WxPzMqxqM' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}

                        yesIWantToUseGoogleMapApiInternals
                    >
                        <Marker
                            lat={2.451680}
                            lng={-76.601451}

                            src={this.state.img_marker}
                        //src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/134893/pin-red.svg"
                        //txt ="MY MARKER"
                        />



                    </GoogleMapReact>
                    <div className="hide-on-med-and-up ">
                        <div className="info_div_small " id="info_div_small">
                            <span onClick={this.hideOrShowDiv.bind(this)} id="btn_animate_info_div" className="btn_animate_div_in ">
                                <i className="Tiny material-icons" id="arrow_hide_or_show">keyboard_arrow_left</i>
                            </span>
                            <div className="row" id="head_info">
                                <div className="col s12 m12 l12 " id="head_info_div">
                                    <span className="headline"> Horarios</span>
                                </div>
                                <div className="col s12 m12 l12" id="sede_div">

                                    <span className="headline_sede"> Sede Popayán</span>

                                </div>
                            </div>
                            <div id="label_viernes" className="row ">
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Lun - Vie</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">

                                    <span className="horario_hour" >8AM - 6PM</span>
                                </div>

                            </div>
                            <div className="row " id="head_info">

                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Sábado</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horario_hour">8AM - 12AM</span>
                                </div>
                            </div>

                            <div className="row " id="sede_div_santander">

                                <div className="col l12" id="col_0_pading">

                                    <span className="headline_sede"> Sede Santander</span>
                                </div>
                            </div>


                            <div id="label_viernes" className="row ">
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Lun - Vie</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">

                                    <span className="horario_hour">8AM - 6PM</span>
                                </div>

                            </div>
                            <div className="row ">

                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Sábado</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horario_hour">8AM - 12AM</span>
                                </div>
                            </div>


                            <div className="row " id="head_info" >
                                <div className="col l12  " id="col_0_pading" >



                                    <h3 className="titulos">
                                        <span className="headline">Contacto <i className="Medium material-icons">call</i></span>
                                    </h3>
                                </div>

                            </div>
                            <div className="row " id="head_info">
                                <div className="col s6 m6 l12">
                                    <div className="row" id="head_info">


                                        <div className="col s12 l6 " id="col_0_pading">

                                            <span className="horariotext"> Popayán</span>

                                        </div>
                                        <div className="col s12 l6" id="col_0_pading">

                                            <span className="horario_hour">+(57) 8 392735 </span>
                                        </div>
                                    </div>
                                    <div className="row  " id="head_info">

                                        <div className="col s12 l6" id="col_0_pading">


                                            <span className="horariotext"> Santander</span>

                                        </div>
                                        <div className="col s12 l6" id="col_0_pading">

                                            <span className="horario_hour">+(57) 8 443333</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s6 m6 l12">
                                    <div className="row" id="head_info">


                                        <div className="col s12 l6 " id="col_0_pading">

                                            <span className="horariotext"> Cel. Pop</span>

                                        </div>
                                        <div className="col s12 l6" id="col_0_pading">

                                            <span className="horario_hour">317 441 2170 </span>
                                        </div>
                                    </div>
                                    <div className="row  " id="head_info">

                                        <div className="col s12 l6" id="col_0_pading">


                                            <span className="horariotext">  Cel. Sant</span>

                                        </div>
                                        <div className="col s12 l6" id="col_0_pading">

                                            <span className="horario_hour">315 389 2600</span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="hide-on-small-only hide-on-large-only">
                        <div className="info_div_medium " id="info_div_medium">
                            <span onClick={this.hideOrShowDiv.bind(this)} id="btn_animate_info_div_medium" className="btn_animate_div_in ">
                                <i className="Tiny material-icons" id="arrow_hide_or_show_medium">keyboard_arrow_left</i>
                            </span>
                            <div className="row" id="head_info">
                                <div className="col s12 m12 l12 " id="head_info_div">
                                    <span className="headline"> Horarios</span>
                                </div>
                                <div className="col s12 m12 l12" id="sede_div">

                                    <span className="headline_sede"> Sede Popayán</span>

                                </div>
                            </div>
                            <div id="label_viernes" className="row ">
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Lun - Vie</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">

                                    <span className="horario_hour" >8AM - 6PM</span>
                                </div>

                            </div>
                            <div className="row " id="head_info">

                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Sábado</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horario_hour">8AM - 12AM</span>
                                </div>
                            </div>

                            <div className="row " id="sede_div_santander">

                                <div className="col l12" id="col_0_pading">

                                    <span className="headline_sede"> Sede Santander</span>
                                </div>
                            </div>


                            <div id="label_viernes" className="row ">
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Lun - Vie</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">

                                    <span className="horario_hour">8AM - 6PM</span>
                                </div>

                            </div>
                            <div className="row ">

                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Sábado</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horario_hour">8AM - 12AM</span>
                                </div>
                            </div>


                            <div className="row " id="head_info" >
                                <div className="col l12  " id="col_0_pading" >



                                    <h3 className="titulos">
                                        <span className="headline">Contacto <i className="Medium material-icons">call</i></span>
                                    </h3>
                                </div>

                            </div>
                            <div className="row " id="head_info">
                                <div className="col s6 m6 l12">
                                    <div className="row" id="head_info">


                                        <div className="col s12 l6 " id="col_0_pading">

                                            <span className="horariotext"> Popayán</span>

                                        </div>
                                        <div className="col s12 l6" id="col_0_pading">

                                            <span className="horario_hour">+(57) 8 392735 </span>
                                        </div>
                                    </div>
                                    <div className="row  " id="head_info">

                                        <div className="col s12 l6" id="col_0_pading">


                                            <span className="horariotext"> Santander</span>

                                        </div>
                                        <div className="col s12 l6" id="col_0_pading">

                                            <span className="horario_hour">+(57) 8 443333</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s6 m6 l12">
                                    <div className="row" id="head_info">


                                        <div className="col s12 l6 " id="col_0_pading">

                                            <span className="horariotext"> Cel. Pop</span>

                                        </div>
                                        <div className="col s12 l6" id="col_0_pading">

                                            <span className="horario_hour">317 441 2170 </span>
                                        </div>
                                    </div>
                                    <div className="row  " id="head_info">

                                        <div className="col s12 l6" id="col_0_pading">


                                            <span className="horariotext">  Cel. Sant</span>

                                        </div>
                                        <div className="col s12 l6" id="col_0_pading">

                                            <span className="horario_hour">315 389 2600</span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="hide-on-med-and-down">
                        <div className="info_div " id="info_div_large">
                            <div className="row" id="head_info">
                                <div className="col s12 m12 l12 " id="head_info_div">


                                    <span className="headline"> Horarios</span>
                                </div>
                                <div className="col s12 m12 l12" id="sede_div">

                                    <span className="headline_sede"> Sede Popayán</span>

                                </div>


                            </div>

                            <div id="label_viernes" className="row ">
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Lun - Vie</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">

                                    <span className="horario_hour" >8AM - 6PM</span>
                                </div>

                            </div>
                            <div className="row " id="head_info">

                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Sábado</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horario_hour">8AM - 12AM</span>
                                </div>
                            </div>





                            <div className="row " id="sede_div_santander">

                                <div className="col l12" id="col_0_pading">

                                    <span className="headline_sede"> Sede Santander</span>
                                </div>
                            </div>


                            <div id="label_viernes" className="row ">
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Lun - Vie</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">

                                    <span className="horario_hour">8AM - 6PM</span>
                                </div>

                            </div>
                            <div className="row ">

                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horariotext"> Sábado</span>

                                </div>
                                <div className="col s6 m6 l6" id="col_0_pading">
                                    <span className="horario_hour">8AM - 12AM</span>
                                </div>
                            </div>


                            <div className="row " id="head_info" >
                                <div className="col l12  " id="col_0_pading" >



                                    <h3 className="titulos">
                                        <span className="headline">Contacto <i className="Medium material-icons">call</i></span>
                                    </h3>
                                </div>

                            </div>
                            <div className="row " id="head_info">
                                <div className="col s6 m6 l12">
                                    <div className="row" id="head_info">


                                        <div className="col s12 l6 " id="col_0_pading">

                                            <span className="horariotext"> Popayán</span>

                                        </div>
                                        <div className="col s12 l6" id="col_0_pading">

                                            <span className="horario_hour">+(57) 8 392735 </span>
                                        </div>
                                    </div>
                                    <div className="row  " id="head_info">

                                        <div className="col s12 l6" id="col_0_pading">


                                            <span className="horariotext"> Santander</span>

                                        </div>
                                        <div className="col s12 l6" id="col_0_pading">

                                            <span className="horario_hour">+(57) 8 443333</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s6 m6 l12">
                                    <div className="row" id="head_info">


                                        <div className="col s12 l6 " id="col_0_pading">

                                            <span className="horariotext"> Cel. Pop</span>

                                        </div>
                                        <div className="col s12 l6" id="col_0_pading">

                                            <span className="horario_hour">317 441 2170 </span>
                                        </div>
                                    </div>
                                    <div className="row  " id="head_info">

                                        <div className="col s12 l6" id="col_0_pading">


                                            <span className="horariotext">  Cel. Sant</span>

                                        </div>
                                        <div className="col s12 l6" id="col_0_pading">

                                            <span className="horario_hour">315 389 2600</span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>



                </div>
            </div>




        );
    }
}


export default Contacto;