# Jovo Unit Tests with User Data

This sample is based on the [Jovo Template: Hello World](https://github.com/jovotech/jovo-framework/tree/master/examples/javascript/hello-world). 
Created with `jovo new`. Than edit to use [User Data](https://www.jovo.tech/docs/unit-testing#user-data) in the [Unit Tests](https://www.jovo.tech/docs/unit-testing).

## Required Installation
- Node v12
- Jovo CLI Version: 3.0.15

## Reproduce the Error

1. Change Directory: 

        $ cd helloworld

2. Install Dependencies: 

         $ npm install

3. Run Tests: 

        $ npm test   

Console Log: 

        FAIL  test/sample.test.js
        PLATFORM: Alexa INTENTS
            ✓ test flag should be true (214 ms)
            ✓ test flag should be false (4 ms)
        PLATFORM: GoogleAssistant INTENTS
            ✕ test flag should be true (8 ms)
            ✕ test flag should be false (3 ms)

        ● PLATFORM: GoogleAssistant INTENTS › test flag should be true

            expect(received).toMatch(expected)

            Expected substring: "test_flag is true"
            Received string:    "test_flag is undefined"

        ● PLATFORM: GoogleAssistant INTENTS › test flag should be false

            expect(received).toMatch(expected)

            Expected substring: "test_flag is false"
            Received string:    "test_flag is undefined"

        Test Suites: 1 failed, 1 total
        Tests:       2 failed, 2 passed, 4 total

As you can see in the console log, the `this.$user.$data.test_flag` in the unit tests for Google Assistants are `undefined`. 
In the tests for Alexa the values are correct.

Additional a `db` folder gets generated in the directory above the project.





