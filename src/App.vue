<template>
  <header-element/>
  <router-view/>
  <footer-element/>
</template>

<script setup lang="ts">
import HeaderElement from '@/components/HeaderElement.vue'
import FooterElement from '@/components/FooterElement.vue'
</script>

<style lang="sass">
@import "@/assets/variables", "@/assets/fonts/Inter/Inter", "@/assets/fonts/Mona-Sans/Mona-Sans", "@/assets/fonts/JetBrainsMono/JetBrainsMono"

\:root
  --color-dark: #0f001e
  --color-primary: #220046
  --color-secondary: #b9abd1
  --color-grey: #E8E4E6
  --color-white: #FFFFFE
  --color-highlight: #f97c60
  --color-wrong: #E16162
  --overlay-dark: #0f001e

  --filter-dark: invert(10%) sepia(20%) saturate(2418%) hue-rotate(134deg) brightness(95%) contrast(104%)
  --filter-primary: invert(22%) sepia(29%) saturate(1293%) hue-rotate(129deg) brightness(91%) contrast(101%)
  --filter-secondary: invert(85%) sepia(8%) saturate(678%) hue-rotate(112deg) brightness(98%) contrast(82%)
  --filter-grey: invert(91%) sepia(9%) saturate(53%) hue-rotate(277deg) brightness(103%) contrast(88%)
  --filter-white: invert(100%) sepia(78%) saturate(573%) hue-rotate(301deg) brightness(112%) contrast(105%)
  --filter-highlight: invert(84%) sepia(13%) saturate(1983%) hue-rotate(334deg) brightness(99%) contrast(97%)
  --filter-wrong: invert(42%) sepia(34%) saturate(1028%) hue-rotate(309deg) brightness(107%) contrast(83%)

  --xs: 448px
  --s: 640px
  --m: 768px
  --l: 1024px
  --xl: 1280px

::-webkit-scrollbar
  width: 5px
  height: 5px
  background: $color-primary

::-webkit-scrollbar-thumb
  background: $color-highlight
  &:active
    background: $color-wrong

html
  scroll-behavior: smooth

*
  margin: 0
  padding: 0
  border: none
  box-sizing: border-box
  outline-color: $color-highlight

a
  color: inherit
  text-decoration: none

p, ul
  font-size: 1.05rem
  font-weight: 500

body
  background-color: $color-primary
  color: $color-white
  font-family: 'Inter', sans-serif

.title
  font-weight: 900
  font-size: 1.375rem

input, textarea
  font-family: 'Inter', sans-serif
  background-color: $color-dark
  color: $color-secondary
  border-radius: 3.75px
  font-weight: 800
  font-size: 1rem
  padding: 1rem
  width: 100%
  &::placeholder
    color: #568C85
  &:focus
    outline: none
    border: 1px solid $color-highlight

button
  background-color: $color-highlight
  color: $color-dark
  border-radius: 3.75px
  font-weight: 900
  font-size: 1rem
  padding: 1rem 3rem
  cursor: pointer
  transition: all .2s ease-in-out
  &:hover
    box-shadow: 0 0 20px $color-highlight
  &:active
    transform: scale(0.95)
</style>
