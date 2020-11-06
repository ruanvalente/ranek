<template>
  <ul v-if="totalPage > 1" class="pagination-item">
    <li v-for="(page, index) in paginationRange" :key="index">
      <span v-if="page === ''">{{ page }}</span>
      <router-link v-if="page !== ''" :to="{ query: query(page) }"
        >{{ page }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Paginate',
  props: {
    pagination: {
      page: {
        type: Number,
        required: false,
        default: 1
      },
      total: {
        type: Number,
        required: true,
        default: 0
      },
      limit: {
        type: Number,
        required: true,
        default: 5
      },
      productPerPage: {
        type: Number,
        required: true,
        default: 6
      }
    }
  },
  computed: {
    paginationRange () {
      const currentPage = Number(this.$route.query._page)
      const { total } = this.pagination
      const { rowsPerPage } = this.pagination
      const range = 9
      return this.generatePagesArray(currentPage, total, rowsPerPage, range)
    },
    totalPage () {
      const total = this.pagination.total / this.pagination.rowsPerPage
      return total !== Infinity ? Math.ceil(total) : 0
    }
  },
  methods: {
    query (page) {
      return {
        ...this.$route.query,
        _page: page
      }
    },
    generatePagesArray (
      currentPage,
      collectionLength,
      rowsPerPage,
      paginationRange
    ) {
      const pages = []
      const totalPages = Math.ceil(collectionLength / rowsPerPage)
      const halfWay = Math.ceil(paginationRange / 2)
      let position

      if (currentPage <= halfWay) {
        position = 'start'
      } else if (totalPages - halfWay < currentPage) {
        position = 'end'
      } else {
        position = 'middle'
      }

      const ellipsesNeeded = paginationRange < totalPages
      let i = 1
      while (i <= totalPages && i <= paginationRange) {
        const pageNumber = this.calculatePageNumber(
          i,
          currentPage,
          paginationRange,
          totalPages
        )
        const openingEllipsesNeeded =
          i === 2 && (position === 'middle' || position === 'end')
        const closingEllipsesNeeded =
          i === paginationRange - 1 &&
          (position === 'middle' || position === 'start')
        if (
          ellipsesNeeded &&
          (openingEllipsesNeeded || closingEllipsesNeeded)
        ) {
          pages.push('')
        } else {
          pages.push(pageNumber)
        }
        i++
      }
      return pages
    },

    calculatePageNumber (i, currentPage, paginationRange, totalPages) {
      const halfWay = Math.ceil(paginationRange / 2)
      if (i === paginationRange) {
        return totalPages
      } else if (i === 1) {
        return i
      } else if (paginationRange < totalPages) {
        if (totalPages - halfWay < currentPage) {
          return totalPages - paginationRange + i
        } else if (halfWay < currentPage) {
          return currentPage - halfWay + i
        } else {
          return i
        }
      } else {
        return i
      }
    }
  }
}
</script>

<style scoped>
.pagination-item li {
  display: inline-block;
}

.pagination-item {
  grid-column: 1 / -1;
}

.pagination-item li a {
  padding: 4px 8px;
  border-radius: 4px;
  margin: 4px;
}

.pagination-item li a.router-link-exact-active,
.pagination-item li a:hover {
  background: #87f;
  color: #fff;
}
</style>
