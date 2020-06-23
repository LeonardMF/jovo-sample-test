'use strict';

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const app = new App();

app.use(
  new Alexa(),
  new GoogleAssistant(),
  new JovoDebugger(),
  new FileDb()
);

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
  LAUNCH() {
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
