import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.directive('test', {
	beforeMount: function (el, data: any, tag: any) {
		console.info("beforeMount");
	},
	mounted: function (el, data: any, tag: any) {
		console.info("mounted");
	},
	beforeUpdate: function (el, data: any, tag: any) {
		console.info("beforeUpdate");
	},
	updated() {
		console.info("updated");
	},
	beforeUnmount: function (el, data: any, tag: any) {
		console.info("beforeUnmount");
	},
	unmounted: function (el, data: any, tag: any) {
		console.info("unmounted");
	}
})

app.mount('#app')
