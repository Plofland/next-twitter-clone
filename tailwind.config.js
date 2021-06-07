// function px(pixels) {
// 	return `${pixels / 16}rem`;
// }

// module.exports = {
// 	mode: 'jit',
// 	//These purges added to try to get jit working
// 	purge: [
// 		'./public/**/*.html',
// 		'./src/**/*.js, jsx, ts, tsx, vue'
// 	],
// 	darkMode: false, // or 'media' or 'class'
// 	theme: {
// 		fontSize: {
// 			xs: px(12),
// 			sm: px(14),
// 			base: px(15),
// 			lg: px(18),
// 			xl: px(20),
// 			'2xl': px(24),
// 			'3xl': px(30),
// 			'4xl': px(36),
// 			'5xl': px(48),
// 			'6xl': px(64)
// 		},
// 		extend: {
// 			screens: {
// 				xs: '480px'
// 			}
// 		}
// 	},
// 	variants: {
// 		extend: {}
// 	},
// 	// Sam's plugins
// 	// plugins: [require('@tailwindcss/ui')]

// 	//Trying to get jit working
// 	plugins: { '@tailwindcss/jit': {} },
// };

function px(pixels) {
	return `${pixels / 16}rem`;
}

//This module.exports is funtional on a local server
module.exports = {
	purge: {
		// enabled: true,
		content: [
			'./components/**/*.{js,ts,jsx,tsx}',
			'./pages/**/*.js'
		]
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontSize: {
			xs: px(12),
			sm: px(14),
			base: px(15),
			lg: px(18),
			xl: px(20),
			'2xl': px(24),
			'3xl': px(30),
			'4xl': px(36),
			'5xl': px(48),
			'6xl': px(64)
		},
		extend: {
			screens: {
				xs: '480px'
			}
		}
	},
	variants: {
		extend: {}
	},
	// Sam's plugins
	plugins: [require('@tailwindcss/ui')]
};
