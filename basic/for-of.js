
// for of digunakan untuk mengambil 1 per 1 value dari array atau string dan bukan object atau sebuah iterable

// contoh penggunaan for of pada array
const names = ['budi', 'joni', 'tejo'];

for(nama of names){
    document.writeln(`<p>${nama}</p>`);
}

const buah = "apel";
for(b of buah){
    document.writeln(`<p>${b}</p>`);
}