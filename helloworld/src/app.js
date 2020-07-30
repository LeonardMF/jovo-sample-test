'use strict';

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');
const { SentryPlugin } = require('jovo-community-plugin-sentry');

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const app = new App();

app.use(
  new Alexa(),
  new GoogleAssistant(),
  new JovoDebugger(),
  new FileDb(),
  new SentryPlugin()
);

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({

  LAUNCH() {

    require('dotenv').config();
    // https://www.jovo.tech/marketplace/jovo-community-plugin-sentry
    // this.$sentry.captureMessage('Hello, world!');
 
    // this.$sentry.captureException(new Error('Good bye'));

    // const error = new Error('Fehler env');
    // console.error(error);
    // throw error;

    // https://docs.sentry.io/error-reporting/quickstart/?platform=node
    // noFunction();

    try {

      throw new Error('This is a catched Error');

    } catch (error) {
      console.log(error);
      this.$sentry.captureException(error);
    }

    return this.toIntent('HelloWorldIntent');
  },

  HelloWorldIntent() {

    if (typeof this.$user.$data.test_flag === 'undefined'){
      console.log('test_flag is', this.$user.$data.test_flag);
      this.ask('test_flag is undefined');
    } else {

      if (this.$user.$data.test_flag){
        console.log('test_flag is', this.$user.$data.test_flag);
        this.ask('test_flag is true');
      } else {
        console.log('test_flag is', this.$user.$data.test_flag);
        this.ask('test_flag is false');
      }
    }
  },

  MyNameIsIntent() {
    this.tell('Hey ' + this.$inputs.name.value + ', nice to meet you!');
  },
});

module.exports = { app };
