// var number = 10 ;
// var faktor = 1 ;
// var temp = "";
// for (i = 1; i <= number; i++){
//     if (i % 2 === 0){
//         temp = temp + ","+ [i] 
//     var output = temp.substring(1)
//     }
// }
// console.log(output);

// var n = 5; 
// var temp = "";
// for(var i = 0; i < n; i++){
//     for(var j = 0; j <= i; j++){
//         if (j % 2 === 0){
//             temp += "#";
//         }else{
//             temp += "x" ; 
//         }
//     }
//     console.log(temp)
//     temp=""
// }
var input = 5;
var temp = "";
for(var i = 0; i < input; i++){
    for(var j = 0; j < input; j++){
        if(i === 0 || i === input - 1){
            temp = temp + "#";
        }
        else{
            if(j === 0 || j === input - 1){
            temp = temp + "#";
        }
        else{
            temp +=" ";
        }
    }

}
temp += "\n";
}
console.log(temp);