import React from 'react';

class Nuevo extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div class="container">
                <div className="container">
                    <form id="formulario" >
                    <div className="mb-3">
                        <label for="" className="form-label">Nombre</label>
                        <input type="text"         
                         className="form-control" name="nombre" id="nombre" aria-describedby="helpId" placeholder="nombre">
                        </input>
                        <small id="helpId" className="form-text text-muted">Help text</small>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Descripcion</label>
                        <input type="text"  
                            className="form-control" name="descripcion" id="descripcion" aria-describedby="helpId" placeholder="descripcion">
                        </input>
                        <small id="helpId" className="form-text text-muted">Help text</small>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Tiempo</label>
                        <input type="text"  
                            className="form-control" name="tiempo" id="tiempo" aria-describedby="helpId" placeholder="tiempo">
                        </input>
                        <small id="helpId" className="form-text text-muted">Help text</small>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="button" name="" id="" className="btn btn-primary">Guardar</button>
                    </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Nuevo;