
/* 
====== Penjelasan ======
function return value adalah nilai yang dikembalikan oleh sebuah function
return pada function ini hanya bisa memberikan satu nilai saja tidak bisa lebih atau berulang kecuali menggunakan array
==========================
*/

// contoh function return value
function getName(firtsName, lastName){
    // bisa menggunakan variable seperti ini atau langsung pada return
    // return `${firtsName} ${lastName}`; (contoh)
    const fullName = `${firtsName} ${lastName}`
    return fullName;
    
}

// cara pemanggilan value dari sebuah function dengan return value
const result = getName('Ari', 'Pandita');
document.writeln(result);

document.writeln("<br>");

// contoh lain

function getValueResult(value){
    if(value > 90){
        return 'A';
    }else if(value > 80){
        return 'B'; 
    }else if(value > 70){
        return 'C'; 
    }
    else if(value > 60){
        return 'D';
    }else{
        return 'E'; 
    }
}

const resultValue = getValueResult(90);
document.writeln(resultValue);

document.writeln("<br>");

// contoh lain
function searchEngine(array, searchValue){
    for(element of array){
        if(element === searchValue){
            return true;
        }
    }

    return false;
}

const array = [21, 12, 333, 4, 5, 6, 7, 8, 9, 10];
const searchValue = 11;
const resultSearch = searchEngine(array, searchValue);
document.writeln(resultSearch);