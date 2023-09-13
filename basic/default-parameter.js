
/*
================== Penjelasan =====================
===================================================
*/

function defaulParameter(nama, gender = "Unknown"){
    console.info(nama);
    console.info(gender);
}

defaulParameter('budi');
defaulParameter('budi', 'laki -laki');
defaulParameter('budi', undefined);
defaulParameter('budi', null);