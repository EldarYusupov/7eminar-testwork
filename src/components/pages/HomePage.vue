<template>
  <CardList />
</template>

<script>
import CardList from "@/components/base/CardList";
import {mapActions} from "vuex";

export default {
  name: "HomePage",
  components:{
    CardList,
  },
  methods: {
    ...mapActions({filterData: 'filterData'})
  },
  mounted() {
    this.filterData({});
  }
}
</script>

<style scoped>

</style>