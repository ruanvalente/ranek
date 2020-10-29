<template>
  <div id="app">
    <TheHeader />
    <main class="main">
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}
body,
ul,
li,
h1,
h2,
p {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: #345;
  background: url("./assets/pattern.svg") repeat top;
}

a {
  text-decoration: none;
  color: #345;
}

img {
  max-width: 100%;
  display: block;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
}

.btn {
  display: block;
  padding: 10px 30px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  text-align: center;
  border-radius: 4px;
  border: none;

  background: #87f;
  color: #fff;
  box-shadow: 0px 4px 8px rgba(30, 60, 90, 0.2);

  transition: all 0.2s;
}

.btn:hover {
  background: #65d;
  transform: scale(1.1);
}
</style>
