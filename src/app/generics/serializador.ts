export class Serializador<T> {

  constructor(private type: new () => T){
  }

  toJson(entity: T): any{
    const json: any = {...entity};
    console.log(json)
    // Object.keys(entity).forEach(k => {
    //   json[k] = entity[k]
    // })
    return json
  }

  fromJson(json: any):  T {
     const entity = new this.type();
     Object.keys(json).forEach(k => {

     })
     return entity
  }

  // getKey<T, K extends keyof T>(entity: T, k: K) {
  //   return entity[k]
  // }

  // setKey<T, K extends keyof T>(entity: T, k: K, valor: any) {
  //   return entity[k] = valor
  // }
}
