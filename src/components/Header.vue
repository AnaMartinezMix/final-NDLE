<script setup lang="ts">
</script>

<template>
    <div class="cont">
      <div class="item">
      </div>
  </div>
  <nav class="custome-navbar">
<ul class="nav nav-justify-content-end">
  <li class="nav-item">
    <a class="nav-link Inicio" aria-current="page" href="#">Inicio</a>
  </li>
  <li class="nav-item">
    <a class="nav-Conocenos" href="#">Conocenos</a>
  </li>
  <li class="nav-item">
    <a class="nav-Servicios" href="#">Servicios</a>
  </li>
  <li class="nav-item">
    <a class="nav-Sedes" href="#">Sedes</a>
  </li>
  <li class="nav-item">
    <a class="nav-Nuestro Equipo" href="#">Nuestro Equipo</a>
  </li>
  <li class="nav-item">
    <a class="nav-Suscribete" href="#">Suscribete</a>
  </li>
</ul>
</nav>
</template>

<script>
export default {
  name: 'CustomNavbar',
};
</script>

<style scoped>
/* Personaliza el estilo para que el menú aparezca arriba y a la derecha */
.custom-navbar {
  display:flex;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  justify-content:flex-end;
  background-color: #fff8f8; /* Cambia el color de fondo según tus preferencias */
  padding: 10px; /* Añade espaciado interno según tus preferencias */
}

.custom-navbar .nav-link {
  color: rgb(173, 78, 78); /* Cambia el color del texto según tus preferencias */
  margin-left: 15px; /* Añade espaciado entre los elementos según tus preferencias */
}
</style>
