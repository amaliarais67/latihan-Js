// NO 1
/**
 * PSEUDOCODE 
 * STORE power WITH ANY NUMBER
 * 
 * IF power GREATER THAN 100 THEN 
 *  DISPLAY "Expert"
 * ELSE IF power GREATER THAN 70 AND LESS THAN EQUAL 100 THEN 
 *  DISPLAY "Pro"
 * ELSE IF power GREATER THAN  50 AND LESS THAN EQUAL 70 THEN 
 *  DISPLAY "Normal"
 * ELSE IF power GREATER THAN 30 AND LESS THAN EQUAL 50 THen 
 *  DISPLAY "Basic"
 * ELSE IF power LESS THAN EQUAL 30 THEN 
 *  DISPLAY "Beginner"
 * END IF
 */
// CODING 

// var power = 75;

// if (power > 100){
//     console.log("Character is Expert")
// } else if (power > 70 && power <= 100){
//     console.log("Character is Pro")
// } else if (power > 50 && power <= 70){
//     console.log("Character is Normal")
// } else if (power > 30 && power <= 50){
//         console.log("Character is Basic")
// } else if (power >= 30 ){
//             console.log("Character is Beginner")
// }

// NO 2 
/**
 * PSEUDOCODE
 * 
 * STORE minuman WITH ANY STRING
 * 
 * IF minumnan EQUAL "Sweat Tea" THEN
 *  DISPLAY "You choose Sweat Tea, thanks"
 * ELSE IF minuman EQUAL "Plain Tea" THEN
 *  DISPLAY "You choose Plain Tea, thanks"
 * ELSE IF minuman EQUAL "Boba" THEN
 *  DISPLAY "You choose Boba, thanks"
 * ELSE IF minuman EQUAL "Milk Coffe" THEN
 *  DISPLAY "You choose Milk Coffe, thanks"
 * ELSE IF minuman EQUAL "Choco Ice" THEN
 *  DISPLAY "You choose Choco Ice, thanks"
 * END IF
 */
// CODING
// var minuman = "Sweet Tea";
// switch(minuman){
//     case "Sweet Tea":
//         console.log("You choose Sweat Tea, thanks")
//     break;
//     case "Plain Tea":
//         console.log("You choose Plain Tea, thanks")
//     break;
//     case "Boba":
//         console.log("You choose Boba, thanks")
//     break;
//     case "Milk Coffe":
//         console.log("You choose Milk Coffe, thanks")
//     break;
//     case "Choco Ice":
//         console.log("You choose Choco Ice, thanks")
//     break;
// }

// NO 3 
/**
 * PSEUDOCODE
 * STORE pembelian WITH ANY NUMBER 
 * STORE coupon WITH ANY STRING 
 * IF coupon EQUAL "FreeOngkir" THEN 
 *  IF pembelian GREATER THAN EQUAL 50000 THEN 
 *      STORE diskon 
 *      SET diskon WITH pembelian substracted (pembelian MULTIPLY 10 DIVIDED 100)
 *      DISPLAY "Total pembelian anda Rp. diskon"
 *  IF pembelian GREATER THAN 30000 AND LESS THAN EQUAL 50000 THEN
 *      SET diskon WITH pembelian substracted (pembelian MULTIPLY 5 DIVIDED 100)
 *      DISPLAY "Total pembelian anda Rp. diskon"
 *  IF pembelian LESS THAN EQUAL 30000 THEN
 *      SET diskon WITH pembelian substracted (pembelian MULTIPLY 2.5 DIVIDED 100)
 *      DISPLAY "Total pembelian anda Rp. diskon"
 *  END IF
 * ELSE IF coupon EQUAL "Free15%" THEN
 *  IF pembelian GREATER THAN EQUAL 30000 THEN
 *      SET diskon WITH pembelian substracted (pembelian MULTIPLY 15 DIVIDED 100)
 *      DiSPLAY "Total pembelian anda Rp. diskon"
 *  IF pembelian LESS THAN 30000 THEN
 *      SET diskon WITH pembelian substracted (pembelian MULTIPLY 0 DIVIDED 100) 
 *      DISPLAY "Total pembelian anda Rp. diskon"
 * END IF 
 */
// CODINGAN
var coupon = "FreeOngkir";
var pembelian = 100000;
switch (coupon){
    case 'FreeOngkir':
        if(pembelian >= 50000){
            var diskon = pembelian - (pembelian * 10/100);    
            console.log("Total pembelian anda Rp. " + diskon)
        } else if (pembelian >= 30000 && pembelian < 50000){
            var diskon = pembelian - (pembelian * 5/100); 
            console.log("Total pembelian anda Rp. " + diskon)
        } else { (pembelian < 30000 && pembelian < 50000)
            var diskon = pembelian - (pembelian * 2.5/100); 
            console.log("Total pembelian anda Rp. " + diskon)
        }
    break;
    case 'Free15%':
        if(pembelian >= 30000){
            var diskon = pembelian - (pembelian * 15/100);    
            console.log("Total pembelian anda Rp. " + diskon)
        } else{
            var diskon = pembelian - (pembelian * 0/100);    
            console.log("Total pembelian anda Rp. " + diskon)
        }
    break;
}