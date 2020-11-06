<template>
  <section>
    <div class="product" v-if="product">
      <ul class="product-photo" v-if="product.photo">
        <li v-for="(photo, index) in product.photo" :key="index">
          <img :src="photo.src" :alt="photo.title" />
        </li>
      </ul>
      <div class="product-info">
        <h1 class="product-title">{{ product.name }}</h1>
        <p class="product-price">{{ product.price | formatPrice }}</p>
        <p class="product-description">{{ product.description }}</p>
        <button class="btn" v-if="product.sold">Comprar</button>
        <button class="btn" v-else disabled>Produto Vendido</button>
      </div>
    </div>

    <div v-else>
      <Loading />
    </div>
  </section>
</template>

<script>
import Loading from '@/components/Loading'
import { API } from '@/services/api.js'

export default {
  name: 'ProductPage',
  components: { Loading },
  props: ['id'],
  data: () => ({
    product: null
  }),
  methods: {
    async getProduct () {
      setTimeout(async () => {
        const response = await API.get(`/product/${this.id}`)
        this.product = await response.data
      }, 2000)
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style lang="css" scoped>
.product {
  display: grid;
  grid-template-columns: 1fr, 1fr;
  grid-gap: 30px;

  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.product-price {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.product-description {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
