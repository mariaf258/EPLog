<script setup lang="ts"></script>

<template>
  <div class="perfil-container">
    <!-- SIDEBAR -->
    <aside class="sidebar">
      <h1 class="logo">EPLog</h1>
      <h3 class="menu-title">Menú</h3>
      <ul class="menu">
        <li><span>🏠 Inicio</span></li>
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

          <h3>NOMBRE DEL ESTUDIANTE</h3>
          <p class="grado">Grado</p>

          <ul class="perfil-menu">
            <li class="activo">
              <img src="/public/user-bold.png" alt="user-bold" class="user-bold" />
              Información Personal
            </li>
            <li>
              <img src="/public/padlock.png" alt="padlock" class="padlock" />
              Cambiar Contraseña
            </li>
            <li>
              <img src="/public/logout.png" alt="logout" class="logout" />
              Cerrar Sesión
            </li>
          </ul>
        </section>

        <!-- FORMULARIO -->
        <section class="perfil-form">
          <h2>Información Personal</h2>

          <div class="radio-group">
            <label class="radio-option">
              <input type="radio" name="sexo" checked />
              <span class="radio-sexo">Mujer</span>
            </label>

            <label class="radio-option">
              <input type="radio" name="sexo" />
              <span class="radio-sexo">Hombre</span>
            </label>
          </div>

          <label>Nombre del estudiante</label>
          <input class="text-label" type="text" placeholder="Ingresa tu nombre completo" />

          <label>Gmail</label>
          <input class="text-label" type="email" placeholder="correo@ejemplo.com" />

          <label>Grado</label>
          <input class="text-label" type="text" placeholder="Decimo" />

          <label>Código</label>
          <input class="text-label" type="text" placeholder="DEC-01" />

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
@import '/src/assets/perfil.css';
</style>
