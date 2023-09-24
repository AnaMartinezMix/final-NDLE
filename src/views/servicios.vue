<script setup lang="ts">
import Servicios from '@/components/views/Servicios.vue';

</script>

<template>
  <div>
    <Servicios />
  </div>
  <section class="page-section" id="services">
    <div class="container3">
      <h2 class="section-heading text-uppercase">Servicios</h2>
      <h3 class="section-subheading text-muted">Estas son las actividades gratuitas que realizamos</h3>
    </div>
    <div class="container4">
      <div class="row text-center">
        <div class="col-md-4">
          <div class="service-item">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fa-solid fa-star fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Observaciones</h4>
            <p class="text-muted">Utilizamos telescopios, tanto solares como nocturnos.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-solid fa-person-chalkboard fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Conferencias</h4>
            <p class="text-muted">Con astrónomos, físicos, matemáticos, meteorólogos, químicos.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-solid fa-person-burst fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Talleres</h4>
            <p class="text-muted">¡Tenemos para todas las edades! Preescolar, primaria, secundaria, bachillerato y público en general.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilos específicos de tu componente */
.container3 {
  background-color: #f0f0f0;
  padding: 20px;
}

/* Estilos para tus elementos dentro de container3 */
.container3 h2 {
  font-size: 24px;
  color: #333;
}

.container4 {
  /* Estilos para container4 */
}

/* Estilos para tus elementos dentro de container4 */
.container4 .service-item {
  /* Estilos para service-item */
}

/* Más estilos según tus necesidades... */
</style>
