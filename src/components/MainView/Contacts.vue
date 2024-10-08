<template>
  <section id="contacts">
    <h2>Contactez-moi<span>&#128242;</span></h2>
    <div class="container">
      <div class="details">
        <h3>Mes coordonnées</h3>
        <div class="items">
          <div class="item" id="phone">

          </div>
          <div class="item" id="email">
            <img src="@/assets/icons/envelope.svg" width="32" height="32" alt="Enveloppe">
            <div>
              <h4>Email</h4>
              <p><a href="mailto:gabrielbriatte@gmail.com">gabrielbriatte@gmail.com</a></p>
            </div>
          </div>
          <div class="item" id="address">
          </div>
        </div>
      </div>
      <form @submit="sendMessage">
        <button type="email">Me contacter !</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contacts",
  methods: {
    sendMessage(event) {
      event.preventDefault()
      const form = event.target
      const button = form.querySelector('button')
      button.disabled = true
      button.innerText = 'Fenêtre ouverte!'
      window.open('mailto:gabrielbriatte@gmail.com?subject=Contact');
    }
  }
}
</script>

<style lang="sass">
@import "@/assets/variables.sass"

#contacts
  background-color: $color-secondary
  color: $color-primary
  width: 100%
  display: flex
  flex-direction: column
  @include padding
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
    .details
      flex: 50%
      h3
        font-weight: 800
        font-size: 1.5rem
        margin-bottom: 2rem
      .items
        display: flex
        flex-direction: column
        gap: 1.5rem
        .item
          display: flex
          align-items: center
          img
            margin-right: 1rem
            filter: $filter-primary
          div
            h4
              font-weight: 800
              font-size: 1.125rem
              margin-bottom: 0.5rem
            p, a
              font-size: 1rem
    form
      flex: 20%
      display: flex
      flex-wrap: wrap
      gap: 1rem
      button
        flex: 5%
  @media (max-width: $m)
    .container
      flex-direction: column
      gap: 5rem
  @media (max-width: $xs)
    .container form input
      flex: inherit !important
</style>
