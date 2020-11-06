<template>
  <section class="login">
    <h2>Login</h2>
    <form class="login-form">
      <label for="email">E-mail</label>
      <input type="email" name="email" id="email" v-model="login.email">

      <label for="password">Senha</label>
      <input type="password" name="password" id="password" v-model="login.password">

      <button class="btn" @click.prevent="signIn">Logar</button>
    </form>

    <p class="forgot-password">
      <a href="/" target="_blank">
       Esqueceu sua senha ? Clique aqui
      </a>
    </p>

    <LoginCreate />
  </section>
</template>

<script>
import LoginCreate from '@/components/login/LoginCreate'
export default {
  name: 'Login',
  components: { LoginCreate },
  data: () => ({
    login: {
      email: '',
      password: ''
    }
  }),
  methods: {
    signIn () {
      this.$store.dispatch('getUser', this.login.email)
      this.$router.push('/profile')
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

.login-form {
  display: grid;
  animation: fade-left 1s forwards;
}

.login h2 {
  margin-top: 60px;
  text-align: center;
  font-size: 2rem;
  color: #87f;
  animation: fade-down 1s forwards;
}

.login-form label {
  font-weight: bold;
  padding: 15px 0;
}

.btn {
  margin-left: auto;
  margin-right: auto;
  width: 100vh;
  max-width: 300px;
}

.forgot-password {
  text-align: center;
  margin: 20px auto 0 auto;
}

.forgot-password a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
