<template>
  <section class="relative min-h-[85vh] flex items-center bg-gradient-to-br from-cream-100 via-cream-50 to-sage-50 overflow-hidden">
    <!-- Animated organic shapes -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg class="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-[0.12] animate-float" viewBox="0 0 500 500" fill="none">
        <path d="M250 50C350 50 450 120 450 250C450 380 370 450 250 450C130 450 50 370 50 250C50 130 150 50 250 50Z" fill="#7C9A82"/>
      </svg>
      <svg class="absolute top-1/3 -right-10 w-[300px] h-[300px] opacity-[0.08] animate-float-slow" viewBox="0 0 300 300" fill="none">
        <path d="M150 20C220 20 280 80 280 150C280 230 240 280 150 280C60 280 20 220 20 150C20 80 80 20 150 20Z" fill="#C4A265"/>
      </svg>
      <svg class="absolute -bottom-10 -left-20 w-[400px] h-[400px] opacity-[0.06] animate-float-delayed" viewBox="0 0 400 400" fill="none">
        <path d="M200 30C300 30 370 100 370 200C370 310 300 370 200 370C100 370 30 300 30 200C30 100 100 30 200 30Z" fill="#7C9A82"/>
      </svg>
    </div>

    <div class="relative max-w-5xl mx-auto px-6 py-28 md:py-36 w-full">
      <div class="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <!-- Text -->
        <div class="order-2 md:order-1">
          <p class="hero-enter animate-hero-fade-in text-sage-400 font-medium tracking-widest text-sm uppercase mb-4">
            Psychologische Psychotherapeutin
          </p>
          <h1 class="hero-enter animate-hero-fade-in-1 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.1] tracking-tight mb-4">
            Dr. Katharina Weweck
          </h1>
          <div class="hero-enter animate-hero-fade-in-2 gold-rule mb-6"></div>
          <p class="hero-enter animate-hero-fade-in-2 text-lg md:text-xl text-charcoal/70 leading-relaxed mb-5 max-w-lg">
            Einfühlsame und evidenzbasierte Psychotherapie in Kolbermoor.
          </p>
          <div class="hero-enter animate-hero-fade-in-3 flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              class="inline-flex items-center justify-center px-8 py-3.5 bg-sage-400 text-white font-medium rounded-lg hover:bg-sage-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2"
              @click.prevent="scrollTo('#kontakt')"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="#therapieangebot"
              class="inline-flex items-center justify-center px-8 py-3.5 border border-sage-400/30 text-sage-500 font-medium rounded-lg hover:bg-sage-50 hover:border-sage-400/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2"
              @click.prevent="scrollTo('#therapieangebot')"
            >
              Therapieangebot
            </a>
          </div>
        </div>

        <!-- Photo -->
        <div class="order-1 md:order-2 flex justify-center hero-enter animate-hero-fade-in-4">
          <div class="relative">
            <div class="w-60 h-[22rem] md:w-72 md:h-[28rem] rounded-2xl bg-sage-100 overflow-hidden shadow-xl shadow-sage-400/10">
              <img
                src="/images/kweweck_profile.jpeg"
                alt="Dr. Katharina Weweck im Gespräch"
                class="w-full h-full object-cover object-[center_20%]"
                loading="eager"
                fetchpriority="high"
              />
            </div>
            <!-- Organic accent shape behind photo -->
            <svg class="absolute -bottom-4 -right-4 w-72 h-[28rem] -z-10 opacity-20" viewBox="0 0 288 448" fill="none">
              <rect x="8" y="8" width="272" height="432" rx="16" stroke="#C4A265" stroke-width="2" fill="none"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Availability notice -->
      <div class="hero-enter animate-hero-fade-in-4 mt-8 text-center">
        <p class="inline-flex items-center gap-2.5 text-sage-600 bg-sage-50/80 border border-sage-200/50 rounded-full px-6 py-2.5 text-sm md:text-base font-medium tracking-wide">
          <span class="relative flex h-2 w-2 shrink-0">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-sage-400"></span>
          </span>
          Aktuell freie Therapieplätze verfügbar — kurzfristige Terminvergabe möglich
        </p>
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
