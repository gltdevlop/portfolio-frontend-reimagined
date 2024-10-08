<template>
  <section id="about-me">
    <div class="first">
      <h2>Qui suis-je ?</h2>
      <p>
        Je suis un lycéen de 16 ans au CNED qui à toujours aimé bidouiller
        <br><br>
        Depuis mon premier ordinateur à mes 7 ans, j'ai toujours adoré l'informatique et toucher à tout, de la soudure aux serveurs en passant par le développement.
        <br><br>
        A mes 9 ans, j'ai commencé à développer en Java pour le jeu Minecraft afin de réaliser des modules additionnels pour ajouter des fonctionalités au jeu (mods et plugins)
        <br><br>
        J'ai ensuite développé en HTML/CSS afin de réaliser mes premiers sites web et j'ai de suite appris comment utiliser un ordinateur comme serveur afin de faire des serveurs Minecraft.
        <br><br>
        De l'audiovisuel comme les vidéos Youtube à l'informatique serveurs en passant par le bricolage (menuiserie), ce sont ces domaines qui m'ont forgés et qui m'ont appris à apprendre en Autodidacte.
      </p>
    </div>
    <div class="second">
      <div style="max-width: 70%">
        <h2>Et plus tard ?<span>&#128640;</span></h2>
        <ul>
          <li>J'ai choisi les spécialités NSI, HGGSP et SES afin d'intégrer une école telle que Sciences Politiques et ensuite faire un diplôme d'Administration système.</li>
          <li>J'aime beaucoup le domaine des serveurs et j'aimerai bien me spécialiser dedans</li>
          <li>En attendant, je cherche à acquérir de l'expérience dans l'informatique par des stages ou des jobs étudiant en parallèle des cours.</li>
        </ul>
      </div>
      <div style="max-width: 25%">
        <h3>L'informatique,<br>mais pas que...</h3>
        <p>En dehors du ma passion pour l'informatique, j'aime faire du sport (salle de sport), de l'audiovisuel (vidéos youtube), de la menuiserie et écouter de la musique.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "About-me"
}
</script>

<style lang="sass" scoped>
@import "@/assets/variables.sass"

#about-me
  width: 100%
  background-color: $color-secondary
  color: $color-primary
  display: flex
  flex-direction: column
  @include padding
  h2, h3
    font-weight: 900
    margin: 5rem 0 2rem 0
    span
      margin-left: 0.5rem
      font-size: 1.75rem
  .first
    margin-bottom: 2.5rem
    h2
      margin-top: 0
    p
      max-width: 62.5rem
  .second
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    div
      max-width: 75%
      @media (max-width: $xl)
        max-width: none
      h3
        font-size: 1.25rem
      ul
        margin-left: 2rem
        li
          margin: 0.75rem 0
  @media (max-width: $l)
    .first
      margin-bottom: 0
    div
      max-width: none !important
  @media (max-width: $m)
    h2, h3
      margin: 2.5rem 0 2rem 0
  @media (max-width: $s)
    p, li
      font-size: 0.95rem
</style>
