<template>
  <div class="bg-cream-50 min-h-screen flex flex-col">
    <div class="max-w-3xl mx-auto px-6 pt-28 pb-20 flex-1">
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
            Psychologische Psychotherapeutin
          </p>
          <p class="mt-3">
            Räumlichkeiten der Praxis Bernadette Tegzes<br />
            Carl-Jordan-Straße 13<br />
            83059 Kolbermoor
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">Kontakt</h2>
          <p>
            Telefon: 0160 9034 7932<br />
            E-Mail: psychotherapie.weweck@posteo.de
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
            Bayerische Landeskammer der Psychologischen Psychotherapeuten
            und der Kinder- und Jugendlichenpsychotherapeuten<br />
            Birketweg 30<br />
            80639 München<br />
            <a href="https://www.ptk-bayern.de" class="text-sage-400 hover:text-sage-500 underline"
               target="_blank" rel="noopener noreferrer">https://www.ptk-bayern.de</a>
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">Berufsrechtliche Regelungen</h2>
          <p>
            Es gelten folgende berufsrechtliche Regelungen:
            <a href="https://www.ptk-bayern.de/ptk/web.nsf/gfx/6C346C54E1CF5561C1257D630045CA14/$file/Berufsordnung_PTK_Bayern.pdf"
               class="text-sage-400 hover:text-sage-500 underline" target="_blank" rel="noopener noreferrer">
              Berufsordnung der PTK Bayern (PDF)
            </a>
          </p>
          <p class="mt-2">
            Zuständige Kammer:<br />
            Bayerische Landeskammer der Psychologischen Psychotherapeuten
            und der Kinder- und Jugendlichenpsychotherapeuten (PTK Bayern)<br />
            <a href="https://www.ptk-bayern.de" class="text-sage-400 hover:text-sage-500 underline"
               target="_blank" rel="noopener noreferrer">https://www.ptk-bayern.de</a>
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">Haftungsausschluss</h2>
          <p class="mb-4">Arztregistereintrag: LANR 0535817</p>
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
