import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
	build: {
		outDir: 'build/lib/',
		lib: {
			entry: resolve(__dirname, 'src/lib/index.ts'),
			name: '@orbitale/svelte-admin',
			formats: ['es'],
			fileName: format => `index.${format}.js`
		},
		manifest: true
	},
	resolve: {
		alias: {
			'$lib': resolve(__dirname, 'src/lib'),
			'$themes': resolve(__dirname, 'src/themes'),
		}
	},
	plugins: [
		svelte()
	],
});
