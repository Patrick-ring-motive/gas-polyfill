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
importGasShams()

globalThis.ReadableSham = Object.setPrototypeOf(function ReadableSham(uint8array){
  return Object.setPrototypeOf([uint8array].values(),ReadbleSham.prototype);
},[].values().__proto__);

function syncRes(res){
  res.bytes = function bytes(){return new Uint8Array(this['&bytes']);};
  res.arrayBuffer=function arrayBuffer(){return this.bytes().buffer;};
  const decoder = new TextDecoder();
  res.text = function text(){return decoder.decode(this.bytes());};
  res.blob = function blob(){return new Blob(this.bytes());};
  res.json = function json(){return JSON.parse(res.text());};
  res.clone = function clone(){
    const cloneRes = new Response(this.bytes(),this);
    cloneRes['&bytes'] = [...this.bytes()];
    return syncRes(cloneRes);
  };
  Object.defineProperty(res, "body", {
    get() {
      return[this.bytes()].values();
    },
    set() {}
  });
  return res;
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




