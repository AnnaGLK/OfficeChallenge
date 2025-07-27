//Document class should create an object with an attribute called - EmployeeName and it should be initialized in the constructor
class Document {
  constructor(EmployeeName) {
    this.EmployeeName = EmployeeName;
  }
}

//Employee class should create an object with an attribute called - name and it should be initialized in the constructor
class Employee {
  constructor(name, office = null) {
    // office is optional
    this.name = name;
    this.office = office;
  }
  //Employee class should have a function called - work
  // that pushes 10 new documents to the office's documents array.

  //A function that pushes 10 new documents to the office's documents array. - See Office object a head.
work(office = this.office) {
  if (!office || !office.documents) {
    throw new Error("Office not set for employee: " + this.name);
  }
  for (let i = 0; i < 10; i++) {
    const doc = new Document(this.name);
    office.documents.push(doc);
  }
}
}

//Manager class should create an object with an attribute called - name and it should be initialized in the constructor
class Manager {
  constructor(name, office) {
    this.name = name;
    this.office = office;
    this.employees = [];
  }
  //A function that pushes a new employee to the employees array
  hireEmployee(employeeName) {
    const newEmployee = new Employee(employeeName, this.office);
    this.employees.push(newEmployee);
    return newEmployee;
  }

  askEmployeesToWork() {
    //A function that invokes the employees Work function.
    this.employees.forEach((employee) => employee.work());
  }
}

//Cleaner class should create an object with an attribute called - name and it should be initialized in the constructor
class Cleaner {
  constructor(name) {
    this.name = name;
  }

  clean() {
    // function called - clean and it should console.log 'Clean'
    console.log("Clean");
  }
}

// Office class should create an object with an attribute called - documents that is initialized with an empty array
class Office {
  constructor() {
    this.documents = []; //Array of Document objects
    this.managers = []; //Array of Managers objects
    this.cleaners = []; //Array of Cleaners objects
  }

  //   Office class should have a function called - hireManager that pushes a new manager to the managers array
  hireManager(managerName) {
    const newManager = new Manager(managerName, this);
    this.managers.push(newManager);
    return newManager;
  }
  //A function that pushed a new cleaner to the cleaners array
  hireCleaner(cleanerName) {
    const newCleaner = new Cleaner(cleanerName);
    this.cleaners.push(newCleaner);
    return newCleaner;
  }

  addEmployee(employeeName) {
  const newEmployee = new Employee(employeeName, this); // Set office!
  // Add to office via manager or separate array if required by spec
  return newEmployee;
}

  startWorkDay() {
    this.managers.forEach((manager) => manager.askEmployeesToWork());
  }
}

