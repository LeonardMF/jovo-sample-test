# Jovo Unit Tests with User Data

This sample is based on the [Jovo Template: Hello World](https://github.com/jovotech/jovo-framework/tree/master/examples/javascript/hello-world). 
Created with `jovo new` and than edit to use [User Data](https://www.jovo.tech/docs/unit-testing#user-data) in the [Unit tests](https://www.jovo.tech/docs/unit-testing).

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

As you can see in the console log, the `this.$user.$data.test_flag` in the unit tests for Google Assistants are `undefined`. 
In the tests for Alexa the values are correct.

Additional a `db` folder gets generated in the directory above the project.





