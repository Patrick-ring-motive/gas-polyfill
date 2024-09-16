/** Google apps script Shams */

function importGasShams(){
  if(!globalThis.FormData && globalThis.Map){
    globalThis.FormData = class FormData extends Map{
      append(key,val){
        return Map.prototype.set.call(this,key,[...this.getAll(key)??[],val]);
      }
      get(key){
        return Map.prototype.get.call(this,key)?.[0];
      }
      getAll(key){
        return Map.prototype.get.call(this,key);
      }
      set(key,val){
        return Map.prototype.set.call(this,key,[val]);
      }
      values(){
          return [...Map.prototype.values.call(this)]?.flat?.()?.values?.()??Map.prototype.values.call(this);
      }
      entries(){
        const entrys = new Map();
        const keys = this.keys();
        for(const key of keys){
          const vals = this.getAll(key);
          for(const val of vals){
            entrys.set(new String(key),val);
          }
        }
        return entrys.entries();
      }
    }
  }

    if(!globalThis.Headers && globalThis.Map){
    globalThis.Headers = class Headers extends Map{
      append(key,val){
        return Map.prototype.set.call(this,key,[...this.getAll(key)??[],val]);
      }
      get(key){
        return Map.prototype.get.call(this,key)?.[0];
      }
      getAll(key){
        return Map.prototype.get.call(this,key);
      }
      getSetCookie(){
        return this.getAll('Set-Cookie');
      }
      set(key,val){
        return Map.prototype.set.call(this,key,[val]);
      }
      values(){
          return [...Map.prototype.values.call(this)]?.flat?.()?.values?.()??Map.prototype.values.call(this);
      }
      entries(){
        const entrys = new Map();
        const keys = this.keys();
        for(const key of keys){
          const vals = this.getAll(key);
          for(const val of vals){
            entrys.set(new String(key),val);
          }
        }
        return entrys.entries();
      }
    }
  }

}

