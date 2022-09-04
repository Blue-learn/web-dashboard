const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const utils = './utils.cjs';
const rootDir = path.join(__dirname, './src');
const webpackEnv = process.env.NODE_ENV || 'development';

module.exports = {
	mode: webpackEnv,
	entry: {
		app: path.join(rootDir, './index.tsx'),
	},
	output: {
		path: path.resolve(rootDir, 'dist'),
		filename: utils.isProd ? '[name]-[contenthash].bundle.js' : '[name].js',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(tsx|ts|jsx|js|mjs)$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(rootDir, './index.html'),
		}),
	],
	resolve: {
		extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.jsx', '.web.js', '.jsx', '.js'], // read files in fillowing order
		alias: Object.assign({
			'react-native$': 'react-native-web',
			'react-native-svg$': 'react-native-svg-web',
			'lottie-react-native$': 'react-native-web-lottie',
			'react-native-linear-gradient$': 'react-native-web-linear-gradient',
		}),
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		port: 3004,
	},
};
