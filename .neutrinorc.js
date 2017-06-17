module.exports = {
   use: [
      ["neutrino-preset-react", {
        // Enables Hot Module Replacement. Set to false to disable
        hot: true,
        html: {
          title: "gasolin's Home Page"
        },
      }],
      (neutrino) => neutrino.config.entry('vendor')
        .add('react')
        .add('react-dom')
        .add('react-router-dom')
    ],
    env: {
      NODE_ENV: {
        production: {
          use: ['neutrino-middleware-pwa']
        },
        development: {
          use: ['neutrino-preset-airbnb-base']
        },
      }
    },
}
