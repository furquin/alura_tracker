<template>
  <section>
    <strong> {{ tempoTarefa }} </strong>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Cronometro-componente",
  components: {},
  props: {
    segundos: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  computed: {
    tempoTarefa(): string {
      return new Date(this.segundos * 1000).toISOString().substring(12, 19);
    },
  },
});
</script>
