<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarters conteudo">
      <router-view/>
    </div>
    
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/barraLateral.vue";
export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
  },
});
</script>

<style>
.lista {
   padding: 1.25rem;
}
</style>
