<template>
	<div class="page1">
		<vue-headful
			:title="title"
			:description="pageDescr"
		/>
		<h1>Thiss is {{ msg }}</h1>
		<div class="">Some "{{msg}}" Text</div>
	</div>
</template>

<script>
	export default{
		name: 'Page1',
		data(){
			return{
				msg: 'Page 1',
				title: 'Page 1 Title',
				pageDescr: 'Page 1 Description'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>

</style> -->