import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
// added this and the 'preprocess:' below, to allow scss to be used in svelte
import sveltePreprocess from 'svelte-preprocess';

const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter()
	},

	preprocess: [sveltePreprocess(), mdsvex(mdsvexConfig)]
};

export default config;
