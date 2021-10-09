<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "baseButtom"
}
</script>

<style lang="scss">
.base-button {
  position: relative;
  background: transparent;
  border-radius: 16px;
  height: 32px;
  padding: 0 40px;
  border: 1px solid #c7c7c7;

  &:after{
    position: absolute;
    top: -1px;
    right: -1px;
    content: '>';
    background: #ed3434;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    color: white;
  }

  &:hover{
    border-color: #ed3434;
    color: #ed3434;
  }
}
</style>