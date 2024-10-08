<template>
  <section id="réalisations">
    <h2 >Mes différentes réalisations <span>&#x1F9F1;</span></h2>
    <div class="container">
      <div class="item" v-for="item in productions" :key="item.id">
        <div class="content" @click="openProject">
          <h3 v-html="item.title"/>
          <p v-html="item.description"/>
          <div class="tags">
            <span v-for="tag in item.tags" :key="tag.id">{{ tag }}</span>
          </div>
          <span class="btn">EN SAVOIR PLUS</span>
        </div>
        <div class="images">
          <div class="image-item" v-for="image in item.images" :key="image.id">
            <div class="image-container">
              <img class="image" v-if="image.type === 'IMG'" :src="`/data-assets/productions/${item.id}/${image.id}`" :alt="image.description">
              <video class="image" v-if="image.type === 'VIDEO'" :src="`/data-assets/productions/${item.id}/${image.id}`" autoplay loop muted>Votre navigateur ne prend pas en charge la balise vidéo.</video>
              <div class="overlay" @click="openImage">
                <img src="@/assets/icons/expand.svg" alt="expand arrow icon">
              </div>
            </div>
            <span>{{ image.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div ref="modal" class="modal" @click="closeModal">
    <img v-if="modalType === 'IMG'" :src="modalSrc" :alt="modalDescription">
    <video v-if="modalType === 'VIDEO'" :src="modalSrc" :alt="modalDescription" autoplay loop muted controls>Votre navigateur ne prend pas en charge la balise vidéo.</video>
    <span>{{ modalDescription }} <span>(click to close)</span></span>
  </div>
</template>

<script>
import productionsData from '@/assets/data/productions.json'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Productions",
  data() {
    return {
      productions: productionsData,
      currentProject: null,
      modalSrc: '',
      modalType: '',
      modalDescription: ''
    }
  },
  methods: {
    openProject(event) {
      const content = event.currentTarget
      const item = content.closest('.item')
      if (this.currentProject) {
        this.currentProject.classList.remove('active')
        this.currentProject.querySelector('.btn').innerHTML = 'EN SAVOIR PLUS'
      }
      if (this.currentProject === item) {
        this.currentProject = null
      } else {
        this.currentProject = item
        item.classList.add('active')
        content.querySelector('.btn').innerHTML = 'RÉDUIRE'
      }
    },
    openImage(event) {
      const item = event.currentTarget.closest('.image-item')
      const src = item.querySelector('.image').getAttribute('src')
      const description = item.querySelector('span').innerHTML
      this.modalSrc = src
      this.modalType = item.querySelector('.image').tagName
      this.modalDescription = description
      this.$refs.modal.classList.add('active')
    },
    closeModal() {
      this.$refs.modal.classList.remove('active')
    }
  }
}
</script>

<style lang="sass">
@import "@/assets/variables.sass"

#réalisations
  width: 100%
  display: flex
  flex-direction: column
  padding: 7.5rem 3.25rem
  h2
    font-weight: 900
    font-size: 1.625rem
    margin-bottom: 5rem
    text-align: center
    span
      margin-left: 0.5rem
      font-size: 2rem
  .container
    display: flex
    justify-content: center
    flex-wrap: wrap
    gap: 6.25rem 7.5rem
    .item
      .content
        position: relative
        display: flex
        gap: 1rem
        flex-direction: column
        justify-content: space-between
        background-color: $color-secondary
        color: $color-primary
        width: 25rem
        height: 20rem
        padding: 1.25rem
        border-radius: 5px
        cursor: pointer
        h3
          font-family: "Mona Sans Wide", sans-serif
          font-weight: 800
          span
            margin-right: 0.25rem
            font-size: 1.5rem
        p
          font-weight: 700
        .tags
          display: flex
          flex-wrap: wrap
          gap: 0.5rem
          span
            font-family: "Mona Sans Wide", sans-serif
            font-weight: 700
            font-size: 0.75rem
            background-color: $color-primary
            color: $color-white
            padding: 0.25rem 0.5rem
            border-radius: 5px
        &:hover
          box-shadow: inset 0 5px 10px rgba(0, 31, 30, 0.5)
          .btn
            opacity: 1
        .btn
          opacity: 0
          transition: opacity 0.25s
          pointer-events: none
          display: flex
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
          z-index: 1
          align-items: center
          justify-content: center
          background-color: $overlay-dark
          color: $color-highlight
          font-weight: 900
          font-size: 1.5rem
          border-radius: 4.5px
      .images
        display: none
        justify-content: space-between
        align-items: center
        position: absolute
        gap: 2rem
        overflow-x: scroll
        transform: translateY(-15.625rem)
        left: 0
        width: 100%
        height: 17.5rem
        padding: 1.25rem
        background-color: $color-secondary
        color: $color-primary
        .image-item
          display: flex
          align-items: center
          flex-direction: column
          justify-content: space-evenly
          height: 100%
          .image-container
            position: relative
            overflow: hidden
            border-radius: 5px
            height: 9rem
            .image
              height: 100%
            .overlay
              position: absolute
              top: 0
              left: 0
              width: 100%
              height: 100%
              background-color: $overlay-dark
              display: flex
              align-items: center
              justify-content: center
              transition: opacity 0.25s
              cursor: pointer
              opacity: 0
              &:hover
                opacity: 1
              img
                width: 2.5rem
                height: 2.5rem
                filter: $filter-highlight
          span
            text-align: center
            font-weight: 800
      &.active
        .content
          box-shadow: inset 0 5px 10px rgba(0, 31, 30, 0.5)
          margin-bottom: 20rem
          .btn
            opacity: 1
          &:after
            content: ''
            position: absolute
            background-color: $color-secondary
            transform: rotate(45deg) translateX(-50%)
            top: 24rem
            left: 50%
            width: 2.5rem
            height: 2.5rem
        .images
          display: flex
  @media (max-width: $l)
    padding: 7.5rem 2.5rem
    .container
      gap: 3.75rem
  @media (max-width: $xs)
    padding: 3.75rem 1.25rem
    .container
      gap: 3rem
      .item .content
        width: inherit
        height: inherit
        p
          font-size: 0.9rem
.modal
  z-index: 20
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: $overlay-dark
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  gap: 1.25rem
  transition: opacity 0.125s
  opacity: 0
  cursor: pointer
  pointer-events: none
  &.active
    img, video, span
      transform: scaleY(1)
    opacity: 1
    pointer-events: all
  img, video, span
    transition: transform 0.375s
    transform: scaleY(0)
  img, video
    max-height: 90%
    max-width: 90%
    border-radius: 5px
  span
    font-weight: 700
    font-size: 1.25rem
    color: $color-white
    span
      font-weight: 500
</style>
