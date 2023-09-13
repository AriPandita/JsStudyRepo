
/*
================== Penjelasan =====================
1. Optional parameter adalah parameter yang tidak wajib diisi
2. Optional parameter dapat diisi dengan nilai default
3. Dalam javascript, optional parameter dapat diisi dengan nilai default dan parameter tidak wajib diisi
===================================================
*/

function optionalParameter(nama1, nama2, nama3){
    console.info(nama1);
    console.info(nama2);
    console.info(nama3);
}

optionalParameter();
optionalParameter('budi', 'kurniawan');
optionalParameter('saputra');