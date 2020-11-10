<template>
  <div id="app">
    <TheHeader />
    <main class="main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
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

button:disabled {
  opacity: 0.7;
}

img {
  max-width: 100%;
  display: block;
}

select {
  background-color: #fff;
}

input,
textarea,
select {
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 15px;
  box-shadow: 0px 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 15px;
}

input:focus,
input:hover,
select:focus,
select:hover,
textarea:focus,
textarea:hover {
  outline: none;
  box-shadow: 0px 8px 12px rgba(30, 60, 90, 0.2);
  border-color: #87f;
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

@keyframes fade-down {
  from {
    opacity: 0;
    transform: translate3d(0px, -30px, 0px);
  }
  to {
    opacity: 1;
    transform: rotate3d(0px, 0px, 0px);
  }
}

@keyframes fade-left {
  from {
    opacity: 0;
    transform: translate3d(-60px, 0px, 0);
  }
  to {
    opacity: 1;
    transform: rotate3d(0, 0, 0);
  }
}

/** Transition Vue */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
