menuprincipal.innerHTML += `
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
<a class="navbar-brand" href="index.html">Index</a>
<button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
    aria-expanded="false" aria-label="Toggle navigation"></button>
<div class="collapse navbar-collapse" id="collapsibleNavId">
    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
        <li class="nav-item">
            <a class="nav-link active" href="https://paginas-web-cr.com/ApiPHP" target="blank" aria-current="page">API <span class="visually-hidden">(current)</span></a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Listas</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="listarestudiantes.html">ListarEstudiantes</a>
                <a class="dropdown-item" href="listarprofesores.html">ListarProfesores</a>
                <a class="dropdown-item" href="listarcurso.html">ListarCurso</a>
                <a class="dropdown-item" href="listargrupo.html">ListarGrupo</a>
                <a class="dropdown-item" href="listarusuarios.html">ListarUsuarios</a>
                <a class="dropdown-item" href="listarestudiantesgrupo.html">ListarEstudiantesGrupo</a>
                <a class="dropdown-item" href="listarprofesoresgrupo.html">ListarProfesoresGrupo</a>
            </div>
        </li>
    </ul>
</div>
</nav>`;