<script setup lang="ts"></script>

<template>
  <div class="app-registrate">
    <div class="fondo-decoracion-registrate">
      <div class="circulo-verde1-registrate"></div>
      <div class="circulo-rojo1-registrate"></div>

      <div class="circulo-verde2-registrate"></div>
      <div class="circulo-rojo2-registrate"></div>

      <div class="circulo-verde3-registrate"></div>
      <div class="circulo-rojo3-registrate"></div>
    </div>

    <div class="contenido-centrado">
      <div class="card-registro">
        <div class="icono-registro">
          <img src="/public/user-sign-up 1.png" alt="user-blue" class="user-blue" />
          <router-link to="/" class="">
            <img src="/public/icons-back.png" alt="icons-back" class="icons-back"
          /></router-link>
        </div>

        <h3 class="titulo-principal">APRENDE LÓGICA DE PROGRAMACIÓN</h3>
        <hr class="linea-registro" />
        <p class="logo-registro">EPLog</p>

        <h4 class="subtitulo-registro">Regístrate</h4>

        <div class="input-group">
          <input type="email" placeholder="Correo Electrónico" />
        </div>

        <div class="input-group">
          <input type="password" placeholder="Contraseña" />
          <img src="/public/eyes-off.png" alt="eyes-off" class="eyes-off" />
        </div>

        <p class="nota">Mínimo 8 caracteres, incluye mayúsculas, minúscula, número y símbolo.</p>

        <button class="btn-blue-registrarse">REGÍSTRATE</button>
      </div>
    </div>

    <div class="footer-registrate">
      <div class="pie-registrate">
        <p>© 2025 EPLog — Educación en Programación y Lógica.</p>
      </div>
    </div>
  </div>
</template>

<style>
@import '/src/assets/registrate.css';
</style>
