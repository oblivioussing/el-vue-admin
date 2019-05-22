<template>
  <svg @click="click" class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.name}`
    }
  },
  methods: {
    // 点击事件
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  fill: currentColor;
  height: 1.5em;
  overflow: hidden;
  vertical-align: middle;
  width: 1.5em;
}
</style>
