// function printNumbers(num){
//     let factor = [];
//     let hasil = [];
//     for(var i = 2;; i++){
//         let prima = true
//     for(var j = 2; j < i; j++){
//         if(num % i === 0){
//             factor++
//             prima=false
//         }
//     }
//     if(prima){
//         hasil.push(i)
//     }
//     if(hasil.length==num){
//         break;
//     }
//   }
//   return hasil;
// }

// console.log(printNumbers(5));


// function pythagoreanTriplet(a,b,c){           
//         d = (a * a + b * b);
//         if(d === c*c){
//           return "true";
//         }
//         else {
//             return "false";
//         }
//     }
//   console.log(pythagoreanTriplet(3,4,5))
//   console.log(pythagoreanTriplet(3,3,3))

function splitToArray(string) {
        // a = string.toString();
        var arr=[];
        if (a = string.toString()){
        for (var i =0; i<a.length-1; i++) {
            arr.push(Number(a[i]+''+a[i+1]));
           }
         }else{
            console.log("input number")
        }
        return arr;
        } 
        
// console.log(splitToArray("5275789312"));
function findTheLargest(string){
    let arrayNumbers = splitToArray(string);
    for(var i=0;i<arrayNumbers.length;i++)
        {    
             if(i == 0)
             { 
              var nilai_mak = arrayNumbers[i];
             }
             else
             {
                    if(arrayNumbers[i] > nilai_mak)
                    {
                      nilai_mak = arrayNumbers[i];
                    }
             }              
        } 
        return nilai_mak;
}

console.log(findTheLargest("5275789312"));
console.log(findTheLargest("313282787")); // 87
console.log(findTheLargest("19")); // 19
console.log(findTheLargest("7")); // 7
console.log(findTheLargest()); // Input numbe