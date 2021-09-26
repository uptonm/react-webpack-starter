const tw = require("tailwindcss");
const { join } = require("path");

module.exports = {
	plugins: [
		tw(join(__dirname, "./.tailwindrc.js")),
		"postcss-preset-env",
		"autoprefixer"
	]
};
