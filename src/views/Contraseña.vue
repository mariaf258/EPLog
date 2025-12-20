<script setup lang="ts">
import { ref } from 'vue'

type Seccion = 'info' | 'password'

const seccionActiva = ref<Seccion>('password')
</script>

<template>
  <div class="perfil-container">
    <!-- SIDEBAR -->
    <aside class="sidebar">
      <h1 class="logo">EPLog</h1>
      <h3 class="menu-title">Menú</h3>
      <ul class="menu">
        <router-link to="/" class="sid-inicio">
          <li><span>🏠 Inicio</span></li></router-link
        >

        <li><span>📚 Cursos</span></li>
        <li><span>📑 Recursos</span></li>
        <li><span>📈 Mi Progreso</span></li>
        <li class="activo"><span>⚙️ Mi perfil</span></li>
      </ul>
    </aside>

    <!-- CONTENIDO DERECHO -->
    <div class="perfil-content">
      <header class="header-perfil">MI PERFIL</header>

      <div class="perfil-body">
        <!-- PERFIL IZQUIERDO -->
        <section class="perfil-info">
          <div class="avatar">
            <img src="/public/user-grey.png" alt="user-grey" class="user-grey" />
          </div>
          <div class="select-camera">
            <img src="/public/camera.png" alt="camera" class="camera" />
          </div>

          <h3 class="nombre-estudiante">NOMBRE DEL ESTUDIANTE</h3>
          <p class="grado">Grado</p>

          <ul class="perfil-menu">
            <li :class="{ activo: seccionActiva === 'info' }" @click="seccionActiva = 'info'">
              <img v-if="seccionActiva === 'info'" src="/public/pencil.png" class="lapiz" />
              <img src="/public/user-bold.png" class="icono" />
              <router-link to="/perfil" class="text-perfil">
                <span class="texto-perfil">Información Personal</span>
              </router-link>
            </li>

            <li
              :class="{ activo: seccionActiva === 'password' }"
              @click="seccionActiva = 'password'"
            >
              <img v-if="seccionActiva === 'password'" src="/public/pencil.png" class="lapiz" />
              <img src="/public/padlock.png" class="icono" />
              <span class="texto-perfil">Contraseña</span>
            </li>

            <li class="logout-item">
              <img src="/public/logout.png" class="icono" />
              <span class="texto-perfil">Cerrar Sesión</span>
            </li>
          </ul>
        </section>

        <!-- FORMULARIO -->
        <section class="perfil-form">
          <h2 class="title-contraseña">Cambiar la contraseña</h2>

          <label class="label-contraseña">Contraseña actual</label>
          <div class="input-group">
            <input type="password" placeholder="Contraseña" />
            <img src="/public/eyes-off.png" alt="eyes-off" class="eyes-off-contraseña" />
          </div>

          <label>Nueva contraseña</label>
          <div class="input-group">
            <input type="password" placeholder="Contraseña" />
            <img src="/public/eyes-off.png" alt="eyes-off" class="eyes-off-contraseña" />
          </div>
          <p class="nota">Mínimo 8 caracteres, incluye mayúsculas, minúscula, número y símbolo.</p>

          <label>Confirmar nueva contraseña</label>
          <div class="input-group">
            <input type="password" placeholder="Contraseña" />
            <img src="/public/eyes-off.png" alt="eyes-off" class="eyes-off-contraseña" />
          </div>

          <button class="btn-guardar-perfil">GUARDAR</button>
        </section>
      </div>
      <footer class="footer-perfil">
        Progreso del curso: 42% — Próxima meta: completar "Condicionales"
      </footer>
    </div>
  </div>
</template>

<style>
@import '/src/assets/contraseña.css';
</style>
