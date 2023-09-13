# WebDriverIO UI Automation Framework
Start up [WebdriverIO](https://webdriver.io) framework with [Mocha](https://mochajs.org) and [Chai](https://www.chaijs.com) in JavaScript.

## Steps To Get Started
### Step 1
Clone this repository to your local machine using the HTTPS method

```shell
git clone https://github.com/msr8830/webdriverio-app.git
```

### Step 2
Ensure you have node installed, [node version 19.5.0](https://nodejs.org/download/release/v19.9.0/) was used to build this framework.

Install node_modules by running this command
```shell
npm ci
```
Now you have multiple options to run the specs, you may use any of the predefined script in the [**package.json**](package.json)

Using the following predefined script you can run all specs under the [specs](./test/specs) folder.
```shell
npm run wdio
```
Using the following predefined script you can run the [login](./test/specs/login/login.spec.js) spec
```shell
npm run login:spec
```
Using the following predefined script you can run the [example1Table](./test/specs/tables/example1Table.spec.js) spec
```shell
npm run example1Table:spec
```
Using the following predefined script you can run the [hover](./test/specs/hovers/hovers.spec.js) spec
```shell
npm run hovers:spec
```
You can also run any spec file by defining the --spec flag in cli, for example:
```shell
npx wdio run ./wdio.conf.js --spec ./test/specs/login/login.spec.js
```

### Step 3
There are also 2 utility functions in the [my_script.js](my_script.js) class that can be ran using the following command:
```shell
node my_script.js
```

### Thank you for visiting, and I hope this helps you in your future endeavors! Good Luck!