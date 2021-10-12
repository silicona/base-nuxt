<template>
  <button v-on:click=jumpTo(move)>{{ desc }}</button>
</template>

<script>
export default {
  name: "MoveLink",
  data() {
    return {

    };
  },
  props: {
    move: Number,
    desc: String,
    jumpTo: Function
  }
};
</script>

<style>
</style>