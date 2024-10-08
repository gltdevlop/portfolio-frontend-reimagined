<template>
  <hero-banner/>
  <about-me/>
  <experience/>
  <competences/>
  <productions/>
  <contacts/>

</template>

<script>
import HeroBanner from '@/components/MainView/HeroBanner.vue'
import AboutMe from '@/components/MainView/About-me.vue'
import Experience from '@/components/MainView/Experiences.vue'
import Competences from '@/components/MainView/Competences.vue'
import Productions from '@/components/MainView/Productions.vue'
import Contacts from '@/components/MainView/Contacts.vue'
import axios from "axios"

export default {
  name: "MainView",
  components: { HeroBanner, AboutMe, Experience, Competences, Productions, Contacts },
  data: () => ({
    askToken: false,
    error: '',
    tokenName: '',
    token: localStorage.getItem('token') || (new URLSearchParams(window.location.search)).get('token')
  }),
  mounted() {
  },
  watch: {
    tokenName() {
      const notification = this.$refs.notification
      notification.style.transform = 'translateX(-50%)'
      setTimeout(() => {
        notification.style.transform = 'translateX(-50%) translateY(-7.5rem)'
      }, 3000)
    }
  },
  methods: {
    closeModal() {
      this.askToken = false
    },
    getContents(event) {
      if (event) event.preventDefault()
      axios.get(`${this.$backendIp}/getContents`, {
        params: {
          token: this.token
        }
      })
      .then(async response => {
        if (!localStorage.getItem('token')) {
          localStorage.setItem('token', this.token)
          document.location.href = '/'
        } else {
          const data = response.data
          await Promise.all(data.contents.map(async (content) => {
            document.querySelector(content.query)[content.attribute] = content.content
          }))
          axios.get(`${this.$backendIp}/getProfilePicture`, {
            params: {
              token: this.token
            },
            responseType: 'arraybuffer'
          })
          .then(response => {
            const imageBlob = new Blob([response.data], { type: 'image/png' })
            document.querySelector('.heroBanner .image img').src = URL.createObjectURL(imageBlob)
            window.addEventListener("load", () => this.tokenName = data.name)
          })
        }
      })
      .catch(error => {
        if (this.askToken) {
          this.error = error.response.data.error
        } else {
          localStorage.removeItem('token')
          document.location.href = '/'
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/variables.sass"

.tokenModal
  .overlay
    z-index: 25
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    padding: 2.5rem 5rem
    display: flex
    align-items: center
    flex-direction: column
    border-radius: 5px
    width: 40rem
    background-color: $color-primary
    text-align: center
    @media (max-width: $m)
      width: 90%
      @media (max-width: $xs)
        padding: 1.25rem 2.5rem
        .title
          font-size: 1.25rem
        form
          flex-direction: column
          gap: 1rem
          input, button
            text-align: center
            width: 100%
            border-radius: 3.75px !important
    form
      margin: 3rem 0 1rem 0
      display: flex
      align-items: center
      justify-content: center
      input
        border-radius: 3.75px 0 0 3.75px
      button
        border-radius: 0 3.75px 3.75px 0
    .error
      color: $color-wrong
      font-weight: 600
      font-style: oblique 10deg
    .closeCross
      position: absolute
      top: 1rem
      right: 1rem
      filter: $filter-secondary
      cursor: pointer
      transition: transform .2s ease-in-out
      &:hover
        transform: rotate(90deg)
    .closeMessage
      margin-top: 1rem
      cursor: pointer
      &:hover
        text-decoration: underline
  .background
    z-index: 20
    position: fixed
    top: 0
    height: 100%
    width: 100%
    background-color: $color-dark
    opacity: 87%
.notification
  z-index: 25
  padding: 1rem
  border-radius: 5px
  background-color: $overlay-dark
  backdrop-filter: blur(5px)
  position: fixed
  top: 1.5rem
  left: 50%
  white-space: nowrap
  text-align: center
  transform: translateX(-50%) translateY(-7.5rem)
  transition: transform 0.25s ease-in-out
  pointer-events: none
  @media (max-width: $xs)
    white-space: normal
    width: 90%
  span
    width: 100%
    font-weight: 600
    font-family: "Mona Sans", sans-serif
    span
      font-weight: 700
</style>
