import webpack from 'webpack';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


export default {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	entry: {
		vendor: path.resolve(__dirname, 'src/vendor'),
		main: path.resolve(__dirname, 'src/index')
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist-production'),
		publicPath: '/',
		filename: "[name].[chunkhash].js"
	},
	plugins: [
		new ExtractTextPlugin("[name].[chunkhash].css"),
		new WebpackMd5Hash(),
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'GLOBALS': {
				FRONT_ENV: JSON.stringify('production')
			},
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new HTMLWebpackPlugin({
			template: 'src/index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespaces: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			},
			SENTRY_TOKEN: 'PRODUCTION TEST TOKEN'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		})
	],
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			{test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')}
		]
	}
}
