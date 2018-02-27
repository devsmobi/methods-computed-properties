<template>
<div class="container" id="app">
  <div class="row mt-2 mb-2">
    <div class="col-sm-12 col-md-12">
        <p class="lead">
            Products
        </p>
        <filter-component></filter-component>
        <items-component></items-component>
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
      
    }
  }
}
</script>

<style>

</style>
