<template>
    <div class="box has-text-weight-bold">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Box-componente",
  },
);
</script>
<style scoped>
.box{
    background-color: rgb(43, 179, 179);
    padding: 1.5rem;
    margin: 1.5rem;
}
</style>