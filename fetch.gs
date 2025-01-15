importEs5Shim();
importEs5Sham();
importJson3();
importEs6Shim();
importEs6Sham();
importCoreJS();
importWhatWgFetch();
importTextEncoding();
importBuffer();
importGasShims();
importGasShams();

function makeThenable(obj) {
    if(obj['&thenable'])return obj
    obj = Object(obj);
    obj['&thenable'] = true;
    obj['&value'] = value;
    obj['&error'] = null;
    obj['&hasError'] = false;

  obj.then = obj.then ?? function then(onFulfilled, onRejected) {
    try {
      if (!this['&hasError']) {
        const result = onFulfilled(this['&value']);
        return result?.['&thenable'] ? result : makeThenable(result);
      }
    } catch (error) {
      this['&error'] = error;
      this['&hasError'] = true;
      if (onRejected) {
        return onRejected(error);
      }
    }
    return this;
  };

  obj.catch = obj.catch ?? function _catch(onRejected) {
    if (this['&hasError'] && onRejected) {
      try {
        const result = onRejected(this['&error']);
        this['&hasError'] = false;
        return result?.['&thenable'] ? result : makeThenable(result);
      } catch (error) {
        this['&error'] = error;
        return this;
      }
    }
    return this;
  };

  obj.finally = obj.finally ?? function _finally(onFinally) {
    if (onFinally) {
      try {
        onFinally();
      } catch (error) {
        this['&error'] = error;
        this['&hasError'] = true;
      }
    }
    return this;
  };
  return obj;
};
function ReadableShamReader(){}
ReadableShamReader.prototype.cancel = function cancel(){};
ReadableShamReader.prototype.releaseLock = function releaseLock(){};
ReadableShamReader.prototype.read = function read(){return makeThenable(this['&stream'].next());};
globalThis.ReadableSham = Object.setPrototypeOf(function ReadableSham(uint8Array){
  const rs = Object.setPrototypeOf([uint8Array].values(),ReadbleSham.prototype);
  rs.locked = false;
  rs['&uint8Array'] = uint8Array;
  return makeThenable(rs);
},[].values().__proto__);

ReadableSham.prototype.cancel = function cancel(){return makeThenable()};
ReadableSham.prototype.tee = function tee(){
  return makeThenable([
    ReadableSham(this['&uint8Array']),
    ReadableSham(this['&uint8Array'])
  ]);
};
ReadableSham.prototype.getReader = function getReader(){
   const reader = new ReadableShamReader();
   reader['&stream'] = this;
   reader.closed = false;
   return reader;
};

function syncRes(res){
  res.bytes = function bytes(){return makeThenable(new Uint8Array(this['&bytes']));};
  res.arrayBuffer = function arrayBuffer(){return makeThenable(this.bytes().buffer);};
  const decoder = new TextDecoder();
  res.text = function text(){return makeThenable(decoder.decode(this.bytes()));};
  res.blob = function blob(){return makeThenable(new Blob(this.bytes()));};
  res.json = function json(){return makeThenable(JSON.parse(res.text()));};
  res.clone = function clone(){
    const cloneRes = new Response(this.bytes(),this);
    cloneRes['&bytes'] = [...this.bytes()];
    return syncRes(cloneRes);
  };
  Object.defineProperty(res, "body", {
    get() {
      return ReadableSham(this.bytes());
    },
    set() {}
  });
  return makeThenable(res);
}

globalThis.fetch = function fetch(url,options){
  url = url?.url ?? url;
  options = options ?? Object(url);
  options.headers = options.headers ?? {};
  try{
  options.headers = Object.assign(options.headers,Object.fromEntries(options.headers));
  }catch{}
  const ures = zUrlFetch(url,options);
  const bytes = ures.getContent();
  ures.headers = new Headers(ures.getAllHeaders());
  const res = new Response(new Uint8Array(bytes),ures);
  res['&bytes'] = bytes;
  return syncRes(res);
}

function test(){

  console.log(fetch(new Request('https://www.google.com')).text());
}




