<template>
  <section class="relative min-h-[85vh] flex items-center bg-gradient-to-br from-cream-100 via-cream-50 to-sage-50">
    <!-- Subtle decorative element -->
    <div class="absolute top-0 right-0 w-1/2 h-full bg-sage-100/30 rounded-bl-[120px] hidden lg:block"></div>

    <div class="relative max-w-5xl mx-auto px-6 py-32 md:py-40 w-full">
      <div class="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <!-- Text -->
        <div class="order-2 md:order-1">
          <p class="text-sage-400 font-medium tracking-widest text-sm uppercase mb-4">Psychologische Psychotherapeutin</p>
          <h1 class="font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-charcoal leading-tight mb-6">
            Dr. Katharina Weweck
          </h1>
          <p class="text-lg md:text-xl text-charcoal/70 leading-relaxed mb-8 max-w-lg">
            Einfühlsame und evidenzbasierte Psychotherapie in Kolbermoor — in Präsenz und online.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              class="inline-flex items-center justify-center px-8 py-3.5 bg-sage-400 text-white font-medium rounded-lg hover:bg-sage-500 transition-colors"
              @click.prevent="scrollTo('#kontakt')"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="#therapieangebot"
              class="inline-flex items-center justify-center px-8 py-3.5 border border-sage-400/30 text-sage-500 font-medium rounded-lg hover:bg-sage-50 transition-colors"
              @click.prevent="scrollTo('#therapieangebot')"
            >
              Therapieangebot
            </a>
          </div>
        </div>

        <!-- Photo placeholder -->
        <div class="order-1 md:order-2 flex justify-center">
          <div class="relative">
            <div class="w-64 h-80 md:w-72 md:h-96 rounded-2xl bg-sage-100 overflow-hidden shadow-lg">
              <div class="w-full h-full flex items-center justify-center text-sage-300">
                <svg class="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
              </div>
            </div>
            <!-- Decorative accent -->
            <div class="absolute -bottom-3 -right-3 w-64 h-80 md:w-72 md:h-96 rounded-2xl border-2 border-sage-200 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
