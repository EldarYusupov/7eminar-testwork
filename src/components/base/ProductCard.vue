<template>
  <div class="product-card" :class="[`product-card--${view}`, { 'h-100 d-flex flex-column': view === 'block', 'h-100 d-flex': view === 'list' }]">
    <img :src="covers.main" class="product-card__image" />
    <div class="product-card__content px-2 py-3 d-flex flex-column justify-content-between">
      <p class="product-card__title" v-html="title"></p>
      <BaseButton>
        Детальніше
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton";
export default {
  name: "ProductCard",
  components:{BaseButton},
  props: [
    'access',
    'date',
    'id',
    'options',
    'theme',
    'title',
    'covers',
    'view'
  ]
}
</script>

<style lang="scss">
.product-card {
  border: 1px solid black;
  background: #fff;
  border-radius: 3px;

  &__image {
    height: 330px;
    object-fit: cover;
  }

  &--list {
    .product-card__image {
      height: 150px;
    }
  }

  &__content {
    flex: 1;
  }
}
</style>