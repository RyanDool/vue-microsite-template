<template>
	<div>
		<nav>
			<img src="../assets/img/logo.png" alt="">
			<ul>
				<li><router-link :to="{name: 'PageOne'}">Home</router-link></li>
				<li><router-link :to="{name: 'PageTwo'}">Page 2</router-link></li>
				<li><router-link :to="{name: 'PageThree'}">Page 3</router-link>	</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default{
		name: 'Header'
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
	margin:0 auto;
}
nav img{
	display:block;
	margin:1.8rem auto 4rem auto;
}
nav ul{
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	position:relative;
	width:100%;
	max-width:480px;
	height:auto;
	overflow:hidden;
	margin:0 auto;
	padding:0;
	flex-wrap:wrap;
}
nav ul li{
	display:block;
	padding:0;
	position:relative;
	overflow:hidden;
	width:31%;
}
nav ul li a{
	font-weight:700;
	font-size:18px;
	padding:1rem;
	display:block;
	color:#2c3e50;
	text-decoration:none;
}
nav ul li a.router-link-active.router-link-exact-active{
	background-color:#41b882;
	color:#ffffff;
}
</style>
