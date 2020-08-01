<template>
  <div class="button">click me !</div>
</template>

<script>
export default {
  name: 'm-button'
}
</script>

<style lang="stylus" scoped>
@import './assets/fonts/iconfont.css'
.button
  padding 10px
  border 1px solid #ccc
  font-size 12px
  &:hover
    background-color #ccc
</style>