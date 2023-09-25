<script setup lang="ts">
import Servicios from '@/components/views/Servicios.vue';
import CardServicios from '@/components/icons/CardServicios.vue'; 
</script>

<template>
  <div>
    <Servicios />
    <CardServicios/>
  </div>
  <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Servicios</h2>
                    <h3 class="section-subheading text-muted">Estas son las actividades gratuitas que realizamos</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fa-solid fa-star fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Observaciones</h4>
                        <p class="text-muted">Utilizamos telescopios, tanto solares como nocturnos.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-solid fa-person-chalkboard fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Conferencias</h4>
                        <p class="text-muted">Con astronomos, físicos, matemáticos, meteorologos, químicos.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-solid fa-person-burst fa-stack-1x fa-inverse"></i>
                            
                    
                        </span>
                        <h4 class="my-3">Talleres</h4>
                        <p class="text-muted">¡Tenemos para todas las edades! Preescolar, primaria, secundaria, bachillerato y publico en general.</p>
                    </div>
                </div>
            </div>
        </section>
        <hr>
</template>

<script>
export default {
  methods: {
    closeModal() { 
    },
  },
}; 
</script>


<style scoped>

</style>
