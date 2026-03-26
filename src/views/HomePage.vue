<template>
  <div>
    <HeroSection />
    <SectionDivider topColor="#f4f7f4" bottomColor="#FFFFFF" />
    <UeberMich />
    <Therapieangebot />
    <Ablauf />
    <Honorar />
    <Kontakt />
    <FooterSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import SectionDivider from '../components/SectionDivider.vue'
import UeberMich from '../components/UeberMich.vue'
import Therapieangebot from '../components/Therapieangebot.vue'
import Ablauf from '../components/Ablauf.vue'
import Kontakt from '../components/Kontakt.vue'
import Honorar from '../components/Honorar.vue'
import FooterSection from '../components/FooterSection.vue'
</script>
