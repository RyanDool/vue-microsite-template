<template>
	<div>
		<footer>
			<p class="copyright">&copy; {{ date }}.</p>
		</footer>
	</div>
</template>

<script>
	let d = new Date();
	let fullYear = d.getFullYear();
	export default{
		name: 'Footer',
		data(){
			return{
				date: fullYear
			}
		}
	}
</script>