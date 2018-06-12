var Ralph = {
    firstName: 'Ralph',
    lastName: 'Andrade',
    address: {
        street: '123 N Elm St.',
        city:'Phoenix',
        state: 'AZ'
    }
};

function greet(person) {
    console.log('Hi ' + person.firstName + ' ' + person.lastName);
}

//greet();
greet(Ralph);
greet({
    firstName: 'Mary', 
    lastName:'Doe'
});
//console.log(person);

