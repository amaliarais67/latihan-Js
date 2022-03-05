/**
 * AROLOJI COLLECTION
 */
/**
 * PSEUDOCODE
 * STORE watches WITH ANY STRING 
 * STORE temp WITH ANY STRING
 * STORE output WITH ANYA STRING
 * FOR LOPING i EQUAL 0, I LESS THAN watches.LENGTH, i INCREMENT
 * IF i EQUAL watches.LENGTH SUBTRACTED - 1
 * VARIABLE temp EQUAL temp AND "dan" AND wathches[i] AND "."
 * ELSE 
 * VARIABEL temp EQUAL temp AND wathces[i] AND ","
 * DISPLAY 'saya punya jam ' AND VARIABEL temp
 */
// var watches= ["Swiss Army", "Daniel Wellington", "Dublot"];
// var temp = "";
// var output = "";
// for ( i = 0; i < watches.length; i++){
//     if (i == watches.length - 1){
//         temp = temp + " dan " + watches[i] + "."
//     }
//     else {
//     temp = temp + watches[i] +  ", " 
// }
// }
// console.log('saya punya jam ' + temp);

/**
 * MENGELOMPOKKAN SEBUAH ARRAY MENJADI ALFABET 
 */
/**
 * PSEUDOCODE
 * 
 * STORE fruits WITH ANY STRINGS
 * STORE map EUQAL ((m,a) EQUAL TO (a.FOREACH(s EQUAL TO 
 * VARIABLE A EQUAL M.GET(s[0]) OR [];
 * m.set(s[0], (a.push(s), a));
 * }), m)) (NEW MAP(), fruits);
 * DISPLAY map.get(a)
 * DISPLAY map.get(b)
 * DISPLAY map.get(c)
 * 
 */
//  let fruits = ["cherry","blueberry","avocado","apple","cranberry"]
//  let map = ((m, a) => (a.forEach(s => {
//      let a = m.get(s[0]) || [];
//      m.set(s[0], (a.push(s), a));
//    }), m))(new Map(), fruits);
 
//    console.log(map.get("a") );
//    console.log(map.get("b"));
//    console.log(map.get("c"));


/**
 * MEMECAH SEBUAH KAMLIMAT MENJADI PER KATA DAN MASUKKAN KE DALAM ARRAY
 */
/**
 * PSEUDOCODE
 * STORE kalimat WITH ANY STRING
 * STORE tempStr WITH ANY STRING
 * STORE tempArray WIHT ANY STRING
 * FOR LOOPING i EQUAL 0, i LESS THAN kalimat.LENGTH, i INCREMENT
 * IF kalimat i NOT EQUAL TO " "
 * VARIABLE tempStr EQUAL tempStr AND kalimat[i]
 * ELSE PUSH tempStr To tempArray AND tempStr ''
 * IF i EQUAL TO kalimat.LENGTH SUBTRACTED - 1
 * PUSH tempStr TO tempArray
 * DISPLAY tempARRAy
 * 
 */
// var kalimat = "belajar bersama dunia coding yuk";
// var tempStr = "";
// var tempArray = []

// for (var i = 0; i < kalimat.length; i++) {
//     if (kalimat[i] !== " ") {
//         tempStr += kalimat[i]
//     } else {
//         tempArray.push(tempStr)
//         tempStr = ''
//     }
//     if (i === kalimat.length - 1) {
//         tempArray.push(tempStr)
//         tempStr = ''
//     }
// }
// console.log(tempArray)
