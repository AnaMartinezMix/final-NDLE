<script setup lang="ts">
import { ref } from 'vue';
const showDetails = ref([false, false, false, false, false, false]);
</script>

<template>
  <div class="container">
    <!-- Parte del modal 1 cuando se le da clic-->
    <div class="row">
      <div class="col-md-4 g-4">
        <div class="card">
          <img src="@/assets/imagenes/portafolio/2017.png" class="card-img-top" alt="El espacio revolucionando tu vida(2017)">
          <div class="card-body">
            <h5 class="card-title text-uppercase">El espacio revolucionando tu vida(2017)</h5>
            <p class="card-text item-intro text-muted">Sede: Chilpancingo de los Bravo, Gro.</p>
            <div class="card mb-4">
              <!-- Información adicional con directiva v-if -->
              <p class="card-text item-intro text-muted" v-if="showDetails[0]">¡Esta es una imagen de los jóvenes voluntarios (divulgadores de ciencia) que participaron en este año!</p>
              <button class="btn btn-primary btn-xl text-uppercase" type="button" @click="showDetails[0] = !showDetails[0]">
                {{ showDetails[0] ? 'Ocultar Detalles' : 'Ver Detalles' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Parte del modal 2 cuando se le da clic-->
      <div class="col-md-4 g-4">
        <div class="card">
          <img src="@/assets/imagenes/portafolio/2018.png" class="card-img-top" alt="Cosmovisiones, las historias del cielo(2018)">
          <div class="card-body">
            <h5 class="card-title text-uppercase">Cosmovisiones, las historias del cielo(2018)</h5>
            <p class="card-text item-intro text-muted">Sede: Pilcaya, Gro.</p>
            <div class="card mb-4">
              <!-- Información adicional con directiva v-if -->
              <p class="card-text item-intro text-muted" v-if="showDetails[1]">Observación nocturna a cielo medio mediante telescopio azimutal</p>
              <button class="btn btn-primary btn-xl text-uppercase" type="button" @click="showDetails[1] = !showDetails[1]">
                {{ showDetails[1] ? 'Ocultar Detalles' : 'Ver Detalles' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Parte del modal 3 cuando se le da clic-->
      <div class="col-md-4 g-4">
        <div class="card">
          <img src="@/assets/imagenes/portafolio/2019.png" class="card-img-top" alt="La tabla periodica (2019)">
          <div class="card-body">
            <h5 class="card-title text-uppercase">La tabla periodica (2019)</h5>
            <p class="card-text item-intro text-muted">Sub-sede: Zitlala, Gro.</p>
            <div class="card mb-4">
              <!-- Información adicional con directiva v-if -->
              <p class="card-text item-intro text-muted" v-if="showDetails[2]">Caminata en el desfile de faroles, realizada por las calles principales de la ciudad.</p>
              <button class="btn btn-primary btn-xl text-uppercase" type="button" @click="showDetails[2] = !showDetails[2]">
                {{ showDetails[2] ? 'Ocultar Detalles' : 'Ver Detalles' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Parte del modal 4 cuando se le da clic-->
    <div class="row">
      <div class="col-md-4 g-4">
        <div class="card">
          <img src="@/assets/imagenes/portafolio/2020.png" class="card-img-top" alt="El Universo develado (2020)">
          <div class="card-body">
            <h5 class="card-title text-uppercase">El Universo develado (2020)</h5>
            <div class="card mb-4">
              <!-- Información adicional con directiva v-if -->
              <p class="card-text item-intro text-muted" v-if="showDetails[3]">Sede: on-line</p>
              <p class="card-text item-intro text-muted" v-if="showDetails[3]">En este año por desgracia no hubo sedes físicas y sólo se hicieron transmisiones por las redes sociales de todo el país con 70 sedes nacionales y 8 países replicaron el contenido.</p>
              <button class="btn btn-primary btn-xl text-uppercase" type="button" @click="showDetails[3] = !showDetails[3]">
                {{ showDetails[3] ? 'Ocultar Detalles' : 'Ver Detalles' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Parte del modal 5 cuando se le da clic-->
      <div class="col-md-4 g-4">
        <div class="card">
          <img src="@/assets/imagenes/portafolio/2021.jpg" class="card-img-top" alt="Armonía y Revolución (2021)">
          <div class="card-body">
            <h5 class="card-title text-uppercase">Armonía y Revolución (2021)</h5>
            <p class="card-text item-intro text-muted">Sede: On-line</p>
            <div class="card mb-4">
              <!-- Información adicional con directiva v-if -->
              <p class="card-text item-intro text-muted" v-if="showDetails[4]">Nuevamente no hubo sedes físicas, todo fue transmitido por redes sociales teniendo una audiencia de 32,358 personas.</p>
              <button class="btn btn-primary btn-xl text-uppercase" type="button" @click="showDetails[4] = !showDetails[4]">
                {{ showDetails[4] ? 'Ocultar Detalles' : 'Ver Detalles' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Parte del modal 6 cuando se le da clic-->
      <div class="col-md-4">
        <div class="card">
          <img src="@/assets/imagenes/portafolio/2022.PNG" class="card-img-top" alt="La ciencia, sustento del desarrollo (2022)">
          <div class="card-body">
            <h5 class="card-title text-uppercase">La ciencia, sustento del desarrollo (2022)</h5>
            <p class="card-text item-intro text-muted">Sede: Atoyac de álvarez, Gro.</p>
            <div class="card mb-4">
              <!-- Información adicional con directiva v-if -->
              <p class="card-text item-intro text-muted" v-if="showDetails[5]">Divulgadores de ciencia, astrónomos y miembros del H. Ayuntamiento del municipio en la sede.</p>
              <button class="btn btn-primary btn-xl text-uppercase" type="button" @click="showDetails[5] = !showDetails[5]">
                {{ showDetails[5] ? 'Ocultar Detalles' : 'Ver Detalles' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px; /* Espaciado interior del contenedor */
}

.card {
  margin-bottom: 20px; /* Espaciado entre las tarjetas */
  background-color: blueviolet;
}

.card-title {
  font-size: 1.25rem; /* Tamaño del título de la tarjeta */
}

.card-text {
  font-size: 1rem; /* Tamaño del texto de la tarjeta */
  justify-content: center;
  
}

.card-body {
  text-align: center; /* Alinea el contenido al centro de la tarjeta */
}

/* Estilos para los botones */
.btn {
  margin-top: 10px; /* Espaciado superior del botón */
}

/* Estilos para las imágenes de las tarjetas */
.card-img-top {
  max-height: 200px; /* Altura máxima de la imagen */
  object-fit: cover; /* Escala la imagen para que cubra todo el espacio */
}
</style>
