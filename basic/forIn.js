
// for in digunakan untuk mengecek property dari sebuah object atau index dari sebuah array

const person = {
    name: "John",
    age : "30",
    city : "New York"
};

// jika menggunakan for in pada object maka akan mengembalikan property dari object tersebut
for(const property in person){
    document.write(`<p>${property} : ${person[property]}</p>`);
}

// jika menggunakan for in pada array maka akan mengembalikan index dari array tersebut
const fruits = ["Apple", "Banana", "Orange"];

for(const index in fruits){
    document.write(`<p>${index}: ${fruits[index]}</p>`);
}