console.log("===== Classes and Interfaces =====");
console.log("===== Classes =====");

class Department {
  // private readonly id: string;
  // private dname: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public dname: string) {
    // this.id = id;
    // this.dname = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department: ${this.id} ` + this.dname);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printInfo() {
    console.log(this.employees.length);
    console.table(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT Department");
  }
}

class AccountDepartment extends Department {
  //singleton pattern
  //having only once instance of a class

  private lastReport: string;
  private static instance: AccountDepartment;

  get recentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set recentReport(value: string) {
    this.lastReport = value;
  }

  private constructor(id: string, public reports: string[]) {
    super(id, "Account Department");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountDepartment.instance) {
      return AccountDepartment.instance;
    }
    this.instance = new AccountDepartment("d2", []);
    return this.instance;
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.recentReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Akshay");
const itDept = new ITDepartment("d1", ["Max"]);
const accDept = AccountDepartment.getInstance();
accDept?.addEmployee("Anna");
accDept?.addEmployee(employee1.name);

itDept.addEmployee("Max");
itDept.addEmployee("Siddharth");

itDept.addEmployee("Raj");

itDept.describe();
itDept.printInfo();

console.table(accDept);

accDept?.addReport("Soemthing went wrong");
accDept?.addReport("All good");
console.log(accDept?.recentReport);
accDept?.printReports();

// const accCopy = { dname: "OtherDepartment", describe: accounting.describe };

// accCopy.describe();

abstract class Vehical {
  constructor(public name: string, public model: string) {}

  abstract describe(this: Vehical): void;
}

class Suzuki extends Vehical {
  describe(this: Vehical): void {
    console.log("Vehical modal is " + this.model + " name is " + this.name);
  }
}

const myCar = new Suzuki("Ertiga", "VXi");

myCar.describe();
