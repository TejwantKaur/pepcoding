function fun(){
    console.log ("hello");
}

fun();

function func(param){
    console.log('parameter received ' , param);
}

func(10);
func(true);
func('hello');
func([10,20,30]);

function fu(param){
    // return 'hi';
    let val = Math.random() ;
    console.log(val)
    return val > 5 ? true : 'less than 0.25';
}
let vari = fu(8);
console.log(vari);