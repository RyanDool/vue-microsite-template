<template>
	<div class="page3">
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
		name: 'Page3',
		data(){
			return{
				msg: 'Page 3',
				pageTitle: 'Page 3 Title',
				pageDescr: 'Page 3 Description'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>

</style> -->