import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const filesPath = (path) => `src/frontend/${path}`;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter(),
		files: {
			assets: filesPath('static'),
			params: filesPath('src/params'),
			routes: filesPath('src/routes'),
			appTemplate: filesPath('src/app.html')
		},
		alias: {
			'lib': filesPath('./src/lib')
		}
	}
};
export default config;
