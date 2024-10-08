<template>
  <header ref="header" :class="{ 'scrolled': isNotAtTop }">
    <router-link to="/" class="title" @click="scrollToTop">
      <span class="name">L'Herbag - Gabriel</span>
      <span class="link" ref="headerLink">/</span>
    </router-link>
    <div class="links">
      <a href="#about-me">#about-me</a>
      <a href="#expériences">#expériences</a>
      <a href="#compétences">#compétences</a>
      <a href="#réalisations">#réalisations</a>
      <a href="#contacts">#contacts</a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderElement',
  data() {
    return {
      isNotAtTop: false,
    }
  },
  mounted() {
    const header = this.$refs.header
    const headerHeight = header.offsetHeight + parseInt(window.getComputedStyle(header).getPropertyValue('margin-top'), 10)
    window.addEventListener('scroll', () => {
      let scrollY = window.scrollY
      this.isNotAtTop = (scrollY > headerHeight)

      const windowHeight = window.innerHeight
      scrollY = scrollY + windowHeight / 3

      let changed = false
      const sections = document.querySelectorAll('section')
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        if (scrollY > sectionTop - headerHeight && scrollY <= sectionTop + sectionHeight) {
          const name = section.getAttribute('id')
          if (name) {
            this.$refs.headerLink.innerText = `/${name}`
            changed = true
          }
        }
        if (!changed) {
          this.$refs.headerLink.innerText = '/'
        }
      })
    })
  },
  methods: {
    scrollToTop() {
      window.scrollTo({top: 0})
    },
  },
}
</script>

<style lang="sass" scoped>
@import "@/assets/variables.sass"

header
  position: sticky
  top: 0
  left: 0
  z-index: 10
  background-color: $color-primary
  display: flex
  justify-content: space-between
  align-items: center
  padding: 1.25rem 5rem
  margin-top: 1.25rem
  &.scrolled
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25)
  .title
    font-size: 1.375rem
    .link
      color: $color-highlight
  .links
    display: flex
    align-items: center
    gap: 2rem
    a
      font-weight: 700
      display: inline-block
      position: relative
      &::after
        content: ''
        position: absolute
        width: 100%
        transform: scaleX(0)
        bottom: -0.25rem
        left: 0
        height: 2px
        background-color: $color-highlight
        transform-origin: bottom right
        transition: transform 0.25s ease-out
      &:hover::after
        transform: scaleX(1)
        transform-origin: bottom left
      &:active::after
        transform: scaleY(1.5)
        transition: transform 0.075s ease-out
  @media (max-width: $l)
    .title
      font-size: 1.125rem
    .links
      gap: 1.5rem
      a
        font-size: 0.875rem
  @media (max-width: $m)
    justify-content: center
    .links
      display: none
</style>
