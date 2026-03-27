<template>
  <div class="bg-cream-50 min-h-screen flex flex-col">
    <div class="max-w-3xl mx-auto px-6 pt-28 pb-20 flex-1 flex flex-col items-center justify-center text-center">
      <p class="text-6xl md:text-8xl font-serif font-bold text-sage-400/30 mb-4">404</p>
      <h1 class="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-4">Seite nicht gefunden</h1>
      <p class="text-charcoal/70 leading-relaxed mb-8 max-w-md">
        Die gewünschte Seite existiert leider nicht oder wurde verschoben.
      </p>
      <router-link
        to="/"
        class="inline-flex items-center gap-2 bg-sage-400 text-white px-6 py-3 rounded-lg hover:bg-sage-500 transition-colors font-medium"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        Zurück zur Startseite
      </router-link>
    </div>

    <FooterSection />
  </div>
</template>

<script setup>
import FooterSection from '../components/FooterSection.vue'
</script>
