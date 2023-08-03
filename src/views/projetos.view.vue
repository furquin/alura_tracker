<template>
	<section class="projetos">
		<h1 class="title">Projetos</h1>
		<form @submit.prevent="salvarProjeto">
			<div class="field">
				<label for="nomeDoProjeto" class="label">Nome do projeto</label>
				<input class="input" type="text" placeholder="Nome do projeto" v-model="nomeDoProjeto" id="nomeDoProjeto" />
			</div>
			<div class="field">
				<button type="submit" class="button">Salvar</button>
			</div>
		</form>
		<table class="table is-fullwidth">
			<thead>
				<tr>
					<th>ID</th>
					<th>Nome</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="projeto in projetos" :key="projeto.id">
					<td>{{ projeto.id }}</td>
					<td>{{ projeto.nome }}</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IProjetos from '@/interfaces/projetos.interface'
export default defineComponent({
	name: 'Projetos-componente',
	data() {
		return {
			nomeDoProjeto: '',
			projetos: [] as IProjetos[],
		}
	},
	methods: {
		salvarProjeto() {
			const projeto: IProjetos = {
				nome: this.nomeDoProjeto,
				id: new Date().toISOString(),
			}
			this.projetos.push(projeto)
			this.nomeDoProjeto = ''
		},
	},
})
</script>

<style scoped>
.projetos {
	padding: 1.25rem;
}
</style>
