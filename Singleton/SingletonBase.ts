
export default class SingletonBase  {

  private static _instance: SingletonBase;

  constructor() {
    let extendedClass = (<any>this).__proto__.constructor;

    if (extendedClass._instance){
      throw new Error("must use the instance.");
    }

    extendedClass._instance = this;
  }

  public static instance(): any{
    if (this._instance == null){
      this._instance = new this();
    }

    return this._instance;
  }

}

