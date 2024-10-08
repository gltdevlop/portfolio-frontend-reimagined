<template>
  <section id="compétences">
    <h2>Voici tout ce que j'ai appris à faire<span>&#9997;</span></h2>
    <div class="timeline">
      <div class="item" v-for="( item, index ) in skills" :key="item.id" :class="{ right: index % 2 !== 0 }">
        <span class="date">{{ item.date }}</span>
        <svg class="arrow" viewBox="161.38 25 142 322" xmlns="http://www.w3.org/2000/svg">
          <g id="svg" transform="matrix(1, 0, 0, 1, -1, -8)">
            <polygon style="stroke: var(--color-secondary); fill: var(--color-secondary);" points="170.077 23.126 182.609 79.521 294.616 172.729 293.833 197.794 234.305 253.406 182.218 299.618 170.469 346.223 170.469 365.413 150.104 364.238 154.803 23.126"/>
            <path id="path0" d="M163.780 45.609 C 167.661 78.378,175.963 88.990,229.103 129.118 C 304.566 186.103,304.600 187.473,231.922 241.662 C 172.746 285.783,166.242 294.546,163.423 333.951 L 161.380 362.500 172.357 362.500 C 182.896 362.500,183.333 361.578,183.333 339.376 C 183.333 306.241,189.394 298.114,245.332 256.250 C 297.329 217.335,304.167 209.119,304.167 185.561 C 304.167 163.004,301.332 159.600,250.483 121.107 C 189.911 75.252,186.757 71.669,184.279 45.876 C 182.455 26.892,181.325 25.000,171.806 25.000 C 161.710 25.000,161.426 25.730,163.780 45.609 " stroke="none" fill="#004643" fill-rule="evenodd"/>
          </g>
        </svg>
        <div class="content" @mouseover="mouseOver" @mouseout="mouseOut">
          <div v-for="content in item.content" :key="content.id">
            <span class="type">{{ content.title }}</span>
            <span class="icons">
              <img v-for="icon in content.icons" :key="icon.id" :src="icon.url" :alt="icon.name" :description="icon.description">
            </span>
          </div>
        </div>
        <p class="description"/>
      </div>
    </div>
  </section>
</template>

<script>
import skillsData from '@/assets/data/skills.json'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Competences",
  data() {
    return {
      skills: skillsData
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY + window.innerHeight / 1.75
      const items = document.querySelectorAll('#compétences .item')
      const sectionTop = document.querySelector('#compétences').offsetTop
      items.forEach(item => {
        const itemPos = item.offsetTop + sectionTop
        if (scrollY >= itemPos) {
          item.classList.add('active')
        }
      })
    })
  },
  methods: {
    mouseOver(event) {
      const target = event.target
      const description = target.closest('.item').querySelector('.description')
      if (target.tagName.toLowerCase() === 'img') {
        description.innerHTML = target.getAttribute('description')
      } else {
        description.innerHTML = 'Survolez une icone pour en savoir plus <span>&#128064;</span>'
      }
    },
    mouseOut(event) {
      const target = event.target
      const description = target.closest('.item').querySelector('.description')
      description.innerHTML = ''
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/variables.sass"

#compétences
  width: 100%
  background-color: $color-secondary
  color: $color-primary
  display: flex
  flex-direction: column
  padding: 7.5rem 5rem
  overflow: hidden
  h2
    font-weight: 900
    font-size: 1.625rem
    margin-bottom: 5rem
    text-align: center
    span
      margin-left: 0.5rem
      font-size: 2rem
  .timeline
    display: flex
    flex-direction: column
    gap: 5rem
    position: relative
    padding: 5rem 0
    .item
      width: 22.5rem
      position: relative
      left: 50%
      transform: translateX(-125%)
      .content, .arrow
        transform: translateX(-50vw)
        transition: transform 0.25s ease-in-out
      &.active
        .content, .arrow
          transform: translateX(0)
      &.right
        transform: translateX(25%)
        .content
          transform: translateX(50vw)
        .arrow
          left: 0
          transform: rotate(180deg) translateX(calc(100% - 50vw))
        .date
          left: -25%
          transform: translateX(-50%)
        &.active
          .content
            transform: translateX(0)
          .arrow
            transform: rotate(180deg) translateX(100%)
      .arrow
        z-index: 1
        position: absolute
        left: 22.5rem
        top: 32.5px
        height: 50px
      .date
        width: 5ch
        height: 5ch
        background: $color-primary
        color: $color-secondary
        font-family: "Mona Sans Wide", sans-serif
        font-weight: 700
        border-radius: 50%
        position: absolute
        left: 125%
        transform: translateX(-50%)
        margin-top: 25px
        display: flex
        align-items: center
        justify-content: center
      .content
        background-color: $color-secondary
        outline: 3px solid $color-primary
        border-radius: 5px
        padding: 1.5rem
        display: flex
        flex-direction: column
        gap: 1rem
        .type
          font-weight: 700
        .icons
          margin-top: 1rem
          display: flex
          align-items: center
          flex-wrap: wrap
          gap: 1rem
          img
            cursor: help
      .description
        position: absolute
        overflow-wrap: break-word
        width: 44%
        margin-top: 1rem
        padding: 0 0.25rem
        font-family: "Mona Sans Wide", sans-serif
        font-weight: 700
        font-size: 0.9rem
    &::before
      position: absolute
      top: 0
      left: 50%
      transform: translateX(-50%)
      content: ''
      background-color: $color-primary
      width: 3.75px
      height: 100%
      border-radius: 0 0 5px 5px
    &:after
      content: ''
      position: absolute
      top: 0
      left: 50%
      transform: translateX(-50%)
      border-left: 12.5px solid transparent
      border-right: 12.5px solid transparent
      border-top: 20px solid $color-primary
      border-radius: 2.5px
  @media (max-width: $l)
    .timeline
      .item
        transform: translateX(25%)
        .content
          transform: translateX(100vw)
        .arrow
          left: 0
          transform: rotate(180deg) translateX(calc(100% - 100vw)) !important
        .date
          left: -25%
          transform: translateX(-50%)
        &.active
          .content
            transform: translateX(0)
          .arrow
            transform: rotate(180deg) translateX(100%) !important
      &:before, &:after, .item
        left: 0
  @media (max-width: $m)
    padding: 5rem 2.5rem
    .timeline
      gap: 8.25rem
      .item
        width: 82.5%
        .description
          width: 100%
</style>
