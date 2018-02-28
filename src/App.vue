<template>
<div class="container" id="app">
  <div class="row mt-2 mb-2">
    <div class="col-sm-12 col-md-12">
        <p class="lead">
            Products
        </p>
        <filter-component @query="getQuery($event)" @direction="getDirection($event)"></filter-component>
        <items-component :search-query="searchQuery" :order-direction="orderDirection"></items-component>
    </div>
  </div>
</div>
</template>

<script>
import Filter from './components/Filter.vue'
import Items from './components/Items.vue'

export default {
  name: 'app',
  components: {
    filterComponent: Filter,
    itemsComponent: Items
  },
  data () {
    return {
      searchQuery: '',
      orderDirection: ''
    }
  },
  methods: {
    getQuery: function(string) {
      this.searchQuery = string
    },
    getDirection: function(string) {
      this.orderDirection = string
    }
  }
}
</script>
