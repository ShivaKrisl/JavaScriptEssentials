let userRole = "manager";
// let accessLevel;
// if (userRole === "admin") {
//     accessLevel = "Full access granted";
// } else if (userRole === "manager") {
//     accessLevel = "Limited access granted";
// } else {
//     accessLevel = "No access granted";
// }
// console.log("Access Level:", accessLevel);
let userMessage;
let isLoggedIn = true;

if (isLoggedIn){
    if (userRole === "admin"){
        userMessage = "Welcome Admin!!";
    }
    else if (userRole === "manager"){
        userMessage = "Welcome Manager!!";
    }
    else{
        userMessage = "welcome user!!";
    }
}
else{
    userMessage = "Please Login to the app!!";
}
console.log(userMessage);

// Switch Statements
let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);