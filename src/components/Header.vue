<script setup lang="ts">
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top bc-">
      <a class="navbar-brand">
        <img src="@/assets/imagenes/Logo.png" alt="Logo" class="logo-image">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto"> 
          <li class="nav-item">
            <a class="nav-link" href="inicio">INICIO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="conocenos">CONÓCENOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="servicios">SERVICIOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="sedes">SEDES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="nuestroequipo">NUESTRO EQUIPO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Suscribete">SUSCRÍBETE</a>
          </li>
        </ul>
      </div>
     </nav>
  </div> 
</template>

<style>
.cont {
  display: flex;
  justify-content: flex-end;
  padding: 100px;
  background-color: transparent;
  color: transparent;
}

.logo-image{
  max-width: 190px;
  height: fit-content;
  margin-right: 400px;
  padding-left: 1%;
}

.bc- {
  background-color: rgba(18, 18, 18, 0.21);
}

.navbar-nav .nav-link {
  color: rgb(255, 255, 255); 
  font-size: 20px; 
  margin-right: 20px;
  margin-inline: 10px; 
  text-transform: uppercase; 
  transition: color 0.1s; 
}

.navbar-nav .nav-link:hover {
  color: #c4412300;
}
</style>



