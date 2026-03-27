<template>
  <footer class="border-t border-gold-400/20">
    <div class="bg-charcoal text-white/70 py-10">
      <div class="max-w-5xl mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="font-serif text-white/90 font-bold">Dr. Katharina Weweck</p>

          <div class="flex items-center gap-6 text-sm">
            <router-link to="/impressum" class="hover:text-white transition-colors">Impressum</router-link>
            <router-link to="/datenschutz" class="hover:text-white transition-colors">Datenschutzerklärung</router-link>
          </div>

          <p class="text-sm text-white/40">&copy; {{ new Date().getFullYear() }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>
