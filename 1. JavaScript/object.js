// similar to hashmaps
// object -> group of key : value pair ,
// if key : value -> property
// if key : function -> method

let cap = {
    name : "Steve",
    lastName : "Roggers",
    address : {
        city : "Massachusetts",
        Country : "USA"
    },
    age : 35,
    isAvenger : true,
    movies : ['first Avenger', 'winter soldier', 'civil war'],

    sayHi : function () {
        console.log('cap says Hi');
    }
};

// get
console.log ('----------get----------')
console.log(cap.name);
console.log (cap.age);
console.log(cap.movies[1]);
cap.sayHi();

// set
console.log ('----------set----------')
console.log(cap);
cap.age = 20;
cap.isAvenger = false;
cap.friends = ['Tony', 'Bruce', 'Peter'];
console.log('----------------------------');
console.log('cap: ', cap);

// delete
console.log ('----------delete----------')
delete cap.address;
console.log(cap);

// for in
console.log ('----------for in----------')
for(let key in cap){
    console.log('key is' ,key, ' :: ', 'value is', cap[key]);
}
console.log ()
console.log ('----------propKey----------')
let propKey = "age";
console.log(cap[propKey]);
console.log(cap.age);
console.log(cap.xyz);
