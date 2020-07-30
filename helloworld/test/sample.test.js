'use strict';

const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');

jest.setTimeout(500);

for (const p of [new Alexa(), new GoogleAssistant()]) {
  const testSuite = p.makeTestSuite();

  describe(`PLATFORM: ${p.constructor.name} INTENTS`, () => {
    test('test flag should be true', async () => {
      const conversation = testSuite.conversation({runtime: 'app'});
  
      conversation.$user.$data.test_flag = true;

      const launchRequest = await testSuite.requestBuilder.launch();

      const response = await conversation.send(launchRequest);
      
      console.log(response);
    });
  });

  xdescribe(`PLATFORM: ${p.constructor.name} INTENTS`, () => {
    test('test flag should be true', async () => {
      const conversation = testSuite.conversation({runtime: 'app'});
  
      conversation.$user.$data.test_flag = true;

      const launchRequest = await testSuite.requestBuilder.intent('HelloWorldIntent');

      const response = await conversation.send(launchRequest);
      
      expect(response.getSpeech()).toMatch('test_flag is true');
    });
  });

  xdescribe(`PLATFORM: ${p.constructor.name} INTENTS`, () => {
    test('test flag should be false', async () => {
      const conversation = testSuite.conversation({runtime: 'app'});
      
      conversation.$user.$data.test_flag = false;

      const launchRequest = await testSuite.requestBuilder.intent('HelloWorldIntent');

      const response = await conversation.send(launchRequest);

      expect(response.getSpeech()).toMatch('test_flag is false');
    });
  });
}
