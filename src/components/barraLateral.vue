<template>
  <header>
    <div class="has-text-centered"> <img  src="../assets/logo.png" alt="imagem vue" /></div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent ({
    name: "Barra-lateral-componente",
    components: {},
})
</script>


<style scoped>
header {
  padding: 1rem;
  background:  rgb(43, 179, 179);
  width: 100%;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
