<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="app-inicio">
    <Header />
    <div class="fondo-decoracion-inicio">
      <div class="circulo-verde1"></div>
      <div class="circulo-rojo1"></div>

      <p class="p1">Aprende Lógica de Programación</p>
      <p class="p2">con proyectos reales 🚀</p>
      <p class="p3">Cursos cortos, retos, y una ruta clara de 10° a 11°.</p>

      <div class="card-flip">
        <div class="flip-inner">
          <div class="flip-front">
            <div class="card1 mb-3" style="width: 18rem">
              <div class="card-body">
                <img src="/public/bombillo-flip-front.png" alt="bombillo" class="bombillo-img" />
                <h5 class="card-title">Beneficios del curso:</h5>
                <div class="grid text-center">
                  <img src="/public/birrete-flip-front.png" alt="birrete" class="birrete-img" />
                  <img src="/public/enfoque-flip-front.png" alt="enfoque" class="enfoque-img" />
                  <img
                    src="/public/calendario-flip-front.png"
                    alt="calendario"
                    class="calendario-img"
                  />
                  <img src="/public/manos-flip-front.png" alt="manos" class="manos-img" />
                </div>
              </div>
            </div>
          </div>

          <div class="flip-back">
            <div class="card1 mb-3" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title-1">Beneficios del curso:</h5>
                <ul class="card-text">
                  <li>🚀 Aprende paso a paso desde cero.</li>
                  <li>🧩 Ejercicios prácticos y retos.</li>
                  <li>🎯 Rutas de aprendizaje claras.</li>
                  <li>👨‍💻 Proyectos aplicables en la vida real.</li>
                </ul>
                <div class="btn-container">
                  <a href="#" class="btn registro">Entrar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="circulo-verde2"></div>
      <div class="circulo-rojo2"></div>

      <div class="frase">
        <div class="texto">
          <p class="p4">ESTUDIANTES</p>
          <p class="p5">La lógica es la llave que abre todos los mundos digitales.</p>
          <p class="p6">
            Con cada reto de lógica, desarrollas tu mente para resolver problemas reales.
          </p>
        </div>
        <img src="/public/laptop.png" alt="Laptop" class="icono-laptop" />
      </div>

      <div class="card-flip">
        <div class="flip-inner">
          <div class="flip-front">
            <div class="card2 mb-3" style="width: 18rem">
              <div class="card-body">
                <img src="/public/funciona-flip-front.png" alt="bombillo" class="bombillo-img" />
                <h5 class="card-title-2">Cómo funciona (paso a paso):</h5>
                <div class="img-beneficios">
                  <img src="/public/beneficios.jpeg" alt="beneficios" class="beneficios-img" />
                </div>
              </div>
            </div>
          </div>

          <div class="flip-back">
            <div class="card2 mb-3" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title-1">Cómo funciona (paso a paso):</h5>
                <ul class="card-text">
                  <li>📚 Aprende con lecciones cortas.</li>
                  <li>✍️ Practica con retos interactivos.</li>
                  <li>🔍 Aplica en proyectos reales.</li>
                  <li>🎓 Sigue tu progreso hasta completarlo.</li>
                </ul>
                <div class="btn-container">
                  <a href="#" class="btn registro">Entrar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="circulo-verde3"></div>
      <div class="circulo-rojo3"></div>

      <div class="circulo-verde4"></div>
      <div class="circulo-rojo4"></div>
    </div>

    <Footer />
  </div>
</template>

<style>
@import '/src/assets/inicio.css';
</style>
