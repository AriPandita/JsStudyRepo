
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
}

// tanpa with statement
document.writeln(`<p>${person.name}</p>`);
document.writeln(`<p>${person.age}</p>`);
document.writeln(`<p>${person.city}</p>`);

document.writeln(`<hr>`);

// dengan with statement
with(person){
    document.writeln(`<p>${name}</p>`);
    document.writeln(`<p>${age}</p>`);
    document.writeln(`<p>${city}</p>`);
}