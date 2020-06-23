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
};
