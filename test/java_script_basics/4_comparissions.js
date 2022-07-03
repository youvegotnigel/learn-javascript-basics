var s1 = "Nigel";
var s2 = "Dave";
var s3 = new String("Nigel");
var s4 = new String("Nigel");

console.log(s1==s2);
console.log(s1==s3);
console.log(s1===s3); //check types
console.log(s3===s3);
console.log(s3===s4);