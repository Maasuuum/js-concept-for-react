// 1. how to declare a variable using let and const
const fatherName = 'Siddique';
let seasonName = 'rainy';

// 2. Conditions
// 2.1 six basic conditions: >,<,===,!==,<=,>=
// 2.2 multiple conditions: &&, ||
if(fatherName === 'Hossain' || seasonName === 'rainy'){
    console.log("Ok");
}
else if(fatherName === 'Siddique'){
    console.log("Ok Ok");
}
else{
    console.log("Not Ok");
}

// 3. array declaration: index no, length, push, pull
const numbers = [34, 12, 45, 54, 78, 23];
numbers [0] = 56; //indexing/changing value by index

// 4. loop: for and while, for is most usable
for (let i = 0; i < numbers.length; i++){
    const newNumbers = numbers[i];
    console.log(newNumbers);
}

// 5. function
function multiple(num1, num2){
    const result = num1 * num2;
    return result;
}
const output = multiple(35, 78);

// 6. object
const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'chacchu']
}
const myVariable = 'age';

// 3 ways to find object value
console.log(student.age);//direct by property
console.log(student['age']);//access via property name string
console.log(student[myVariable]);// access viaa property name in a variable