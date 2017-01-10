import webpack from 'webpack';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import multi from 'multi-loader';

const defaultStyles = new ExtractTextPlugin("styles.css");
const gmStyles = new ExtractTextPlugin("styles_gm.css");

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
	resolve: {
		root: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'node_modules')
		]
	},
	plugins: [
		new WebpackMd5Hash(),
		new webpack.optimize.DedupePlugin(),
		defaultStyles,
		gmStyles,
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
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets:[ 'es2015', 'react', 'stage-0' ]
				}
			},
			{
				test: /\.scss$/,
				exlude: /node_modules/,
				loader: multi(
									defaultStyles.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader!sass-loader?config=defaultSassLoaderConfig"),
									gmStyles.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader!sass-loader?config=gmSassLoaderConfig")
								)
			},
			{ test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
			{ test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
			{ test: /\.otf(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
			{ test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
			{ test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
			{ test: /\.(png|jpg|svg)$/, loader: 'url?limit=8192' }
		]
	},
	defaultSassLoaderConfig: {
		data: '@import "~brands/default/styles/globals";'
	},
	gmSassLoaderConfig: {
		data: '@import "~brands/gm/styles/globals";'
	}
}
