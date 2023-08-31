menuprincipal.innerHTML += `
<div>
<nav class="navbar navbar-expand navbar-dark fixed-top bg-dark">
<a class="navbar-brand" href="index.html">Inicio</a>
<button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
    aria-expanded="false" aria-label="Toggle navigation"></button>
<div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
        <li class="nav-item">
            <a class="nav-link active" href="https://paginas-web-cr.com/ApiPHP" target="blank" aria-current="page">API <span class="visually-hidden">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="listarestudiantes.html" aria-current="page">Estudiantes<span class="visually-hidden">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="listarprofesores.html" aria-current="page">Profesores<span class="visually-hidden">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="listargrupo.html" aria-current="page">Grupos<span class="visually-hidden">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="listarcurso.html" aria-current="page">Cursos<span class="visually-hidden">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="listarusuarios.html" aria-current="page">Usuarios<span class="visually-hidden">(current)</span></a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" href="enviarpassword.html" aria-current="page">Enviar Password<span class="visually-hidden">(current)</span></a>
    </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Listar</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="listarestudiantes.html">ListarEstudiantes</a>
                <a class="dropdown-item" href="listarprofesores.html">ListarProfesores</a>
                <a class="dropdown-item" href="listarcurso.html">ListarCurso</a>
                <a class="dropdown-item" href="listargrupo.html">ListarGrupo</a>
                <a class="dropdown-item" href="listarusuarios.html">ListarUsuarios</a>
                
            </div>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Crear</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
            <a class="dropdown-item" href="crearestudiante.html">CrearEstudiantes</a>
            <a class="dropdown-item" href="crearprofesor.html">CrearProfesores</a>
            <a class="dropdown-item" href="crearcurso.html">CrearCurso</a>
            <a class="dropdown-item" href="creargrupo.html">CrearGrupo</a>
            <a class="dropdown-item" href="crearusuario.html">CrearUsuario</a>

            </div>
        </li>
    </ul>
</div>
</nav>
<br>
<br>
`;