import Vue from 'vue';
import Router from 'vue-router';
//Lazy Loading Routes, dependent on webpack
const Page1 = () => import('@/components/PageOne.vue');
const Page2 = () => import('@/components/PageTwo.vue');
const Page3 = () => import('@/components/PageThree.vue');

Vue.use(Router)

export default new Router({
	mode: 'history',
	props: true,
	routes: [
		{
			path: '/',
			name: 'PageOne',
			component: Page1
		},
		{
			path: '/page2',
			name: 'PageTwo',
			component: Page2
		},
		{
			path: '/page3',
			name: 'PageThree',
			component: Page3
		}
	],

	//Returning the savedPosition will result in a native-like behavior when navigating with back/forward buttons
	scrollBehavior(to, from, savedPosition){
		if(savedPosition){
			return savedPosition
		}else{
			return { x: 0, y: 0 }
		}
	}

	//To simulate the "scroll to anchor" behavior:
	// scrollBehavior (to, from, savedPosition){
	// 	if(to.hash){
	// 		return{
	// 			selector: to.hash
	// 			// , offset: { x: 0, y: 10 }
	// 		}
	// 	}
	// }
});