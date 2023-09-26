<script setup lang="ts">
import Formulario from '@/components/Formulario.vue';
</script>

<template>
  <div>
    <section class="page-section" id="contact">
      <div class="container text-center">
        <h2 class="section-heading text-uppercase">Suscríbete</h2>
        <h3 class="section-subheading text-muted">Recibe información sobre nuestros próximos eventos</h3>
        <formulario />
        <div class="col-md-6 center mx-auto">
        <span class="fa-stack fa-4x">
            <i class="fa-solid fa-star fa-stack-1x fa-inverse"></i>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section-heading {
  margin-top: 20px;
  font-size: 2.9rem;
  color: #333; 
}

.section-subheading {
  font-size: 1.67rem;
  color: #343333; 
}

</style>
