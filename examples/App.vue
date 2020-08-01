<template>
  <m-button />
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      list: [1,2,3]
    }
  },
  methods: {
    test() {
      this.list.map(item => {
        return item
      })
      console.log(this.list)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './assets/fonts/iconfont.css'
.test
  color blue
  transform translate(50%,50%)
</style>