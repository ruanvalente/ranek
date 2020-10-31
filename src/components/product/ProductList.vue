<template>
  <section class="products-container">
    <div v-if="products && products.length" class="products">
      <div v-for="product in products" :key="product.id" class="product">
        <img
          v-if="product.photo"
          :src="product.photo[0].src"
          :alt="product.photo[0].title"
        />
        <p class="product-price">{{ product.price }}</p>
        <h2 class="product-title">{{ product.name }}</h2>
        <p class="product-description">{{ product.description }}</p>
      </div>
    </div>

    <div v-else-if="products && products.length === 0">
      <p class="no-products">
        Sem resultados para a busca. Tente usando outro termo.
      </p>
    </div>
  </section>
</template>

<script>
import { API } from '@/services/api.js'
import { serialize } from '@/helpers/serialize.js'
export default {
  name: 'ProductList',
  data: () => ({
    products: [],
    pagination: {
      limit: 5
    }
  }),
  filters: {
    formatPrice (value) {
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
    }
  },
  computed: {
    url () {
      const query = serialize(this.$route.query)
      return `?_limit=${this.pagination.limit}${query}`
    }
  },
  watch: {
    url () {
      this.getProducts()
    }
  },
  methods: {
    getProducts () {
      API.get(`/product/${this.url}`)
        .then((result) => {
          this.products = result.data
        })
        .catch((error) => error)
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style scoped>
.products-container {
  max-width: 1000px;
  margin: 0 auto;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
  animation: fade-left 1s forwards;

}
.product {
  box-shadow: 0px 4px 8px rgba(30, 60, 90, 0.2);
  padding: 10px;
  background: #fff;
  transition: all 0.2s;
  border-radius: 4px;
}

.product:hover {
  transform: scale(1.1);
  box-shadow: 0px 8px 12px rgba(30, 60, 90, 0.2);
  cursor: pointer;
  position: relative;
  z-index: 1;
}

.product img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.product-title {
  margin-bottom: 10px;
}

.product-price {
  color: #e80;
  font-weight: bold;
}

.no-products {
  color: #e80;
  text-align: center;
  margin-top: 40px;
}
</style>
