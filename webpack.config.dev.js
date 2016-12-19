import webpack from 'webpack';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

export default {
	debug: true,
	devtool: 'inline-source-map',
	noInfo: false,
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'src')
	},
	plugins: [
		new webpack.DefinePlugin({
			'GLOBALS': {
				FRONT_ENV: JSON.stringify('dev')
			},
			'process.env': {
				NODE_ENV: JSON.stringify('testing')
			}
		}),
		new HTMLWebpackPlugin({
			template: 'src/index.html',
			inject: true
		})
	],
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			{test: /\.css$/, loaders: ['style', 'css']}
		]
	}
}
