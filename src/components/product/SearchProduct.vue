<template>
  <form>
    <input v-model="search" type="text" name="search" id="search" placeholder="Buscar...">
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
      this.search = ''
    }
  }
}
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#search {
  width: 100vh;
  padding: 20px;
  border: none;
}

#searc:focus,
#search:hover {
  transform: scale(1.1);
}

#lupa {
  width: 106px;
  height: 62px;
  background: url('../../assets/search.svg') no-repeat center center;
  text-indent: -150px;
  position: absolute;
  top: 0px;
  right: 0px;
  border: none;
  cursor: pointer;
  box-shadow: none;
}
</style>
