import React from 'react';

class ListarEstudiantes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id : "",
            cedula: "",
            correoelectronico: "",
            telefono: "",
            telefonocelular: "",
            fechanacimiento: "",
            sexo: "",
            direccion: "",
            nombre : "",
            apellidopaterno : "",
            apellidomaterno : "",
            idCarreras: "",
            usuario : "",
            nacionalidad: "",
            url : "https://paginas-web-cr.com/ApiPHP/apis/",
            listar : "ListaEstudiantes.php",
            datos : [],
            datosCargados : false
        }
    }

    componentDidMount(){
        this.cargardatos();
    }

    cargardatos(){

        
        console.log("Cargando");
        // const { urlListar } = this.state;
        var urllista = this.state.url + this.state.listar;

        fetch(urllista)
        .then(respuesta => respuesta.json()) 
        .then(datosrespuesta => {
            console.log(datosrespuesta.data);
            this.setState({datos: datosrespuesta.data, datosCargados: true });
        })
        .catch(console.log);//captura errores

        
    }

    state = {  }
    render() { 
        const {
            datos

        } = this.state;

        return ( 
            <div>
                <h1>Listar Estudiantes</h1>
                <div className="table table-striped
                                table-hover
                                table-borderless
                                table-black
                                align-middle">
                    <table className="table table-light">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Cedula</th>
                                <th>Correo Electronico</th>
                                <th>Telefono</th>
                                <th>Telefono Celular</th>
                                <th>Fecha de nacimiento</th>
                                <th>Sexo</th>
                                <th>Direccion</th>
                                <th>Nombre</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido Materno</th>
                                <th>Id Carreras</th>
                                <th>Usuario</th>
                                <th>Nacionalidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map(
                                    (datosExtraidos) => (
                                        <tr key={datosExtraidos.id} className="table-primary">
                                            <td scope="row">{datosExtraidos.id} </td>
                                            <td>{datosExtraidos.cedula}</td>
                                            <td>{datosExtraidos.correoelectronico}</td>
                                            <td>{datosExtraidos.telefono}</td>
                                            <td>{datosExtraidos.telefonocelular}</td>
                                            <td>{datosExtraidos.fechanacimiento}</td>
                                            <td>{datosExtraidos.sexo}</td>
                                            <td>{datosExtraidos.direccion}</td>
                                            <td>{datosExtraidos.nombre}</td>
                                            <td>{datosExtraidos.apellidopaterno}</td>
                                            <td>{datosExtraidos.apellidomaterno}</td>
                                            <td>{datosExtraidos.idCarreras}</td>
                                            <td>{datosExtraidos.usuario}</td>
                                            <td>{datosExtraidos.nacionalidad}</td>
                                            <td>"BotonEliminar"</td>
                                        </tr>
                                    )

                                )
                            
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
  
         );
    }
}
 
export default ListarEstudiantes;