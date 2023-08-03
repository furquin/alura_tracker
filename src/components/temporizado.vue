<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :segundos="segundos" />
    <button class="button" @click="iniciarTarefa" :disabled="rodando">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="pararTarefa" :disabled="!rodando">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./cronometro.vue";

export default defineComponent({
  name: "Temporizador-componente",
  data() {
    return {
      segundos: 0,
      cronometro: 0,
      rodando: false,
    };
  },
  emits: ['tarefa_finalizada'],
  methods: {
    iniciarTarefa() {
      this.cronometro = setInterval(() => 
        this.segundos += 1,
       1000);
      this.rodando = true;
    },
    pararTarefa() {
      clearInterval(this.cronometro);
      this.rodando = false;
      this.$emit('tarefa_finalizada', this.segundos);
      this.segundos = 0;
    },
  },
  components: {
    Cronometro,
  },
});
</script>
