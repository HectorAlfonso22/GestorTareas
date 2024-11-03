<template>
  <div id="app" class="container py-4">
    <!-- Header Section -->
    <div class="text-center">
      <h1 class="display-4 text-primary mb-4">Gestor de Tareas</h1>
      <p class="lead text-muted">Organiza tus tareas de forma sencilla y eficaz</p>
    </div>

    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary rounded shadow-sm mb-4">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item mx-2">
            <router-link class="nav-link btn btn-outline-light px-4" to="/agregar-tarea">Añadir Tarea</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link btn btn-outline-light px-4" to="/extraer-tareas">Extraer Tareas de la API</router-link>
          </li>
          <li class="nav-item mx-2">
            <router-link class="nav-link btn btn-outline-light px-4" to="/vista-combinada">Vista Combinada</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main Content Area -->
    <div class="card shadow-lg p-4 rounded bg-light">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/* Custom Styles */
body {
  background-color: #f8f9fa;
}

.navbar .nav-link {
  transition: background-color 0.3s ease;
}

.navbar .nav-link:hover {
  background-color: #ffffff;
  color: #007bff !important;
}

.card {
  background: #ffffff;
  border: none;
}

.card p {
  font-size: 1.1rem;
  color: #6c757d;
}

h1.display-4 {
  font-weight: 700;
}
</style>
