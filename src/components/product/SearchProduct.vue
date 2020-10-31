<template>
  <form>
    <input v-model="search" type="text" name="search" id="search">
    <input @click.prevent="searchProduct" type="submit" value="Buscar" id="lupa">
  </form>
</template>

<script>
export default {
  name: 'SearchProduct',
  data: () => ({
    search: ''
  }),
  methods: {
    searchProduct () {
      this.$router.push({ query: { q: this.search } })
    }
  }
}
</script>

<style>

</style>
