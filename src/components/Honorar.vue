<template>
  <section id="honorar" class="py-24 md:py-32 bg-cream-100">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16" v-bind="headerReveal">
        <p class="text-sage-400 font-medium tracking-widest text-sm uppercase mb-3">Honorar</p>
        <h2 class="font-serif text-3xl md:text-4xl font-bold text-charcoal leading-snug">
          Kosten und Abrechnung
        </h2>
        <div class="gold-rule mx-auto mt-5"></div>
      </div>

      <div class="space-y-6 max-w-3xl mx-auto">
        <!-- Private Krankenversicherung & Beihilfe -->
        <div
          v-bind="cardReveals[0]"
          class="bg-white rounded-xl p-8 border border-cream-200/60 border-t-2 border-t-gold-400/40"
        >
          <h3 class="font-serif text-xl font-bold text-charcoal mb-4">Private Krankenversicherung & Beihilfe</h3>
          <p class="text-charcoal/75 leading-relaxed">
            Private Krankenversicherungen sowie Beihilfestellen übernehmen die Kosten für eine
            psychotherapeutische Behandlung in den meisten Fällen ganz oder teilweise. Die
            Abrechnung erfolgt gemäß der Gebührenordnung für Psychotherapeuten (GOP).
          </p>
          <p class="text-charcoal/75 leading-relaxed mt-4">
            Ob ein Eigenanteil anfällt, wie viele Sitzungen erstattet werden oder bis zu welchem
            Steigerungssatz die Kosten übernommen werden, richtet sich nach den jeweiligen
            Versicherungs- bzw. Beihilfebedingungen. Es empfiehlt sich daher, die individuellen
            Vertragsbedingungen vor oder zu Beginn der Behandlung zu prüfen.
          </p>
        </div>

        <!-- Selbstzahlung -->
        <div
          v-bind="cardReveals[1]"
          class="bg-white rounded-xl p-8 border border-cream-200/60 border-t-2 border-t-gold-400/40"
        >
          <h3 class="font-serif text-xl font-bold text-charcoal mb-4">Selbstzahlung</h3>
          <p class="text-charcoal/75 leading-relaxed">
            Eine psychotherapeutische Behandlung ist unabhängig vom Versicherungsstatus auch auf
            Selbstzahlerbasis möglich. In diesem Fall erfolgt keine Abrechnung über die
            Krankenkasse, es entsteht kein bürokratischer Aufwand, und Ihre Versicherung wird
            nicht über die Behandlung informiert.
          </p>
          <p class="text-charcoal/75 leading-relaxed mt-4">
            Die Selbstzahlung ermöglicht eine freie Therapeut:innenwahl – auch ohne
            Kassenzulassung. Zudem wird keine Krankenakte bei der Krankenkasse angelegt und es
            ist keine formale Diagnosevergabe erforderlich, was insbesondere im Zusammenhang mit
            Verbeamtung oder dem Abschluss einer Berufsunfähigkeitsversicherung von Vorteil
            sein kann.
          </p>
          <p class="text-charcoal/75 leading-relaxed mt-4">
            Auch Coaching und psychologische Beratung erfolgen grundsätzlich auf
            Selbstzahlerbasis. Die Abrechnung richtet sich ebenfalls nach der GOP.
          </p>
          <p class="text-charcoal/75 leading-relaxed mt-4">
            Das Honorar für eine 50-minütige Einzelsitzung beträgt in der Regel 134,06 €.
          </p>
        </div>

        <!-- Gesetzliche Krankenversicherung -->
        <div
          v-bind="cardReveals[2]"
          class="bg-white rounded-xl p-8 border border-cream-200/60 border-t-2 border-t-gold-400/40"
        >
          <h3 class="font-serif text-xl font-bold text-charcoal mb-4">Gesetzliche Krankenversicherung</h3>
          <p class="text-charcoal/75 leading-relaxed">
            Kassenzulassungen für psychologische Psychotherapeutinnen und Psychotherapeuten sind
            stark begrenzt. Da ich aktuell über keine Kassenzulassung verfüge, ist eine
            Kostenübernahme durch gesetzliche Krankenkassen in meiner Praxis leider nicht möglich.
          </p>
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
</script>
