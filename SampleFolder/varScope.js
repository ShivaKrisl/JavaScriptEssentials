// Global scope
var varvalue = "I'm a global variable";
let letvalue = "I'm also global, but scoped with let";
const constvalue = "I'm a global constant";


{
    //console.log(letvalue); // let&const variable are block scope here variable not declared
    // Block scope
    var varvalue = "I'm a block-scoped var";
    let letvalue = "I'm a block-scoped let";
    const constvalue = "I'm a block-scoped const";
    console.log(varvalue);
    console.log(letvalue);
    console.log(constvalue);

}

console.log(varvalue);
console.log(letvalue);
console.log(constvalue);
/*
    globalConst = "lets see if i can change this";
    console.log(globalConst);
*/

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError