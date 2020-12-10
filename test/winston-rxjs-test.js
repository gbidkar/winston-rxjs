const assert = require("assert");
const winston = require("winston");
const { Subject } = require("rxjs");
const WinstonRxJSTransport = require("../lib/index");

describe("winston-rxjs", () => {
  describe("Creating the transport", () => {
    it("should store a given subject from options when instantiated", () => {
      const dummySubject = new Subject();
      const transport = new WinstonRxJSTransport({ subject: dummySubject });

      assert.ok(transport.subject === dummySubject);
    });

    it("should create a subject on its own if none given when instantiated", () => {
      const transport = new WinstonRxJSTransport();

      assert.ok(transport.subject instanceof Subject);
    });
  });

  describe("Using the transport", () => {
    it("should properly publish logged content through the subject", () => {
      const dummySubject = new Subject();
      const logEntryMessage = "Some log entry";

      const logger = winston.createLogger({
        level: "debug",
        format: winston.format.json(),
        transports: [new WinstonRxJSTransport({ subject: dummySubject })],
      });

      dummySubject.subscribe({
        next: (entry) => {
          assert.strictEqual(entry.message, logEntryMessage);
        },
      });

      logger.info(logEntryMessage);
    });
  });
});
