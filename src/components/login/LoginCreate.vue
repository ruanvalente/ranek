<template>
  <section class="login-create" v-scroll-to="'#form'">
    <h2 class="login-title">Criar Conta</h2>
    <button class="btn" v-if="!openForm" @click.prevent="createLogin">
      Criar conta
    </button>

    <Form v-if="openForm">
      <button class="btn">Criar Conta</button>
    </Form>
  </section>
</template>

<script>
import Form from '@/components/form/Form'
export default {
  name: 'LoginCreate',
  components: { Form },
  data: () => ({
    openForm: false
  }),
  methods: {
    createLogin () {
      this.openForm = true
    }
  }
}
</script>

<style scoped>
.login-title {
  margin-top: 40px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 2rem;
  color: #87f;
  animation: fade-down 1s forwards;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  animation: fade-left 1s forwards;
}
</style>
