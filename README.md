# winston-rxjs

`RxJS.Subject` Transport for [Winston](https://github.com/winstonjs/winston)

## Installation

```bash
$ npm install winston-rxjs
```

## Usage

```js
const winston = require("winston");
const { Subject } = require("rxjs");

const logSubject = new Subject();
const winstonRxJSTransport = require("winston-rxjs");

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [new winstonRxJSTransport({ subject: logSubject })],
});

logSubject.subscribe({ next: (logEntry) => console.log(logEntry); });
```

The transport options are:

- **subject** - `RxJS.Subject` entity (default: creates a new one by itself, at `subject` property)
