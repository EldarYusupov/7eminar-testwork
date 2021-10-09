<template>
  <CardList />
</template>

<script>
import CardList from "@/components/base/CardList";
import {mapActions} from "vuex";

export default {
  name: "FilterPage",

  components: {
    CardList
  },

  watch: {
    '$route': {
      immediate: true,
      handler(v) {
        this.filterData({ theme: v.params.filter })
      }
    }
  },
  methods: {
    ...mapActions({filterData: 'filterData'})
  }
}
</script>

<style scoped>

</style>