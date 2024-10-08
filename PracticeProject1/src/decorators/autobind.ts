
  //auto bind decorator
  export function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const orignalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,
      get() {
        const boundFun = orignalMethod.bind(this);
        return boundFun;
      }
    };
    return adjDescriptor;
  }

