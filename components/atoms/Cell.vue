<template>
  <div class="cell">
    <!--
    <button class="cell">
        -->
      <button class="cell" @click=sendIndex>
      {{ value }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {
    value: {
      type: String,
      required: false,
      default: null
    },
    index: {
      type: Number,
      required: true,
    },
    onClick: {
      type: Function,
      required: false
    }
  },
  methods: {
    sendIndex(){
      return this.onClick(this.index)
    }
  }
};
</script>

<style>
</style>