<template>
  <div class="bg-cream-50 min-h-screen flex flex-col">
    <div class="max-w-3xl mx-auto px-6 pt-28 pb-20 flex-1">
      <router-link to="/" class="inline-flex items-center gap-2 text-sage-400 hover:text-sage-500 text-sm mb-8 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        Zurück zur Startseite
      </router-link>

      <h1 class="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-10">Datenschutzerklärung</h1>

      <div class="space-y-8 text-charcoal/80 leading-relaxed">
        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">1. Verantwortliche Stelle</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
            Dr. Katharina Weweck<br />
            Psychologische Psychotherapeutin<br />
            Kolbermoor<br />
            Telefon: 0160 9034 7932<br />
            E-Mail: Psychotherapie.weweck@posteo.de
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p>
            Beim Besuch dieser Website werden automatisch Informationen allgemeiner Natur erfasst.
            Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das
            verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und
            ähnliche Daten. Dies sind ausschließlich Informationen, die keine Rückschlüsse auf Ihre
            Person zulassen. Diese Daten werden aus technischen Gründen benötigt, um die Inhalte
            der Website korrekt auszuliefern und die dauerhafte Funktionsfähigkeit der
            IT-Systeme sicherzustellen. Sie werden nicht mit anderen Datenquellen zusammengeführt.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">3. Kontaktaufnahme</h2>
          <p>
            Wenn Sie mich per Telefon oder E-Mail kontaktieren, werden Ihre Angaben (Name,
            Kontaktdaten, ggf. Ihr Anliegen) zur Bearbeitung Ihrer Anfrage bei mir gespeichert.
            Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten
            erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
            Erfüllung eines Vertrags zusammenhängt, oder auf Grundlage von Art. 6 Abs. 1 lit. f
            DSGVO aufgrund meines berechtigten Interesses an der Bearbeitung Ihrer Anfrage.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">4. Therapeutische Schweigepflicht</h2>
          <p>
            Als Psychologische Psychotherapeutin unterliege ich der gesetzlichen Schweigepflicht
            gemäß § 203 StGB. Alle Informationen, die mir im Rahmen der therapeutischen Beziehung
            anvertraut werden, werden streng vertraulich behandelt. Eine Weitergabe an Dritte
            erfolgt nur mit Ihrer ausdrücklichen schriftlichen Einwilligung oder wenn eine
            gesetzliche Pflicht dazu besteht.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">5. Ihre Rechte</h2>
          <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
          <ul class="list-disc list-inside mt-3 space-y-1">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
          </ul>
          <p class="mt-3">
            Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
            Verarbeitung Ihrer personenbezogenen Daten durch mich zu beschweren.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">6. Cookies</h2>
          <p>
            Diese Website verwendet keine Cookies und setzt keine Tracking- oder Analysewerkzeuge
            ein. Es werden keine personenbezogenen Daten zu Werbezwecken erhoben oder verarbeitet.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">7. Google Fonts</h2>
          <p>
            Diese Website nutzt zur einheitlichen Darstellung von Schriftarten sogenannte
            Google Fonts. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Schriftarten
            direkt von Google. Dabei wird Ihre IP-Adresse an Google übermittelt. Weitere
            Informationen finden Sie in der Datenschutzerklärung von Google:
            <a href="https://policies.google.com/privacy" class="text-sage-400 hover:text-sage-500 underline" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/privacy
            </a>.
          </p>
        </div>

        <div>
          <h2 class="font-serif text-xl font-bold text-charcoal mb-3">8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung hat den Stand März 2026. Durch die Weiterentwicklung
            der Website oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden,
            diese Datenschutzerklärung zu ändern.
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
