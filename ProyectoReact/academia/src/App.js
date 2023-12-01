// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


import ListarCursos from './ComponentsCursos/index';
import Menu from './ComponentsPlantilla/menu';
import Dashboard from './ComponentsPlantilla/dashboard';


import ListarEstudiantes from './ComponentsEstudiantes/estudiantes';
import ListarProfesores from './ComponentsProfesores/profesores';
import ListarGrupos from './ComponentsGrupos/grupos';
import ListarUsuarios from './ComponentsUsuarios/usuarios';
import CrearCursos from './ComponentsCursos/crear';

import { Route, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div>
      <div>
        <Menu></Menu>
      </div>
      <div>
      <Router>
          <Route exact path="/" component={Dashboard}></Route>

          <Route path="/ListarCursos" component={ListarCursos}></Route>
          <Route path="/ListarEstudiantes" component={ListarEstudiantes}></Route>
          <Route path="/ListarProfesores" component={ListarProfesores}></Route>
          <Route path="/ListarGrupos" component={ListarGrupos}></Route>
          <Route path="/ListarUsuarios" component={ListarUsuarios}></Route>
          <Route path="/CrearCursos" component={CrearCursos}></Route>
      </Router>
      </div>
      
          
    </div>
      
     
      
  );
}

export default App;
