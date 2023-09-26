<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Inicio from './views/inicio.vue';
import Conocenos from './components/conocenos.vue';
import Suscribete from './views/Suscribete.vue';
import Servicios from './views/Servicios.vue';
import Sedes from './views/sedes.vue';
import Nuestroequipo from './views/nuestroequipo.vue';

</script>

<template> 
  <Header></Header>
  
  <RouterView></RouterView>
  <Inicio></Inicio>
  <Conocenos></Conocenos>
  <Servicios></Servicios>
  <Sedes></Sedes>
  <Nuestroequipo></Nuestroequipo>
  <Suscribete></Suscribete>
  <Footer></Footer>
  </template>
