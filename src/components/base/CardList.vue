<template>
  <div class="col-12 col-md-9">
    <div class="row mb-3">
      <div class="col-12 d-flex justify-content-sm-between">
        <h2>{{ $route.params.filter || 'Усі відео'}}</h2>
       <div>
         <input v-model="inputValue" type="text">

         <button @click="setView('block')">
           <b-icon
               icon="view-stacked"
               scale="1"
           ></b-icon>
         </button>
         <button @click="setView('list')">
           <b-icon
               icon="view-list"
               scale="1"
           ></b-icon>
         </button>
       </div>
      </div>
    </div>
    <div
        class="row row-cols-1 g-2 g-lg-3"
        :class="view === 'block' && 'row-cols-md-2 row-cols-lg-3'"
    >
      <div v-for="item in getMutatedData" :key="item.id" class="col">
        <ProductCard v-bind="item" :view="view">
          {{ item }}
        </ProductCard>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import ProductCard from "@/components/base/ProductCard";

export default {
  name: "CardList",
  components: {
    ProductCard
  },
  data() {
    return {
      inputValue: '',
      view: ''
    }
  },
  watch: {
    '$route'() {
      this.inputValue = '';
    },
    inputValue(value) {
      this.filterData({ search: value, theme: this.$route.params.filter || '' })
    }
  },
  methods: {
    ...mapActions({filterData: 'filterData'}),
    setView(view) {
      this.view = view
      localStorage.setItem('viewType', view)
    }
  },
  mounted() {
    this.view = localStorage.getItem('viewType') || 'block'
  },
  computed: {
    ...mapGetters({getMutatedData: 'getMutatedData'})
  },
};
</script>

<style lang="scss" scoped>
button {
  background: none;
  margin-left: 8px;
  border: none;
  outline: none;
}
</style>