# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Professional website for Dr. Katharina Weweck, a psychotherapist (Psychologische Psychotherapeutin) opening a private practice in Kolbermoor, Germany. Target audience: Privatpatienten (private patients and self-payers). All content is in German.

## Tech Stack

- **Vue 3** with Composition API (`<script setup>`)
- **Vite** for dev server and builds
- **Tailwind CSS 3** for styling
- **Vue Router** for navigation (only `/impressum` and `/datenschutz` are separate routes; everything else is a single-page scroll layout)

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build

## Architecture

Single-page scroll design: the homepage (`src/views/HomePage.vue`) assembles all section components vertically. Navigation smooth-scrolls to anchor IDs. Only Impressum and Datenschutz are separate routed views.

- `src/components/` — Section components: NavBar, HeroSection, UeberMich, Therapieangebot, Ablauf, Kontakt, FooterSection
- `src/views/` — Route-level views: HomePage, Impressum, Datenschutz
- `src/router.js` — Vue Router config with scroll behavior
- `supporting_docs/` — Reference materials (CV PDF). Gitignored.

## Design System

- **Colors**: Sage green (`sage-400: #7C9A82`), cream (`cream-100: #FAF7F2`), muted gold (`gold-400: #C4A265`), charcoal text (`#2D3436`). Defined in `tailwind.config.js`.
- **Fonts**: Libre Baskerville (serif, headings) + Source Sans 3 (sans, body). Loaded via Google Fonts in `index.html`.
- **Style**: "Warmherzig und professionell" — warm, calming, professional.
