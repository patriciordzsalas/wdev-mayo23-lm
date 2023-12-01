import React from 'react';

class CrearCursos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id : "",
            nombre : "",
            descripcion : "",
            tiempo : "",
            usuario : "",
            url : "https://paginas-web-cr.com/ApiPHP/apis/",
            crear : "InsertarCursos.php",
            datos : [],
            datosCargados : false
        }
    }

    cambiovalorinput = (e) =>{
        const state = this.state;
        // console.log(e.target.value + "----" + e.target.name);
        state[e.target.name] = e.target.value;
        this.setState({state}); 
    }

    enviardatos = (e) =>{
        alert("test")
        var datosEnviar = {
            state : this.state ,
            // usuario : "Patricio Rdz"
        }
            

        const urlcrear= this.state.url + this.state.crear;

        fetch(urlcrear)
        .then(respuesta => respuesta.json(datosEnviar)) 
        .then(datosrespuesta => {
            console.log(datosrespuesta.data);
            this.setState({
                datos: datosrespuesta.data, 
                datosCargados: true 
            });
        })
        .catch(console.log);//captura errores
    }

    state = {  }
    render() { 

        const {
            id,
            nombre,
            descripcion,
            tiempo,
            usuario,
            url,
            crear,
            datos

        } = this.state; 
        return ( 
            
            <div className="container">
                <h1>Crear Cursos</h1>
                <div className="container">
                    <form id="formulario" onSubmit={this.enviardatos}>
                    <div className="mb-3">
                        <label for="" className="form-label">Nombre</label>
                        <input type="text"      onChange={this.cambiovalorinput}   value={nombre} 
                         className="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="nombre">
                        </input>
                        <small id="helpId" className="form-text text-muted">Help text</small>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Descripcion</label>
                        <input type="text"      onChange={this.cambiovalorinput}   value={descripcion}
                            className="form-control" name="descripcion" id="descripcion" aria-describedby="helpId" placeholder="descripcion">
                        </input>
                        <small id="helpId" className="form-text text-muted">Help text</small>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Tiempo</label>
                        <input type="text"      onChange={this.cambiovalorinput}   value={tiempo}
                            className="form-control" name="tiempo" id="tiempo" aria-describedby="helpId" placeholder="tiempo">
                        </input>
                        <small id="helpId" className="form-text text-muted">Help text</small>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" name="submit" id="submit" className="btn btn-primary">Guardar</button>
                    </div>
                    </form>
                </div>
            </div>
  
         );
    }
}
 
export default CrearCursos;