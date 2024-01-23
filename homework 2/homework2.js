//დავალება 1
for( let i = 5; i <= 100; i = i + 1){
    console.log(i)
}
//დავალება 2
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i = 0; i < array1.length; i++) {
        let number = array1[i];

        if (number > 0 && number < 10) 
            console.log(number);
}
//დავალება 3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i++) {
    let number = array2[i];

    if (number = 5){
        console.log("aris")

        break;
    }
}
//დავალება 4
let array3 = [1, 2, 3, 4, 5];
let sum = 0
for (let i = 0; i < array3.length; i++) {

    sum += array3[i];

}
console.log(sum)

//დავალება 5
let array4 = [1, 2, 3, 7, 6, 9];
let sum1 = 0
for (let i = 0; i < array4.length; i++) {

    sum1 += array4[i];

}
 console.log(sum1 / array4.length)

//დავალება 6
let array5 = [1, 2, 3, 7, 6, 9]
for (let i = 0; i < array5.length; i++){ 
if( array5[i] === 7 ){
    continue;
}
console.log(array5[i])
}
//დავალება 7
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };

  console.log(user.studentstatus);

//დავალება 8
let user1 = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}
if (user.age < 18 && user1.studentstatus === 'active') {
    console.log('hello');
} else if (user1.name === 'Levani') {
    console.log('hello levani');
} else if (user1.studentstatus === 'active' || user1.age < 25) {
    console.log('hello world');
} else {
    console.log('error');
}

//დავალება 9
let array = [ [2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10] ];
//?
//დავალება 10
let numbers1 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
//?
//დავალება 10
let numbers2 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
//?
//დავალება 11
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
for (let i = 0; i < users.length; i++) {
    if (users[i].status === true) {
        console.log(users[i]);
    }
}