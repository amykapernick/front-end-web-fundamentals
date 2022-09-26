import html from '../src/img/html.svg'
import css from '../src/img/layout.png'
import ui from '../src/img/Devices-amico.svg'
import vr from '../src/img/Image-viewer-amico.svg'

const sections = [
	{
		block: 'Day 1',
		blocks: [
			{
				title: 'Semantic HTML and Accessibility',
				url: '/semantic-html',
				img: {
					image: {
						file: {
							url: html
						}
					}
				}
			},
			{
				title: 'Modern CSS',
				url: '/css',
				img: {
					image: {
						file: {
							url: css
						}
					}
				}
			},
		]
	},
	{
		block: 'Day 2',
		blocks: [
			{
				title: 'Accessibility Testing',
				url: '/a11y',
			},
			{
				title: 'Visual Regression Testing',
				url: '/vr',
				img: {
					image: {
						file: {
							url: vr
						}
					}
				}
			},
			{
				title: 'UI Testing',
				url: '/ui',
				img: {
					image: {
						file: {
							url: ui
						}
					}
				}
			},
		]
	}
]

export default sections