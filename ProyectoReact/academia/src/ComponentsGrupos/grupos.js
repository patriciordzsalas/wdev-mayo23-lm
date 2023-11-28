import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';


class ListarGrupos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id : "",
            nombre : "",
            url : "https://paginas-web-cr.com/ApiPHP/apis/",
            listar : "ListaGrupo.php",
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
                <h1>Listar Grupos</h1>
                <div className="table table-striped
                                table-hover
                                table-borderless
                                table-black
                                align-middle">
                    <table className="table table-light">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map(
                                    (datosExtraidos) => (
                                        <tr key={datosExtraidos.id} className="table-primary">
                                            <td scope="row">{datosExtraidos.id} </td>
                                            <td>{datosExtraidos.nombre}</td>
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
 
export default ListarGrupos;