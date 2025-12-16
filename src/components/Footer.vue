<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer-column mision">
      <p>
        Nuestra misión es despertar el pensamiento lógico y analítico a través de experiencias
        lúdicas, brindando a cualquier persona, en cualquier lugar, la oportunidad de aprender y
        fortalecer las bases de la programación de manera gratuita, divertida y accesible.
      </p>
    </div>

    <div class="footer-column enlaces-utiles">
      <h3>Enlaces útiles</h3>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Cursos</a></li>
        <li><a href="#">Recursos</a></li>
        <li><a href="#">Iniciar Sesión</a></li>
      </ul>
    </div>

    <div class="footer-column contacto">
      <h3>Contacto</h3>
      <p><strong>correo@ejemplo.com</strong></p>
      <ul>
        <li>
          <a href="#"><img src="/public/youtube.png" alt="YouTube" class="icono" /> YouTube</a>
        </li>
        <li>
          <a href="#"><img src="/public/github.png" alt="GitHub" class="icono" /> GitHub</a>
        </li>
      </ul>
    </div>
  </footer>

  <div class="pie">
    <p>© 2025 EPLog — Educación en Programación y Lógica.</p>
  </div>
</template>

<style>
@import '/src/assets/footer.css';
</style>
