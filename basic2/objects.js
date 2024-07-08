const mysym = Symbol("key1")

const jsuser = {
    neame : "hitesh",
    "full name" : "hitesh choudhary",    
    [mysym] : "key1",
    age : 18,
    location : "jaipur",
    email : "hitesh@gmail.com",
    islogedin : false,
    lastlogindays : ["monday", "saturday"]
}

console.log(jsuser);
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mysym])

jsuser.email = "hitesh@chatgpt.com"
// Object.freeze(jsuser)                  // to fix the values , no one can change it
jsuser.email = "hitesh@microsoft.com"
console.log(jsuser);

jsuser.greeting = function() {
    console.log("hello js user");
}

jsuser.greetingtwo = function() {
    console.log(`hello js user, ${this.neame}`);  //this is use ot access the properties of object which we are using
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());