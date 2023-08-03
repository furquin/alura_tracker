<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarter">
      <Formulario @salvarTarefa="salvarTarefa"/>
      <div v-if="tarefas.length > 0" class="lista">
        <Tarefas v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
      </div>
      <Box v-if="tarefas.length < 1">
        Você ainda não possui tarefas
      </Box>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/barraLateral.vue";
import Formulario from "./components/formulario.vue";
import Tarefas from "./components/tarefas.vue";
import ITarefas from "./interfaces/tarefas.interface";
import Box from "./components/box.vue";
export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Formulario,
    Tarefas,
    Box
  },
  data() {
    return {
      tarefas: [] as ITarefas[]
    };
  },
  methods: {
    salvarTarefa(tarefa: ITarefas){
      this.tarefas.push(tarefa);
    },
  },
});
</script>

<style>
.lista {
   padding: 1.25rem;
}
</style>
