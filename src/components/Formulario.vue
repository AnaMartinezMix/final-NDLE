<script setup lang="ts">
</script>

<template>
 <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                                <!-- Validación del nombre-->
                                <input class="form-control" id="name" type="text" placeholder="Nombre completo " data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="name:required">Escribe tu nombre.</div>
                            </div>
                            <div class="form-group">
                                <!-- Validación del email-->
                                <input class="form-control" id="email" type="email" placeholder="Escribe tu correo" data-sb-validations="required,email" />
                                <div class="invalid-feedback" data-sb-feedback="email:required">Es necesario escribir un correo electronico</div>
                                
                            </div>
                            <div class="form-group mb-md-0">
                                <!-- Validación del telefono-->
                                <input class="form-control" id="phone" type="tel" placeholder="Tu teléfono" data-sb-validations="required" />
                                <div class="invalid-feedback" data-sb-feedback="phone:required">El telefono es necesario.</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
                            <!-- Validación del mensaje-->
                                <textarea class="form-control" id="message" placeholder="Añade un mensaje o comentarios" data-sb-validations="required"></textarea>
                                <div class="invalid-feedback" data-sb-feedback="message:required">Es necesario añadir un mensaje o comentario.</div>
                            </div>
                        </div>
                    </div>
                
                    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center text-white mb-3">
                            <div class="fw-bolder">¡Registro completo, la informacion ha sido enviada!</div>
                        </div>
                    </div>
                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                    <!-- Envio de la información-->
                    <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">¡Quiero Suscribirme!</button></div>
                </form>
</template>

<script>
</script>