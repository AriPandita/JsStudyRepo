
// Break memiliki sifat untuk menghentikan semua fungsi kode jika kondisi terpenuhi
let i = 1;
while (true){

    document.write(`<p>Perulangan dengan break ke ${i}</p>`);
    i++;

    if (i > 10){
        break;
    }

}

document.write('<br>');

// Continue memiliki sifat untuk menghentikan fungsi kode yang sedang berjalan dan melanjutkan ke fungsi kode selanjutnya
for (let count = 1; count <= 20; count++){

    // jika hasil sisa bagi variable count sama dengan 0, maka fungsi kode akan dihentikan dan melanjutkan ke fungsi kode selanjutnya (post statement dari for/ count++)
    if (count % 2 == 0){
        continue;
    }

    document.write(`<p>Bilangan ganjil - ${count}</p>`);
}