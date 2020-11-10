<template>
  <form class="login-form" id="form">
    <label for="name">Nome</label>
    <input type="text" name="name" id="name" v-model="name" />

    <label for="email">E-mail</label>
    <input type="email" name="email" id="email" v-model="email" />

    <label for="password">Senha</label>
    <input
      type="password"
      name="password"
      id="password"
      v-model="password"
    />
    <label for="cep">Cep</label>
    <input type="text" name="cep" id="cep" v-model="zipCode" />

    <label for="street">Rua</label>
    <input type="text" name="street" id="street" v-model="street" />

    <label for="number">Número</label>
    <input type="text" name="number" id="number" v-model="number" />

    <label for="neighborhood">Bairro</label>
    <input
      type="text"
      name="neighborhood"
      id="neighborhood"
      v-model="neighborhood"
    />

    <label for="city">Cidade</label>
    <input type="text" name="city" id="city" v-model="city" />

    <label for="state">Estado</label>
    <input type="text" name="state" id="state" v-model="state">

    <div class="button-create">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from '@/helpers/mapFields.js'
export default {
  name: 'Form',
  computed: {
    ...mapFields({
      fields: ['name', 'email', 'password', 'zipCode', 'street', 'number', 'neighborhood', 'city', 'state'],
      base: 'user',
      mutation: 'SET_USER'
    })
  }
}
</script>

<style scoped>

.login-form {
  display: grid;
  grid-template-columns: 80px 1fr;
  animation: fade-left 1s forwards;
  align-items: center;
}

.button-create {
  grid-column: 2;
}
</style>
