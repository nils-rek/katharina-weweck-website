<template>
  <section id="kontakt" class="py-24 md:py-32 bg-cream-100">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16" v-bind="headerReveal">
        <p class="text-sage-400 font-medium tracking-widest text-sm uppercase mb-3">Kontakt</p>
        <h2 class="font-serif text-3xl md:text-4xl font-bold text-charcoal leading-snug">
          Ich freue mich auf Ihre Nachricht
        </h2>
        <div class="gold-rule mx-auto mt-5"></div>
        <p class="mt-4 text-charcoal/60 max-w-2xl mx-auto">
          Für Fragen oder zur Vereinbarung eines Erstgesprächs erreichen Sie mich
          telefonisch oder per E-Mail.
        </p>
      </div>

      <div class="max-w-2xl mx-auto">
        <div class="grid sm:grid-cols-2 gap-6">
          <!-- Phone -->
          <a
            href="tel:+49016090347932"
            v-bind="phoneReveal"
            class="group bg-white rounded-xl p-8 border border-cream-200/60 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2"
          >
            <div class="w-14 h-14 rounded-full bg-sage-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-sage-400 transition-colors duration-300">
              <svg class="w-6 h-6 text-sage-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <p class="text-sm text-charcoal/50 mb-1">Telefon</p>
            <p class="font-medium text-charcoal">0160 9034 7932</p>
          </a>

          <!-- Email -->
          <a
            href="mailto:Psychotherapie.weweck@posteo.de"
            v-bind="emailReveal"
            class="group bg-white rounded-xl p-8 border border-cream-200/60 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 text-center focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2"
          >
            <div class="w-14 h-14 rounded-full bg-sage-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-sage-400 transition-colors duration-300">
              <svg class="w-6 h-6 text-sage-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <p class="text-sm text-charcoal/50 mb-1">E-Mail</p>
            <p class="font-medium text-charcoal">Psychotherapie.weweck@posteo.de</p>
          </a>
        </div>

        <!-- Location hint -->
        <div class="mt-8 text-center" v-bind="locationReveal">
          <div class="inline-flex items-center gap-2 text-charcoal/50 text-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            Praxis in Kolbermoor bei Rosenheim
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const { reveal } = useScrollReveal()

const headerReveal = reveal()
const phoneReveal = reveal({ delay: 50 })
const emailReveal = reveal({ delay: 130 })
const locationReveal = reveal({ delay: 200 })
</script>
