import react from '@astrojs/react';
import {defineConfig} from 'astro/config'

export default defineConfig({
	site: 'http://localhost:3000',
	vite: {
		ssr: {
			external: ['svgo']
		}
	},
	markdown: {
		render: [
			'@astrojs/markdown-remark',
			{
				rehypePlugins: [
					'rehype-external-links'
				]
			}
		]
	},
	integrations: [
		react()
	]
});
