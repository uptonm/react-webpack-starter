const {join} = require("path");
const StyleLintWebpackPlugin = require("stylelint-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: join(__dirname, "../node_modules/"),
			},
			{
				test: /\.m?js$/,
				exclude: join(__dirname, "../node_modules/"),
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react", "@babel/preset-env"],
						plugins: ["@babel/plugin-transform-runtime"]
					}
				}
			},
			{
				test: /\.scss$/,
				use: [ "style-loader", "css-loader", "postcss-loader", 'sass-loader' ]
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader", "postcss-loader"],
			}
		]
	},
	resolve: {
		extensions: [ ".tsx", ".ts", ".js" ],
		plugins: [ new TsconfigPathsPlugin() ]
	},
	plugins: [
		new StyleLintWebpackPlugin({
			files: ["**/*.scss", "**/*.sass"]
		}),
		new ESLintWebpackPlugin({
			extensions: ["js", "jsx", "ts", "tsx"],
		}),
		new HtmlWebpackPlugin({
			template: "./_public/index.html"
		})
	]
};
