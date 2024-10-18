<template>
  <section id="expériences">
    <div class="title">
      <h2>Expériences en milieu professionnel <span>&#129309;</span></h2>
      <p>Afin d'approfondir mon expérience dans le domaine informatique, j'ai effectué différents stages :</p>
    </div>
    <div class="separation"/>
    <div class="list">
      <div class="item" v-for="item in experiences" :key="item.id">
        <div class="left">
          <img :src="`/data-assets/experiences/${item.image}`" :alt="`Logo de l'entreprise ${item.name}`">
          <p v-html="item.description"/>
        </div>
        <div class="right">
          <h3>{{ item.title }}</h3>
          <p v-html="item.text"/>
        </div>
      </div>
    </div>
    <div class="separation2"/>

    <div class="title">
      <h2>Expériences en milieu asssociatif <span>&#128101;</span></h2>
      <p>En dehors de l'informatique, je fais parti de plusieurs associations :</p>
    </div>
    <div class="separation"/>

    <div class="list">
      <div class="item" v-for="item in experiencesasso" :key="item.id">
        <div class="left">
          <img :src="`/data-assets/experiences/${item.image}`" :alt="`Logo de l'association ${item.name}`">
          <p v-html="item.description"/>
        </div>
        <div class="right">
          <h3>{{ item.title }}</h3>
          <p v-html="item.text"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import experiencesData from '@/assets/data/experiences.json'
import associationData from '@/assets/data/associations.json'
import {extractRuntimeProps} from "eslint-plugin-vue/lib/utils/ts-utils/ts-ast";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Experience',
  methods: {extractRuntimeProps},
  data() {
    return {
      experiences: experiencesData,
      experiencesasso: associationData,
    }
  }
}


</script>

<style lang="sass" scoped>
@import "@/assets/variables.sass"

#expériences
  width: 100%
  background-color: $color-primary
  color: $color-secondary
  display: flex
  flex-direction: column
  @include padding
  .title
    display: flex
    flex-direction: column
    align-items: center
    text-align: center
    h2
      font-weight: 900
      font-size: 1.625rem
      color: $color-white
      margin-bottom: 1rem
      span
        margin-left: 0.5rem
        font-size: 2rem
    p
      max-width: 65%
  .separation
    width: 40%
    position: relative
    left: 50%
    transform: translateX(-50%)
    height: 2px
    background-color: $color-secondary
    margin-top: 2rem
  .separation2
    width: 120%
    position: relative
    left: 50%
    transform: translateX(-50%)
    height: 2px
    background-color: $color-highlight
    margin-top: 4rem
    margin-bottom: 7rem
  .list
    display: flex
    flex-direction: column
    .item
      display: flex
      justify-content: space-between
      margin: 5rem
      .left
        display: flex
        align-items: start
        flex-direction: column
        max-width: 25%
        img
          max-height: 3.75rem
          max-width: 10rem
          margin-bottom: 1.25rem
      .right
        display: flex
        flex-direction: column
        width: 65%
        h3
          margin-bottom: 1.25rem
  @media (max-width: $xl)
    .item
      margin: 5rem 0 !important
  @media (max-width: $m)
    .separation
      width: inherit
  @media (max-width: $s)
    .item
      flex-direction: column
      gap: 2.5rem
      .right
        width: inherit !important
      .left
        max-width: inherit !important
</style>
