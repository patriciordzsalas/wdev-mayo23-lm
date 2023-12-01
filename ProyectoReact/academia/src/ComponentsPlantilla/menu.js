import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <ul className="nav justify-content-center  ">
                    <li className="nav-item">
                        <a className="nav-link active" href="/ListarCursos" aria-current="page">Listar Cursos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/ListarEstudiantes">Listar Estudiantes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/ListarProfesores">Listar Profesores</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/ListarGrupos">Listar Grupos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/ListarUsuarios">Listar Usuarios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Chat</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/CrearCursos">CrearCursos</a>
                    </li>
                </ul>
            </div>
         );
    }
}
 
export default Menu;