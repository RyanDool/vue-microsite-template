import Vue from 'vue';
import Router from 'vue-router';
import Page1 from '@/components/PageOne';
import Page2 from '@/components/PageTwo';
import Page3 from '@/components/PageThree';

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
	]
});