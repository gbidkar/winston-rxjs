const Transport = require("winston-transport");
const { Subject } = require("rxjs");

class SubjectTransport extends Transport {
  /**
   * Create the subject transport
   *
   * @param {Object} options - Options which configures the transport
   */
  constructor(options = {}) {
    super(options);

    this.subject = options.subject || new Subject();
  }

  /**
   * Forward a log entry to the observers which are subscribed to the subject
   *
   * @param {Object} info - Log's information object
   * @param {function} callback - Winston's callback
   */
  log(info, callback) {
    setImmediate(() => {
      this.subject.next(info);
    });
    callback();
  }

  close() {
    this.subject.complete();
  }
}

module.exports = SubjectTransport;
