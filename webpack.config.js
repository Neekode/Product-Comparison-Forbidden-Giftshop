// Webpack config file uses webpack dependency to bundle and build the application within the web browser
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new 
HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'

});

var webpack = require('webpack');

module.exports = 
{
	entry: __dirname + '/app/index.js',				// defined entry-point for webpack
	module: 
	{
		rules: [
			{
				test: /\.js$/,			// the loader here, performs a transformation on all .js files using a regular expression
				exclude: /node_modules/,		// deciding which .js files to not include within the transformation into web browser-friendly compilations. 
											// Here, we don't want to include all of the node modules, because that would take forever and is unnecessary to the user.
				loader: 'babel-loader'			// this property specifies the exact loader which webpack should be using. since JSX needs to be transpiled into regular JS for the browser to interpret, the Babel loader is used.
            },
			{
				test: /\.(pdf|jpg|png|gif|svg|ico)$/,
			    use: [{
			            loader: 'url-loader'
			        },]
			}
		]
	},
	output: 		// here is where the JS should go (after being transpiled from JSX) 
	{
		filename: 'transformed.js',
		path: __dirname + '/build'		// saves my new js into a new folder called build.
	},
	plugins: [HTMLWebpackPluginConfig]
};