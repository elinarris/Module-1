var employees = [employee1, employee2, employee3]

function Employee(name, title, salary, form) {

    this.name = name
    this.title = title
    this.salary = salary
    this.status = "full-time"
    this.printEmployeeForm = form
    this.form = function() {
        console.log(this.printEmployeeForm)
    }

}

var employee1 = new Employee("John", "developer", 90000, "full-time", employee1)
var employee2 = new Employee("Monica", "doctor", 200000, "contract", employee2)
var employee3 = new Employee("Steve", "pest control", 40000, "part-time", employee3)


console.log(employee1)
console.log(employee2)
console.log(employee3)