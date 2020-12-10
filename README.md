# winston-rxjs

`RxJS.Subscriber` Transport for [Winston](https://github.com/winstonjs/winston)

## Installation

```bash
$ npm install winston-rxjs
```

## Usage

```js
const winston = require("winston");
const RxJS = require("rxjs");

const winstonRxjsTransport = require("winston-rxjs");

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  defaultMeta: { resource: "renew" },
  transports: [new winstonRxjsTransport({ subscriber: sub })],
});
```
