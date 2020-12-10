import * as TransportStream from "winston-transport";
import * as RxJS from "rxjs";

declare class SubjectTransport extends TransportStream {
  constructor(options?: SubjectTransport.TransportOptions);

  subject: RxJS.Subject;
}

declare namespace SubjectTransport {
  interface TransportOptions extends TransportStream.TransportStreamOptions {
    subject?: RxJS.Subject;
  }
}

export = SubjectTransport;
