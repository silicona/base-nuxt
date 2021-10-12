<template>
  <main>
    <Nav />
    <Title :label=getPageName />
    <Tictactoc />

    <!--   <Tutorial/>   -->
  </main>
</template>

<script>
import Title from '@/components/atoms/Title.vue';
import Tictactoc from '@/components/Tictactoc.vue';

const pagina = "Index"

export default {
  name: pagina,
  components: {
    Title,
    Tictactoc
  },
  computed: {
    getPageName: () => pagina
  }
};
</script>
