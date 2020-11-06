<template>
  <header>
    <nav>
      <router-link to="/" class="logo">
        <img src="@/assets/ranek.svg" alt="Ranek">
      </router-link>
      <router-link to="/profile" v-if="$store.state.hasLogin" class="btn">{{userName}}</router-link>
      <router-link to="/login" v-else class="btn">Vender / Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  computed: {
    userName () {
      return this.$store.state.user.name.replace(/ .*/, '')
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 15px;

  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 90px;
}
</style>
