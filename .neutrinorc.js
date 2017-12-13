module.exports = {
   use: [
      ['@neutrinojs/react', {
        // Enables Hot Module Replacement. Set to false to disable
        hot: false,
        html: {
          title: 'gasolin\'s Home Page'
        },
      }],
      (neutrino) => neutrino.config.entry('vendor')
        .add('material-components-web')
        .add('react')
        .add('react-async-component')
        .add('react-dom')
        .add('react-hot-loader')
        .add('react-mdc-web')
        .add('react-router-dom')
        .end()
    ],
    env: {
      NODE_ENV: {
        production: {
          use: ['@neutrinojs/babel-minify', '@neutrinojs/pwa']
        },
        development: {
          use: ['@neutrinojs/airbnb']
        },
      }
    },
}
