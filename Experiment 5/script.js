// --------------------
// Base Class: Person
// --------------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name}, ${this.age} years old.`;
  }
}

// --------------------
// Subclass: Student
// --------------------
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call parent constructor
    this.grade = grade;
  }

  // Overriding the introduce() method
  introduce() {
    return `Hi, I'm ${this.name}, a student in grade ${this.grade}.`;
  }

  study() {
    return `${this.name} is studying for exams.`;
  }
}

// --------------------
// Subclass: Teacher
// --------------------
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  // Overriding the introduce() method
  introduce() {
    return `Hello, I'm ${this.name}, and I teach ${this.subject}.`;
  }

  teach() {
    return `${this.name} is teaching ${this.subject}.`;
  }
}

// --------------------
// Demonstration Function
// --------------------
document.getElementById("runExample").addEventListener("click", () => {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // Clear previous output

  const people = [
    new Person("Alex", 40),
    new Student("Bella", 18, "12th"),
    new Teacher("Charles", 35, "Physics"),
  ];

  let result = "=== Demonstrating Inheritance and Polymorphism ===\n\n";

  // Polymorphism: all have introduce(), but each behaves differently
  for (const person of people) {
    result += person.introduce() + "\n";

    // Checking specific type using instanceof
    if (person instanceof Student) {
      result += person.study() + "\n";
    } else if (person instanceof Teacher) {
      result += person.teach() + "\n";
    }
    result += `Type check: ${
      person instanceof Student
        ? "Student"
        : person instanceof Teacher
        ? "Teacher"
        : "Person"
    }\n\n`;
  }

  result += "=== End of Example ===";
  outputDiv.textContent = result;
});