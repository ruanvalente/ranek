<template>
  <section>
    <h1>Compre ou Venda</h1>
    <SearchProduct />
    <ProductList />
  </section>
</template>

<script>
import SearchProduct from '@/components/product/SearchProduct.vue'
import ProductList from '@/components/product/ProductList.vue'

export default {
  name: 'Home',
  components: {
    SearchProduct,
    ProductList
  }
}
</script>

<style scoped>
h1 {
  color: #64f;
  font-size: 2rem;
  text-align: center;
  margin-top: 40px;
}
</style>
