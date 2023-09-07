
//label digunakan untuk memberikan nama pada form dan bisa gunakan untuk memanggil perulangan yang ditandai dengan label tersebut

loopi: //label untuk perulangan i
for (let i = 0; i <= 10; i++){

    loopj: //label untuk perulangan j
    for(let j = 0; j <=100 ; j++){

        // kondisi dimana, jika j berjumlah lebih dari 20 maka perulangan j akan dihentikan dan dilanjutkan ke perulangan i yang selanjutnya
        if (j > 20){
            continue loopi;
        }
        console.info(`${i} - ${j}`);

    }
}