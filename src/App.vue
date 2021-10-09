<template>
  <div id="app">
    <div class="layout-filters-burger">
      <button @click="toggleMenu">
        <b-icon
            icon="menu-app"
            scale="1"
        ></b-icon>
      </button>

      <div class="layout-filters__drawer" :class="{ open: isOpen }">
        <button @click="toggleMenu">
          close
        </button>
        <BaseFilters />
      </div>
    </div>
    <div class="my-5">
      <div class="container">
        <div class="row">
          <BaseFilters class="layout-filters--md" />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseFilters from "@/components/base/BaseFilters";

export default {
  name: 'App',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  },
  components: {
    BaseFilters
  }
};
</script>

<style lang="scss">
html, #app {
  background: #e8e8e8;
}

.layout-filters {
  &--md {
    @media screen and (max-width: 768px){
      display: none;
    }
  }

  &-burger {
    display: block;
    width: 100%;
    background: #c7c7c7;
    padding: 16px;
    @media screen and (min-width: 768px){
      display: none;
    }

    button{
      background: transparent;
      outline: none;
      border: none;
      width: 32px;
      height: 32px;
      font-size: 32px;
    }
  }

  &__drawer {
    transition: 0.3s;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background: white;
    transform: translateX(-100%);

    &.open {
      transform: translateX(0);
    }
  }
}
</style>
