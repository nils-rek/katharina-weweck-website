<template>
  <section id="therapieangebot" class="py-24 md:py-32 bg-cream-100">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="text-sage-400 font-medium tracking-widest text-sm uppercase mb-3">Therapieangebot</p>
        <h2 class="font-serif text-3xl md:text-4xl font-bold text-charcoal leading-snug">
          Individuelle Unterstützung für Ihren Weg
        </h2>
        <p class="mt-4 text-charcoal/60 max-w-2xl mx-auto">
          Mein Angebot richtet sich an Privatversicherte und Selbstzahler.
          Therapiesitzungen sind sowohl in Präsenz in Kolbermoor als auch online möglich.
        </p>
      </div>

      <!-- Therapy approaches -->
      <div class="grid md:grid-cols-3 gap-6 mb-16">
        <div
          v-for="approach in approaches"
          :key="approach.title"
          class="bg-white rounded-xl p-8 border border-cream-200/60 hover:shadow-md transition-shadow"
        >
          <div class="w-12 h-12 rounded-xl bg-sage-50 flex items-center justify-center mb-5">
            <span class="text-2xl">{{ approach.emoji }}</span>
          </div>
          <h3 class="font-serif text-xl font-bold text-charcoal mb-3">{{ approach.title }}</h3>
          <p class="text-charcoal/65 leading-relaxed text-[0.95rem]">{{ approach.text }}</p>
        </div>
      </div>

      <!-- Störungsbilder -->
      <div class="bg-white rounded-xl p-8 md:p-10 border border-cream-200/60">
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
      <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
const approaches = [
  {
    emoji: '\u{1F9E0}',
    title: 'Kognitive Verhaltenstherapie',
    text: 'Wissenschaftlich fundierte Methode zur Veränderung belastender Denk- und Verhaltensmuster. Gemeinsam entwickeln wir alltagstaugliche Strategien für Ihre Anliegen.',
  },
  {
    emoji: '\u{1F331}',
    title: 'Schematherapie',
    text: 'Ein integrativer Ansatz, der tief verwurzelte Muster versteht und verändert. Besonders wirksam bei wiederkehrenden Problemen in Beziehungen und Selbstwertthemen.',
  },
  {
    emoji: '\u{1F50D}',
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
