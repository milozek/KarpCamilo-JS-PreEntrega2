function Customer(name, age, courseName, startingDate) {
  this.name = name;
  this.age = age;
  this.courseName = courseName;
  this.startingDate = startingDate;
}

const courses = [
  { id: 1, coursename: "Guidance", price: 200 },
  { id: 2, coursename: "Counseling", price: 200 },
  { id: 3, coursename: "Advanced Therapy", price: 300 },
];

const startingDate = ["April", "May", "June"];

const customers = [];

function createCustomer(customersArray) {
  customersArray.forEach((customer) => {
    const newCustomer = new Customer(
      customer.name,
      customer.age,
      customer.courseName,
      customer.startingDate
    );
    customers.push(newCustomer);
  });
}

for (let i = 0; i < 1; i++) {
  let name = prompt("Enter your name:");

  while (!/^[a-zA-Z\s]+$/.test(name)) {
    alert("Invalid name. Please enter letters and spaces only.");
    name = prompt("Enter your name:");
  }

  let age = parseInt(prompt("Enter your age:"));
  while (isNaN(age) || age < 16 || age > 101) {
    alert("Invalid age. Please enter a number between 16 and 101.");
    age = parseInt(prompt("Enter your age:"));
  }

  const courseIndex = parseInt(
    prompt(`Enter the course you want to take:  
    [1] ${"Guidance"}
    [2] ${"Counseling"}
    [3] ${"Therapy"}`)
  );

  const startingMonth = parseInt(
    prompt(`Enter the month you want to start on: 
    [1] ${"April"}
    [2] ${"May"}
    [3] ${"June"}`)
  );

  const selectedCourse = courses[courseIndex - 1];
  const selectedMonth = startingDate[startingMonth - 1];

  const customer = new Customer(
    name,
    age,
    selectedCourse.coursename,
    selectedMonth
  );
  customers.push(customer);
}

console.log(customers);

function getDate() {
  // get the value of the input element
  const dateInput = document.getElementById("date").value;

  // create a new Date object from the input value
  const selectedDate = new Date(dateInput);

  // output the selected date
  console.log(`You selected ${selectedDate.toDateString()}`);
}
const submitButton = document.querySelector(".getdate");
submitButton.addEventListener("click", getDate);
