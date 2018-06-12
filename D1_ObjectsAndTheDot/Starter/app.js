var person = new Object();

person["firstName"] = "Tony";
person["lastName"] = "Montana";

var firstNameProp = "firstName";

console.log(person.address);
console.log(person[firstNameProp]);

person.address = new Object();
person.address.street = "123 N Phoenix St.";
person.address.city = "Phoenix";
person.address.state = "AZ";

console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);
console.log(person["address"]);
