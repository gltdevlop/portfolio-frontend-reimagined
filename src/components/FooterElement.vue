<template>
  <footer>
    <div class="container">
      <p>© 2024 • Fait avec VueJS par <a href="https://oural.dev">Oural</a> et moi.</p>
      <div>
        <a href="https://github.com/gltdevlop" target="_blank">
          <img src="@/assets/logos/github.svg" width="32" height="32" alt="Github">
        </a>
        <a href="https://discord.com/users/lherbag" target="_blank">
          <img src="@/assets/logos/discord.svg" width="32" height="32" alt="Discord">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterElement'
}
</script>

<style scoped lang="sass">
@import "@/assets/variables.sass"

footer
  background-color: $color-secondary
  color: $color-primary
  padding: 0 10vw
  .container
    padding: 1rem 1.5rem
    border-top: $color-primary 2px solid
    display: flex
    justify-content: space-between
    align-items: center
    p
      font-size: 0.95rem
    div
      display: flex
      align-items: center
      gap: 1.25rem
      a img
        filter: $filter-primary
        transition: transform 0.2s ease-in-out
        &:hover
          transform: scale(0.9)
        &:active
          filter: $filter-highlight
</style>
