<template>
  <section id="ueber-mich" class="py-24 md:py-32 bg-white">
    <div class="max-w-5xl mx-auto px-6">
      <div class="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
        <!-- Left: Section heading -->
        <div class="md:col-span-2" v-bind="headingReveal">
          <p class="text-sage-400 font-medium tracking-widest text-sm uppercase mb-3">Über mich</p>
          <h2 class="font-serif text-3xl md:text-4xl font-bold text-charcoal leading-snug">
            Empathisch. Professionell. Engagiert.
          </h2>
          <div class="mt-6 gold-rule"></div>
        </div>

        <!-- Right: Bio text -->
        <div class="md:col-span-3 space-y-5 text-charcoal/80 leading-relaxed text-[1.05rem]" v-bind="bioReveal">
          <p>
            Herzlich willkommen! Mein Name ist Dr. Katharina Weweck und ich bin approbierte
            psychologische Psychotherapeutin mit dem Schwerpunkt auf Kognitiver Verhaltenstherapie.
            In meinem Praxisraum in Kolbermoor biete ich Ihnen einen geschützten Raum, in dem wir
            gemeinsam an Ihren individuellen Anliegen arbeiten können.
          </p>
          <p>
            In meiner psychotherapeutischen Arbeit greife ich auf eine langjährige klinische
            Erfahrung mit unterschiedlichen psychischen Belastungen zurück – von Depressionen
            und Angststörungen bis hin zu komplexeren, länger bestehenden Mustern. Ein besonderer
            Schwerpunkt liegt dabei auf der Schematherapie, die dabei unterstützt, tief verwurzelte
            Denk‑, Gefühls‑ und Beziehungsmuster zu erkennen und nachhaltig zu verändern –
            insbesondere dann, wenn sich bestimmte Schwierigkeiten immer wiederholen.
          </p>
          <p>
            Mit diesen Themen habe ich mich auch im Rahmen meiner Promotionsarbeit intensiv
            auseinandergesetzt, unter anderem mit belastenden Persönlichkeitsmerkmalen und deren
            Bedeutung für therapeutische Ansätze wie die Schematherapie und die Kognitive
            Verhaltenstherapie. Dieses fachliche Verständnis prägt meine therapeutische Haltung
            und fließt unmittelbar in meine Arbeit ein.
          </p>
          <p>
            Mein Anliegen ist es, Sie dabei zu begleiten, sich selbst besser zu verstehen, neue
            Perspektiven und Handlungsmöglichkeiten zu entwickeln und Schritt für Schritt spürbare
            Entlastung im Alltag zu erfahren. Gemeinsam erarbeiten wir einen Weg, der zu Ihnen
            und Ihren individuellen Anliegen passt.
          </p>
        </div>
      </div>

      <!-- Qualifications -->
      <div class="mt-16 grid sm:grid-cols-3 gap-6">
        <div
          v-for="(qual, i) in qualifications"
          :key="qual.title"
          v-bind="cardReveals[i]"
          class="bg-cream-50 rounded-xl p-6 border border-cream-200/60 border-t-2 border-t-gold-400/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
        >
          <div class="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center mb-4">
            <svg class="w-5 h-5 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="qual.icon === 'academic'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
              <path v-if="qual.icon === 'clinic'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              <path v-if="qual.icon === 'research'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
          </div>
          <h3 class="font-serif font-bold text-charcoal mb-1.5">{{ qual.title }}</h3>
          <p class="text-sm text-charcoal/60 leading-relaxed">{{ qual.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const { reveal } = useScrollReveal()

const headingReveal = reveal()
const bioReveal = reveal({ delay: 100 })
const cardReveals = [
  reveal({ delay: 0 }),
  reveal({ delay: 80 }),
  reveal({ delay: 160 }),
]

const qualifications = [
  {
    icon: 'academic',
    title: 'Dr. phil.',
    text: 'Promotion an der Universität Kassel mit Schwerpunkt Persönlichkeitsstörungen und deren dimensionale Diagnostik.',
  },
  {
    icon: 'clinic',
    title: 'Approbierte Psychotherapeutin',
    text: 'Ausbildung an der Kirinus Akademie München mit Schwerpunkt Kognitive Verhaltenstherapie in Einzel- und Gruppensetting.',
  },
  {
    icon: 'research',
    title: 'Klinische Forschung',
    text: 'Wissenschaftliche Tätigkeit am Max-Planck-Institut für Psychiatrie mit Publikationen in internationalen Fachzeitschriften.',
  },
]
</script>
