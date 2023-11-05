// object will be of key & value
// key -> Type var or let or const and then name what you want to put in programe
// value -> any data type like string, number, boolean, array and any type of objects

console.log("Hello GUVI GEEKS");
const testWindow = {
a : 20,
sampleObj: {
    key: "value",
},

abc : ()=> {
    console.log("abc");
}
};

var a = 22;
var sampleObj = {
    key: "value1",
};
function add(number, multiple) {
    console.log("add");
};

console.log(window);
console.log(testWindow);
console.log(testWindow.a);
console.log(window.a);

// introduction to Array []

const arr = [4, "string", true, [0,1,"xyz"], {a:"abc"}];
console.log(arr);
// lookup [0] that means find the index
console.log(typeof arr[0], arr[1], arr[2]);
console.log(arr[0]); //here in 0 the index 4 stored, so output is 4
console.log(arr[3][2]); //here lookup array inside array []
console.log(arr[4].a); //this is way to finding object inside array.

//json interation

const jsonData = {
    string: "govind",
    number: 7,
    array: ["GUVI" , 8, {nestedObj:"nestedValue"}],
    obj: {
        batch: "B51WD2 TAMIL WEEK DAY CLASS",
        mentor: "Mr. Sanjay",
        stack: ["javascript", "html", "css"],
    },
    isStudent: true,
};
// array means [index], object access.dot operator
console.log(jsonData);
console.log(jsonData.array[2].nestedObj);
console.log(jsonData.obj.stack[1]);
console.log(jsonData.isStudent);

const arre = [1,2, ,4,5];
console.log("Before:", arre);
arre.push(6); //adding additional value in last index
console.log("after.push:", arre);
console.log("before pop:", arre);
arre.pop(); //remove last index
console.log("after pop:", arre);
console.log("before unShift:", arre);
arre.unshift(0); //add value in first
console.log("after .unShift:", arre);
console.log("before.shift:", arre);
arre.shift(); //remove value in first
console.log("after.shift:", arre);

console.log("_____________ROAD MAP DAY 3 CLASS TASK_______________");

//how to compare two JSON have the same properties without order?

const Obj1 = {
    name: "Person 1",
    age: 5,
}
const Obj2 = {
    age: 5,
    name: "Person 1",
    
};

console.log(JSON.stringify(Obj1) === JSON.stringify(Obj2));
console.log(Obj1 === Obj2);
