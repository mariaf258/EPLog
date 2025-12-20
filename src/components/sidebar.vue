<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <aside class="sidebar">
    <h1 class="logo">EPLog</h1>
    <h3 class="menu-title">Menú</h3>
    <ul class="menu">
      <router-link to="/" class="sid-inicio">
        <li :class="{ activo: route.name === 'inicio' }">
          <span>🏠 Inicio</span>
        </li>
      </router-link>

      <router-link to="/cursos" class="sid-inicio">
        <li :class="{ activo: route.name === 'cursos' }">
          <span>📚 Cursos</span>
        </li>
      </router-link>

      <router-link to="/recursos" class="sid-inicio">
        <li :class="{ activo: route.name === 'recursos' }">
          <span>📑 Recursos</span>
        </li>
      </router-link>

      <router-link to="/progreso" class="sid-inicio">
        <li :class="{ activo: route.name === 'progreso' }">
          <span>📈 Mi Progreso</span>
        </li>
      </router-link>

      <router-link to="/perfil" class="sid-inicio">
        <li :class="{ activo: route.name === 'perfil' }">
          <span>⚙️ Mi perfil</span>
        </li>
      </router-link>
    </ul>
  </aside>
</template>

<style>
@import '/src/assets/sidebar.css';
</style>
