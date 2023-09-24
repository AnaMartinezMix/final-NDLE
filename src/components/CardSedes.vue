<script setup lang="ts">
</script>

<template>
   <template>
  <!-- Parte del modal 1 cuando se le da clic-->
  <div class="portfolio-modal modal fade" :id="'portfolioModal1'" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" @click="closeModal">
          <img src="assets/imagenes/close-icon.svg" alt="Close modal" />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="modal-body">
                <!-- Detalles de cuando se abre el modal-->
                <CardSedes
                  :modalId="1"
                  modalTitle="El espacio revolucionando tu vida (2017)"
                  sede="Chilpancingo de los Bravo, Gro."
                  modalImage="assets/imagenes/Portfolio/2017.png"
                  modalDescription="Esta es una imagen de los jóvenes voluntarios (divulgadores de ciencia) que participaron en este año!"
                />
                <button class="btn btn-primary btn-xl text-uppercase" @click="closeModal">
                  <i class="fas fa-times me-1"></i> Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Parte del modal 2 cuando se le da clic-->
  <div class="portfolio-modal modal fade" :id="'portfolioModal2'" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-bs-dismiss="modal"><img src="assets/imagen/close-icon.svg" alt="Close modal" /></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="modal-body">
                <!-- Detalles de cuando se abre el modal-->
                <h2 class="text-uppercase">Cosmovisiones, las historias del cielo(2018).</h2>
                <p class="item-intro text-muted">Sede: Pilcaya, Gro.</p>
                <img class="img-fluid d-block mx-auto" src="assets/imagen/Portfolio/2018.png" alt="..." />
                <p>Observación nocturna mediante telescopio azimutal</p>
                <button class="btn btn-primary btn-xl text-uppercase" @click="closeModal">
                  <i class="fas fa-times me-1"></i> Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Agrega aquí los otros modales en el mismo formato -->
</template>

<script>
export default {
  methods: {
    closeModal() {
      // Agrega aquí la lógica para cerrar el modal
    },
  },
};
</script>
