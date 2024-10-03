console.log("===== Decorators (meta programming) =====");
// decorators execute when class is defined , no need to instantitate the class

function Logger1(constructor: Function) {
  console.log("Logging1...", constructor);
}

function Logger2(logString: string) {
  return (constructor: Function) => {
    console.log(logString);
    console.log("Logging2...", constructor);
  };
}

function WithTemplate(template: string, hookid: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(orignal_constructor: T) {
    return class extends orignal_constructor {
      constructor(..._args: any[]) {
        super();
        const hookEl = document.getElementById(hookid);
        console.log("...withTemplate...");
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}
@Logger1
@Logger2("Logging 2 with parameter")
@WithTemplate("<h1 style='color: red;'>Hello World </h1 >", "app")
class Person {
  name = "Siddharth";

  constructor() {
    console.log("creating Person object");
  }
}

const person = new Person();

// console.log(person);

///////

function Log(target: any, propertyName: string | symbol) {
  console.log("Property Decorator!");
  console.log(target, propertyName);
}

//Accessor Decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor Decorator!");
  console.log("target", target);
  console.log("name", name);
  console.log("descriptor", descriptor);
}

//method decorator
function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("==== Method Decorator! ====");
  console.log("target", target);
  console.log("name", name);
  console.log("descriptor", descriptor);
}

//Parameter Decorator
function Log4(target: any, name: string, position: number) {
  console.log("==== Parameter Decorator! ====");
  console.log("target", target);
  console.log("name", name);
  console.log("position", position);
}

class Product {
  @Log
  title: string;
  @Log
  private _price: number;

  @Log2
  set_price(price: number) {
    if (price > 0) {
      this._price = price;
    } else {
      throw new Error("Invalid Price entered");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 19);
const p2 = new Product("Book", 30);
function constructor() {
  throw new Error("Function not implemented.");
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
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

class Printer {
  message = "It Works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();
const button = document.querySelector("button")!;
button.addEventListener("click", printer.showMessage);

//Validation Decorators

interface ValidatorConfig {
  [property: string]: {
    [validatableProperty: string]: string[]; // ['required', 'positive']
  };
}

const registerValidtor: ValidatorConfig = {};

function Required(target: any, propertyName: string) {
  registerValidtor[target.constructor.name] = {
    ...registerValidtor[target.constructor.name],
    [propertyName]: [...(registerValidtor[target.constructor.name]?.[propertyName] ?? []), "required"]
  };
}
function PositiveNumber(target: any, propertyName: string) {
  registerValidtor[target.constructor.name] = {
    ...registerValidtor[target.constructor.name],
    [propertyName]: [...(registerValidtor[target.constructor.name]?.[propertyName] ?? []), "positive"]
  };
}
function Validate(obj: any) {
  const objValidtorConfig = registerValidtor[obj.constructor.name];
  if (!objValidtorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidtorConfig) {
    for (const validator of objValidtorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", event => {
  event.preventDefault();
  const titleL = document.getElementById("title") as HTMLInputElement;
  const priceL = document.getElementById("price") as HTMLInputElement;

  const title = titleL.value;
  const price = +priceL.value;

  const createdCourse = new Course(title, price);

  if (!Validate(createdCourse)) {
    alert("Input is invalid try again!!");
    return;
  }

  console.log(createdCourse);
});
