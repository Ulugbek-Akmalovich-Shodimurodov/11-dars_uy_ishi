
    // harflarSoni

function harflarSoni(){
    let sum = 0;
    let suz = prompt("so'zni kiriting:")
    let harf = prompt("harfni kiriting:")



    for(let i = 0 ; i< suz.length ; i++){
        if(suz[i] == harf){
            sum += 1;
        }
    }
    console.log(sum, "ta", harf, "harfi bor");
    return sum;
}

// teskari son 

let funcTeskariSon = function (){
    let son = prompt("sonni kiriting:");

    console.log(son - 0);

    typeof(son) == 'number' ? son.split('').reverse().join('') - 0 : 'son kiriting'
    
    let arr = son.split('');
    let teskariSon = arr.reverse().join('') - 0;

    console.log(teskariSon);

    return teskariSon;
 
}
// funcTeskariSon();

