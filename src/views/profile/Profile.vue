<template>
  <section class="profile">
    <h2>Página do usuário: {{ userName }}</h2>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    userName () {
      return this.$store.state.user.name
    }
  }
}
</script>

<style scoped>
.profile {
  display: grid;
  grid-template-columns: 1fr, 1fr;
  grid-gap: 30px;

  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
  animation: fade-left 1s forwards;
}
</style>
