import React, { Component } from 'react';
import './Perfil.css'
import M from "materialize-css";
import axios from "axios";
import $ from 'jquery';
import ModalResultado from './modalInscripcion/ModalInscrip';

let tableDataAtl;
let tableDataEmf
let Datagbl;

class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data_resultados: [],
            resultados: [],
            resultados_emf: [],
            primer_nombre: '',
            segundo_nombre: '',
            primer_apellido: '',
            segundo_apellido: '',
            fecha_nacimiento: '',
            no_identificacion: '',
            tipo_identificacion: '',
            file: '',
            id_estimacion: '',
            porcentaje_perfil: 0, //Adición para calcular porcentaje de perfil
            estimacion_selected: ''

        }

        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
        this.changeIdEstimacion = this.changeIdEstimacion.bind(this);


    }



    onChange(e) {


        var elem = document.getElementById("loaderphoto")
        elem.style.display = "inline-block"
        var imagen = document.getElementById("profile_picture")
        imagen.style.display = "none"

        this.fileUpload(e.target.files[0]).then((response) => {


            var result = response.data;


            if (result.code == 1) {


                //traer id de usuario desde el local storage
                //console.log(localStorage.getItem('id'))
                var srcProfileImg = "https://fig.org.co/atlanticv2/public/userAvatar/" + localStorage.getItem('id') + "/" + result.file_name

                this.setState({
                    file: srcProfileImg,

                })
                elem.style.display = "none"
                imagen.style.display = "inline-block"



            } else {
                alert("error al cambiar la foto de perfil");
            }
        })

        //this.setState({ file: e.target.files[0] })
    }
    fileUpload(file) {
        const url = 'https://fig.org.co/atlanticv2/usuarios/updateProfilePicture';
        const formData = new FormData();
        formData.append('file', file)
        //traer id de usuario desde el local storage
        //console.log(localStorage.getItem('id'))
        formData.append('id_usuario', localStorage.getItem('id'))
        formData.append("file_name", file.name)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(url, formData, config)
    }
    capitalize(s) {
        var capitalize;

        if (s.length > 0) {

            capitalize = s[0].toUpperCase() + s.slice(1);
        } else {
            capitalize = "";

        }
        return capitalize;

    }
    formatNumber(n) {
        n = String(n).replace(/\D/g, "");
        return n === '' ? n : Number(n).toLocaleString();
    }



    componentDidMount() {
        M.AutoInit();
        var loaderTabla = document.getElementById("loader")
        loaderTabla.style.display = "inline-block"

        const userData = new FormData();
        //axios.post('http://localhost/api1/rest-authentication/api/getIdentyById.php', {
        axios.post('https://emmafig.com/api1/rest-authentication/api/getIdentyById.php', {
            "id": localStorage.getItem('id')
        }
        )
            .then(res => {
                var porcentajePerfil = 0;
                var nombre1 = res.data.primer_nombre.toLowerCase();
                /*Calcular el porcentaje de perfil completado*/
                if (res.data.primer_nombre.toLowerCase() != "usuario") {
                    porcentajePerfil = porcentajePerfil + 25;
                }
                var apellido1 = res.data.primer_apellido.toLowerCase();
                if (res.data.primer_apellido.toLowerCase() != "usuario") {
                    porcentajePerfil = porcentajePerfil + 25;
                }
                if (res.data.fecha_nacimiento !== null) {
                    porcentajePerfil = porcentajePerfil + 25;
                }
                if (res.data.correo !== undefined && res.data.correo !== null) {
                    porcentajePerfil = porcentajePerfil + 25;
                }
                /* FIN Calcular el porcentaje de perfil completado*/

                var nombre2;
                var apellido2;
                var tipo_id = res.data.tipo_identificacion;
                switch (tipo_id) {
                    case 'Cédula de ciudadanía':
                        this.setState({
                            tipo_identificacion: "C.C."
                        })
                        break;
                    case 'Tarjeta de identidad':
                        this.setState({
                            tipo_identificacion: "T.I."
                        })
                        break;
                    case 'Registro civil':
                        this.setState({
                            tipo_identificacion: "R.C."
                        })
                        break;
                    case 'Cédula extranjería':
                        this.setState({
                            tipo_identificacion: "C.E."
                        })
                        break;
                    case 'NIT':
                        this.setState({
                            tipo_identificacion: "NIT:"
                        })
                        break;

                }

                console.log(res.data);
                if (res.data.segundo_nombre) {

                    nombre2 = res.data.segundo_nombre.toLowerCase();
                } else {
                    nombre2 = ""
                }
                if (res.data.segundo_apellido) {

                    apellido2 = res.data.segundo_apellido.toLowerCase();
                } else {
                    apellido2 = ""
                }

                this.setState({
                    primer_nombre: this.capitalize(nombre1),
                    segundo_nombre: this.capitalize(nombre2),

                    primer_apellido: this.capitalize(apellido1),
                    segundo_apellido: this.capitalize(apellido2),

                    no_identificacion: this.formatNumber(res.data.no_identificacion),
                    porcentaje_perfil: this.formatNumber(porcentajePerfil) // Adicionar porcentaje de perfil a state

                })
                /*Asignar porcentaje a barra de progreso */
                document.getElementById("barraPerfil").style.width = porcentajePerfil + "%";
                /*if(porcentajePerfil == 100){
                    document.getElementById("div_porcentaje_perfil").style.display = 'none';
                }*/

                //userData.append("identificacion", res.data.no_identificacion)

                //consultar si hay foto de perfil
                let id_user = new FormData();
                //traer id de usuario desde el local storage
                //console.log(localStorage.getItem('id'))
                var id_usuario = localStorage.getItem('id');
                id_user.append('id_usuario', id_usuario);
                id_user.append('filtro', 'todos');
                axios
                    .post("https://emmafig.com/api1/searchProfilePicture", id_user)
                    .then(res => {
                        let result = res.data;
                        console.log(result);

                        var srcProfile;
                        var srcProfileImg;
                        if (result.filename[0].avatar != null) {
                            //console.log(result.filename[0].avatar);
                            srcProfile = result.filename[0].avatar
                            srcProfileImg = "https://fig.org.co/atlanticv2/public/userAvatar/" + id_usuario + "/" + srcProfile
                        } else {

                            srcProfileImg = process.env.PUBLIC_URL + "/img/default-profile.png"
                        }
                        this.setState({
                            file: srcProfileImg
                        })

                        var elem = document.getElementById("loaderphoto")
                        elem.style.display = "none"
                    })
                axios
                    .post("https://emmafig.com/api1/searchHistorialCitas", id_user)
                    .then(res => {
                        let result = res.data;
                        //actualizar estado 
                        //result = JSON.parse(result)
                        if (result.code == 200) {
                            this.setState({
                                resultados: result.resultados_atl,
                                resultados_emf: result.resultados_emf
                            })
                        } else {
                            document.getElementById("msj_error").innerHTML = "No se encontraron resultados";
                        }
                        if (this.state.resultados != null || result.code == 400 || this.state.resultados_emf != null) {
                            loaderTabla.style.display = "none"
                            return false
                        }
                    })
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
    }



    changePictureProfile(e) {
        const url = 'https://fig.org.co/atlanticv2/usuarios/updateProfilePicture';
        const pictureFile = new FormData();
        pictureFile.append('imgFile', e.target.files[0].name)
        //traer id de usuario desde el local storage
        //console.log(localStorage.getItem('id'))
        pictureFile.append("id_usuario", localStorage.getItem('id'))
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post(url, pictureFile, config).then(res => {
            let result = res.data;
        })
    }

    serchResultadosFiltro() {
        document.getElementById("msj_error").innerHTML = "";
        var e = document.getElementById("selectResult")
        this.setState({
            resultados: [],
            resultados_emf: []
        })
        var loaderTabla = document.getElementById("loader")
        var tbody = document.getElementById("tbodyResult");
        tbody.style.display = "none"
        loaderTabla.style.display = "inline-block"
        var selectValue = e.options[e.selectedIndex].value;
        var dataForm = new FormData();
        dataForm.append("id_usuario", localStorage.getItem("id"));
        dataForm.append("filtro", selectValue);
        axios
            .post("https://emmafig.com/api1/searchHistorialCitas", dataForm)
            .then(res => {
                let result = res.data;
                //actualizar estado 
                //result = JSON.parse(result)
                if (result.code == 200) {
                    this.setState({
                        resultados: result.resultados_atl,
                        resultados_emf: result.resultados_emf
                    })
                } else {
                    document.getElementById("msj_error").innerHTML = "no se encontraron resultados";
                }
                if (this.state.resultados != null || result.code == 400 || this.state.resultados_emf != null) {
                    loaderTabla.style.display = "none"
                    tbody.style.display = "inline-block"
                    return false
                }
            })

    }

    formatRespuesta(resultado) {
        console.log(resultado);
        let r1 = 'No';
        let r2 = 'No';
        let r3 = 'No';
        let r4 = 'No';
        let r5 = 'No';
        let r6 = 'No';
        switch (resultado['valor_respuesta1']) {
            case '1': r1 = 'Menor de 25 años';
                break;
            case '2': r1 = 'Entre 25 y 29 años';
                break;
            case '3': r1 = 'Entre 30 y 34 años';
                break;
            case '4': r1 = 'Entre 35 y 39 años';
                break;
            case '5': r1 = 'Entre 40 y 44 años';
                break;
            case '7': r1 = 'Entre 45 y 49 años';
                break;
            case '8': r1 = 'Entre 50 y 54 años';
                break;
            case '9': r1 = 'Entre 55 y 59 años';
                break;
            default: r1 = '65 años o más';
                break;
        }
        if (resultado['valor_respuesta2'] == 1) {
            r2 = 'Sí';
        }
        switch (resultado['valor_respuesta3']) {
            case 0: r3 = 'Afro';
                break;
            case 1: r3 = 'Indígena';
                break;
            case 2: r3 = 'Mestizo';
                break;
        }
        if (resultado['valor_respuesta4'] == 1) {
            r4 = 'Sí';
        }
        if (resultado['valor_respuesta5'] == 1) {
            r5 = 'Sí';
        }
        if (resultado['valor_respuesta6'] == 1) {
            r6 = 'Sí';
        }

        let data = {
            'riesgo': resultado['riesgo'],
            'p1': '¿Cuantos años tienes?',
            'r1': r1,
            'text1': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            'p2': '¿Vives en una zona urbana?',
            'r2': r2,
            'text2': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            'p3': '¿A qué grupo étnico pertences?',
            'r3': r3,
            'text3': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            'p4': '¿Has tenido 3 o más compañeros sexuales en los últimos 5 años?',
            'r4': r4,
            'text4': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            'p5': '¿Tienes 5 o más hijos?',
            'r5': r5,
            'text5': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
            'p6': '¿Tienes cónyuge o pareja estable?',
            'r6': r6,
            'text6': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
        };
        return data;
    }

    changeIdEstimacion = (index) => {

        this.formatRespuesta(this.state.resultados_emf[index]);
        this.setState({
            estimacion_selected: this.formatRespuesta(this.state.resultados_emf[index])
        });
    }

    render() {
        var strUrl;
        let tableData;
        let tableDataEmf;
        if (this.state.resultados != null && this.state.resultados_emf != null) {
            tableData = this.state.resultados.map(function (e) {
                strUrl = "https://fig.org.co/atlanticv2/pdf/" + e.abreviatura_servicio + "/" + e.id_atencion + "?emmafig=true";
                return <tr>
                    <td>
                        {e.nombre_servicio}
                    </td>
                    <td>
                        {e.fecha_atencion}
                    </td>
                    <td>
                        <a target="_blank" href={strUrl}>Ver </a>
                    </td>
                    <td></td>
                </tr>
            })

            tableDataEmf = this.state.resultados_emf.map((e, index) => {
                strUrl = "https://emmafig.com/api1/pdf?id=" + e.id_estimacion;
                return <tr>
                    <td>
                        ESTIMACION DE RIESGO
                    </td>
                    <td>
                        {e.fecha_estimacion}
                    </td>
                    <td>
                        {/*<a target="_blank" href={strUrl}>Ver </a>*/}
                        <a data-id={e.id_estimacion} className="modal-trigger" href='#modal2' onClick={() => { this.changeIdEstimacion(index) }}>Ver</a>
                    </td>
                    <td>
                        <a target="_blank" href={strUrl}>Descargar</a>
                    </td>
                </tr>
            })
        } else if (this.state.resultados != null && this.state.resultados_emf == null) {

            tableData = this.state.resultados.map(function (e) {
                strUrl = "https://fig.org.co/atlanticv2/pdf/" + e.abreviatura_servicio + "/" + e.id_atencion + "?emmafig=true";

                return <tr>
                    <td>
                        {e.nombre_servicio}
                    </td>
                    <td>
                        {e.fecha_atencion}
                    </td>
                    <td>
                        <a target="_blank" href={strUrl}>Ver </a>
                    </td>
                    <td>
                    </td>
                </tr>
            })
        } else if (this.state.resultados == null && this.state.resultados_emf != null) {
            tableDataEmf = this.state.resultados_emf.map((e, index) => {
                /*strUrl = "https://fig.org.co/atlanticv2/pdf/" + e.abreviatura_servicio + "/" + e.id_atencion + "?emmafig=true";*/
                strUrl = "https://emmafig.com/api1/pdf?id=" + e.id_estimacion;
                return <tr>

                    <td>
                        ESTIMACION DE RIESGO
                </td>
                    <td>
                        {e.fecha_estimacion}
                    </td>
                    <td>
                        {/*<a target="_blank" href={strUrl}>Ver </a>*/}
                        <a data-id={e.id_estimacion} className="modal-trigger" href='#modal2' onClick={() => { this.changeIdEstimacion(index) }}>Ver</a>
                    </td>
                    <td>
                        <a href={strUrl}>Descargar</a>
                    </td>
                </tr>
            })
        }


        return (

            <div className="Perfil">

                <ModalResultado resultado={this.state.estimacion_selected} resultadoGotoCita={this.props.resultadoGotoCita} scroolComponent={this.props.scroolComponent} updateStateComponent={this.props.updateStateComponent} simulateClickFunction={this.props.activateScrollCalculadora} />
                <div className="container emp-profile">
                    <div className="row">
                        <div className="col l5 m5">
                            <div id="loaderphoto" className="preloader-wrapper big active">
                                <div className="spinner-layer spinner-green-only" >
                                    <div className="circle-clipper left">
                                        <div className="circle"></div>
                                    </div><div className="gap-patch">
                                        <div className="circle"></div>
                                    </div><div className="circle-clipper right">
                                        <div className="circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-img">
                                <div className="row">
                                    <div className="col l12 m12 s12">
                                        <img id="profile_picture" src={this.state.file} alt="" />

                                    </div>
                                </div>
                                <div className="file btn btn-lg btn-primary">
                                    Cambia tu foto
                                        <form id="form_img_profile" onChange={this.onChange} >

                                        <input type="file" id="foto_perfil" name="file" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col l6 m6 s12">
                            <div className="profile-head">
                                <h5 id="textCapitalize">

                                    {this.state.primer_nombre + ' ' + this.state.segundo_nombre + ' ' + this.state.primer_apellido + ' ' + this.state.segundo_apellido}
                                </h5>
                                <h6>
                                    {this.state.tipo_identificacion} {this.state.no_identificacion}
                                </h6>
                                {/*Barra de progreso para perfil*/}
                                <div className="row" id="div_porcentaje_perfil">
                                    <div className="col l12 m12 s12">
                                        <div className="row">
                                            <h6 className="col s10 left-align">Información de perfil</h6>
                                            <h6 className="col s2 right-align">{this.state.porcentaje_perfil}%</h6>
                                            {/*<a  className="btn-small buttonSmall" onClick={this.props.simulateClickFunction}>Calcula tu riesgo</a>*/}
                                        </div>
                                        <div className="progress">
                                            <div className="determinate" id="barraPerfil"></div>
                                        </div>
                                        <h7 className="col s12">Completa tu perfil y obtén un <b>bono de descuento</b> para ser redimido en tu próxima cita!</h7>
                                        <div className="edit-perfil btn btn-lg btn-primary">
                                            Edita tu perfil
                                    </div>
                                    </div>
                                </div>
                                {/*Fin barra de progreso para perfil */}

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col l12 m12 s12">
                            <h5>HISTORIAL DE RESULTADOS</h5>
                            <div className="filtroGroup">
                                <div className="row rowFiltroGroup">
                                    <div className="col s12 m4 l4">
                                        <h6 className="alig">¿Qué tipo de resultados deseas ver?</h6>
                                    </div>
                                    <div className="col s12 m4 l4">
                                        <select id="selectResult">
                                            <option value="todos">Todos</option>
                                            <option value="atl">Resultados médicos</option>
                                            <option value="emf">Estimación de riesgo</option>
                                        </select>
                                    </div>
                                    <div className="col s12 m4 l4 buttonContent">
                                        <a className="waves-light btn-small" onClick={() => this.serchResultadosFiltro()}>Buscar</a>
                                    </div>
                                </div>
                            </div>
                            <table className="striped" id="tableResultados" >
                                <thead>
                                    <tr>
                                        <th>Resultado</th>
                                        <th>Fecha </th>
                                        <th>Informe</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <p id="msj_error"></p>
                                <div className="preloader-wrapper small active" id="loader">
                                    <div className="spinner-layer spinner-green-only">
                                        <div className="circle-clipper left">
                                            <div className="circle"></div>
                                        </div><div className="gap-patch">
                                            <div className="circle"></div>
                                        </div><div className="circle-clipper right">
                                            <div className="circle"></div>
                                        </div>
                                    </div>
                                </div>
                                <tbody id="tbodyResult">
                                    {tableData}
                                    {tableDataEmf}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Perfil;