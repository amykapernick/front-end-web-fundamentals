export default ({
	vite: {
		ssr: {
			external: ['svgo']
		}
	},
	markdownOptions: {
		render: [
			'@astrojs/markdown-remark',
			{
				syntaxHighlight: 'prism',
				rehypePlugins: [
					'rehype-external-links'
				]
			}
		]
	},
	buildOptions: {
		sitemap: true,
		site: 'http://localhost:3000'
	}
});
