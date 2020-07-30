// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
  logging: false,

  intentMap: {
    'AMAZON.StopIntent': 'END',
  },

  user: {
    dataCaching: true,
    metaData: {
        enabled: true,
    },
  },

  db: {
    FileDb: {
      pathToFile: '../db/db.json',
    },
  },

  plugin: {
    SentryPlugin: {
        dsn: process.env.SENTRY_DSN, // or set SENTRY_DSN
        environment: process.env.SENTRY_ENVIRONMENT, //or set SENTRY_ENVIRONMENT
        debug: true,
        release: 'voice-app@1.0.0', //or set SENTRY_RELEASE
    },
  },  
};
