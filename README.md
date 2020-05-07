# js-logcontroller
Create log files for your javascript/nodejs projects

```js
  npm install @11elements/js-logcontroller
```

## Usage

```js
const LogController = require('@11elements/js-logcontroller');

/**
* Use the static method info to write on the Info.md file
* Use the static method error to write on the Errors.md file
*/

LogController.info('The message you want to log on the info file');
LogController.error('The message you want to log on the error file');

```

> The LogController will create a folder ./logs on the route of the project and save all the logs there.
> The files are named with the date of their creation, eg.: Thu-May-07-2020-Errors.md

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.
