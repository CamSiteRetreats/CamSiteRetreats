var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// C:/Users/Admin/AppData/Local/npm-cache/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
__name(createNotImplementedError, "createNotImplementedError");

// C:/Users/Admin/AppData/Local/npm-cache/_npx/32026684e21afda6/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
var _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
var nodeTiming = {
  name: "node",
  entryType: "node",
  startTime: 0,
  duration: 0,
  nodeStart: 0,
  v8Start: 0,
  bootstrapComplete: 0,
  environment: 0,
  loopStart: 0,
  loopExit: 0,
  idleTime: 0,
  uvMetricsInfo: {
    loopCount: 0,
    events: 0,
    eventsWaiting: 0
  },
  detail: void 0,
  toJSON() {
    return this;
  }
};
var PerformanceEntry = class {
  static {
    __name(this, "PerformanceEntry");
  }
  __unenv__ = true;
  detail;
  entryType = "event";
  name;
  startTime;
  constructor(name, options) {
    this.name = name;
    this.startTime = options?.startTime || _performanceNow();
    this.detail = options?.detail;
  }
  get duration() {
    return _performanceNow() - this.startTime;
  }
  toJSON() {
    return {
      name: this.name,
      entryType: this.entryType,
      startTime: this.startTime,
      duration: this.duration,
      detail: this.detail
    };
  }
};
var PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
  static {
    __name(this, "PerformanceMark");
  }
  entryType = "mark";
  constructor() {
    super(...arguments);
  }
  get duration() {
    return 0;
  }
};
var PerformanceMeasure = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceMeasure");
  }
  entryType = "measure";
};
var PerformanceResourceTiming = class extends PerformanceEntry {
  static {
    __name(this, "PerformanceResourceTiming");
  }
  entryType = "resource";
  serverTiming = [];
  connectEnd = 0;
  connectStart = 0;
  decodedBodySize = 0;
  domainLookupEnd = 0;
  domainLookupStart = 0;
  encodedBodySize = 0;
  fetchStart = 0;
  initiatorType = "";
  name = "";
  nextHopProtocol = "";
  redirectEnd = 0;
  redirectStart = 0;
  requestStart = 0;
  responseEnd = 0;
  responseStart = 0;
  secureConnectionStart = 0;
  startTime = 0;
  transferSize = 0;
  workerStart = 0;
  responseStatus = 0;
};
var PerformanceObserverEntryList = class {
  static {
    __name(this, "PerformanceObserverEntryList");
  }
  __unenv__ = true;
  getEntries() {
    return [];
  }
  getEntriesByName(_name, _type) {
    return [];
  }
  getEntriesByType(type) {
    return [];
  }
};
var Performance = class {
  static {
    __name(this, "Performance");
  }
  __unenv__ = true;
  timeOrigin = _timeOrigin;
  eventCounts = /* @__PURE__ */ new Map();
  _entries = [];
  _resourceTimingBufferSize = 0;
  navigation = void 0;
  timing = void 0;
  timerify(_fn, _options) {
    throw createNotImplementedError("Performance.timerify");
  }
  get nodeTiming() {
    return nodeTiming;
  }
  eventLoopUtilization() {
    return {};
  }
  markResourceTiming() {
    return new PerformanceResourceTiming("");
  }
  onresourcetimingbufferfull = null;
  now() {
    if (this.timeOrigin === _timeOrigin) {
      return _performanceNow();
    }
    return Date.now() - this.timeOrigin;
  }
  clearMarks(markName) {
    this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
  }
  clearMeasures(measureName) {
    this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
  }
  clearResourceTimings() {
    this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
  }
  getEntries() {
    return this._entries;
  }
  getEntriesByName(name, type) {
    return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
  }
  getEntriesByType(type) {
    return this._entries.filter((e) => e.entryType === type);
  }
  mark(name, options) {
    const entry = new PerformanceMark(name, options);
    this._entries.push(entry);
    return entry;
  }
  measure(measureName, startOrMeasureOptions, endMark) {
    let start;
    let end;
    if (typeof startOrMeasureOptions === "string") {
      start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
      end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
    } else {
      start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
      end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
    }
    const entry = new PerformanceMeasure(measureName, {
      startTime: start,
      detail: {
        start,
        end
      }
    });
    this._entries.push(entry);
    return entry;
  }
  setResourceTimingBufferSize(maxSize) {
    this._resourceTimingBufferSize = maxSize;
  }
  addEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.addEventListener");
  }
  removeEventListener(type, listener, options) {
    throw createNotImplementedError("Performance.removeEventListener");
  }
  dispatchEvent(event) {
    throw createNotImplementedError("Performance.dispatchEvent");
  }
  toJSON() {
    return this;
  }
};
var PerformanceObserver = class {
  static {
    __name(this, "PerformanceObserver");
  }
  __unenv__ = true;
  static supportedEntryTypes = [];
  _callback = null;
  constructor(callback) {
    this._callback = callback;
  }
  takeRecords() {
    return [];
  }
  disconnect() {
    throw createNotImplementedError("PerformanceObserver.disconnect");
  }
  observe(options) {
    throw createNotImplementedError("PerformanceObserver.observe");
  }
  bind(fn) {
    return fn;
  }
  runInAsyncScope(fn, thisArg, ...args) {
    return fn.call(thisArg, ...args);
  }
  asyncId() {
    return 0;
  }
  triggerAsyncId() {
    return 0;
  }
  emitDestroy() {
    return this;
  }
};
var performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();

// C:/Users/Admin/AppData/Local/npm-cache/_npx/32026684e21afda6/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
globalThis.performance = performance;
globalThis.Performance = Performance;
globalThis.PerformanceEntry = PerformanceEntry;
globalThis.PerformanceMark = PerformanceMark;
globalThis.PerformanceMeasure = PerformanceMeasure;
globalThis.PerformanceObserver = PerformanceObserver;
globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
globalThis.PerformanceResourceTiming = PerformanceResourceTiming;

