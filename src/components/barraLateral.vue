<template>
	<header>
		<div class="has-text-centered"><img src="../assets/logo.png" alt="imagem vue" /></div>
		<nav class="mt-5">
			<ul class="has-text-centered">
				<li>
					<router-link to="/">
						<i class="fas fa-tasks"> </i>
						Tarefas
					</router-link>
				</li>
				<li>
					<router-link to="/projetos" class="link">
						<i class="fas fa-project-diagram"> </i>
						Projetos
					</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Barra-lateral-componente',
	components: {},
})
</script>

<style scoped>
header {
	padding: 1rem;
	background: rgb(43, 179, 179);
	width: 100%;
	height: 100vh;
}
@media only screen and (max-width: 768px) {
	header {
		padding: 2.5rem;
		height: auto;
	}
}
li {
	margin: 10px;
}
.link {
	color: #fff;
}
.link:hover {
	color: rgb(2, 34, 34);
}
.link.router-link-active {
	color: #faf0ca;
}
</style>
