<template>
  <section id="therapieangebot" class="py-24 md:py-32 bg-cream-100">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16" v-bind="headerReveal">
        <p class="text-sage-400 font-medium tracking-widest text-sm uppercase mb-3">Therapieangebot</p>
        <h2 class="font-serif text-3xl md:text-4xl font-bold text-charcoal leading-snug">
          Individuelle Unterstützung für Ihren Weg
        </h2>
        <div class="gold-rule mx-auto mt-5"></div>
        <p class="mt-4 text-charcoal/60 max-w-2xl mx-auto">
          Mein Angebot richtet sich an Privatversicherte und Selbstzahler.
          Therapiesitzungen sind sowohl in Präsenz in Kolbermoor als auch online möglich.
        </p>
      </div>

      <!-- Therapy approaches -->
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <div
          v-for="(approach, i) in approaches"
          :key="approach.title"
          v-bind="cardReveals[i]"
          class="group bg-white rounded-xl p-8 border border-cream-200/60 border-t-2 border-t-transparent hover:border-t-gold-400 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        >
          <div class="w-12 h-12 rounded-xl bg-sage-50 flex items-center justify-center mb-5 group-hover:bg-sage-400 transition-colors duration-300">
            <svg class="w-6 h-6 text-sage-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="approach.icon === 'brain'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              <path v-if="approach.icon === 'heart'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              <path v-if="approach.icon === 'clipboard'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
            </svg>
          </div>
          <h3 class="font-serif text-xl font-bold text-charcoal mb-3">{{ approach.title }}</h3>
          <p class="text-charcoal/65 leading-relaxed text-[0.95rem]">{{ approach.text }}</p>
        </div>
      </div>

      <!-- Störungsbilder -->
      <div class="bg-white rounded-xl p-8 md:p-10 border border-cream-200/60" v-bind="spectrumReveal">
        <h3 class="font-serif text-2xl font-bold text-charcoal mb-6">Behandlungsspektrum</h3>
        <div class="grid sm:grid-cols-2 gap-x-12 gap-y-4">
          <div
            v-for="item in conditions"
            :key="item"
            class="flex items-start gap-3"
          >
            <svg class="w-5 h-5 text-sage-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span class="text-charcoal/75">{{ item }}</span>
          </div>
        </div>
      </div>

      <!-- Format info -->
      <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center" v-bind="formatReveal">
        <div class="flex items-center gap-3 text-charcoal/60 text-sm">
          <svg class="w-5 h-5 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          Therapie vor Ort in Kolbermoor
        </div>
        <div class="flex items-center gap-3 text-charcoal/60 text-sm">
          <svg class="w-5 h-5 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
          </svg>
          Online-Therapie per Videosprechstunde
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const { reveal } = useScrollReveal()

const headerReveal = reveal()
const cardReveals = [
  reveal({ delay: 0 }),
  reveal({ delay: 80 }),
  reveal({ delay: 160 }),
]
const spectrumReveal = reveal({ delay: 50 })
const formatReveal = reveal({ delay: 100 })

const approaches = [
  {
    icon: 'brain',
    title: 'Kognitive Verhaltenstherapie',
    text: 'Wissenschaftlich fundierte Methode zur Veränderung belastender Denk- und Verhaltensmuster. Gemeinsam entwickeln wir alltagstaugliche Strategien für Ihre Anliegen.',
  },
  {
    icon: 'heart',
    title: 'Schematherapie',
    text: 'Ein integrativer Ansatz, der tief verwurzelte Muster versteht und verändert. Besonders wirksam bei wiederkehrenden Problemen in Beziehungen und Selbstwertthemen.',
  },
  {
    icon: 'clipboard',
    title: 'ADHS-Diagnostik',
    text: 'Umfassende diagnostische Abklärung von ADHS im Erwachsenenalter mittels standardisierter Verfahren, klinischer Interviews und Fragebogendiagnostik.',
  },
]

const conditions = [
  'Depressionen und depressive Verstimmungen',
  'Angststörungen und Phobien',
  'Persönlichkeitsstörungen',
  'ADHS im Erwachsenenalter',
  'Burnout und Erschöpfungszustände',
  'Selbstwertprobleme',
  'Beziehungs- und Partnerschaftsprobleme',
  'Emotionsregulationsstörungen',
]
</script>
