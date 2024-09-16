function importGasShims(){
  if(!globalThis.btoa){
    globalThis.btoa = Utilities.base64Encode;
  }
  if(!globalThis.atob){
    globalThis.atob = Utilities.base64Decode;
  }
}