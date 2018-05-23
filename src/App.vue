<template>
	<div id="app">
		<headerComponent></headerComponent>
		<router-view/>
		<footerComponent></footerComponent>
	</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
	name: 'App',
	components: {
		'headerComponent': Header,
		'footerComponent': Footer
	},
}
</script>

<style>
	#app{
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
	h1, h2{
		font-weight:normal;
	}
</style>