<template>
  <div class="pt-28 pb-20 bg-cream-50 min-h-screen">
    <div class="max-w-3xl mx-auto px-6">
      <router-link to="/" class="inline-flex items-center gap-2 text-sage-400 hover:text-sage-500 text-sm mb-8 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        Zurück zur Startseite
      </router-link>

      <h1 class="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-10">Impressum</h1>

      <div class="prose-custom space-y-8 text-charcoal/80 leading-relaxed">
        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">Angaben gemäß § 5 TMG</h2>
          <p>
            Dr. Katharina Weweck<br />
            Psychologische Psychotherapeutin<br />
            Kolbermoor
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">Kontakt</h2>
          <p>
            Telefon: 0160 9034 7932<br />
            E-Mail: Psychotherapie.weweck@posteo.de
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">Berufsbezeichnung</h2>
          <p>
            Psychologische Psychotherapeutin (Verhaltenstherapie)<br />
            Approbation verliehen in der Bundesrepublik Deutschland
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">Zuständige Aufsichtsbehörde</h2>
          <p>
            Regierung von Oberbayern<br />
            Maximilianstraße 39<br />
            80538 München
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">Berufsrechtliche Regelungen</h2>
          <p>
            Psychotherapeutengesetz (PsychThG)<br />
            Berufsordnung für die Psychologischen Psychotherapeuten und
            Kinder- und Jugendlichenpsychotherapeuten Bayerns
          </p>
          <p class="mt-2">
            Zuständige Kammer:<br />
            Bayerische Landeskammer der Psychologischen Psychotherapeuten
            und der Kinder- und Jugendlichenpsychotherapeuten (PTK Bayern)<br />
            St.-Paul-Str. 9<br />
            80336 München
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">Haftungsausschluss</h2>
          <h3 class="font-semibold text-charcoal mb-2">Haftung für Inhalte</h3>
          <p>
            Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen.
          </p>
          <h3 class="font-semibold text-charcoal mb-2 mt-4">Haftung für Links</h3>
          <p>
            Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen
            Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
            verantwortlich. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne
            konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
          </p>
        </div>
      </div>
    </div>

    <FooterSection />
  </div>
</template>

<script setup>
import FooterSection from '../components/FooterSection.vue'
</script>
