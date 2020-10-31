<template>
  <section class="product-container">
    <div v-for="product in products" :key="product.id" class="product">
      <img v-if="product.photo" :src="product.photo[0].src" :alt="product.photo[0].title">
      <p class="product-price">{{ product.price }}</p>
      <h2 class="product-title">{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductList',
  data: () => ({
    products: []
  }),
  filters: {
    formatPrice (value) {
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
    }
  },
  methods: {
    getProducts (url) {
      return fetch(url)
        .then((response) => response.json())
        .then((result) => {
          this.products = result
        })
        .catch((error) => error)
    }
  },
  mounted () {
    this.getProducts('http://localhost:3000/product')
  }
}
</script>

<style scoped>
</style>
