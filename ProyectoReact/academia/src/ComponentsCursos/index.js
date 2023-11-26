import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';


class ListarCursos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id : "",
            nombre : "",
            descripcion : "",
            tiempo : "",
            usuario : "",
            url : "https://paginas-web-cr.com/ApiPHP/apis/",
            listar : "ListaCurso.php"
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
            // pintartabla(datosrespuesta.data);
        })
        .catch(console.log);//captura errores

        
    }

    // pintartabla(){

    //     this.setState({
    //         //this.state
    //     });

    // }

    state = {  }
    render() { 
        const {
            id  ,
            nombre ,
            descripcion  ,
            tiempo ,
            usuario ,
            url ,
            listar

        } = this.state;

        return ( 

            <div>
                <h1>Listar Cursos</h1>
                <div key={this.state} className="table table-striped
                                table-hover
                                table-borderless
                                table-black
                                align-middle">
                    <table className="table table-light">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Tiempo</th>
                                <th>Usuario</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-primary">
                                <td scope="row">{this.state.id} </td>
                                <td>{this.state.nombre}</td>
                                <td>{this.state.descripcion}</td>
                                <td>{this.state.tiempo}</td>
                                <td>{this.state.usuario}</td>
                                <td>"BotonEliminar"</td>
                                
                            </tr>
        
                        </tbody>
                    </table>
                </div>
                
            </div>
               
           


         );
            
    }
}
 
export default ListarCursos;