<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'bg-cream-50/95 backdrop-blur-sm shadow-md' : 'bg-transparent'"
  >
    <nav class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
      <router-link to="/" class="font-serif text-lg md:text-xl font-bold text-charcoal hover:text-sage-400 transition-colors">
        Dr. Katharina Weweck
      </router-link>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="link-underline text-sm font-medium tracking-wide transition-colors"
            :class="activeSection === link.href ? 'text-sage-400' : 'text-charcoal/70 hover:text-sage-400'"
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 text-charcoal hover:text-sage-400 transition-colors"
        @click="mobileOpen = !mobileOpen"
        :aria-label="mobileOpen ? 'Menü schließen' : 'Menü öffnen'"
      >
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden bg-cream-50/95 backdrop-blur-sm border-t border-sage-100 px-6 pb-4">
        <ul class="flex flex-col gap-3 pt-2">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="block py-2 text-sm font-medium transition-colors"
              :class="activeSection === link.href ? 'text-sage-400' : 'text-charcoal/70 hover:text-sage-400'"
              @click.prevent="scrollTo(link.href); mobileOpen = false"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('')

const navLinks = [
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Therapieangebot', href: '#therapieangebot' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Kosten', href: '#honorar' },
  { label: 'Kontakt', href: '#kontakt' },
]

const sectionIds = ['ueber-mich', 'therapieangebot', 'ablauf', 'honorar', 'kontakt']
let sectionObserver = null

function scrollTo(href) {
  if (router.currentRoute.value.path !== '/') {
    router.push('/' + href)
    return
  }
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function onScroll() {
  scrolled.value = window.scrollY > 20
}

function setupSectionObserver() {
  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = '#' + entry.target.id
        }
      })
    },
    { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
  )

  sectionIds.forEach((id) => {
    const el = document.getElementById(id)
    if (el) sectionObserver.observe(el)
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  setupSectionObserver()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (sectionObserver) sectionObserver.disconnect()
})
</script>
