const webpackConfig = require("../../_webpack/local.config");

module.exports = (on, config) => {
  if ( config.testingType === 'component' ) {
    const { startDevServer } = require( '@cypress/webpack-dev-server' );
    on( 'dev-server:start', ( options ) =>
      startDevServer({options, webpackConfig})
    );
  }

	return config;
};
