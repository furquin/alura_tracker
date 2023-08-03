<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário de tarefas">
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa irá iniciar"
          v-model="tarefa"
        />
      </div>
      <div class="column">
        <Temporizador @tarefa_finalizada="FinalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "./temporizado.vue";
export default defineComponent({
  name: "Formulario-componente",

  data() {
    return {
      tarefa: "",
    };
  },
  emits: ["salvarTarefa"],
  components: {
    Temporizador,
  },
  methods: {
    FinalizarTarefa(segundos: number): void {
      this.$emit("salvarTarefa", {
        descricao: this.tarefa,
        tempo: segundos,
      });
      this.tarefa = "";
    },
  },
});
</script>
