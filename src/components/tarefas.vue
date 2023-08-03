<template>
    <Box>
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.descricao || 'Não possui descrição' }}
            </div>
            <div class="column">
                <Cronometro :segundos="tarefa.tempo"/>
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Cronometro from "./cronometro.vue";
import Box from "./box.vue";
import ITarefas from "../interfaces/tarefas.interface";
export default defineComponent({
    name: "Tarefas-componente",
    components: {
        Cronometro,
        Box,
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
