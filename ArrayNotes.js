//2.4.1 Intro to Arrays
//create

let students = ['Adam', 'Brad', 'Casey', 'David'];

let values = [1, 2, 3, 4];

//accessing items in array

console.log(students);
console.log(students[0]); //beginning item has index or position 0
console.log(students[1]); //index 1 means 1 item away from the beginning, or 2nd
console.log(students[2]);
console.log(students[3]);
console.log(students[4]) //error, as there is no 5th item
console.log(students[4-2]);

//formatting items in array
console.log('Student: ' + students[1]);
console.log(`Student 2: ${students[3]}`);
//changing an item
students[1]='Stephanie';
console.log(students);
//push adds to the end

students.push('Eve');
console.log(students);
students.push('Fred', 'Georgia'); //you can push more than 1 item at a time
console.log(students);