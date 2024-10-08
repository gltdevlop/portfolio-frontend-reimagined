<template>
  <section class="heroBanner" ref="heroBanner">
    <div class="text">
      <h1>Salut !<span>&#128587;</span></h1>
      <h2>Moi c'est <span>Gabriel</span>, un jeune <br>passionné par l'informatique, l'audiovisuel...</h2>
    </div>
    <div class="image">
      <img src="@/assets/images/Picture.png" alt="Photo de mon avatar">
      <p class="code">
        let button_menu = document.querySelector(".header_button");<br>
        let float_menu  = document.querySelector(".header_menu--float");<br>
        <br>
        let line_top   = document.querySelector(".header_button_line--top");<br>
        let line_under = document.querySelector(".header_button_line--bottom");<br>
        <br>
        button_menu.isSelected = false;<br>
        <br>
        function addEffectWriting(element, time) {<br>
        &emsp;let element_array = element.innerText.split("");<br>
          <br>
        &emsp;element.count = 0;<br>
        &emsp;element.innerText = "";<br>
          <br>
        &emsp;function writeSymbols() {
        &emsp;&emsp;element.innerText += element_array[element.count];<br>
        &emsp;&emsp;element.count++;<br>
            <br>
        &emsp;&emsp;if (element.count === element_array.length) {<br>
        &emsp;&emsp;&emsp;setTimeout(() => {<br>
        &emsp;&emsp;&emsp;&emsp;writeSymbols();<br>
        &emsp;&emsp;&emsp;}, time);<br>
        &emsp;&emsp;} else if (element.count >= element_array.length) {<br>
        &emsp;&emsp;&emsp;element.count = 0;<br>
        &emsp;&emsp;&emsp;element.innerText = "";<br>
              <br>
        &emsp;&emsp;&emsp;writeSymbols();<br>
        &emsp;&emsp;}<br>
        &emsp;}<br>
        &emsp;writeSymbols();<br>
        }
      </p>
    </div>
  </section>
  <a href="#about-me" class="scrollDown">
    <img src="../../assets/icons/down-arrow.svg" width="18" height="18" alt="Flèche pointant vers le bas">
  </a>
</template>

<script>
export default {
  name: "HeroBanner",
  mounted() {
    const heroBanner = this.$refs.heroBanner
    const header = document.querySelector("header")
    const offsetHeight = header.offsetHeight + parseInt(window.getComputedStyle(header).getPropertyValue('margin-top'), 10)
    heroBanner.style.height = `${heroBanner.offsetHeight - offsetHeight}px`
    heroBanner.style.transform = `translateY(${-offsetHeight/2}px)`
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/variables.sass"

.heroBanner
  width: 100%
  height: 100vh
  padding: 0 5rem
  display: flex
  align-items: center
  justify-content: space-between
  overflow: hidden
  .text
    width: 40%
    h1
      font-size: 2.5rem
      font-weight: 900
      span
        margin-left: 0.5rem
        font-size: 2.75rem
        display: inline-block
        transform-origin: 70% 70%
        animation: wave-animation 2.5s infinite
        @keyframes wave-animation
          0%
            transform: rotate( 0.0deg)
          10%
            transform: rotate(14.0deg)
          20%
            transform: rotate(-8.0deg)
          30%
            transform: rotate(14.0deg)
          40%
            transform: rotate(-4.0deg)
          50%
            transform: rotate(10.0deg)
          60%
            transform: rotate( 0.0deg)
          100%
            transform: rotate( 0.0deg)
    h2
      font-size: 1.5rem
      font-weight: 600
      margin-top: 1rem
      span
        font-weight: 800
        color: $color-highlight
  .image
    position: relative
    display: flex
    justify-content: center
    align-items: center
    width: 65%
    img
      max-width: 25rem
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
    .code
      font-family: JetBrainsMono, monospace
      font-size: 0.75rem
      color: $color-secondary
  @media screen and (max-width: $xl)
    .text
      h1
        font-size: 2rem
        span
          font-size: 2.25rem
      h2
        font-size: 1.25rem
    .image
      width: 50%
      img
        max-width: 20rem
      .code
        font-size: 0.5rem
  @media (max-width: $m)
    padding: 0
    justify-content: center
    .text
      width: 50%
      z-index: 2
      @media (max-width: $xs)
        width: 70%
        br
          display: none
    .image
      width: 90%
      opacity: 12.5%
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)

.scrollDown
  cursor: pointer
  position: absolute
  bottom: 2.5rem
  left: 50%
  transform: translateX(-50%)
  width: 3rem
  height: 3rem
  border-radius: 100%
  border:  2px solid $color-secondary
  display: flex
  align-items: center
  justify-content: center
  transition: border-color 0.3s ease
  &:hover
    border-color: $color-highlight
    img
      filter: $filter-highlight
  img
    filter: $filter-secondary
    transition: filter 0.3s ease
    animation: scrollDown 2s ease infinite
    @keyframes scrollDown
      0%
        transform: translateY(-15px)
        opacity: 0
      45%
        transform: translateY(0px)
        opacity: 1
      65%
        transform: translateY(-5px)
        opacity: 1
      100%
        transform: translateY(15px)
        opacity: 0
</style>
