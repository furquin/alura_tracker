<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column">
                {{ tarefa.descricao || 'Não possui descrição' }}
            </div>
            <div class="column">
                <cronometro :segundos="tarefa.tempo"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import cronometro from "./cronometro.vue";
import ITarefas from "../interfaces/tarefas.interface";
export default defineComponent({
    name: "tarefas_lista",
    components: {
        cronometro,
    },
    props:{
        tarefa: {
            type: Object as PropType<ITarefas>,
            required: true,
        },
    },
    data() {
        return {
            tarefas: [],
        };
    },
    methods: {},
});
</script>

<style scoped>
.box{
    background-color: aqua;
}
</style>
