const {join} = require("path");
const {merge} = require("webpack-merge");

const commonConfig = require("./common.config");

module.exports = merge(commonConfig, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		hot: true,
		port: 8080,
		host: "localhost",
		compress: true,
		historyApiFallback: true
	}
});