// .wrangler/tmp/pages-7NadH6/functionsWorker-0.628882266781114.mjs
import { EventEmitter } from "node:events";
import { Buffer as Buffer2 } from "node:buffer";
import { Buffer as Buffer3 } from "node:buffer";
import { Buffer as Buffer5 } from "node:buffer";
import Stream from "node:stream";
import { Buffer as Buffer4 } from "node:buffer";
import { Buffer as Buffer6 } from "node:buffer";
import Stream2 from "node:stream";
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
var Crypto = globalThis.crypto;
var ids = 1;
var tasks = /* @__PURE__ */ new Set();
var v4Seg = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
var v4Str = `(${v4Seg}[.]){3}${v4Seg}`;
var IPv4Reg = new RegExp(`^${v4Str}$`);
var v6Seg = "(?:[0-9a-fA-F]{1,4})";
var IPv6Reg = new RegExp(
  `^((?:${v6Seg}:){7}(?:${v6Seg}|:)|(?:${v6Seg}:){6}(?:${v4Str}|:${v6Seg}|:)|(?:${v6Seg}:){5}(?::${v4Str}|(:${v6Seg}){1,2}|:)|(?:${v6Seg}:){4}(?:(:${v6Seg}){0,1}:${v4Str}|(:${v6Seg}){1,3}|:)|(?:${v6Seg}:){3}(?:(:${v6Seg}){0,2}:${v4Str}|(:${v6Seg}){1,4}|:)|(?:${v6Seg}:){2}(?:(:${v6Seg}){0,3}:${v4Str}|(:${v6Seg}){1,5}|:)|(?:${v6Seg}:){1}(?:(:${v6Seg}){0,4}:${v4Str}|(:${v6Seg}){1,6}|:)|(?::((?::${v6Seg}){0,5}:${v4Str}|(?::${v6Seg}){1,7}|:)))(%[0-9a-zA-Z-.:]{1,})?$`
);
var textEncoder = new TextEncoder();
var crypto2 = {
  randomBytes: /* @__PURE__ */ __name2((l) => Crypto.getRandomValues(Buffer2.alloc(l)), "randomBytes"),
  pbkdf2Sync: /* @__PURE__ */ __name2(async (password, salt, iterations, keylen) => Crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt,
      iterations
    },
    await Crypto.subtle.importKey(
      "raw",
      textEncoder.encode(password),
      "PBKDF2",
      false,
      ["deriveBits"]
    ),
    keylen * 8,
    ["deriveBits"]
  ), "pbkdf2Sync"),
  createHash: /* @__PURE__ */ __name2((type) => ({
    update: /* @__PURE__ */ __name2((x) => ({
      digest: /* @__PURE__ */ __name2((encoding) => {
        if (!(x instanceof Uint8Array)) {
          x = textEncoder.encode(x);
        }
        let prom;
        if (type === "sha256") {
          prom = Crypto.subtle.digest("SHA-256", x);
        } else if (type === "md5") {
          prom = Crypto.subtle.digest("md5", x);
        } else {
          throw Error("createHash only supports sha256 or md5 in this environment, not ${type}.");
        }
        if (encoding === "hex") {
          return prom.then((arrayBuf) => Buffer2.from(arrayBuf).toString("hex"));
        } else if (encoding) {
          throw Error(`createHash only supports hex encoding or unencoded in this environment, not ${encoding}`);
        } else {
          return prom;
        }
      }, "digest")
    }), "update")
  }), "createHash"),
  createHmac: /* @__PURE__ */ __name2((type, key) => ({
    update: /* @__PURE__ */ __name2((x) => ({
      digest: /* @__PURE__ */ __name2(async () => Buffer2.from(
        await Crypto.subtle.sign(
          "HMAC",
          await Crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]),
          textEncoder.encode(x)
        )
      ), "digest")
    }), "update")
  }), "createHmac")
};
var performance2 = globalThis.performance;
var process = {
  env: {}
};
var os = {
  userInfo() {
    return { username: "postgres" };
  }
};
var fs = {
  readFile() {
    throw new Error("Reading files not supported on CloudFlare");
  }
};
var net = {
  isIP: /* @__PURE__ */ __name2((x) => IPv4Reg.test(x) ? 4 : IPv6Reg.test(x) ? 6 : 0, "isIP"),
  Socket
};
var tls = {
  connect({ socket: tcp, servername }) {
    tcp.writer.releaseLock();
    tcp.reader.releaseLock();
    tcp.readyState = "upgrading";
    tcp.raw = tcp.raw.startTls({ servername });
    tcp.raw.closed.then(
      () => tcp.emit("close"),
      (e) => tcp.emit("error", e)
    );
    tcp.writer = tcp.raw.writable.getWriter();
    tcp.reader = tcp.raw.readable.getReader();
    tcp.writer.ready.then(() => {
      tcp.read();
      tcp.readyState = "upgrade";
    });
    return tcp;
  }
};
function Socket() {
  const tcp = Object.assign(new EventEmitter(), {
    readyState: "open",
    raw: null,
    writer: null,
    reader: null,
    connect,
    write,
    end,
    destroy,
    read
  });
  return tcp;
  async function connect(port, host) {
    try {
      tcp.readyState = "opening";
      const { connect: connect2 } = await import("cloudflare:sockets");
      tcp.raw = connect2(host + ":" + port, tcp.ssl ? { secureTransport: "starttls" } : {});
      tcp.raw.closed.then(
        () => {
          tcp.readyState !== "upgrade" ? close() : (tcp.readyState = "open", tcp.emit("secureConnect"));
        },
        (e) => tcp.emit("error", e)
      );
      tcp.writer = tcp.raw.writable.getWriter();
      tcp.reader = tcp.raw.readable.getReader();
      tcp.ssl ? readFirst() : read();
      tcp.writer.ready.then(() => {
        tcp.readyState = "open";
        tcp.emit("connect");
      });
    } catch (err) {
      error(err);
    }
  }
  __name(connect, "connect");
  __name2(connect, "connect");
  function close() {
    if (tcp.readyState === "closed")
      return;
    tcp.readyState = "closed";
    tcp.emit("close");
  }
  __name(close, "close");
  __name2(close, "close");
  function write(data, cb) {
    tcp.writer.write(data).then(cb, error);
    return true;
  }
  __name(write, "write");
  __name2(write, "write");
  function end(data) {
    return data ? tcp.write(data, () => tcp.raw.close()) : tcp.raw.close();
  }
  __name(end, "end");
  __name2(end, "end");
  function destroy() {
    tcp.destroyed = true;
    tcp.end();
  }
  __name(destroy, "destroy");
  __name2(destroy, "destroy");
  async function read() {
    try {
      let done, value;
      while ({ done, value } = await tcp.reader.read(), !done)
        tcp.emit("data", Buffer2.from(value));
    } catch (err) {
      error(err);
    }
  }
  __name(read, "read");
  __name2(read, "read");
  async function readFirst() {
    const { value } = await tcp.reader.read();
    tcp.emit("data", Buffer2.from(value));
  }
  __name(readFirst, "readFirst");
  __name2(readFirst, "readFirst");
  function error(err) {
    tcp.emit("error", err);
    tcp.emit("close");
  }
  __name(error, "error");
  __name2(error, "error");
}
__name(Socket, "Socket");
__name2(Socket, "Socket");
function setImmediate(fn) {
  const id = ids++;
  tasks.add(id);
  queueMicrotask(() => {
    if (tasks.has(id)) {
      fn();
      tasks.delete(id);
    }
  });
  return id;
}
__name(setImmediate, "setImmediate");
__name2(setImmediate, "setImmediate");
function clearImmediate(id) {
  tasks.delete(id);
}
__name(clearImmediate, "clearImmediate");
__name2(clearImmediate, "clearImmediate");
var originCache = /* @__PURE__ */ new Map();
var originStackCache = /* @__PURE__ */ new Map();
var originError = /* @__PURE__ */ Symbol("OriginError");
var CLOSE = {};
var Query = class extends Promise {
  static {
    __name(this, "Query");
  }
  static {
    __name2(this, "Query");
  }
  constructor(strings, args, handler, canceller, options = {}) {
    let resolve, reject;
    super((a, b2) => {
      resolve = a;
      reject = b2;
    });
    this.tagged = Array.isArray(strings.raw);
    this.strings = strings;
    this.args = args;
    this.handler = handler;
    this.canceller = canceller;
    this.options = options;
    this.state = null;
    this.statement = null;
    this.resolve = (x) => (this.active = false, resolve(x));
    this.reject = (x) => (this.active = false, reject(x));
    this.active = false;
    this.cancelled = null;
    this.executed = false;
    this.signature = "";
    this[originError] = this.handler.debug ? new Error() : this.tagged && cachedError(this.strings);
  }
  get origin() {
    return (this.handler.debug ? this[originError].stack : this.tagged && originStackCache.has(this.strings) ? originStackCache.get(this.strings) : originStackCache.set(this.strings, this[originError].stack).get(this.strings)) || "";
  }
  static get [Symbol.species]() {
    return Promise;
  }
  cancel() {
    return this.canceller && (this.canceller(this), this.canceller = null);
  }
  simple() {
    this.options.simple = true;
    this.options.prepare = false;
    return this;
  }
  async readable() {
    this.simple();
    this.streaming = true;
    return this;
  }
  async writable() {
    this.simple();
    this.streaming = true;
    return this;
  }
  cursor(rows = 1, fn) {
    this.options.simple = false;
    if (typeof rows === "function") {
      fn = rows;
      rows = 1;
    }
    this.cursorRows = rows;
    if (typeof fn === "function")
      return this.cursorFn = fn, this;
    let prev;
    return {
      [Symbol.asyncIterator]: () => ({
        next: /* @__PURE__ */ __name2(() => {
          if (this.executed && !this.active)
            return { done: true };
          prev && prev();
          const promise = new Promise((resolve, reject) => {
            this.cursorFn = (value) => {
              resolve({ value, done: false });
              return new Promise((r) => prev = r);
            };
            this.resolve = () => (this.active = false, resolve({ done: true }));
            this.reject = (x) => (this.active = false, reject(x));
          });
          this.execute();
          return promise;
        }, "next"),
        return() {
          prev && prev(CLOSE);
          return { done: true };
        }
      })
    };
  }
  describe() {
    this.options.simple = false;
    this.onlyDescribe = this.options.prepare = true;
    return this;
  }
  stream() {
    throw new Error(".stream has been renamed to .forEach");
  }
  forEach(fn) {
    this.forEachFn = fn;
    this.handle();
    return this;
  }
  raw() {
    this.isRaw = true;
    return this;
  }
  values() {
    this.isRaw = "values";
    return this;
  }
  async handle() {
    !this.executed && (this.executed = true) && await 1 && this.handler(this);
  }
  execute() {
    this.handle();
    return this;
  }
  then() {
    this.handle();
    return super.then.apply(this, arguments);
  }
  catch() {
    this.handle();
    return super.catch.apply(this, arguments);
  }
  finally() {
    this.handle();
    return super.finally.apply(this, arguments);
  }
};
function cachedError(xs) {
  if (originCache.has(xs))
    return originCache.get(xs);
  const x = Error.stackTraceLimit;
  Error.stackTraceLimit = 4;
  originCache.set(xs, new Error());
  Error.stackTraceLimit = x;
  return originCache.get(xs);
}
__name(cachedError, "cachedError");
__name2(cachedError, "cachedError");
var PostgresError = class extends Error {
  static {
    __name(this, "PostgresError");
  }
  static {
    __name2(this, "PostgresError");
  }
  constructor(x) {
    super(x.message);
    this.name = this.constructor.name;
    Object.assign(this, x);
  }
};
var Errors = {
  connection,
  postgres,
  generic,
  notSupported
};
function connection(x, options, socket) {
  const { host, port } = socket || options;
  const error = Object.assign(
    new Error("write " + x + " " + (options.path || host + ":" + port)),
    {
      code: x,
      errno: x,
      address: options.path || host
    },
    options.path ? {} : { port }
  );
  Error.captureStackTrace(error, connection);
  return error;
}
__name(connection, "connection");
__name2(connection, "connection");
function postgres(x) {
  const error = new PostgresError(x);
  Error.captureStackTrace(error, postgres);
  return error;
}
__name(postgres, "postgres");
__name2(postgres, "postgres");
function generic(code, message) {
  const error = Object.assign(new Error(code + ": " + message), { code });
  Error.captureStackTrace(error, generic);
  return error;
}
__name(generic, "generic");
__name2(generic, "generic");
function notSupported(x) {
  const error = Object.assign(
    new Error(x + " (B) is not supported"),
    {
      code: "MESSAGE_NOT_SUPPORTED",
      name: x
    }
  );
  Error.captureStackTrace(error, notSupported);
  return error;
}
__name(notSupported, "notSupported");
__name2(notSupported, "notSupported");
var types = {
  string: {
    to: 25,
    from: null,
    // defaults to string
    serialize: /* @__PURE__ */ __name2((x) => "" + x, "serialize")
  },
  number: {
    to: 0,
    from: [21, 23, 26, 700, 701],
    serialize: /* @__PURE__ */ __name2((x) => "" + x, "serialize"),
    parse: /* @__PURE__ */ __name2((x) => +x, "parse")
  },
  json: {
    to: 114,
    from: [114, 3802],
    serialize: /* @__PURE__ */ __name2((x) => JSON.stringify(x), "serialize"),
    parse: /* @__PURE__ */ __name2((x) => JSON.parse(x), "parse")
  },
  boolean: {
    to: 16,
    from: 16,
    serialize: /* @__PURE__ */ __name2((x) => x === true ? "t" : "f", "serialize"),
    parse: /* @__PURE__ */ __name2((x) => x === "t", "parse")
  },
  date: {
    to: 1184,
    from: [1082, 1114, 1184],
    serialize: /* @__PURE__ */ __name2((x) => (x instanceof Date ? x : new Date(x)).toISOString(), "serialize"),
    parse: /* @__PURE__ */ __name2((x) => new Date(x), "parse")
  },
  bytea: {
    to: 17,
    from: 17,
    serialize: /* @__PURE__ */ __name2((x) => "\\x" + Buffer3.from(x).toString("hex"), "serialize"),
    parse: /* @__PURE__ */ __name2((x) => Buffer3.from(x.slice(2), "hex"), "parse")
  }
};
var NotTagged = class {
  static {
    __name(this, "NotTagged");
  }
  static {
    __name2(this, "NotTagged");
  }
  then() {
    notTagged();
  }
  catch() {
    notTagged();
  }
  finally() {
    notTagged();
  }
};
var Identifier = class extends NotTagged {
  static {
    __name(this, "Identifier");
  }
  static {
    __name2(this, "Identifier");
  }
  constructor(value) {
    super();
    this.value = escapeIdentifier(value);
  }
};
var Parameter = class extends NotTagged {
  static {
    __name(this, "Parameter");
  }
  static {
    __name2(this, "Parameter");
  }
  constructor(value, type, array) {
    super();
    this.value = value;
    this.type = type;
    this.array = array;
  }
};
var Builder = class extends NotTagged {
  static {
    __name(this, "Builder");
  }
  static {
    __name2(this, "Builder");
  }
  constructor(first, rest) {
    super();
    this.first = first;
    this.rest = rest;
  }
  build(before, parameters, types2, options) {
    const keyword = builders.map(([x, fn]) => ({ fn, i: before.search(x) })).sort((a, b2) => a.i - b2.i).pop();
    return keyword.i === -1 ? escapeIdentifiers(this.first, options) : keyword.fn(this.first, this.rest, parameters, types2, options);
  }
};
function handleValue(x, parameters, types2, options) {
  let value = x instanceof Parameter ? x.value : x;
  if (value === void 0) {
    x instanceof Parameter ? x.value = options.transform.undefined : value = x = options.transform.undefined;
    if (value === void 0)
      throw Errors.generic("UNDEFINED_VALUE", "Undefined values are not allowed");
  }
  return "$" + types2.push(
    x instanceof Parameter ? (parameters.push(x.value), x.array ? x.array[x.type || inferType(x.value)] || x.type || firstIsString(x.value) : x.type) : (parameters.push(x), inferType(x))
  );
}
__name(handleValue, "handleValue");
__name2(handleValue, "handleValue");
var defaultHandlers = typeHandlers(types);
function stringify(q, string, value, parameters, types2, options) {
  for (let i = 1; i < q.strings.length; i++) {
    string += stringifyValue(string, value, parameters, types2, options) + q.strings[i];
    value = q.args[i];
  }
  return string;
}
__name(stringify, "stringify");
__name2(stringify, "stringify");
function stringifyValue(string, value, parameters, types2, o) {
  return value instanceof Builder ? value.build(string, parameters, types2, o) : value instanceof Query ? fragment(value, parameters, types2, o) : value instanceof Identifier ? value.value : value && value[0] instanceof Query ? value.reduce((acc, x) => acc + " " + fragment(x, parameters, types2, o), "") : handleValue(value, parameters, types2, o);
}
__name(stringifyValue, "stringifyValue");
__name2(stringifyValue, "stringifyValue");
function fragment(q, parameters, types2, options) {
  q.fragment = true;
  return stringify(q, q.strings[0], q.args[0], parameters, types2, options);
}
__name(fragment, "fragment");
__name2(fragment, "fragment");
function valuesBuilder(first, parameters, types2, columns, options) {
  return first.map(
    (row) => "(" + columns.map(
      (column) => stringifyValue("values", row[column], parameters, types2, options)
    ).join(",") + ")"
  ).join(",");
}
__name(valuesBuilder, "valuesBuilder");
__name2(valuesBuilder, "valuesBuilder");
function values(first, rest, parameters, types2, options) {
  const multi = Array.isArray(first[0]);
  const columns = rest.length ? rest.flat() : Object.keys(multi ? first[0] : first);
  return valuesBuilder(multi ? first : [first], parameters, types2, columns, options);
}
__name(values, "values");
__name2(values, "values");
function select(first, rest, parameters, types2, options) {
  typeof first === "string" && (first = [first].concat(rest));
  if (Array.isArray(first))
    return escapeIdentifiers(first, options);
  let value;
  const columns = rest.length ? rest.flat() : Object.keys(first);
  return columns.map((x) => {
    value = first[x];
    return (value instanceof Query ? fragment(value, parameters, types2, options) : value instanceof Identifier ? value.value : handleValue(value, parameters, types2, options)) + " as " + escapeIdentifier(options.transform.column.to ? options.transform.column.to(x) : x);
  }).join(",");
}
__name(select, "select");
__name2(select, "select");
var builders = Object.entries({
  values,
  in: /* @__PURE__ */ __name2((...xs) => {
    const x = values(...xs);
    return x === "()" ? "(null)" : x;
  }, "in"),
  select,
  as: select,
  returning: select,
  "\\(": select,
  update(first, rest, parameters, types2, options) {
    return (rest.length ? rest.flat() : Object.keys(first)).map(
      (x) => escapeIdentifier(options.transform.column.to ? options.transform.column.to(x) : x) + "=" + stringifyValue("values", first[x], parameters, types2, options)
    );
  },
  insert(first, rest, parameters, types2, options) {
    const columns = rest.length ? rest.flat() : Object.keys(Array.isArray(first) ? first[0] : first);
    return "(" + escapeIdentifiers(columns, options) + ")values" + valuesBuilder(Array.isArray(first) ? first : [first], parameters, types2, columns, options);
  }
}).map(([x, fn]) => [new RegExp("((?:^|[\\s(])" + x + "(?:$|[\\s(]))(?![\\s\\S]*\\1)", "i"), fn]);
function notTagged() {
  throw Errors.generic("NOT_TAGGED_CALL", "Query not called as a tagged template literal");
}
__name(notTagged, "notTagged");
__name2(notTagged, "notTagged");
var serializers = defaultHandlers.serializers;
var parsers = defaultHandlers.parsers;
function firstIsString(x) {
  if (Array.isArray(x))
    return firstIsString(x[0]);
  return typeof x === "string" ? 1009 : 0;
}
__name(firstIsString, "firstIsString");
__name2(firstIsString, "firstIsString");
var mergeUserTypes = /* @__PURE__ */ __name2(function(types2) {
  const user = typeHandlers(types2 || {});
  return {
    serializers: Object.assign({}, serializers, user.serializers),
    parsers: Object.assign({}, parsers, user.parsers)
  };
}, "mergeUserTypes");
function typeHandlers(types2) {
  return Object.keys(types2).reduce((acc, k) => {
    types2[k].from && [].concat(types2[k].from).forEach((x) => acc.parsers[x] = types2[k].parse);
    if (types2[k].serialize) {
      acc.serializers[types2[k].to] = types2[k].serialize;
      types2[k].from && [].concat(types2[k].from).forEach((x) => acc.serializers[x] = types2[k].serialize);
    }
    return acc;
  }, { parsers: {}, serializers: {} });
}
__name(typeHandlers, "typeHandlers");
__name2(typeHandlers, "typeHandlers");
function escapeIdentifiers(xs, { transform: { column } }) {
  return xs.map((x) => escapeIdentifier(column.to ? column.to(x) : x)).join(",");
}
__name(escapeIdentifiers, "escapeIdentifiers");
__name2(escapeIdentifiers, "escapeIdentifiers");
var escapeIdentifier = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function escape(str) {
  return '"' + str.replace(/"/g, '""').replace(/\./g, '"."') + '"';
}, "escape"), "escape");
var inferType = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function inferType2(x) {
  return x instanceof Parameter ? x.type : x instanceof Date ? 1184 : x instanceof Uint8Array ? 17 : x === true || x === false ? 16 : typeof x === "bigint" ? 20 : Array.isArray(x) ? inferType2(x[0]) : 0;
}, "inferType2"), "inferType");
var escapeBackslash = /\\/g;
var escapeQuote = /"/g;
function arrayEscape(x) {
  return x.replace(escapeBackslash, "\\\\").replace(escapeQuote, '\\"');
}
__name(arrayEscape, "arrayEscape");
__name2(arrayEscape, "arrayEscape");
var arraySerializer = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function arraySerializer2(xs, serializer, options, typarray) {
  if (Array.isArray(xs) === false)
    return xs;
  if (!xs.length)
    return "{}";
  const first = xs[0];
  const delimiter = typarray === 1020 ? ";" : ",";
  if (Array.isArray(first) && !first.type)
    return "{" + xs.map((x) => arraySerializer2(x, serializer, options, typarray)).join(delimiter) + "}";
  return "{" + xs.map((x) => {
    if (x === void 0) {
      x = options.transform.undefined;
      if (x === void 0)
        throw Errors.generic("UNDEFINED_VALUE", "Undefined values are not allowed");
    }
    return x === null ? "null" : '"' + arrayEscape(serializer ? serializer(x.type ? x.value : x) : "" + x) + '"';
  }).join(delimiter) + "}";
}, "arraySerializer2"), "arraySerializer");
var arrayParserState = {
  i: 0,
  char: null,
  str: "",
  quoted: false,
  last: 0
};
var arrayParser = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function arrayParser2(x, parser, typarray) {
  arrayParserState.i = arrayParserState.last = 0;
  return arrayParserLoop(arrayParserState, x, parser, typarray);
}, "arrayParser2"), "arrayParser");
function arrayParserLoop(s, x, parser, typarray) {
  const xs = [];
  const delimiter = typarray === 1020 ? ";" : ",";
  for (; s.i < x.length; s.i++) {
    s.char = x[s.i];
    if (s.quoted) {
      if (s.char === "\\") {
        s.str += x[++s.i];
      } else if (s.char === '"') {
        xs.push(parser ? parser(s.str) : s.str);
        s.str = "";
        s.quoted = x[s.i + 1] === '"';
        s.last = s.i + 2;
      } else {
        s.str += s.char;
      }
    } else if (s.char === '"') {
      s.quoted = true;
    } else if (s.char === "{") {
      s.last = ++s.i;
      xs.push(arrayParserLoop(s, x, parser, typarray));
    } else if (s.char === "}") {
      s.quoted = false;
      s.last < s.i && xs.push(parser ? parser(x.slice(s.last, s.i)) : x.slice(s.last, s.i));
      s.last = s.i + 1;
      break;
    } else if (s.char === delimiter && s.p !== "}" && s.p !== '"') {
      xs.push(parser ? parser(x.slice(s.last, s.i)) : x.slice(s.last, s.i));
      s.last = s.i + 1;
    }
    s.p = s.char;
  }
  s.last < s.i && xs.push(parser ? parser(x.slice(s.last, s.i + 1)) : x.slice(s.last, s.i + 1));
  return xs;
}
__name(arrayParserLoop, "arrayParserLoop");
__name2(arrayParserLoop, "arrayParserLoop");
var toCamel = /* @__PURE__ */ __name2((x) => {
  let str = x[0];
  for (let i = 1; i < x.length; i++)
    str += x[i] === "_" ? x[++i].toUpperCase() : x[i];
  return str;
}, "toCamel");
var toPascal = /* @__PURE__ */ __name2((x) => {
  let str = x[0].toUpperCase();
  for (let i = 1; i < x.length; i++)
    str += x[i] === "_" ? x[++i].toUpperCase() : x[i];
  return str;
}, "toPascal");
var toKebab = /* @__PURE__ */ __name2((x) => x.replace(/_/g, "-"), "toKebab");
var fromCamel = /* @__PURE__ */ __name2((x) => x.replace(/([A-Z])/g, "_$1").toLowerCase(), "fromCamel");
var fromPascal = /* @__PURE__ */ __name2((x) => (x.slice(0, 1) + x.slice(1).replace(/([A-Z])/g, "_$1")).toLowerCase(), "fromPascal");
var fromKebab = /* @__PURE__ */ __name2((x) => x.replace(/-/g, "_"), "fromKebab");
function createJsonTransform(fn) {
  return /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function jsonTransform(x, column) {
    return typeof x === "object" && x !== null && (column.type === 114 || column.type === 3802) ? Array.isArray(x) ? x.map((x2) => jsonTransform(x2, column)) : Object.entries(x).reduce((acc, [k, v]) => Object.assign(acc, { [fn(k)]: jsonTransform(v, column) }), {}) : x;
  }, "jsonTransform"), "jsonTransform");
}
__name(createJsonTransform, "createJsonTransform");
__name2(createJsonTransform, "createJsonTransform");
toCamel.column = { from: toCamel };
toCamel.value = { from: createJsonTransform(toCamel) };
fromCamel.column = { to: fromCamel };
var camel = { ...toCamel };
camel.column.to = fromCamel;
toPascal.column = { from: toPascal };
toPascal.value = { from: createJsonTransform(toPascal) };
fromPascal.column = { to: fromPascal };
var pascal = { ...toPascal };
pascal.column.to = fromPascal;
toKebab.column = { from: toKebab };
toKebab.value = { from: createJsonTransform(toKebab) };
fromKebab.column = { to: fromKebab };
var kebab = { ...toKebab };
kebab.column.to = fromKebab;
var Result = class extends Array {
  static {
    __name(this, "Result");
  }
  static {
    __name2(this, "Result");
  }
  constructor() {
    super();
    Object.defineProperties(this, {
      count: { value: null, writable: true },
      state: { value: null, writable: true },
      command: { value: null, writable: true },
      columns: { value: null, writable: true },
      statement: { value: null, writable: true }
    });
  }
  static get [Symbol.species]() {
    return Array;
  }
};
var queue_default = Queue;
function Queue(initial = []) {
  let xs = initial.slice();
  let index = 0;
  return {
    get length() {
      return xs.length - index;
    },
    remove: /* @__PURE__ */ __name2((x) => {
      const index2 = xs.indexOf(x);
      return index2 === -1 ? null : (xs.splice(index2, 1), x);
    }, "remove"),
    push: /* @__PURE__ */ __name2((x) => (xs.push(x), x), "push"),
    shift: /* @__PURE__ */ __name2(() => {
      const out = xs[index++];
      if (index === xs.length) {
        index = 0;
        xs = [];
      } else {
        xs[index - 1] = void 0;
      }
      return out;
    }, "shift")
  };
}
__name(Queue, "Queue");
__name2(Queue, "Queue");
var size = 256;
var buffer = Buffer4.allocUnsafe(size);
var messages = "BCcDdEFfHPpQSX".split("").reduce((acc, x) => {
  const v = x.charCodeAt(0);
  acc[x] = () => {
    buffer[0] = v;
    b.i = 5;
    return b;
  };
  return acc;
}, {});
var b = Object.assign(reset, messages, {
  N: String.fromCharCode(0),
  i: 0,
  inc(x) {
    b.i += x;
    return b;
  },
  str(x) {
    const length = Buffer4.byteLength(x);
    fit(length);
    b.i += buffer.write(x, b.i, length, "utf8");
    return b;
  },
  i16(x) {
    fit(2);
    buffer.writeUInt16BE(x, b.i);
    b.i += 2;
    return b;
  },
  i32(x, i) {
    if (i || i === 0) {
      buffer.writeUInt32BE(x, i);
      return b;
    }
    fit(4);
    buffer.writeUInt32BE(x, b.i);
    b.i += 4;
    return b;
  },
  z(x) {
    fit(x);
    buffer.fill(0, b.i, b.i + x);
    b.i += x;
    return b;
  },
  raw(x) {
    buffer = Buffer4.concat([buffer.subarray(0, b.i), x]);
    b.i = buffer.length;
    return b;
  },
  end(at = 1) {
    buffer.writeUInt32BE(b.i - at, at);
    const out = buffer.subarray(0, b.i);
    b.i = 0;
    buffer = Buffer4.allocUnsafe(size);
    return out;
  }
});
var bytes_default = b;
function fit(x) {
  if (buffer.length - b.i < x) {
    const prev = buffer, length = prev.length;
    buffer = Buffer4.allocUnsafe(length + (length >> 1) + x);
    prev.copy(buffer);
  }
}
__name(fit, "fit");
__name2(fit, "fit");
function reset() {
  b.i = 0;
  return b;
}
__name(reset, "reset");
__name2(reset, "reset");
var connection_default = Connection;
var uid = 1;
var Sync = bytes_default().S().end();
var Flush = bytes_default().H().end();
var SSLRequest = bytes_default().i32(8).i32(80877103).end(8);
var ExecuteUnnamed = Buffer5.concat([bytes_default().E().str(bytes_default.N).i32(0).end(), Sync]);
var DescribeUnnamed = bytes_default().D().str("S").str(bytes_default.N).end();
var noop = /* @__PURE__ */ __name2(() => {
}, "noop");
var retryRoutines = /* @__PURE__ */ new Set([
  "FetchPreparedStatement",
  "RevalidateCachedQuery",
  "transformAssignedExpr"
]);
var errorFields = {
  83: "severity_local",
  // S
  86: "severity",
  // V
  67: "code",
  // C
  77: "message",
  // M
  68: "detail",
  // D
  72: "hint",
  // H
  80: "position",
  // P
  112: "internal_position",
  // p
  113: "internal_query",
  // q
  87: "where",
  // W
  115: "schema_name",
  // s
  116: "table_name",
  // t
  99: "column_name",
  // c
  100: "data type_name",
  // d
  110: "constraint_name",
  // n
  70: "file",
  // F
  76: "line",
  // L
  82: "routine"
  // R
};
function Connection(options, queues = {}, { onopen = noop, onend = noop, onclose = noop } = {}) {
  const {
    sslnegotiation,
    ssl,
    max,
    user,
    host,
    port,
    database,
    parsers: parsers2,
    transform,
    onnotice,
    onnotify,
    onparameter,
    max_pipeline,
    keep_alive,
    backoff: backoff2,
    target_session_attrs
  } = options;
  const sent = queue_default(), id = uid++, backend = { pid: null, secret: null }, idleTimer = timer(end, options.idle_timeout), lifeTimer = timer(end, options.max_lifetime), connectTimer = timer(connectTimedOut, options.connect_timeout);
  let socket = null, cancelMessage, errorResponse = null, result = new Result(), incoming = Buffer5.alloc(0), needsTypes = options.fetch_types, backendParameters = {}, statements = {}, statementId = Math.random().toString(36).slice(2), statementCount = 1, closedTime = 0, remaining = 0, hostIndex = 0, retries = 0, length = 0, delay = 0, rows = 0, serverSignature = null, nextWriteTimer = null, terminated = false, incomings = null, results = null, initial = null, ending = null, stream = null, chunk = null, ended = null, nonce = null, query = null, final = null;
  const connection2 = {
    queue: queues.closed,
    idleTimer,
    connect(query2) {
      initial = query2;
      reconnect();
    },
    terminate,
    execute,
    cancel,
    end,
    count: 0,
    id
  };
  queues.closed && queues.closed.push(connection2);
  return connection2;
  async function createSocket() {
    let x;
    try {
      x = options.socket ? await Promise.resolve(options.socket(options)) : new net.Socket();
    } catch (e) {
      error(e);
      return;
    }
    x.on("error", error);
    x.on("close", closed);
    x.on("drain", drain);
    return x;
  }
  __name(createSocket, "createSocket");
  __name2(createSocket, "createSocket");
  async function cancel({ pid, secret }, resolve, reject) {
    try {
      cancelMessage = bytes_default().i32(16).i32(80877102).i32(pid).i32(secret).end(16);
      await connect();
      socket.once("error", reject);
      socket.once("close", resolve);
    } catch (error2) {
      reject(error2);
    }
  }
  __name(cancel, "cancel");
  __name2(cancel, "cancel");
  function execute(q) {
    if (terminated)
      return queryError(q, Errors.connection("CONNECTION_DESTROYED", options));
    if (stream)
      return queryError(q, Errors.generic("COPY_IN_PROGRESS", "You cannot execute queries during copy"));
    if (q.cancelled)
      return;
    try {
      q.state = backend;
      query ? sent.push(q) : (query = q, query.active = true);
      build(q);
      return write(toBuffer(q)) && !q.describeFirst && !q.cursorFn && sent.length < max_pipeline && (!q.options.onexecute || q.options.onexecute(connection2));
    } catch (error2) {
      sent.length === 0 && write(Sync);
      errored(error2);
      return true;
    }
  }
  __name(execute, "execute");
  __name2(execute, "execute");
  function toBuffer(q) {
    if (q.parameters.length >= 65534)
      throw Errors.generic("MAX_PARAMETERS_EXCEEDED", "Max number of parameters (65534) exceeded");
    return q.options.simple ? bytes_default().Q().str(q.statement.string + bytes_default.N).end() : q.describeFirst ? Buffer5.concat([describe(q), Flush]) : q.prepare ? q.prepared ? prepared(q) : Buffer5.concat([describe(q), prepared(q)]) : unnamed(q);
  }
  __name(toBuffer, "toBuffer");
  __name2(toBuffer, "toBuffer");
  function describe(q) {
    return Buffer5.concat([
      Parse(q.statement.string, q.parameters, q.statement.types, q.statement.name),
      Describe("S", q.statement.name)
    ]);
  }
  __name(describe, "describe");
  __name2(describe, "describe");
  function prepared(q) {
    return Buffer5.concat([
      Bind(q.parameters, q.statement.types, q.statement.name, q.cursorName),
      q.cursorFn ? Execute("", q.cursorRows) : ExecuteUnnamed
    ]);
  }
  __name(prepared, "prepared");
  __name2(prepared, "prepared");
  function unnamed(q) {
    return Buffer5.concat([
      Parse(q.statement.string, q.parameters, q.statement.types),
      DescribeUnnamed,
      prepared(q)
    ]);
  }
  __name(unnamed, "unnamed");
  __name2(unnamed, "unnamed");
  function build(q) {
    const parameters = [], types2 = [];
    const string = stringify(q, q.strings[0], q.args[0], parameters, types2, options);
    !q.tagged && q.args.forEach((x) => handleValue(x, parameters, types2, options));
    q.prepare = options.prepare && ("prepare" in q.options ? q.options.prepare : true);
    q.string = string;
    q.signature = q.prepare && types2 + string;
    q.onlyDescribe && delete statements[q.signature];
    q.parameters = q.parameters || parameters;
    q.prepared = q.prepare && q.signature in statements;
    q.describeFirst = q.onlyDescribe || parameters.length && !q.prepared;
    q.statement = q.prepared ? statements[q.signature] : { string, types: types2, name: q.prepare ? statementId + statementCount++ : "" };
    typeof options.debug === "function" && options.debug(id, string, parameters, types2);
  }
  __name(build, "build");
  __name2(build, "build");
  function write(x, fn) {
    chunk = chunk ? Buffer5.concat([chunk, x]) : Buffer5.from(x);
    if (fn || chunk.length >= 1024)
      return nextWrite(fn);
    nextWriteTimer === null && (nextWriteTimer = setImmediate(nextWrite));
    return true;
  }
  __name(write, "write");
  __name2(write, "write");
  function nextWrite(fn) {
    const x = socket.write(chunk, fn);
    nextWriteTimer !== null && clearImmediate(nextWriteTimer);
    chunk = nextWriteTimer = null;
    return x;
  }
  __name(nextWrite, "nextWrite");
  __name2(nextWrite, "nextWrite");
  function connectTimedOut() {
    errored(Errors.connection("CONNECT_TIMEOUT", options, socket));
    socket.destroy();
  }
  __name(connectTimedOut, "connectTimedOut");
  __name2(connectTimedOut, "connectTimedOut");
  async function secure() {
    if (sslnegotiation !== "direct") {
      write(SSLRequest);
      const canSSL = await new Promise((r) => socket.once("data", (x) => r(x[0] === 83)));
      if (!canSSL && ssl === "prefer")
        return connected();
    }
    const options2 = {
      socket,
      servername: net.isIP(socket.host) ? void 0 : socket.host
    };
    if (sslnegotiation === "direct")
      options2.ALPNProtocols = ["postgresql"];
    if (ssl === "require" || ssl === "allow" || ssl === "prefer")
      options2.rejectUnauthorized = false;
    else if (typeof ssl === "object")
      Object.assign(options2, ssl);
    socket.removeAllListeners();
    socket = tls.connect(options2);
    socket.on("secureConnect", connected);
    socket.on("error", error);
    socket.on("close", closed);
    socket.on("drain", drain);
  }
  __name(secure, "secure");
  __name2(secure, "secure");
  function drain() {
    !query && onopen(connection2);
  }
  __name(drain, "drain");
  __name2(drain, "drain");
  function data(x) {
    if (incomings) {
      incomings.push(x);
      remaining -= x.length;
      if (remaining > 0)
        return;
    }
    incoming = incomings ? Buffer5.concat(incomings, length - remaining) : incoming.length === 0 ? x : Buffer5.concat([incoming, x], incoming.length + x.length);
    while (incoming.length > 4) {
      length = incoming.readUInt32BE(1);
      if (length >= incoming.length) {
        remaining = length - incoming.length;
        incomings = [incoming];
        break;
      }
      try {
        handle(incoming.subarray(0, length + 1));
      } catch (e) {
        query && (query.cursorFn || query.describeFirst) && write(Sync);
        errored(e);
      }
      incoming = incoming.subarray(length + 1);
      remaining = 0;
      incomings = null;
    }
  }
  __name(data, "data");
  __name2(data, "data");
  async function connect() {
    terminated = false;
    backendParameters = {};
    socket || (socket = await createSocket());
    if (!socket)
      return;
    connectTimer.start();
    if (options.socket)
      return ssl ? secure() : connected();
    socket.on("connect", ssl ? secure : connected);
    if (options.path)
      return socket.connect(options.path);
    socket.ssl = ssl;
    socket.connect(port[hostIndex], host[hostIndex]);
    socket.host = host[hostIndex];
    socket.port = port[hostIndex];
    hostIndex = (hostIndex + 1) % port.length;
  }
  __name(connect, "connect");
  __name2(connect, "connect");
  function reconnect() {
    setTimeout(connect, closedTime ? Math.max(0, closedTime + delay - performance2.now()) : 0);
  }
  __name(reconnect, "reconnect");
  __name2(reconnect, "reconnect");
  function connected() {
    try {
      statements = {};
      needsTypes = options.fetch_types;
      statementId = Math.random().toString(36).slice(2);
      statementCount = 1;
      lifeTimer.start();
      socket.on("data", data);
      keep_alive && socket.setKeepAlive && socket.setKeepAlive(true, 1e3 * keep_alive);
      const s = StartupMessage();
      write(s);
    } catch (err) {
      error(err);
    }
  }
  __name(connected, "connected");
  __name2(connected, "connected");
  function error(err) {
    if (connection2.queue === queues.connecting && options.host[retries + 1])
      return;
    errored(err);
    while (sent.length)
      queryError(sent.shift(), err);
  }
  __name(error, "error");
  __name2(error, "error");
  function errored(err) {
    stream && (stream.destroy(err), stream = null);
    query && queryError(query, err);
    initial && (queryError(initial, err), initial = null);
  }
  __name(errored, "errored");
  __name2(errored, "errored");
  function queryError(query2, err) {
    if (query2.reserve)
      return query2.reject(err);
    if (!err || typeof err !== "object")
      err = new Error(err);
    "query" in err || "parameters" in err || Object.defineProperties(err, {
      stack: { value: err.stack + query2.origin.replace(/.*\n/, "\n"), enumerable: options.debug },
      query: { value: query2.string, enumerable: options.debug },
      parameters: { value: query2.parameters, enumerable: options.debug },
      args: { value: query2.args, enumerable: options.debug },
      types: { value: query2.statement && query2.statement.types, enumerable: options.debug }
    });
    query2.reject(err);
  }
  __name(queryError, "queryError");
  __name2(queryError, "queryError");
  function end() {
    return ending || (!connection2.reserved && onend(connection2), !connection2.reserved && !initial && !query && sent.length === 0 ? (terminate(), new Promise((r) => socket && socket.readyState !== "closed" ? socket.once("close", r) : r())) : ending = new Promise((r) => ended = r));
  }
  __name(end, "end");
  __name2(end, "end");
  function terminate() {
    terminated = true;
    if (stream || query || initial || sent.length)
      error(Errors.connection("CONNECTION_DESTROYED", options));
    clearImmediate(nextWriteTimer);
    if (socket) {
      socket.removeListener("data", data);
      socket.removeListener("connect", connected);
      socket.readyState === "open" && socket.end(bytes_default().X().end());
    }
    ended && (ended(), ending = ended = null);
  }
  __name(terminate, "terminate");
  __name2(terminate, "terminate");
  async function closed(hadError) {
    incoming = Buffer5.alloc(0);
    remaining = 0;
    incomings = null;
    clearImmediate(nextWriteTimer);
    socket.removeListener("data", data);
    socket.removeListener("connect", connected);
    idleTimer.cancel();
    lifeTimer.cancel();
    connectTimer.cancel();
    socket.removeAllListeners();
    socket = null;
    if (initial)
      return reconnect();
    !hadError && (query || sent.length) && error(Errors.connection("CONNECTION_CLOSED", options, socket));
    closedTime = performance2.now();
    hadError && options.shared.retries++;
    delay = (typeof backoff2 === "function" ? backoff2(options.shared.retries) : backoff2) * 1e3;
    onclose(connection2, Errors.connection("CONNECTION_CLOSED", options, socket));
  }
  __name(closed, "closed");
  __name2(closed, "closed");
  function handle(xs, x = xs[0]) {
    (x === 68 ? DataRow : (
      // D
      x === 100 ? CopyData : (
        // d
        x === 65 ? NotificationResponse : (
          // A
          x === 83 ? ParameterStatus : (
            // S
            x === 90 ? ReadyForQuery : (
              // Z
              x === 67 ? CommandComplete : (
                // C
                x === 50 ? BindComplete : (
                  // 2
                  x === 49 ? ParseComplete : (
                    // 1
                    x === 116 ? ParameterDescription : (
                      // t
                      x === 84 ? RowDescription : (
                        // T
                        x === 82 ? Authentication : (
                          // R
                          x === 110 ? NoData : (
                            // n
                            x === 75 ? BackendKeyData : (
                              // K
                              x === 69 ? ErrorResponse : (
                                // E
                                x === 115 ? PortalSuspended : (
                                  // s
                                  x === 51 ? CloseComplete : (
                                    // 3
                                    x === 71 ? CopyInResponse : (
                                      // G
                                      x === 78 ? NoticeResponse : (
                                        // N
                                        x === 72 ? CopyOutResponse : (
                                          // H
                                          x === 99 ? CopyDone : (
                                            // c
                                            x === 73 ? EmptyQueryResponse : (
                                              // I
                                              x === 86 ? FunctionCallResponse : (
                                                // V
                                                x === 118 ? NegotiateProtocolVersion : (
                                                  // v
                                                  x === 87 ? CopyBothResponse : (
                                                    // W
                                                    /* c8 ignore next */
                                                    UnknownMessage
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    ))(xs);
  }
  __name(handle, "handle");
  __name2(handle, "handle");
  function DataRow(x) {
    let index = 7;
    let length2;
    let column;
    let value;
    const row = query.isRaw ? new Array(query.statement.columns.length) : {};
    for (let i = 0; i < query.statement.columns.length; i++) {
      column = query.statement.columns[i];
      length2 = x.readInt32BE(index);
      index += 4;
      value = length2 === -1 ? null : query.isRaw === true ? x.subarray(index, index += length2) : column.parser === void 0 ? x.toString("utf8", index, index += length2) : column.parser.array === true ? column.parser(x.toString("utf8", index + 1, index += length2)) : column.parser(x.toString("utf8", index, index += length2));
      query.isRaw ? row[i] = query.isRaw === true ? value : transform.value.from ? transform.value.from(value, column) : value : row[column.name] = transform.value.from ? transform.value.from(value, column) : value;
    }
    query.forEachFn ? query.forEachFn(transform.row.from ? transform.row.from(row) : row, result) : result[rows++] = transform.row.from ? transform.row.from(row) : row;
  }
  __name(DataRow, "DataRow");
  __name2(DataRow, "DataRow");
  function ParameterStatus(x) {
    const [k, v] = x.toString("utf8", 5, x.length - 1).split(bytes_default.N);
    backendParameters[k] = v;
    if (options.parameters[k] !== v) {
      options.parameters[k] = v;
      onparameter && onparameter(k, v);
    }
  }
  __name(ParameterStatus, "ParameterStatus");
  __name2(ParameterStatus, "ParameterStatus");
  function ReadyForQuery(x) {
    if (query) {
      if (errorResponse) {
        query.retried ? errored(query.retried) : query.prepared && retryRoutines.has(errorResponse.routine) ? retry(query, errorResponse) : errored(errorResponse);
      } else {
        query.resolve(results || result);
      }
    } else if (errorResponse) {
      errored(errorResponse);
    }
    query = results = errorResponse = null;
    result = new Result();
    connectTimer.cancel();
    if (initial) {
      if (target_session_attrs) {
        if (!backendParameters.in_hot_standby || !backendParameters.default_transaction_read_only)
          return fetchState();
        else if (tryNext(target_session_attrs, backendParameters))
          return terminate();
      }
      if (needsTypes) {
        initial.reserve && (initial = null);
        return fetchArrayTypes();
      }
      initial && !initial.reserve && execute(initial);
      options.shared.retries = retries = 0;
      initial = null;
      return;
    }
    while (sent.length && (query = sent.shift()) && (query.active = true, query.cancelled))
      Connection(options).cancel(query.state, query.cancelled.resolve, query.cancelled.reject);
    if (query)
      return;
    connection2.reserved ? !connection2.reserved.release && x[5] === 73 ? ending ? terminate() : (connection2.reserved = null, onopen(connection2)) : connection2.reserved() : ending ? terminate() : onopen(connection2);
  }
  __name(ReadyForQuery, "ReadyForQuery");
  __name2(ReadyForQuery, "ReadyForQuery");
  function CommandComplete(x) {
    rows = 0;
    for (let i = x.length - 1; i > 0; i--) {
      if (x[i] === 32 && x[i + 1] < 58 && result.count === null)
        result.count = +x.toString("utf8", i + 1, x.length - 1);
      if (x[i - 1] >= 65) {
        result.command = x.toString("utf8", 5, i);
        result.state = backend;
        break;
      }
    }
    final && (final(), final = null);
    if (result.command === "BEGIN" && max !== 1 && !connection2.reserved)
      return errored(Errors.generic("UNSAFE_TRANSACTION", "Only use sql.begin, sql.reserved or max: 1"));
    if (query.options.simple)
      return BindComplete();
    if (query.cursorFn) {
      result.count && query.cursorFn(result);
      write(Sync);
    }
  }
  __name(CommandComplete, "CommandComplete");
  __name2(CommandComplete, "CommandComplete");
  function ParseComplete() {
    query.parsing = false;
  }
  __name(ParseComplete, "ParseComplete");
  __name2(ParseComplete, "ParseComplete");
  function BindComplete() {
    !result.statement && (result.statement = query.statement);
    result.columns = query.statement.columns;
  }
  __name(BindComplete, "BindComplete");
  __name2(BindComplete, "BindComplete");
  function ParameterDescription(x) {
    const length2 = x.readUInt16BE(5);
    for (let i = 0; i < length2; ++i)
      !query.statement.types[i] && (query.statement.types[i] = x.readUInt32BE(7 + i * 4));
    query.prepare && (statements[query.signature] = query.statement);
    query.describeFirst && !query.onlyDescribe && (write(prepared(query)), query.describeFirst = false);
  }
  __name(ParameterDescription, "ParameterDescription");
  __name2(ParameterDescription, "ParameterDescription");
  function RowDescription(x) {
    if (result.command) {
      results = results || [result];
      results.push(result = new Result());
      result.count = null;
      query.statement.columns = null;
    }
    const length2 = x.readUInt16BE(5);
    let index = 7;
    let start;
    query.statement.columns = Array(length2);
    for (let i = 0; i < length2; ++i) {
      start = index;
      while (x[index++] !== 0) ;
      const table = x.readUInt32BE(index);
      const number = x.readUInt16BE(index + 4);
      const type = x.readUInt32BE(index + 6);
      query.statement.columns[i] = {
        name: transform.column.from ? transform.column.from(x.toString("utf8", start, index - 1)) : x.toString("utf8", start, index - 1),
        parser: parsers2[type],
        table,
        number,
        type
      };
      index += 18;
    }
    result.statement = query.statement;
    if (query.onlyDescribe)
      return query.resolve(query.statement), write(Sync);
  }
  __name(RowDescription, "RowDescription");
  __name2(RowDescription, "RowDescription");
  async function Authentication(x, type = x.readUInt32BE(5)) {
    (type === 3 ? AuthenticationCleartextPassword : type === 5 ? AuthenticationMD5Password : type === 10 ? SASL : type === 11 ? SASLContinue : type === 12 ? SASLFinal : type !== 0 ? UnknownAuth : noop)(x, type);
  }
  __name(Authentication, "Authentication");
  __name2(Authentication, "Authentication");
  async function AuthenticationCleartextPassword() {
    const payload = await Pass();
    write(
      bytes_default().p().str(payload).z(1).end()
    );
  }
  __name(AuthenticationCleartextPassword, "AuthenticationCleartextPassword");
  __name2(AuthenticationCleartextPassword, "AuthenticationCleartextPassword");
  async function AuthenticationMD5Password(x) {
    const payload = "md5" + await md5(
      Buffer5.concat([
        Buffer5.from(await md5(await Pass() + user)),
        x.subarray(9)
      ])
    );
    write(
      bytes_default().p().str(payload).z(1).end()
    );
  }
  __name(AuthenticationMD5Password, "AuthenticationMD5Password");
  __name2(AuthenticationMD5Password, "AuthenticationMD5Password");
  async function SASL() {
    nonce = (await crypto2.randomBytes(18)).toString("base64");
    bytes_default().p().str("SCRAM-SHA-256" + bytes_default.N);
    const i = bytes_default.i;
    write(bytes_default.inc(4).str("n,,n=*,r=" + nonce).i32(bytes_default.i - i - 4, i).end());
  }
  __name(SASL, "SASL");
  __name2(SASL, "SASL");
  async function SASLContinue(x) {
    const res = x.toString("utf8", 9).split(",").reduce((acc, x2) => (acc[x2[0]] = x2.slice(2), acc), {});
    const saltedPassword = await crypto2.pbkdf2Sync(
      await Pass(),
      Buffer5.from(res.s, "base64"),
      parseInt(res.i),
      32,
      "sha256"
    );
    const clientKey = await hmac(saltedPassword, "Client Key");
    const auth = "n=*,r=" + nonce + ",r=" + res.r + ",s=" + res.s + ",i=" + res.i + ",c=biws,r=" + res.r;
    serverSignature = (await hmac(await hmac(saltedPassword, "Server Key"), auth)).toString("base64");
    const payload = "c=biws,r=" + res.r + ",p=" + xor(
      clientKey,
      Buffer5.from(await hmac(await sha256(clientKey), auth))
    ).toString("base64");
    write(
      bytes_default().p().str(payload).end()
    );
  }
  __name(SASLContinue, "SASLContinue");
  __name2(SASLContinue, "SASLContinue");
  function SASLFinal(x) {
    if (x.toString("utf8", 9).split(bytes_default.N, 1)[0].slice(2) === serverSignature)
      return;
    errored(Errors.generic("SASL_SIGNATURE_MISMATCH", "The server did not return the correct signature"));
    socket.destroy();
  }
  __name(SASLFinal, "SASLFinal");
  __name2(SASLFinal, "SASLFinal");
  function Pass() {
    return Promise.resolve(
      typeof options.pass === "function" ? options.pass() : options.pass
    );
  }
  __name(Pass, "Pass");
  __name2(Pass, "Pass");
  function NoData() {
    result.statement = query.statement;
    result.statement.columns = [];
    if (query.onlyDescribe)
      return query.resolve(query.statement), write(Sync);
  }
  __name(NoData, "NoData");
  __name2(NoData, "NoData");
  function BackendKeyData(x) {
    backend.pid = x.readUInt32BE(5);
    backend.secret = x.readUInt32BE(9);
  }
  __name(BackendKeyData, "BackendKeyData");
  __name2(BackendKeyData, "BackendKeyData");
  async function fetchArrayTypes() {
    needsTypes = false;
    const types2 = await new Query([`
      select b.oid, b.typarray
      from pg_catalog.pg_type a
      left join pg_catalog.pg_type b on b.oid = a.typelem
      where a.typcategory = 'A'
      group by b.oid, b.typarray
      order by b.oid
    `], [], execute);
    types2.forEach(({ oid, typarray }) => addArrayType(oid, typarray));
  }
  __name(fetchArrayTypes, "fetchArrayTypes");
  __name2(fetchArrayTypes, "fetchArrayTypes");
  function addArrayType(oid, typarray) {
    if (!!options.parsers[typarray] && !!options.serializers[typarray]) return;
    const parser = options.parsers[oid];
    options.shared.typeArrayMap[oid] = typarray;
    options.parsers[typarray] = (xs) => arrayParser(xs, parser, typarray);
    options.parsers[typarray].array = true;
    options.serializers[typarray] = (xs) => arraySerializer(xs, options.serializers[oid], options, typarray);
  }
  __name(addArrayType, "addArrayType");
  __name2(addArrayType, "addArrayType");
  function tryNext(x, xs) {
    return x === "read-write" && xs.default_transaction_read_only === "on" || x === "read-only" && xs.default_transaction_read_only === "off" || x === "primary" && xs.in_hot_standby === "on" || x === "standby" && xs.in_hot_standby === "off" || x === "prefer-standby" && xs.in_hot_standby === "off" && options.host[retries];
  }
  __name(tryNext, "tryNext");
  __name2(tryNext, "tryNext");
  function fetchState() {
    const query2 = new Query([`
      show transaction_read_only;
      select pg_catalog.pg_is_in_recovery()
    `], [], execute, null, { simple: true });
    query2.resolve = ([[a], [b2]]) => {
      backendParameters.default_transaction_read_only = a.transaction_read_only;
      backendParameters.in_hot_standby = b2.pg_is_in_recovery ? "on" : "off";
    };
    query2.execute();
  }
  __name(fetchState, "fetchState");
  __name2(fetchState, "fetchState");
  function ErrorResponse(x) {
    if (query) {
      (query.cursorFn || query.describeFirst) && write(Sync);
      errorResponse = Errors.postgres(parseError(x));
    } else {
      errored(Errors.postgres(parseError(x)));
    }
  }
  __name(ErrorResponse, "ErrorResponse");
  __name2(ErrorResponse, "ErrorResponse");
  function retry(q, error2) {
    delete statements[q.signature];
    q.retried = error2;
    execute(q);
  }
  __name(retry, "retry");
  __name2(retry, "retry");
  function NotificationResponse(x) {
    if (!onnotify)
      return;
    let index = 9;
    while (x[index++] !== 0) ;
    onnotify(
      x.toString("utf8", 9, index - 1),
      x.toString("utf8", index, x.length - 1)
    );
  }
  __name(NotificationResponse, "NotificationResponse");
  __name2(NotificationResponse, "NotificationResponse");
  async function PortalSuspended() {
    try {
      const x = await Promise.resolve(query.cursorFn(result));
      rows = 0;
      x === CLOSE ? write(Close(query.portal)) : (result = new Result(), write(Execute("", query.cursorRows)));
    } catch (err) {
      write(Sync);
      query.reject(err);
    }
  }
  __name(PortalSuspended, "PortalSuspended");
  __name2(PortalSuspended, "PortalSuspended");
  function CloseComplete() {
    result.count && query.cursorFn(result);
    query.resolve(result);
  }
  __name(CloseComplete, "CloseComplete");
  __name2(CloseComplete, "CloseComplete");
  function CopyInResponse() {
    stream = new Stream.Writable({
      autoDestroy: true,
      write(chunk2, encoding, callback) {
        socket.write(bytes_default().d().raw(chunk2).end(), callback);
      },
      destroy(error2, callback) {
        callback(error2);
        socket.write(bytes_default().f().str(error2 + bytes_default.N).end());
        stream = null;
      },
      final(callback) {
        socket.write(bytes_default().c().end());
        final = callback;
        stream = null;
      }
    });
    query.resolve(stream);
  }
  __name(CopyInResponse, "CopyInResponse");
  __name2(CopyInResponse, "CopyInResponse");
  function CopyOutResponse() {
    stream = new Stream.Readable({
      read() {
        socket.resume();
      }
    });
    query.resolve(stream);
  }
  __name(CopyOutResponse, "CopyOutResponse");
  __name2(CopyOutResponse, "CopyOutResponse");
  function CopyBothResponse() {
    stream = new Stream.Duplex({
      autoDestroy: true,
      read() {
        socket.resume();
      },
      /* c8 ignore next 11 */
      write(chunk2, encoding, callback) {
        socket.write(bytes_default().d().raw(chunk2).end(), callback);
      },
      destroy(error2, callback) {
        callback(error2);
        socket.write(bytes_default().f().str(error2 + bytes_default.N).end());
        stream = null;
      },
      final(callback) {
        socket.write(bytes_default().c().end());
        final = callback;
      }
    });
    query.resolve(stream);
  }
  __name(CopyBothResponse, "CopyBothResponse");
  __name2(CopyBothResponse, "CopyBothResponse");
  function CopyData(x) {
    stream && (stream.push(x.subarray(5)) || socket.pause());
  }
  __name(CopyData, "CopyData");
  __name2(CopyData, "CopyData");
  function CopyDone() {
    stream && stream.push(null);
    stream = null;
  }
  __name(CopyDone, "CopyDone");
  __name2(CopyDone, "CopyDone");
  function NoticeResponse(x) {
    onnotice ? onnotice(parseError(x)) : console.log(parseError(x));
  }
  __name(NoticeResponse, "NoticeResponse");
  __name2(NoticeResponse, "NoticeResponse");
  function EmptyQueryResponse() {
  }
  __name(EmptyQueryResponse, "EmptyQueryResponse");
  __name2(EmptyQueryResponse, "EmptyQueryResponse");
  function FunctionCallResponse() {
    errored(Errors.notSupported("FunctionCallResponse"));
  }
  __name(FunctionCallResponse, "FunctionCallResponse");
  __name2(FunctionCallResponse, "FunctionCallResponse");
  function NegotiateProtocolVersion() {
    errored(Errors.notSupported("NegotiateProtocolVersion"));
  }
  __name(NegotiateProtocolVersion, "NegotiateProtocolVersion");
  __name2(NegotiateProtocolVersion, "NegotiateProtocolVersion");
  function UnknownMessage(x) {
    console.error("Postgres.js : Unknown Message:", x[0]);
  }
  __name(UnknownMessage, "UnknownMessage");
  __name2(UnknownMessage, "UnknownMessage");
  function UnknownAuth(x, type) {
    console.error("Postgres.js : Unknown Auth:", type);
  }
  __name(UnknownAuth, "UnknownAuth");
  __name2(UnknownAuth, "UnknownAuth");
  function Bind(parameters, types2, statement = "", portal = "") {
    let prev, type;
    bytes_default().B().str(portal + bytes_default.N).str(statement + bytes_default.N).i16(0).i16(parameters.length);
    parameters.forEach((x, i) => {
      if (x === null)
        return bytes_default.i32(4294967295);
      type = types2[i];
      parameters[i] = x = type in options.serializers ? options.serializers[type](x) : "" + x;
      prev = bytes_default.i;
      bytes_default.inc(4).str(x).i32(bytes_default.i - prev - 4, prev);
    });
    bytes_default.i16(0);
    return bytes_default.end();
  }
  __name(Bind, "Bind");
  __name2(Bind, "Bind");
  function Parse(str, parameters, types2, name = "") {
    bytes_default().P().str(name + bytes_default.N).str(str + bytes_default.N).i16(parameters.length);
    parameters.forEach((x, i) => bytes_default.i32(types2[i] || 0));
    return bytes_default.end();
  }
  __name(Parse, "Parse");
  __name2(Parse, "Parse");
  function Describe(x, name = "") {
    return bytes_default().D().str(x).str(name + bytes_default.N).end();
  }
  __name(Describe, "Describe");
  __name2(Describe, "Describe");
  function Execute(portal = "", rows2 = 0) {
    return Buffer5.concat([
      bytes_default().E().str(portal + bytes_default.N).i32(rows2).end(),
      Flush
    ]);
  }
  __name(Execute, "Execute");
  __name2(Execute, "Execute");
  function Close(portal = "") {
    return Buffer5.concat([
      bytes_default().C().str("P").str(portal + bytes_default.N).end(),
      bytes_default().S().end()
    ]);
  }
  __name(Close, "Close");
  __name2(Close, "Close");
  function StartupMessage() {
    return cancelMessage || bytes_default().inc(4).i16(3).z(2).str(
      Object.entries(Object.assign(
        {
          user,
          database,
          client_encoding: "UTF8"
        },
        options.connection
      )).filter(([, v]) => v).map(([k, v]) => k + bytes_default.N + v).join(bytes_default.N)
    ).z(2).end(0);
  }
  __name(StartupMessage, "StartupMessage");
  __name2(StartupMessage, "StartupMessage");
}
__name(Connection, "Connection");
__name2(Connection, "Connection");
function parseError(x) {
  const error = {};
  let start = 5;
  for (let i = 5; i < x.length - 1; i++) {
    if (x[i] === 0) {
      error[errorFields[x[start]]] = x.toString("utf8", start + 1, i);
      start = i + 1;
    }
  }
  return error;
}
__name(parseError, "parseError");
__name2(parseError, "parseError");
function md5(x) {
  return crypto2.createHash("md5").update(x).digest("hex");
}
__name(md5, "md5");
__name2(md5, "md5");
function hmac(key, x) {
  return crypto2.createHmac("sha256", key).update(x).digest();
}
__name(hmac, "hmac");
__name2(hmac, "hmac");
function sha256(x) {
  return crypto2.createHash("sha256").update(x).digest();
}
__name(sha256, "sha256");
__name2(sha256, "sha256");
function xor(a, b2) {
  const length = Math.max(a.length, b2.length);
  const buffer2 = Buffer5.allocUnsafe(length);
  for (let i = 0; i < length; i++)
    buffer2[i] = a[i] ^ b2[i];
  return buffer2;
}
__name(xor, "xor");
__name2(xor, "xor");
function timer(fn, seconds) {
  seconds = typeof seconds === "function" ? seconds() : seconds;
  if (!seconds)
    return { cancel: noop, start: noop };
  let timer2;
  return {
    cancel() {
      timer2 && (clearTimeout(timer2), timer2 = null);
    },
    start() {
      timer2 && clearTimeout(timer2);
      timer2 = setTimeout(done, seconds * 1e3, arguments);
    }
  };
  function done(args) {
    fn.apply(null, args);
    timer2 = null;
  }
  __name(done, "done");
  __name2(done, "done");
}
__name(timer, "timer");
__name2(timer, "timer");
var noop2 = /* @__PURE__ */ __name2(() => {
}, "noop");
function Subscribe(postgres2, options) {
  const subscribers = /* @__PURE__ */ new Map(), slot = "postgresjs_" + Math.random().toString(36).slice(2), state = {};
  let connection2, stream, ended = false;
  const sql = subscribe.sql = postgres2({
    ...options,
    transform: { column: {}, value: {}, row: {} },
    max: 1,
    fetch_types: false,
    idle_timeout: null,
    max_lifetime: null,
    connection: {
      ...options.connection,
      replication: "database"
    },
    onclose: /* @__PURE__ */ __name2(async function() {
      if (ended)
        return;
      stream = null;
      state.pid = state.secret = void 0;
      connected(await init(sql, slot, options.publications));
      subscribers.forEach((event) => event.forEach(({ onsubscribe }) => onsubscribe()));
    }, "onclose"),
    no_subscribe: true
  });
  const end = sql.end, close = sql.close;
  sql.end = async () => {
    ended = true;
    stream && await new Promise((r) => (stream.once("close", r), stream.end()));
    return end();
  };
  sql.close = async () => {
    stream && await new Promise((r) => (stream.once("close", r), stream.end()));
    return close();
  };
  return subscribe;
  async function subscribe(event, fn, onsubscribe = noop2, onerror = noop2) {
    event = parseEvent(event);
    if (!connection2)
      connection2 = init(sql, slot, options.publications);
    const subscriber = { fn, onsubscribe };
    const fns = subscribers.has(event) ? subscribers.get(event).add(subscriber) : subscribers.set(event, /* @__PURE__ */ new Set([subscriber])).get(event);
    const unsubscribe = /* @__PURE__ */ __name2(() => {
      fns.delete(subscriber);
      fns.size === 0 && subscribers.delete(event);
    }, "unsubscribe");
    return connection2.then((x) => {
      connected(x);
      onsubscribe();
      stream && stream.on("error", onerror);
      return { unsubscribe, state, sql };
    });
  }
  __name(subscribe, "subscribe");
  __name2(subscribe, "subscribe");
  function connected(x) {
    stream = x.stream;
    state.pid = x.state.pid;
    state.secret = x.state.secret;
  }
  __name(connected, "connected");
  __name2(connected, "connected");
  async function init(sql2, slot2, publications) {
    if (!publications)
      throw new Error("Missing publication names");
    const xs = await sql2.unsafe(
      `CREATE_REPLICATION_SLOT ${slot2} TEMPORARY LOGICAL pgoutput NOEXPORT_SNAPSHOT`
    );
    const [x] = xs;
    const stream2 = await sql2.unsafe(
      `START_REPLICATION SLOT ${slot2} LOGICAL ${x.consistent_point} (proto_version '1', publication_names '${publications}')`
    ).writable();
    const state2 = {
      lsn: Buffer6.concat(x.consistent_point.split("/").map((x2) => Buffer6.from(("00000000" + x2).slice(-8), "hex")))
    };
    stream2.on("data", data);
    stream2.on("error", error);
    stream2.on("close", sql2.close);
    return { stream: stream2, state: xs.state };
    function error(e) {
      console.error("Unexpected error during logical streaming - reconnecting", e);
    }
    __name(error, "error");
    __name2(error, "error");
    function data(x2) {
      if (x2[0] === 119) {
        parse(x2.subarray(25), state2, sql2.options.parsers, handle, options.transform);
      } else if (x2[0] === 107 && x2[17]) {
        state2.lsn = x2.subarray(1, 9);
        pong();
      }
    }
    __name(data, "data");
    __name2(data, "data");
    function handle(a, b2) {
      const path = b2.relation.schema + "." + b2.relation.table;
      call("*", a, b2);
      call("*:" + path, a, b2);
      b2.relation.keys.length && call("*:" + path + "=" + b2.relation.keys.map((x2) => a[x2.name]), a, b2);
      call(b2.command, a, b2);
      call(b2.command + ":" + path, a, b2);
      b2.relation.keys.length && call(b2.command + ":" + path + "=" + b2.relation.keys.map((x2) => a[x2.name]), a, b2);
    }
    __name(handle, "handle");
    __name2(handle, "handle");
    function pong() {
      const x2 = Buffer6.alloc(34);
      x2[0] = "r".charCodeAt(0);
      x2.fill(state2.lsn, 1);
      x2.writeBigInt64BE(BigInt(Date.now() - Date.UTC(2e3, 0, 1)) * BigInt(1e3), 25);
      stream2.write(x2);
    }
    __name(pong, "pong");
    __name2(pong, "pong");
  }
  __name(init, "init");
  __name2(init, "init");
  function call(x, a, b2) {
    subscribers.has(x) && subscribers.get(x).forEach(({ fn }) => fn(a, b2, x));
  }
  __name(call, "call");
  __name2(call, "call");
}
__name(Subscribe, "Subscribe");
__name2(Subscribe, "Subscribe");
function Time(x) {
  return new Date(Date.UTC(2e3, 0, 1) + Number(x / BigInt(1e3)));
}
__name(Time, "Time");
__name2(Time, "Time");
function parse(x, state, parsers2, handle, transform) {
  const char = /* @__PURE__ */ __name2((acc, [k, v]) => (acc[k.charCodeAt(0)] = v, acc), "char");
  Object.entries({
    R: /* @__PURE__ */ __name2((x2) => {
      let i = 1;
      const r = state[x2.readUInt32BE(i)] = {
        schema: x2.toString("utf8", i += 4, i = x2.indexOf(0, i)) || "pg_catalog",
        table: x2.toString("utf8", i + 1, i = x2.indexOf(0, i + 1)),
        columns: Array(x2.readUInt16BE(i += 2)),
        keys: []
      };
      i += 2;
      let columnIndex = 0, column;
      while (i < x2.length) {
        column = r.columns[columnIndex++] = {
          key: x2[i++],
          name: transform.column.from ? transform.column.from(x2.toString("utf8", i, i = x2.indexOf(0, i))) : x2.toString("utf8", i, i = x2.indexOf(0, i)),
          type: x2.readUInt32BE(i += 1),
          parser: parsers2[x2.readUInt32BE(i)],
          atttypmod: x2.readUInt32BE(i += 4)
        };
        column.key && r.keys.push(column);
        i += 4;
      }
    }, "R"),
    Y: /* @__PURE__ */ __name2(() => {
    }, "Y"),
    // Type
    O: /* @__PURE__ */ __name2(() => {
    }, "O"),
    // Origin
    B: /* @__PURE__ */ __name2((x2) => {
      state.date = Time(x2.readBigInt64BE(9));
      state.lsn = x2.subarray(1, 9);
    }, "B"),
    I: /* @__PURE__ */ __name2((x2) => {
      let i = 1;
      const relation = state[x2.readUInt32BE(i)];
      const { row } = tuples(x2, relation.columns, i += 7, transform);
      handle(row, {
        command: "insert",
        relation
      });
    }, "I"),
    D: /* @__PURE__ */ __name2((x2) => {
      let i = 1;
      const relation = state[x2.readUInt32BE(i)];
      i += 4;
      const key = x2[i] === 75;
      handle(
        key || x2[i] === 79 ? tuples(x2, relation.columns, i += 3, transform).row : null,
        {
          command: "delete",
          relation,
          key
        }
      );
    }, "D"),
    U: /* @__PURE__ */ __name2((x2) => {
      let i = 1;
      const relation = state[x2.readUInt32BE(i)];
      i += 4;
      const key = x2[i] === 75;
      const xs = key || x2[i] === 79 ? tuples(x2, relation.columns, i += 3, transform) : null;
      xs && (i = xs.i);
      const { row } = tuples(x2, relation.columns, i + 3, transform);
      handle(row, {
        command: "update",
        relation,
        key,
        old: xs && xs.row
      });
    }, "U"),
    T: /* @__PURE__ */ __name2(() => {
    }, "T"),
    // Truncate,
    C: /* @__PURE__ */ __name2(() => {
    }, "C")
    // Commit
  }).reduce(char, {})[x[0]](x);
}
__name(parse, "parse");
__name2(parse, "parse");
function tuples(x, columns, xi, transform) {
  let type, column, value;
  const row = transform.raw ? new Array(columns.length) : {};
  for (let i = 0; i < columns.length; i++) {
    type = x[xi++];
    column = columns[i];
    value = type === 110 ? null : type === 117 ? void 0 : column.parser === void 0 ? x.toString("utf8", xi + 4, xi += 4 + x.readUInt32BE(xi)) : column.parser.array === true ? column.parser(x.toString("utf8", xi + 5, xi += 4 + x.readUInt32BE(xi))) : column.parser(x.toString("utf8", xi + 4, xi += 4 + x.readUInt32BE(xi)));
    transform.raw ? row[i] = transform.raw === true ? value : transform.value.from ? transform.value.from(value, column) : value : row[column.name] = transform.value.from ? transform.value.from(value, column) : value;
  }
  return { i: xi, row: transform.row.from ? transform.row.from(row) : row };
}
__name(tuples, "tuples");
__name2(tuples, "tuples");
function parseEvent(x) {
  const xs = x.match(/^(\*|insert|update|delete)?:?([^.]+?\.?[^=]+)?=?(.+)?/i) || [];
  if (!xs)
    throw new Error("Malformed subscribe pattern: " + x);
  const [, command, path, key] = xs;
  return (command || "*") + (path ? ":" + (path.indexOf(".") === -1 ? "public." + path : path) : "") + (key ? "=" + key : "");
}
__name(parseEvent, "parseEvent");
__name2(parseEvent, "parseEvent");
function largeObject(sql, oid, mode = 131072 | 262144) {
  return new Promise(async (resolve, reject) => {
    await sql.begin(async (sql2) => {
      let finish;
      !oid && ([{ oid }] = await sql2`select lo_creat(-1) as oid`);
      const [{ fd }] = await sql2`select lo_open(${oid}, ${mode}) as fd`;
      const lo = {
        writable,
        readable,
        close: /* @__PURE__ */ __name2(() => sql2`select lo_close(${fd})`.then(finish), "close"),
        tell: /* @__PURE__ */ __name2(() => sql2`select lo_tell64(${fd})`, "tell"),
        read: /* @__PURE__ */ __name2((x) => sql2`select loread(${fd}, ${x}) as data`, "read"),
        write: /* @__PURE__ */ __name2((x) => sql2`select lowrite(${fd}, ${x})`, "write"),
        truncate: /* @__PURE__ */ __name2((x) => sql2`select lo_truncate64(${fd}, ${x})`, "truncate"),
        seek: /* @__PURE__ */ __name2((x, whence = 0) => sql2`select lo_lseek64(${fd}, ${x}, ${whence})`, "seek"),
        size: /* @__PURE__ */ __name2(() => sql2`
          select
            lo_lseek64(${fd}, location, 0) as position,
            seek.size
          from (
            select
              lo_lseek64($1, 0, 2) as size,
              tell.location
            from (select lo_tell64($1) as location) tell
          ) seek
        `, "size")
      };
      resolve(lo);
      return new Promise(async (r) => finish = r);
      async function readable({
        highWaterMark = 2048 * 8,
        start = 0,
        end = Infinity
      } = {}) {
        let max = end - start;
        start && await lo.seek(start);
        return new Stream2.Readable({
          highWaterMark,
          async read(size2) {
            const l = size2 > max ? size2 - max : size2;
            max -= size2;
            const [{ data }] = await lo.read(l);
            this.push(data);
            if (data.length < size2)
              this.push(null);
          }
        });
      }
      __name(readable, "readable");
      __name2(readable, "readable");
      async function writable({
        highWaterMark = 2048 * 8,
        start = 0
      } = {}) {
        start && await lo.seek(start);
        return new Stream2.Writable({
          highWaterMark,
          write(chunk, encoding, callback) {
            lo.write(chunk).then(() => callback(), callback);
          }
        });
      }
      __name(writable, "writable");
      __name2(writable, "writable");
    }).catch(reject);
  });
}
__name(largeObject, "largeObject");
__name2(largeObject, "largeObject");
Object.assign(Postgres, {
  PostgresError,
  toPascal,
  pascal,
  toCamel,
  camel,
  toKebab,
  kebab,
  fromPascal,
  fromCamel,
  fromKebab,
  BigInt: {
    to: 20,
    from: [20],
    parse: /* @__PURE__ */ __name2((x) => BigInt(x), "parse"),
    // eslint-disable-line
    serialize: /* @__PURE__ */ __name2((x) => x.toString(), "serialize")
  }
});
var src_default = Postgres;
function Postgres(a, b2) {
  const options = parseOptions(a, b2), subscribe = options.no_subscribe || Subscribe(Postgres, { ...options });
  let ending = false;
  const queries = queue_default(), connecting = queue_default(), reserved = queue_default(), closed = queue_default(), ended = queue_default(), open = queue_default(), busy = queue_default(), full = queue_default(), queues = { connecting, reserved, closed, ended, open, busy, full };
  const connections = [...Array(options.max)].map(() => connection_default(options, queues, { onopen, onend, onclose }));
  const sql = Sql(handler);
  Object.assign(sql, {
    get parameters() {
      return options.parameters;
    },
    largeObject: largeObject.bind(null, sql),
    subscribe,
    CLOSE,
    END: CLOSE,
    PostgresError,
    options,
    reserve,
    listen,
    begin,
    close,
    end
  });
  return sql;
  function Sql(handler2) {
    handler2.debug = options.debug;
    Object.entries(options.types).reduce((acc, [name, type]) => {
      acc[name] = (x) => new Parameter(x, type.to);
      return acc;
    }, typed);
    Object.assign(sql2, {
      types: typed,
      typed,
      unsafe,
      notify,
      array,
      json,
      file
    });
    return sql2;
    function typed(value, type) {
      return new Parameter(value, type);
    }
    __name(typed, "typed");
    __name2(typed, "typed");
    function sql2(strings, ...args) {
      const query = strings && Array.isArray(strings.raw) ? new Query(strings, args, handler2, cancel) : typeof strings === "string" && !args.length ? new Identifier(options.transform.column.to ? options.transform.column.to(strings) : strings) : new Builder(strings, args);
      return query;
    }
    __name(sql2, "sql2");
    __name2(sql2, "sql");
    function unsafe(string, args = [], options2 = {}) {
      arguments.length === 2 && !Array.isArray(args) && (options2 = args, args = []);
      const query = new Query([string], args, handler2, cancel, {
        prepare: false,
        ...options2,
        simple: "simple" in options2 ? options2.simple : args.length === 0
      });
      return query;
    }
    __name(unsafe, "unsafe");
    __name2(unsafe, "unsafe");
    function file(path, args = [], options2 = {}) {
      arguments.length === 2 && !Array.isArray(args) && (options2 = args, args = []);
      const query = new Query([], args, (query2) => {
        fs.readFile(path, "utf8", (err, string) => {
          if (err)
            return query2.reject(err);
          query2.strings = [string];
          handler2(query2);
        });
      }, cancel, {
        ...options2,
        simple: "simple" in options2 ? options2.simple : args.length === 0
      });
      return query;
    }
    __name(file, "file");
    __name2(file, "file");
  }
  __name(Sql, "Sql");
  __name2(Sql, "Sql");
  async function listen(name, fn, onlisten) {
    const listener = { fn, onlisten };
    const sql2 = listen.sql || (listen.sql = Postgres({
      ...options,
      max: 1,
      idle_timeout: null,
      max_lifetime: null,
      fetch_types: false,
      onclose() {
        Object.entries(listen.channels).forEach(([name2, { listeners }]) => {
          delete listen.channels[name2];
          Promise.all(listeners.map((l) => listen(name2, l.fn, l.onlisten).catch(() => {
          })));
        });
      },
      onnotify(c, x) {
        c in listen.channels && listen.channels[c].listeners.forEach((l) => l.fn(x));
      }
    }));
    const channels = listen.channels || (listen.channels = {}), exists = name in channels;
    if (exists) {
      channels[name].listeners.push(listener);
      const result2 = await channels[name].result;
      listener.onlisten && listener.onlisten();
      return { state: result2.state, unlisten };
    }
    channels[name] = { result: sql2`listen ${sql2.unsafe('"' + name.replace(/"/g, '""') + '"')}`, listeners: [listener] };
    const result = await channels[name].result;
    listener.onlisten && listener.onlisten();
    return { state: result.state, unlisten };
    async function unlisten() {
      if (name in channels === false)
        return;
      channels[name].listeners = channels[name].listeners.filter((x) => x !== listener);
      if (channels[name].listeners.length)
        return;
      delete channels[name];
      return sql2`unlisten ${sql2.unsafe('"' + name.replace(/"/g, '""') + '"')}`;
    }
    __name(unlisten, "unlisten");
    __name2(unlisten, "unlisten");
  }
  __name(listen, "listen");
  __name2(listen, "listen");
  async function notify(channel, payload) {
    return await sql`select pg_notify(${channel}, ${"" + payload})`;
  }
  __name(notify, "notify");
  __name2(notify, "notify");
  async function reserve() {
    const queue = queue_default();
    const c = open.length ? open.shift() : await new Promise((resolve, reject) => {
      const query = { reserve: resolve, reject };
      queries.push(query);
      closed.length && connect(closed.shift(), query);
    });
    move(c, reserved);
    c.reserved = () => queue.length ? c.execute(queue.shift()) : move(c, reserved);
    c.reserved.release = true;
    const sql2 = Sql(handler2);
    sql2.release = () => {
      c.reserved = null;
      onopen(c);
    };
    return sql2;
    function handler2(q) {
      c.queue === full ? queue.push(q) : c.execute(q) || move(c, full);
    }
    __name(handler2, "handler2");
    __name2(handler2, "handler");
  }
  __name(reserve, "reserve");
  __name2(reserve, "reserve");
  async function begin(options2, fn) {
    !fn && (fn = options2, options2 = "");
    const queries2 = queue_default();
    let savepoints = 0, connection2, prepare = null;
    try {
      await sql.unsafe("begin " + options2.replace(/[^a-z ]/ig, ""), [], { onexecute }).execute();
      return await Promise.race([
        scope(connection2, fn),
        new Promise((_, reject) => connection2.onclose = reject)
      ]);
    } catch (error) {
      throw error;
    }
    async function scope(c, fn2, name) {
      const sql2 = Sql(handler2);
      sql2.savepoint = savepoint;
      sql2.prepare = (x) => prepare = x.replace(/[^a-z0-9$-_. ]/gi);
      let uncaughtError, result;
      name && await sql2`savepoint ${sql2(name)}`;
      try {
        result = await new Promise((resolve, reject) => {
          const x = fn2(sql2);
          Promise.resolve(Array.isArray(x) ? Promise.all(x) : x).then(resolve, reject);
        });
        if (uncaughtError)
          throw uncaughtError;
      } catch (e) {
        await (name ? sql2`rollback to ${sql2(name)}` : sql2`rollback`);
        throw e instanceof PostgresError && e.code === "25P02" && uncaughtError || e;
      }
      if (!name) {
        prepare ? await sql2`prepare transaction '${sql2.unsafe(prepare)}'` : await sql2`commit`;
      }
      return result;
      function savepoint(name2, fn3) {
        if (name2 && Array.isArray(name2.raw))
          return savepoint((sql3) => sql3.apply(sql3, arguments));
        arguments.length === 1 && (fn3 = name2, name2 = null);
        return scope(c, fn3, "s" + savepoints++ + (name2 ? "_" + name2 : ""));
      }
      __name(savepoint, "savepoint");
      __name2(savepoint, "savepoint");
      function handler2(q) {
        q.catch((e) => uncaughtError || (uncaughtError = e));
        c.queue === full ? queries2.push(q) : c.execute(q) || move(c, full);
      }
      __name(handler2, "handler2");
      __name2(handler2, "handler");
    }
    __name(scope, "scope");
    __name2(scope, "scope");
    function onexecute(c) {
      connection2 = c;
      move(c, reserved);
      c.reserved = () => queries2.length ? c.execute(queries2.shift()) : move(c, reserved);
    }
    __name(onexecute, "onexecute");
    __name2(onexecute, "onexecute");
  }
  __name(begin, "begin");
  __name2(begin, "begin");
  function move(c, queue) {
    c.queue.remove(c);
    queue.push(c);
    c.queue = queue;
    queue === open ? c.idleTimer.start() : c.idleTimer.cancel();
    return c;
  }
  __name(move, "move");
  __name2(move, "move");
  function json(x) {
    return new Parameter(x, 3802);
  }
  __name(json, "json");
  __name2(json, "json");
  function array(x, type) {
    if (!Array.isArray(x))
      return array(Array.from(arguments));
    return new Parameter(x, type || (x.length ? inferType(x) || 25 : 0), options.shared.typeArrayMap);
  }
  __name(array, "array");
  __name2(array, "array");
  function handler(query) {
    if (ending)
      return query.reject(Errors.connection("CONNECTION_ENDED", options, options));
    if (open.length)
      return go(open.shift(), query);
    if (closed.length)
      return connect(closed.shift(), query);
    busy.length ? go(busy.shift(), query) : queries.push(query);
  }
  __name(handler, "handler");
  __name2(handler, "handler");
  function go(c, query) {
    return c.execute(query) ? move(c, busy) : move(c, full);
  }
  __name(go, "go");
  __name2(go, "go");
  function cancel(query) {
    return new Promise((resolve, reject) => {
      query.state ? query.active ? connection_default(options).cancel(query.state, resolve, reject) : query.cancelled = { resolve, reject } : (queries.remove(query), query.cancelled = true, query.reject(Errors.generic("57014", "canceling statement due to user request")), resolve());
    });
  }
  __name(cancel, "cancel");
  __name2(cancel, "cancel");
  async function end({ timeout = null } = {}) {
    if (ending)
      return ending;
    await 1;
    let timer2;
    return ending = Promise.race([
      new Promise((r) => timeout !== null && (timer2 = setTimeout(destroy, timeout * 1e3, r))),
      Promise.all(connections.map((c) => c.end()).concat(
        listen.sql ? listen.sql.end({ timeout: 0 }) : [],
        subscribe.sql ? subscribe.sql.end({ timeout: 0 }) : []
      ))
    ]).then(() => clearTimeout(timer2));
  }
  __name(end, "end");
  __name2(end, "end");
  async function close() {
    await Promise.all(connections.map((c) => c.end()));
  }
  __name(close, "close");
  __name2(close, "close");
  async function destroy(resolve) {
    await Promise.all(connections.map((c) => c.terminate()));
    while (queries.length)
      queries.shift().reject(Errors.connection("CONNECTION_DESTROYED", options));
    resolve();
  }
  __name(destroy, "destroy");
  __name2(destroy, "destroy");
  function connect(c, query) {
    move(c, connecting);
    c.connect(query);
    return c;
  }
  __name(connect, "connect");
  __name2(connect, "connect");
  function onend(c) {
    move(c, ended);
  }
  __name(onend, "onend");
  __name2(onend, "onend");
  function onopen(c) {
    if (queries.length === 0)
      return move(c, open);
    let max = Math.ceil(queries.length / (connecting.length + 1)), ready = true;
    while (ready && queries.length && max-- > 0) {
      const query = queries.shift();
      if (query.reserve)
        return query.reserve(c);
      ready = c.execute(query);
    }
    ready ? move(c, busy) : move(c, full);
  }
  __name(onopen, "onopen");
  __name2(onopen, "onopen");
  function onclose(c, e) {
    move(c, closed);
    c.reserved = null;
    c.onclose && (c.onclose(e), c.onclose = null);
    options.onclose && options.onclose(c.id);
    queries.length && connect(c, queries.shift());
  }
  __name(onclose, "onclose");
  __name2(onclose, "onclose");
}
__name(Postgres, "Postgres");
__name2(Postgres, "Postgres");
function parseOptions(a, b2) {
  if (a && a.shared)
    return a;
  const env = process.env, o = (!a || typeof a === "string" ? b2 : a) || {}, { url, multihost } = parseUrl(a), query = [...url.searchParams].reduce((a2, [b3, c]) => (a2[b3] = c, a2), {}), host = o.hostname || o.host || multihost || url.hostname || env.PGHOST || "localhost", port = o.port || url.port || env.PGPORT || 5432, user = o.user || o.username || url.username || env.PGUSERNAME || env.PGUSER || osUsername();
  o.no_prepare && (o.prepare = false);
  query.sslmode && (query.ssl = query.sslmode, delete query.sslmode);
  "timeout" in o && (console.log("The timeout option is deprecated, use idle_timeout instead"), o.idle_timeout = o.timeout);
  query.sslrootcert === "system" && (query.ssl = "verify-full");
  const ints = ["idle_timeout", "connect_timeout", "max_lifetime", "max_pipeline", "backoff", "keep_alive"];
  const defaults = {
    max: globalThis.Cloudflare ? 3 : 10,
    ssl: false,
    sslnegotiation: null,
    idle_timeout: null,
    connect_timeout: 30,
    max_lifetime,
    max_pipeline: 100,
    backoff,
    keep_alive: 60,
    prepare: true,
    debug: false,
    fetch_types: true,
    publications: "alltables",
    target_session_attrs: null
  };
  return {
    host: Array.isArray(host) ? host : host.split(",").map((x) => x.split(":")[0]),
    port: Array.isArray(port) ? port : host.split(",").map((x) => parseInt(x.split(":")[1] || port)),
    path: o.path || host.indexOf("/") > -1 && host + "/.s.PGSQL." + port,
    database: o.database || o.db || (url.pathname || "").slice(1) || env.PGDATABASE || user,
    user,
    pass: o.pass || o.password || url.password || env.PGPASSWORD || "",
    ...Object.entries(defaults).reduce(
      (acc, [k, d]) => {
        const value = k in o ? o[k] : k in query ? query[k] === "disable" || query[k] === "false" ? false : query[k] : env["PG" + k.toUpperCase()] || d;
        acc[k] = typeof value === "string" && ints.includes(k) ? +value : value;
        return acc;
      },
      {}
    ),
    connection: {
      application_name: env.PGAPPNAME || "postgres.js",
      ...o.connection,
      ...Object.entries(query).reduce((acc, [k, v]) => (k in defaults || (acc[k] = v), acc), {})
    },
    types: o.types || {},
    target_session_attrs: tsa(o, url, env),
    onnotice: o.onnotice,
    onnotify: o.onnotify,
    onclose: o.onclose,
    onparameter: o.onparameter,
    socket: o.socket,
    transform: parseTransform(o.transform || { undefined: void 0 }),
    parameters: {},
    shared: { retries: 0, typeArrayMap: {} },
    ...mergeUserTypes(o.types)
  };
}
__name(parseOptions, "parseOptions");
__name2(parseOptions, "parseOptions");
function tsa(o, url, env) {
  const x = o.target_session_attrs || url.searchParams.get("target_session_attrs") || env.PGTARGETSESSIONATTRS;
  if (!x || ["read-write", "read-only", "primary", "standby", "prefer-standby"].includes(x))
    return x;
  throw new Error("target_session_attrs " + x + " is not supported");
}
__name(tsa, "tsa");
__name2(tsa, "tsa");
function backoff(retries) {
  return (0.5 + Math.random() / 2) * Math.min(3 ** retries / 100, 20);
}
__name(backoff, "backoff");
__name2(backoff, "backoff");
function max_lifetime() {
  return 60 * (30 + Math.random() * 30);
}
__name(max_lifetime, "max_lifetime");
__name2(max_lifetime, "max_lifetime");
function parseTransform(x) {
  return {
    undefined: x.undefined,
    column: {
      from: typeof x.column === "function" ? x.column : x.column && x.column.from,
      to: x.column && x.column.to
    },
    value: {
      from: typeof x.value === "function" ? x.value : x.value && x.value.from,
      to: x.value && x.value.to
    },
    row: {
      from: typeof x.row === "function" ? x.row : x.row && x.row.from,
      to: x.row && x.row.to
    }
  };
}
__name(parseTransform, "parseTransform");
__name2(parseTransform, "parseTransform");
function parseUrl(url) {
  if (!url || typeof url !== "string")
    return { url: { searchParams: /* @__PURE__ */ new Map() } };
  let host = url;
  host = host.slice(host.indexOf("://") + 3).split(/[?/]/)[0];
  host = decodeURIComponent(host.slice(host.indexOf("@") + 1));
  const urlObj = new URL(url.replace(host, host.split(",")[0]));
  return {
    url: {
      username: decodeURIComponent(urlObj.username),
      password: decodeURIComponent(urlObj.password),
      host: urlObj.host,
      hostname: urlObj.hostname,
      port: urlObj.port,
      pathname: urlObj.pathname,
      searchParams: urlObj.searchParams
    },
    multihost: host.indexOf(",") > -1 && host
  };
}
__name(parseUrl, "parseUrl");
__name2(parseUrl, "parseUrl");
function osUsername() {
  try {
    return os.userInfo().username;
  } catch (_) {
    return process.env.USERNAME || process.env.USER || process.env.LOGNAME;
  }
}
__name(osUsername, "osUsername");
__name2(osUsername, "osUsername");
function getDb(env) {
  if (!env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined in environment variables");
  }
  const sql = src_default(env.DATABASE_URL, {
    ssl: "require",
    max: 5
    // Giới hạn connection pool trên Serverless Function để tránh cạn kiệt (Limit pool)
  });
  return sql;
}
__name(getDb, "getDb");
__name2(getDb, "getDb");
async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const method = request.method;
  const sql = getDb(env);
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  if (method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  try {
    let response;
    if (method === "GET") {
      const limit = parseInt(url.searchParams.get("limit") || "100");
      const offset = parseInt(url.searchParams.get("offset") || "0");
      const action = url.searchParams.get("action");
      const target_type = url.searchParams.get("target_type");
      const user_id = url.searchParams.get("user_id");
      const date_from = url.searchParams.get("date_from");
      const date_to = url.searchParams.get("date_to");
      let conditions = [];
      let values2 = [];
      let idx = 1;
      if (action) {
        conditions.push(`action = $${idx++}`);
        values2.push(action);
      }
      if (target_type) {
        conditions.push(`target_type = $${idx++}`);
        values2.push(target_type);
      }
      if (user_id) {
        conditions.push(`user_id = $${idx++}`);
        values2.push(user_id);
      }
      if (date_from) {
        conditions.push(`created_at >= $${idx++}`);
        values2.push(date_from);
      }
      if (date_to) {
        conditions.push(`created_at <= $${idx++}`);
        values2.push(date_to + "T23:59:59");
      }
      const where = conditions.length > 0 ? "WHERE " + conditions.join(" AND ") : "";
      const logs = await sql.query(
        `SELECT * FROM activity_logs ${where} ORDER BY created_at DESC LIMIT $${idx++} OFFSET $${idx++}`,
        [...values2, limit, offset]
      );
      const countResult = await sql.query(
        `SELECT COUNT(*) as total FROM activity_logs ${where}`,
        values2
      );
      response = Response.json({
        logs,
        total: parseInt(countResult[0]?.total || 0)
      });
    } else if (method === "DELETE") {
      await sql.query("DELETE FROM activity_logs");
      response = Response.json({ success: true });
    } else {
      return new Response("Method Not Allowed", { status: 405 });
    }
    const final = new Response(response.body, response);
    Object.entries(corsHeaders).forEach(([k, v]) => final.headers.set(k, v));
    return final;
  } catch (error) {
    console.error("Error in activity-logs API:", error);
    return Response.json({ error: error.message }, {
      status: 500,
      headers: corsHeaders
    });
  }
}
__name(onRequest, "onRequest");
__name2(onRequest, "onRequest");
async function onRequest2(context) {
  const { request, env } = context;
  const sql = getDb(env);
  const url = new URL(request.url);
  const action = url.searchParams.get("action");
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  try {
    if (request.method === "GET") {
      const rows = await sql`SELECT * FROM crm_customers ORDER BY created_at DESC`;
      return Response.json({ success: true, data: rows }, { headers: corsHeaders });
    }
    if (request.method === "POST" && action === "search") {
      const body = await request.json();
      const { keyword } = body;
      if (!keyword) {
        return Response.json({ success: false, message: "Vui l\xF2ng nh\u1EADp t\u1EEB kh\xF3a t\xECm ki\u1EBFm" }, { status: 400, headers: corsHeaders });
      }
      const crmRows = await sql`
                SELECT * FROM crm_customers 
                WHERE phone = ${keyword} OR UPPER(csr_code) = UPPER(${keyword}) OR full_name ILIKE ${"%" + keyword + "%"}
                ORDER BY CASE WHEN phone = ${keyword} THEN 0 WHEN UPPER(csr_code) = UPPER(${keyword}) THEN 1 ELSE 2 END
                LIMIT 1
            `;
      let customer = crmRows.length > 0 ? crmRows[0] : null;
      let phoneForBooking = customer ? customer.phone : keyword;
      let latestBooking = {};
      if (customer) {
        const bookingRows = await sql`
                    SELECT id_card, address, diet, allergy, trekking_pole, special, dob, gender, medal_name, name
                    FROM bookings WHERE phone = ${phoneForBooking} 
                    ORDER BY created_at DESC LIMIT 1
                `;
        latestBooking = bookingRows[0] || {};
      } else {
        const bookingRows = await sql`
                    SELECT id_card, address, diet, allergy, trekking_pole, special, dob, gender, medal_name, name, phone
                    FROM bookings WHERE phone = ${keyword} OR name ILIKE ${"%" + keyword + "%"}
                    ORDER BY created_at DESC LIMIT 1
                `;
        if (bookingRows.length > 0) {
          latestBooking = bookingRows[0];
          if (latestBooking.phone) phoneForBooking = latestBooking.phone;
        }
      }
      if (!customer && Object.keys(latestBooking).length === 0) {
        return Response.json({ success: false, message: "Kh\xF4ng t\xECm th\u1EA5y d\u1EEF li\u1EC7u kh\xE1ch h\xE0ng c\u0169." }, { status: 404, headers: corsHeaders });
      }
      const normalizeDob = /* @__PURE__ */ __name2((val) => {
        if (!val) return "";
        if (val instanceof Date) return val.toISOString().split("T")[0];
        if (typeof val === "string") {
          const parts = val.split("/");
          if (parts.length === 3) {
            const [d, m, y] = parts;
            if (y.length === 4) return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}`;
          }
          if (/^\d{4}-\d{2}-\d{2}/.test(val)) return val.split("T")[0];
        }
        return val;
      }, "normalizeDob");
      const normalizeGender = /* @__PURE__ */ __name2((g) => {
        if (!g) return "Kh\xE1c";
        if (g.toLowerCase() === "nam") return "Nam";
        if (g.toLowerCase() === "n\u1EEF" || g.toLowerCase() === "nu") return "N\u1EEF";
        return "Kh\xE1c";
      }, "normalizeGender");
      return Response.json({
        success: true,
        data: {
          csr_code: customer ? customer.csr_code : null,
          full_name: customer ? customer.full_name : latestBooking.name || "",
          phone: phoneForBooking,
          cccd: (customer ? customer.cccd : null) || latestBooking.id_card || "",
          dob: normalizeDob(customer ? customer.dob : null) || normalizeDob(latestBooking.dob) || "",
          gender: normalizeGender(customer ? customer.gender : latestBooking.gender),
          medical_notes: (customer ? customer.medical_notes : null) || latestBooking.allergy || "",
          dietary: (customer ? customer.dietary : null) || latestBooking.diet || "",
          address: latestBooking.address || "",
          trekking_pole: latestBooking.trekking_pole || "",
          medal_name: (latestBooking.medal_name || (customer ? latestBooking.name : "") || "").trim(),
          loyalty_tier: customer ? customer.loyalty_tier : "New",
          tour_count: customer ? customer.tour_count : 1
        }
      }, { headers: corsHeaders });
    }
    if (request.method === "POST" && action === "create") {
      const body = await request.json();
      const { full_name, phone, cccd, dob, gender, medical_notes, dietary } = body;
      if (!full_name || !phone) {
        return Response.json({ success: false, message: "H\u1ECD t\xEAn v\xE0 S\u1ED1 \u0111i\u1EC7n tho\u1EA1i l\xE0 b\u1EAFt bu\u1ED9c" }, { status: 400, headers: corsHeaders });
      }
      const check = await sql`SELECT id, csr_code FROM crm_customers WHERE phone = ${phone}`;
      let csrCode = "";
      const safeDob = dob ? dob : null;
      if (check.length > 0) {
        const custId = check[0].id;
        csrCode = check[0].csr_code;
        await sql`
                    UPDATE crm_customers 
                    SET full_name=${full_name}, cccd=${cccd || null}, dob=${safeDob}, 
                        gender=${gender}, medical_notes=${medical_notes}, dietary=${dietary}, 
                        updated_at=CURRENT_TIMESTAMP
                    WHERE id=${custId}
                `;
      } else {
        const randNum = Math.floor(1e5 + Math.random() * 9e5);
        csrCode = "#CSR" + randNum;
        await sql`
                    INSERT INTO crm_customers (csr_code, full_name, phone, cccd, dob, gender, medical_notes, dietary, loyalty_tier)
                    VALUES (${csrCode}, ${full_name}, ${phone}, ${cccd || null}, ${safeDob}, ${gender}, ${medical_notes}, ${dietary}, 'New')
                `;
      }
      return Response.json({ success: true, message: "\u0110\xE3 l\u01B0u th\xF4ng tin Kh\xE1ch h\xE0ng th\xE0nh c\xF4ng!", csr_code: csrCode }, { headers: corsHeaders });
    }
    return new Response("Endpoint action Not Found", { status: 404, headers: corsHeaders });
  } catch (error) {
    console.error("CRM Customers API Error:", error);
    return Response.json({ error: error.message }, { status: 500, headers: corsHeaders });
  }
}
__name(onRequest2, "onRequest2");
__name2(onRequest2, "onRequest");
async function onRequest3(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const method = request.method;
  const sql = getDb(env);
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  if (method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  try {
    const id = url.searchParams.get("id");
    let response;
    if (method === "GET") {
      const rows = await sql`SELECT * FROM tours_v2 ORDER BY id DESC`;
      response = Response.json({ success: true, data: rows });
    } else if (method === "POST") {
      const body = await request.json();
      const { name, duration, level, price, status, image_url } = body;
      if (!name || !duration || !level || !price || !image_url) {
        return Response.json({ success: false, message: "Vui l\xF2ng nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin b\u1EAFt bu\u1ED9c." }, { status: 400, headers: corsHeaders });
      }
      const rows = await sql.query(
        `INSERT INTO tours_v2 (name, duration, level, price, status, image_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [name, duration, level, price, status || "active", image_url]
      );
      response = Response.json({ success: true, message: "Th\xEAm Tour th\xE0nh c\xF4ng", data: rows[0] }, { status: 201 });
    } else if (method === "PUT") {
      if (!id) return Response.json({ success: false, message: "Thi\u1EBFu ID Tour c\u1EA7n c\u1EADp nh\u1EADt." }, { status: 400, headers: corsHeaders });
      const body = await request.json();
      const { name, duration, level, price, status, image_url } = body;
      const rows = await sql.query(
        `UPDATE tours_v2 SET name=$1, duration=$2, level=$3, price=$4, status=$5, image_url=$6 WHERE id=$7 RETURNING *`,
        [name, duration, level, price, status, image_url, id]
      );
      if (rows.length === 0) {
        return Response.json({ success: false, message: "Kh\xF4ng t\xECm th\u1EA5y Tour \u0111\u1EC3 c\u1EADp nh\u1EADt." }, { status: 404, headers: corsHeaders });
      }
      response = Response.json({ success: true, message: "C\u1EADp nh\u1EADt Tour th\xE0nh c\xF4ng", data: rows[0] });
    } else if (method === "DELETE") {
      if (!id) return Response.json({ success: false, message: "Thi\u1EBFu ID Tour c\u1EA7n x\xF3a." }, { status: 400, headers: corsHeaders });
      const result = await sql.query("DELETE FROM tours_v2 WHERE id = $1 RETURNING id", [id]);
      if (result.length === 0) {
        return Response.json({ success: false, message: "Kh\xF4ng t\xECm th\u1EA5y Tour \u0111\u1EC3 x\xF3a." }, { status: 404, headers: corsHeaders });
      }
      response = Response.json({ success: true, message: "X\xF3a Tour th\xE0nh c\xF4ng" });
    } else {
      return new Response("Method Not Allowed", { status: 405 });
    }
    const final = new Response(response.body, response);
    Object.entries(corsHeaders).forEach(([k, v]) => final.headers.set(k, v));
    return final;
  } catch (error) {
    console.error("API Admin Tours Error:", error);
    return Response.json({ error: error.message }, {
      status: 500,
      headers: corsHeaders
    });
  }
}
__name(onRequest3, "onRequest3");
__name2(onRequest3, "onRequest");
async function onRequest4(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const method = request.method;
  const sql = getDb(env);
  if (method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  }
  if (method !== "POST") return new Response("Method Not Allowed", { status: 405 });
  try {
    const body = await request.json();
    const { username, password } = body;
    const isAdminSession = url.searchParams.get("role") === "admin";
    if (!username || !password) {
      return Response.json({ error: "Missing username or password" }, { status: 400 });
    }
    let query, values2;
    if (isAdminSession) {
      query = "SELECT * FROM admins WHERE LOWER(username) = LOWER($1) AND password = $2 AND status = $3";
      values2 = [username, password, "active"];
    } else {
      query = "SELECT * FROM users WHERE LOWER(username) = LOWER($1) AND password = $2 AND status = $3";
      values2 = [username, password, "active"];
    }
    const rows = await sql.query(query, values2);
    if (rows.length > 0) {
      const user = rows[0];
      delete user.password;
      const token = crypto.randomUUID();
      const frontendUser = {
        id: user.id,
        username: user.username,
        fullName: user.full_name,
        role: user.role,
        phone: user.phone,
        email: user.email,
        avatar: user.avatar,
        bank_info: user.bank_info,
        status: user.status
      };
      const response = Response.json({ success: true, token, user: frontendUser });
      response.headers.set("Access-Control-Allow-Origin", "*");
      return response;
    } else {
      return Response.json({ success: false, message: "Sai t\xEAn \u0111\u0103ng nh\u1EADp ho\u1EB7c m\u1EADt kh\u1EA9u!" }, { status: 401 });
    }
  } catch (error) {
    console.error("Login error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
__name(onRequest4, "onRequest4");
__name2(onRequest4, "onRequest");
async function sendEmail(options, env) {
  const { to, subject, html } = options;
  const RESEND_API_KEY = env.RESEND_API_KEY;
  const FALLBACK_EMAIL = "chuyencaiom@gmail.com";
  const recipient = to || env.ADMIN_EMAIL || FALLBACK_EMAIL;
  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY is not set");
    return { success: false, error: "MISSING_API_KEY" };
  }
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: "Cam Site Retreats <onboarding@resend.dev>",
      to: recipient,
      subject,
      html
    })
  });
  if (res.ok) {
    const data = await res.json();
    return { success: true, ...data };
  } else {
    const error = await res.text();
    return { success: false, error };
  }
}
__name(sendEmail, "sendEmail");
__name2(sendEmail, "sendEmail");
async function onRequest5(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const method = request.method;
  const sql = getDb(env);
  if (method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  }
  try {
    let response;
    if (method === "GET") {
      const rows = await sql`SELECT * FROM bookings ORDER BY created_at DESC`;
      response = Response.json(rows);
    } else if (method === "POST") {
      try {
        const body = await request.json();
        console.log("BOOKING POST BODY:", body);
        const { id } = body;
        if (id && body.action === "update") {
          const {
            name,
            phone,
            tour,
            date,
            status,
            total_price,
            deposit,
            discount,
            sale_id,
            sale_name,
            customer_id,
            dob,
            gender,
            address,
            id_card,
            diet,
            trekking_pole,
            allergy,
            special,
            medal_name,
            commitments,
            deposit_required
          } = body;
          const rows = await sql`
                        UPDATE bookings SET
                            name = COALESCE(${name}, name),
                            phone = COALESCE(${phone}, phone),
                            tour = COALESCE(${tour}, tour),
                            date = COALESCE(${date}, date),
                            status = COALESCE(${status}, status),
                            total_price = COALESCE(${total_price}, total_price),
                            deposit = COALESCE(${deposit}, deposit),
                            discount = COALESCE(${discount}, discount),
                            sale_id = COALESCE(${sale_id}, sale_id),
                            sale_name = COALESCE(${sale_name}, sale_name),
                            customer_id = COALESCE(${customer_id}, customer_id),
                            dob = COALESCE(${dob}, dob),
                            gender = COALESCE(${gender}, gender),
                            address = COALESCE(${address}, address),
                            id_card = COALESCE(${id_card}, id_card),
                            diet = COALESCE(${diet}, diet),
                            trekking_pole = COALESCE(${trekking_pole}, trekking_pole),
                            allergy = COALESCE(${allergy}, allergy),
                            special = COALESCE(${special}, special),
                            medal_name = COALESCE(${medal_name}, medal_name),
                            commitments = COALESCE(${commitments}, commitments),
                            deposit_required = COALESCE(${deposit_required}, deposit_required)
                        WHERE id = ${id}
                        RETURNING *
                    `;
          if (rows.length === 0) return Response.json({ error: "Booking Not found for update" }, { status: 404 });
          response = Response.json(rows[0]);
        } else {
          const {
            name,
            phone,
            tour,
            date,
            status,
            total_price,
            deposit,
            discount,
            sale_id,
            sale_name,
            customer_id,
            dob,
            gender,
            address,
            id_card,
            diet,
            trekking_pole,
            allergy,
            special,
            medal_name,
            commitments,
            deposit_required
          } = body;
          const rows = await sql`
                        INSERT INTO bookings (
                            name, phone, tour, date, status, total_price, deposit, discount,
                            sale_id, sale_name, customer_id, dob, gender, address, 
                            id_card, diet, trekking_pole, allergy, special, medal_name, commitments, deposit_required
                        )
                        VALUES (
                            ${name ?? null}, ${phone ?? null}, ${tour ?? null}, ${date ?? null}, ${status ?? "Ch\u1EDD x\xE1c nh\u1EADn c\u1ECDc"},
                            ${total_price ?? null}, ${deposit ?? null}, ${discount ?? 0}, ${sale_id ?? null}, ${sale_name ?? null},
                            ${customer_id ?? null}, ${dob ?? null}, ${gender ?? null}, ${address ?? null}, ${id_card ?? null},
                            ${diet ?? null}, ${trekking_pole ?? null}, ${allergy ?? null}, ${special ?? null},
                            ${medal_name ?? null}, ${commitments ?? null}, ${deposit_required ?? 1e6}
                        )
                        RETURNING *
                    `;
          const newBooking = rows[0];
          let mailStatus = null;
          if (newBooking) {
            try {
              mailStatus = await sendEmail({
                subject: `\u{1F525} \u0110\u01A0N \u0110\u1EB6T TOUR M\u1EDAI: ${newBooking.name}`,
                html: `<p>C\xF3 \u0111\u01A1n \u0111\u1EB7t tour m\u1EDBi t\u1EEB Website cho tour <b>${newBooking.tour}</b> v\xE0o ng\xE0y ${newBooking.date}.</p>`
              }, env);
            } catch (e) {
              console.warn("Mail send error:", e);
            }
          }
          response = Response.json({ ...newBooking, _mailStatus: mailStatus }, { status: 201 });
        }
      } catch (postErr) {
        console.error("POST Booking Error:", postErr);
        return Response.json({ error: postErr.message }, { status: 500 });
      }
    } else if (method === "DELETE") {
      const id = url.searchParams.get("id");
      if (!id) return Response.json({ error: "ID is required" }, { status: 400 });
      await sql.query("DELETE FROM bookings WHERE id = $1", [id]);
      response = Response.json({ success: true });
    } else {
      return new Response("Method Not Allowed", { status: 405 });
    }
    const finalResponse = new Response(response.body, response);
    finalResponse.headers.set("Access-Control-Allow-Origin", "*");
    return finalResponse;
  } catch (error) {
    console.error("Error in bookings API:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
__name(onRequest5, "onRequest5");
__name2(onRequest5, "onRequest");
async function onRequest6(context) {
  const { request, env } = context;
  const sql = getDb(env);
  const url = new URL(request.url);
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  try {
    if (request.method === "GET") {
      const leads = await sql`SELECT * FROM leads ORDER BY created_at DESC`;
      return Response.json(leads, { headers: corsHeaders });
    }
    if (request.method === "POST") {
      const body = await request.json();
      const { id, name, phone, tour, date, message, status, sale_id, sale_name, sale_avatar } = body;
      if (id) {
        const result = await sql`
                    UPDATE leads 
                    SET name=${name ?? null}, phone=${phone ?? null}, tour=${tour ?? null}, 
                        date=${date ?? null}, message=${message ?? null}, status=${status ?? null}, 
                        sale_id=${sale_id ?? null}, sale_name=${sale_name ?? null}, sale_avatar=${sale_avatar ?? null}
                    WHERE id=${id}
                    RETURNING *
                `;
        return Response.json(result[0], { headers: corsHeaders });
      } else {
        const result = await sql`
                    INSERT INTO leads (name, phone, tour, date, message, status, sale_id, sale_name, sale_avatar)
                    VALUES (${name ?? null}, ${phone ?? null}, ${tour ?? null}, ${date ?? null}, 
                            ${message ?? null}, ${status ?? "M\u1EDBi"}, ${sale_id ?? null}, 
                            ${sale_name ?? null}, ${sale_avatar ?? null})
                    RETURNING *
                `;
        const newLead = result[0];
        let newBookingId = null;
        if (newLead) {
          try {
            const bookingResult = await sql`
                            INSERT INTO bookings (name, phone, tour, date, status, total_price, deposit, sale_id, sale_name, special)
                            VALUES (${newLead.name}, ${newLead.phone}, ${newLead.tour ?? null}, ${newLead.date ?? null},
                                    'Chờ tư vấn', 0, 0, null, null, ${newLead.message ?? null})
                            RETURNING id
                        `;
            newBookingId = bookingResult[0]?.id;
          } catch (bookingErr) {
            console.error("L\u1ED7i t\u1EA1o booking t\u1EEB lead:", bookingErr);
          }
        }
        let mailStatus = null;
        if (newLead) {
          mailStatus = await sendEmail({
            env,
            subject: `\u{1F340} Kh\xE1ch h\xE0ng m\u1EDBi: ${newLead.name}`,
            html: `
                            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                                <h2 style="color: #E85D04;">C\xF3 kh\xE1ch h\xE0ng m\u1EDBi \u0111\u0103ng k\u1EF9 t\u01B0 v\u1EA5n!</h2>
                                <p><b>H\u1ECD v\xE0 t\xEAn:</b> ${newLead.name}</p>
                                <p><b>S\u1ED1 \u0111i\u1EC7n tho\u1EA1i:</b> ${newLead.phone}</p>
                                <p><b>Link Zalo:</b> <a href="https://zalo.me/${newLead.phone}">https://zalo.me/${newLead.phone}</a></p>
                                <p><b>Tour quan t\xE2m:</b> ${newLead.tour}</p>
                                <p><b>Ng\xE0y d\u1EF1 ki\u1EBFn:</b> ${newLead.date}</p>
                                <p><b>L\u1EDDi nh\u1EAFn:</b> ${newLead.message || "(Kh\xF4ng c\xF3)"}</p>
                                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                                <p style="font-size: 12px; color: #999;">Email \u0111\u01B0\u1EE3c g\u1EEDi t\u1EF1 \u0111\u1ED9ng t\u1EEB h\u1EC7 th\u1ED1ng CAM SITE RETREATS.</p>
                            </div>
                        `
          });
        }
        return Response.json({ ...newLead, _mailStatus: mailStatus, _bookingId: newBookingId }, {
          status: 201,
          headers: corsHeaders
        });
      }
    }
    if (request.method === "DELETE") {
      const id = url.searchParams.get("id");
      if (!id) return Response.json({ error: "ID is required" }, { status: 400, headers: corsHeaders });
      await sql`DELETE FROM leads WHERE id = ${id}`;
      return Response.json({ success: true }, { headers: corsHeaders });
    }
    return new Response("Method not allowed", { status: 405, headers: corsHeaders });
  } catch (error) {
    console.error("Error in leads API:", error);
    return Response.json({ error: error.message }, { status: 500, headers: corsHeaders });
  }
}
__name(onRequest6, "onRequest6");
__name2(onRequest6, "onRequest");
function normalizeVN(str) {
  if (!str) return "";
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/gi, "d").toLowerCase().replace(/[^a-z0-9]/g, "").trim();
}
__name(normalizeVN, "normalizeVN");
__name2(normalizeVN, "normalizeVN");
async function onRequest7(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const action = url.searchParams.get("action") || "";
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
      }
    });
  }
  try {
    let response;
    switch (action) {
      case "link":
        response = await handlePaymentLink(context);
        break;
      case "webhook":
        response = await handleSepayWebhook(context);
        break;
      case "status":
        response = await handlePaymentStatus(context);
        break;
      default:
        return Response.json({ error: "Missing or invalid action." }, { status: 400 });
    }
    const newResponse = new Response(response.body, response);
    newResponse.headers.set("Access-Control-Allow-Origin", "*");
    return newResponse;
  } catch (error) {
    console.error("Payment API Error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
__name(onRequest7, "onRequest7");
__name2(onRequest7, "onRequest");
async function handlePaymentLink({ request, env }) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (!id) return Response.json({ error: "Booking ID is required" }, { status: 400 });
  const sql = getDb(env);
  const rows = await sql`SELECT * FROM bookings WHERE id = ${id}`;
  if (rows.length === 0) return Response.json({ error: "Booking not found" }, { status: 404 });
  const booking = rows[0];
  const totalPrice = parseInt(booking.total_price) || 0;
  const deposit = parseInt(booking.deposit) || 0;
  const remaining = totalPrice - deposit;
  const depositRequired = parseInt(booking.deposit_required) || 1e6;
  const needsDeposit = deposit === 0 || booking.status === "Ch\u1EDD c\u1ECDc" || booking.status === "Ch\u1EDD x\xE1c nh\u1EADn c\u1ECDc";
  const paymentType = needsDeposit ? "deposit" : "remaining";
  const amountDue = needsDeposit ? depositRequired : remaining;
  const cleanTour = normalizeVN((booking.tour || "Tour").split("-")[0].trim());
  const cleanDate = (booking.date || "").replace(/\//g, "");
  const cleanName = normalizeVN(booking.name || "khach");
  const payLabel = needsDeposit ? "coc" : "full";
  const transferContent = `CSR${booking.id} ${cleanTour} ${cleanDate} ${cleanName} ${payLabel}`;
  const isPaid = booking.status && (booking.status.includes("\u0110\xE3 c\u1ECDc") || booking.status === "Ho\xE0n t\u1EA5t" || booking.status === "Ho\xE0n th\xE0nh" || booking.status === "\u0110\xE3 thanh to\xE1n");
  const isFullyPaid = booking.status === "Ho\xE0n t\u1EA5t" || booking.status === "Ho\xE0n th\xE0nh" || totalPrice > 0 && deposit >= totalPrice;
  return Response.json({
    id: booking.id,
    name: booking.name,
    tour: booking.tour,
    date: booking.date,
    status: booking.status,
    totalPrice,
    deposit,
    remaining,
    amountDue,
    transferContent,
    isPaid,
    isFullyPaid
  });
}
__name(handlePaymentLink, "handlePaymentLink");
__name2(handlePaymentLink, "handlePaymentLink");
async function handleSepayWebhook({ request, env }) {
  if (request.method !== "POST") return Response.json({ error: "POST only" }, { status: 405 });
  const sql = getDb(env);
  const payload = await request.clone().json().catch(() => ({}));
  const headers = Object.fromEntries(request.headers.entries());
  try {
    await sql`INSERT INTO debug_webhook_logs (payload, headers) VALUES (${payload}, ${headers})`;
  } catch (e) {
    console.error("Debug log fail:", e);
  }
  const authHeader = request.headers.get("authorization") || "";
  const expectedKey = env.SEPAY_API_KEY;
  const providedKey = authHeader.replace("Apikey ", "").replace("Bearer ", "").trim();
  if (expectedKey && providedKey !== expectedKey) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const {
    id: sepayTransactionId,
    content: transferContent,
    transferType,
    transferAmount,
    description
  } = payload;
  if (transferType && transferType !== "in") {
    return Response.json({ success: true, message: "Skipped: not incoming" });
  }
  const amount = parseInt(transferAmount) || 0;
  const existingTx = await sql`SELECT id FROM payment_transactions WHERE sepay_transaction_id = ${String(sepayTransactionId)}`;
  if (existingTx.length > 0) return Response.json({ success: true, message: "Duplicate" });
  const bookings = await sql(`SELECT * FROM bookings WHERE status IN ('Ch\u1EDD c\u1ECDc', 'Ch\u1EDD x\xE1c nh\u1EADn c\u1ECDc', '\u0110\xE3 c\u1ECDc') OR status IS NULL OR status = '' ORDER BY created_at DESC`);
  let matchedBooking = null;
  let paymentType = "deposit";
  const rawSearch = (transferContent || description || "").toLowerCase();
  const cleanSearch = normalizeVN(rawSearch);
  for (const booking of bookings) {
    const idStr = String(booking.id);
    const searchTerms = [
      "csr" + idStr,
      "id" + idStr,
      "thanh toan " + idStr,
      "tt" + idStr
    ];
    if (searchTerms.some((term) => cleanSearch.includes(term))) {
      matchedBooking = booking;
      break;
    }
  }
  if (!matchedBooking) {
    for (const booking of bookings) {
      const bName = normalizeVN(booking.name);
      const bTour = normalizeVN((booking.tour || "").split("-")[0]);
      if (bName.length >= 3 && cleanSearch.includes(bName) && bTour.length >= 2 && cleanSearch.includes(bTour)) {
        matchedBooking = booking;
        break;
      }
    }
  }
  if (matchedBooking) {
    paymentType = rawSearch.includes("full") ? "full" : "deposit";
    const currentDeposit = parseInt(matchedBooking.deposit) || 0;
    const newDeposit = currentDeposit + amount;
    const totalPrice = parseInt(matchedBooking.total_price) || 0;
    const depositReq = parseInt(matchedBooking.deposit_required) || 1e6;
    let newStatus = matchedBooking.status;
    if (totalPrice > 0 && newDeposit >= totalPrice) newStatus = "Ho\xE0n t\u1EA5t";
    else if (newDeposit >= depositReq) newStatus = "\u0110\xE3 c\u1ECDc";
    let customerId = matchedBooking.customer_id;
    if (newStatus === "\u0110\xE3 c\u1ECDc" && (!customerId || customerId.trim() === "")) {
      const check = await sql`SELECT csr_code FROM crm_customers WHERE phone = ${matchedBooking.phone}`;
      if (check.length > 0) {
        customerId = check[0].csr_code;
      } else {
        const randNum = Math.floor(1e5 + Math.random() * 9e5);
        customerId = "#CSR" + randNum;
        await sql`INSERT INTO crm_customers (csr_code, full_name, phone, loyalty_tier) VALUES (${customerId}, ${matchedBooking.name}, ${matchedBooking.phone}, 'New')`;
      }
    }
    await sql`UPDATE bookings SET status = ${newStatus}, deposit = ${newDeposit}, customer_id = ${customerId} WHERE id = ${matchedBooking.id}`;
  }
  await sql`INSERT INTO payment_transactions (booking_id, sepay_transaction_id, amount, transfer_content, payment_type) VALUES (${matchedBooking ? matchedBooking.id : null}, ${String(sepayTransactionId)}, ${amount}, ${transferContent || description || ""}, ${paymentType})`;
  return Response.json({ success: true, matched: matchedBooking ? matchedBooking.id : null });
}
__name(handleSepayWebhook, "handleSepayWebhook");
__name2(handleSepayWebhook, "handleSepayWebhook");
async function handlePaymentStatus({ request, env }) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const sql = getDb(env);
  const rows = await sql`SELECT status, deposit, total_price FROM bookings WHERE id = ${id}`;
  if (rows.length === 0) return Response.json({ error: "Not found" }, { status: 404 });
  const booking = rows[0];
  const totalPrice = parseInt(booking.total_price) || 0;
  const currentDeposit = parseInt(booking.deposit) || 0;
  const isPaid = booking.status && (booking.status.includes("\u0110\xE3 c\u1ECDc") || booking.status === "Ho\xE0n t\u1EA5t" || booking.status === "Ho\xE0n th\xE0nh" || booking.status === "\u0110\xE3 thanh to\xE1n" || totalPrice > 0 && currentDeposit >= (parseInt(booking.deposit_required) || 1e6));
  const isFullyPaid = booking.status === "Ho\xE0n t\u1EA5t" || booking.status === "Ho\xE0n th\xE0nh" || totalPrice > 0 && currentDeposit >= totalPrice;
  return Response.json({
    status: booking.status,
    isPaid: !!isPaid,
    isFullyPaid: !!isFullyPaid,
    deposit: currentDeposit,
    totalPrice
  });
}
__name(handlePaymentStatus, "handlePaymentStatus");
__name2(handlePaymentStatus, "handlePaymentStatus");
async function onRequest8(context) {
  const { request, env } = context;
  const sql = getDb(env);
  const method = request.method;
  try {
    if (method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      });
    }
    if (method === "GET") {
      const schedules = await sql`
                SELECT s.*, 
                (SELECT COUNT(*) FROM bookings b 
                 WHERE (b.tour = s.tour_name OR s.tour_name LIKE '%' || b.tour || '%') 
                 AND b.status NOT IN ('Đã hủy', 'Cancelled')
                 AND (
                    b.date = TO_CHAR(s.start_date, 'DD/MM/YYYY') 
                    OR b.date = TO_CHAR(s.start_date, 'YYYY-MM-DD')
                    OR b.date = TO_CHAR(s.start_date, 'FMDD/FMMM/YYYY')
                    OR b.date LIKE TO_CHAR(s.start_date, 'DD/MM') || '%'
                    OR b.date LIKE TO_CHAR(s.start_date, 'FMDD/FMMM') || '%'
                 )
                ) as booked_count
                FROM schedules s 
                ORDER BY s.start_date ASC
            `;
      return Response.json(schedules, {
        headers: { "Access-Control-Allow-Origin": "*" }
      });
    }
    if (method === "POST") {
      try {
        const body = await request.json();
        console.log("SCHEDULE POST BODY:", body);
        const { id, tour_name, start_date, end_date, slots, status } = body;
        if (!tour_name || !start_date || !end_date || slots === void 0) {
          return Response.json({ error: "Thi\u1EBFu d\u1EEF li\u1EC7u b\u1EAFt bu\u1ED9c (tour, dates, slots)" }, { status: 400 });
        }
        if (id) {
          const result = await sql`
                        UPDATE schedules 
                        SET tour_name=${tour_name}, 
                            start_date=${start_date}, 
                            end_date=${end_date}, 
                            slots=${Number(slots)}, 
                            status=${status}
                        WHERE id=${Number(id)}
                        RETURNING *;
                    `;
          return Response.json(result[0] || {}, {
            headers: { "Access-Control-Allow-Origin": "*" }
          });
        } else {
          const result = await sql`
                        INSERT INTO schedules (tour_name, start_date, end_date, slots, status)
                        VALUES (${tour_name}, ${start_date}, ${end_date}, ${Number(slots)}, ${status || "\u0110ang m\u1EDF"})
                        RETURNING *;
                    `;
          return Response.json(result[0] || {}, {
            status: 201,
            headers: { "Access-Control-Allow-Origin": "*" }
          });
        }
      } catch (err) {
        console.error("POST SCHEDULES ERROR:", err);
        return Response.json({ error: "L\u1ED7i l\u01B0u DB: " + err.message }, { status: 500 });
      }
    }
    if (method === "DELETE") {
      const url = new URL(request.url);
      const id = url.searchParams.get("id");
      if (!id) return Response.json({ error: "ID is required" }, { status: 400 });
      await sql`DELETE FROM schedules WHERE id = ${id}`;
      return Response.json({ success: true }, {
        headers: { "Access-Control-Allow-Origin": "*" }
      });
    }
    return new Response("Method Not Allowed", { status: 405 });
  } catch (error) {
    console.error("Error in schedules API:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
__name(onRequest8, "onRequest8");
__name2(onRequest8, "onRequest");
async function onRequest9(context) {
  const url = new URL(context.request.url);
  url.searchParams.set("action", "webhook");
  const newContext = {
    ...context,
    request: new Request(url.toString(), context.request)
  };
  return onRequest7(newContext);
}
__name(onRequest9, "onRequest9");
__name2(onRequest9, "onRequest");
async function onRequest10(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const sql = getDb(env);
  try {
    if (request.method === "GET") {
      const tours = await sql`SELECT * FROM tours ORDER BY id ASC`;
      return Response.json(tours, {
        headers: { "Access-Control-Allow-Origin": "*" }
      });
    }
    return new Response("Method not allowed", { status: 405 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
__name(onRequest10, "onRequest10");
__name2(onRequest10, "onRequest");
async function onRequest11(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const method = request.method;
  const sql = getDb(env);
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  if (method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  try {
    let response;
    if (method === "GET") {
      const type = url.searchParams.get("type");
      let query = "SELECT * FROM trash";
      const values2 = [];
      if (type) {
        query += " WHERE type = $1";
        values2.push(type);
      }
      query += " ORDER BY deleted_at DESC";
      const rows = await sql.query(query, values2);
      response = Response.json(rows);
    } else if (method === "POST") {
      const id = url.searchParams.get("id");
      if (!id) return Response.json({ error: "ID is required" }, { status: 400, headers: corsHeaders });
      const items = await sql.query("SELECT * FROM trash WHERE id = $1", [id]);
      if (items.length === 0) return Response.json({ error: "Item not found in trash" }, { status: 404, headers: corsHeaders });
      const item = items[0];
      const data = item.data;
      if (item.type === "booking") {
        const cols = Object.keys(data).filter((k) => k !== "id");
        const vals = cols.map((k) => data[k]);
        const placeholders = cols.map((_, i) => `$${i + 1}`);
        await sql.query(
          `INSERT INTO bookings (id, ${cols.join(", ")}) VALUES ($${cols.length + 1}, ${placeholders}) ON CONFLICT (id) DO NOTHING`,
          [...vals, data.id]
        );
      } else if (item.type === "customer") {
        const cols = Object.keys(data).filter((k) => k !== "id");
        const vals = cols.map((k) => data[k]);
        const placeholders = cols.map((_, i) => `$${i + 1}`);
        await sql.query(
          `INSERT INTO customers (id, ${cols.join(", ")}) VALUES ($${cols.length + 1}, ${placeholders}) ON CONFLICT (id) DO NOTHING`,
          [...vals, data.id]
        );
      }
      await sql.query("DELETE FROM trash WHERE id = $1", [id]);
      response = Response.json({ success: true, restored: item.type, data });
    } else if (method === "DELETE") {
      const id = url.searchParams.get("id");
      if (!id) return Response.json({ error: "ID is required" }, { status: 400, headers: corsHeaders });
      await sql.query("DELETE FROM trash WHERE id = $1", [id]);
      response = Response.json({ success: true });
    } else {
      return new Response("Method Not Allowed", { status: 405 });
    }
    const final = new Response(response.body, response);
    Object.entries(corsHeaders).forEach(([k, v]) => final.headers.set(k, v));
    return final;
  } catch (error) {
    console.error("Error in trash API:", error);
    return Response.json({ error: error.message }, {
      status: 500,
      headers: corsHeaders
    });
  }
}
__name(onRequest11, "onRequest11");
__name2(onRequest11, "onRequest");
async function onRequest12(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const method = request.method;
  const sql = getDb(env);
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  if (method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  try {
    let response;
    if (method === "GET") {
      const rows = await sql`SELECT id, username, full_name, role, phone, email, avatar, bank_info, status, created_at FROM admins ORDER BY id ASC`;
      const users = rows.map((u) => ({ ...u, fullName: u.full_name }));
      response = Response.json(users);
    } else if (method === "POST") {
      const body = await request.json();
      const { id, username, password, fullName, role, phone, email, avatar, bank_info, status } = body;
      if (!username) return Response.json({ error: "Missing username" }, { status: 400, headers: corsHeaders });
      if (!fullName) return Response.json({ error: "Missing full name" }, { status: 400, headers: corsHeaders });
      if (!role) return Response.json({ error: "Missing role" }, { status: 400, headers: corsHeaders });
      if (id) {
        let rows;
        if (password && password.trim() !== "") {
          rows = await sql.query(
            `UPDATE admins SET username=$1, password=$2, full_name=$3, role=$4, phone=$5, email=$6, avatar=$7, bank_info=$8, status=$9 WHERE id=$10 RETURNING *`,
            [username, password, fullName, role, phone, email, avatar, bank_info, status, id]
          );
        } else {
          rows = await sql.query(
            `UPDATE admins SET username=$1, full_name=$2, role=$3, phone=$4, email=$5, avatar=$6, bank_info=$7, status=$8 WHERE id=$9 RETURNING *`,
            [username, fullName, role, phone, email, avatar, bank_info, status, id]
          );
        }
        const user = rows[0];
        delete user.password;
        response = Response.json({ ...user, fullName: user.full_name });
      } else {
        if (!password) return Response.json({ error: "Missing password for new user" }, { status: 400, headers: corsHeaders });
        const existing = await sql.query("SELECT id FROM admins WHERE username = $1", [username]);
        if (existing.length > 0) return Response.json({ error: "T\xEAn \u0111\u0103ng nh\u1EADp \u0111\xE3 t\u1ED3n t\u1EA1i" }, { status: 400, headers: corsHeaders });
        const rows = await sql.query(
          `INSERT INTO admins (username, password, full_name, role, phone, email, avatar, bank_info, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
          [username, password, fullName, role, phone, email, avatar, bank_info, status || "active"]
        );
        const user = rows[0];
        delete user.password;
        response = Response.json({ ...user, fullName: user.full_name }, { status: 201 });
      }
    } else if (method === "DELETE") {
      const id = url.searchParams.get("id");
      if (!id) return Response.json({ error: "ID is required" }, { status: 400, headers: corsHeaders });
      const checkAdmin = await sql.query("SELECT username FROM admins WHERE id = $1", [id]);
      if (checkAdmin.length > 0 && checkAdmin[0].username === "admin") {
        return Response.json({ error: "Kh\xF4ng th\u1EC3 x\xF3a t\xE0i kho\u1EA3n Super Admin" }, { status: 400, headers: corsHeaders });
      }
      await sql.query("DELETE FROM admins WHERE id = $1", [id]);
      response = Response.json({ success: true });
    } else {
      return new Response("Method Not Allowed", { status: 405 });
    }
    const final = new Response(response.body, response);
    Object.entries(corsHeaders).forEach(([k, v]) => final.headers.set(k, v));
    return final;
  } catch (error) {
    console.error("Error in users API:", error);
    return Response.json({ error: error.message }, {
      status: 500,
      headers: corsHeaders
    });
  }
}
__name(onRequest12, "onRequest12");
__name2(onRequest12, "onRequest");
var routes = [
  {
    routePath: "/api/activity-logs",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest]
  },
  {
    routePath: "/api/admin_customers",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest2]
  },
  {
    routePath: "/api/admin_tours",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest3]
  },
  {
    routePath: "/api/auth",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest4]
  },
  {
    routePath: "/api/bookings",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest5]
  },
  {
    routePath: "/api/leads",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest6]
  },
  {
    routePath: "/api/payment",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest7]
  },
  {
    routePath: "/api/schedules",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest8]
  },
  {
    routePath: "/api/sepay-webhook",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest9]
  },
  {
    routePath: "/api/tours",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest10]
  },
  {
    routePath: "/api/trash",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest11]
  },
  {
    routePath: "/api/users",
    mountPath: "/api",
    method: "",
    middlewares: [],
    modules: [onRequest12]
  }
];
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
__name2(lexer, "lexer");
function parse2(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name2(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name2(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name2(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name2(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name2(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse2, "parse2");
__name2(parse2, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
__name2(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name2(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
__name2(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
__name2(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
__name2(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
__name2(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
__name2(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse2(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
__name2(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
__name2(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");
__name2(pathToRegexp, "pathToRegexp");
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
__name2(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name2(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name2(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name2((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
var drainBody = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
__name2(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
__name2(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
__name2(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");
__name2(__facade_invoke__, "__facade_invoke__");
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  static {
    __name(this, "___Facade_ScheduledController__");
  }
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name2(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name2(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name2(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
__name2(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name2((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name2((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
__name2(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// C:/Users/Admin/AppData/Local/npm-cache/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default2 = drainBody2;

// C:/Users/Admin/AppData/Local/npm-cache/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
__name(reduceError2, "reduceError");
var jsonError2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError2(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-dYTtpZ/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = middleware_loader_entry_default;

// C:/Users/Admin/AppData/Local/npm-cache/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
__name(__facade_register__2, "__facade_register__");
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__2, "__facade_invokeChain__");
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}
__name(__facade_invoke__2, "__facade_invoke__");

// .wrangler/tmp/bundle-dYTtpZ/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class ___Facade_ScheduledController__2 {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__2(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler2, "wrapExportedHandler");
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint2, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
//# sourceMappingURL=functionsWorker-0.628882266781114.js.map
