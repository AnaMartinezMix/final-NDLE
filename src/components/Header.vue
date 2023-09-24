<script setup lang="ts">
</script>

<template>
  <div id="app">
<body id="page-top">
  <div class="container">
    <a class="navbar-brand" href="#page-top"><img src="@/assets/imagenes/LogoNdeC.png" alt="Logo de noche de las estrellas" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
  </div>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
      <li class="nav-item"><a class="nav-link" href="#t">Inicio</a></li>
      <li class="nav-item"><a class="nav-Conocenos" href="#">Conocenos</a></li>
      <li class="nav-item"><a class="nav-Servicios" href="#Servicios.vue">Servicios</a></li>
      <li class="nav-item"><a class="nav-Sedes" href="#portfolio">Sedes</a></li>
      <li class="nav-item"><a class="nav-Nuestro Equipo" href="#team">Nuestro Equipo</a></li>
      <li class="nav-item"><a class="nav-Suscribete" href="#contact">Suscribete</a></li>
   </ul>
 </nav>

 <div class="container2">
                <div class="masthead-subheading">¡Bienvenido! :)</div>
                <div class="masthead-heading text-uppercase">¡Somos NdE Chilpancingo!</div>
                <a class="btn btn-primary btn-xl text-uppercase" href="#services">Saber más...</a>
            </div>

</body>
  </div>
</template>

<script>
export default {
  name: 'CustomNavbar',
};
</script>

<style scoped>
/* Personaliza el estilo para que el menú aparezca arriba y a la derecha */
.custom-navbar {
  display:inline-flex;
  grid-template-columns: repeat(auto-fill, minmax(100px, 6fr));
  justify-content:flex-start;
  background-color: #fff8f800; /* Cambia el color de fondo según tus preferencias */
  padding: 100px; /* Añade espaciado interno según tus preferencias */
}

.container {
  /* Otra propiedad de estilo, si es necesario */
  background-image: url('C:\wp\final-NDLE\src\assets\imagenes\star1.jpg');
  background-size:auto; /* Ajusta la imagen al tamaño del contenedor */
  background-repeat: no-repeat; /* Evita la repetición de la imagen */
  /* Otras propiedades de estilo para personalizar la apariencia */
  width:max-content; /* Ancho del contenedor */
  height:max-content; /* Altura del contenedor */
}

.custom-navbar .nav-link {
  color: rgb(173, 78, 78); /* Cambia el color del texto según tus preferencias */
  margin-left: 100px; /* Añade espaciado entre los elementos según tus preferencias */
}
</style>
