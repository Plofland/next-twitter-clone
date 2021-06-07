//trying to fix build issues
// module.exports = {
// 	plugins: [
// 		'tailwindcss',
// 		[
// 			'postcss-preset-env',
// 			{
// 				stage: 1,
// 				features: {
// 					'focus-within-pseudo-class': false
// 				}
// 			}
// 		]
// 	]
// };

//Sam's exports
module.exports = {
	plugins: ['tailwindcss', 'postcss-preset-env'],
}

//trying to fix the next build issue
// module.exports = {
// 	plugins: ['@tailwindcss/jit', 'postcss-preset-env'],
// }