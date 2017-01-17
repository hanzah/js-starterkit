import webpack from 'webpack';
import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import multi from 'multi-loader';

const defaultStyles = new ExtractTextPlugin("styles.css");
const gmStyles = new ExtractTextPlugin("styles_gm.css");

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
	resolve: {
    root: path.resolve(__dirname, 'src'),
		modulesDirectories: ['node_modules']
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
		defaultStyles,
		gmStyles,
		new HTMLWebpackPlugin({
			template: 'src/index.html',
			inject: true
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
			{ test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
			{ test: /\.(svg)$/, loader: 'babel?presets[]=es2015,presets[]=react!svg-react' }
		]
	},
	defaultSassLoaderConfig: {
		data: '@import "~brands/default/styles/globals";'
	},
	gmSassLoaderConfig: {
		data: '@import "~brands/gm/styles/globals";'
	}
}
