// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';


import ListarCursos from './ComponentsCursos/index';
import Menu from './ComponentsPlantilla/menu';
import Dashboard from './ComponentsPlantilla/dashboard';

import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
      <Menu></Menu>
    </div>
    <div>
      <ListarCursos></ListarCursos>
    </div>
      <Router>
        <Route exact path="/" component= {Dashboard}> </Route>

        <Route path="/ListarCursos" component= {ListarCursos}> </Route>
      </Router>
    </div>
      
  );
}

export default App;
