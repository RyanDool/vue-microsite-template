<template>
	<div class="page2">
		<vue-headful
			:title="pageTitle"
			:description="pageDescr"
		/>
		<h1>This is {{ msg }}</h1>
		<div class="">Some "{{msg}}" Text</div>
	</div>
</template>

<script>
	export default{
		name: 'Page2',
		data(){
			return{
				msg: 'Page 2',
				pageTitle: 'Page 2 Title',
				pageDescr: 'Page 2 Description'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>

</style> -->