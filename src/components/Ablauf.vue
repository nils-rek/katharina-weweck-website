<template>
  <section id="ablauf" class="py-24 md:py-32 bg-white">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="text-sage-400 font-medium tracking-widest text-sm uppercase mb-3">Ablauf</p>
        <h2 class="font-serif text-3xl md:text-4xl font-bold text-charcoal leading-snug">
          Der Weg in die Therapie
        </h2>
        <p class="mt-4 text-charcoal/60 max-w-2xl mx-auto">
          Der Beginn einer Therapie ist ein wichtiger Schritt. Hier erfahren Sie,
          wie der Weg in meine Praxis aussieht.
        </p>
      </div>

      <!-- Steps -->
      <div class="relative max-w-3xl mx-auto">
        <!-- Vertical line -->
        <div class="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-sage-200 hidden sm:block"></div>

        <div class="space-y-10">
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="relative flex gap-6 md:gap-8"
          >
            <!-- Step number -->
            <div class="shrink-0 relative z-10">
              <div class="w-12 h-12 md:w-16 md:h-16 rounded-full bg-sage-400 text-white flex items-center justify-center font-serif font-bold text-lg md:text-xl shadow-sm">
                {{ i + 1 }}
              </div>
            </div>

            <!-- Step content -->
            <div class="pt-1 md:pt-3 pb-2">
              <h3 class="font-serif text-xl md:text-2xl font-bold text-charcoal mb-2">{{ step.title }}</h3>
              <p class="text-charcoal/65 leading-relaxed">{{ step.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Kontaktaufnahme',
    text: 'Nehmen Sie telefonisch oder per E-Mail Kontakt mit mir auf. In einem kurzen Vorgespräch klären wir Ihr Anliegen und vereinbaren einen ersten Termin.',
  },
  {
    title: 'Erstgespräch',
    text: 'Im Erstgespräch lernen wir uns kennen. Sie schildern Ihre aktuelle Situation und Ihre Wünsche an die Therapie. Gemeinsam schauen wir, ob die Chemie stimmt und eine Zusammenarbeit für Sie passt.',
  },
  {
    title: 'Probatorische Sitzungen',
    text: 'In den probatorischen Sitzungen vertiefen wir die Diagnostik und entwickeln ein gemeinsames Verständnis Ihrer Schwierigkeiten. Wir legen Therapieziele fest und ich erstelle einen individuellen Behandlungsplan.',
  },
  {
    title: 'Therapie',
    text: 'Die eigentliche Therapie umfasst in der Regel 24 bis 60 Sitzungen. Mit bewährten Methoden der Verhaltenstherapie und Schematherapie arbeiten wir gezielt an Ihren Zielen — in Ihrem Tempo.',
  },
]
</script>
