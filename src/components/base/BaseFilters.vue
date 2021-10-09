<template>
  <div class="col-12 col-md-3">
    <div id="accordion">
      <div class="card">
        <div class="card-header" id="headingOne">
          <button
              class="btn btn-link w-100"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              @click="toggleFilter('Video')"
          >
            Відео
          </button>
        </div>

        <div
            id="collapseOne"
            class="collapse"
            :class="{'show':expanded.includes('Video')}"
            aria-labelledby="headingOne"
            data-parent="#accordion"
        >
          <div class="card-body">
            <div v-for="(checkbox, index) in checkboxes" :key="index">
              <input type="checkbox" :id="checkbox" :name="checkbox" v-model="checked[checkbox]" />
              <label :for="checkbox"><span class="p-2">{{ checkbox }}</span></label>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <button
              class="btn btn-link collapsed w-100"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false" aria-controls="collapseTwo" @click="toggleFilter('Theme')"
          >
            Теми
          </button>
        </div>
        <div
            id="collapseTwo"
            class="collapse"
            :class="{'show':expanded.includes('Theme')}"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
        >
          <div class="card-body d-flex flex-column">
            <router-link :class="{ active: item === $route.params.filter || $route.path === '/' && item === 'all' }" :to="item === 'all' ? '/' : `/${item}`" v-for="item in ['all', ...getThemes]" :key="item">{{item}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "BaseFilters",
  data() {
    return {
      expanded: [],
      checkboxes: [
        'new',
        'sale',
        'popular'
      ],
      checked: {}
    };
  },
  watch: {
    checked: {
      deep: true,
      handler(v) {
        this.filterData({theme: this.$route.params.filter || '', options: v})
      }
    }
  },
  methods: {
    ...mapActions({filterData: 'filterData'}),

    toggleFilter(value) {
      if (this.expanded.includes(value)) {
        this.expanded.splice(this.expanded.indexOf(value), 1)
      } else {
        this.expanded.push(value)
      }
    }
  },
  computed:{
    ...mapGetters({getThemes: 'getThemes'})
  }
}
</script>

<style lang="scss" scoped>
.card-body {
  a {
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &.active {
      color: #ed3434;
    }
  }
}

.btn {
  color: black;
  outline: none;
  border: none;

  &:hover {
    color: #ed3434;
  }

  &:focus {
    outline: none;
    border: none;
  }
}
</style>