// let smallestCountry = prompt('Kokia yra maziausia salis pasaulyje?', '');

// if (smallestCountry == 'Vatikanas'){
//     alert( 'Teisingai!' );
// } else {
//     alert( 'Rimtai? Taigi Vatikanas!' );
// } 

// let a = 1;
// let b = 3;

// let result = (a + b < 4) ? 'below' : 'over';
// console.log(result);

// let login = prompt('who is logging in', 'Your work position');

// let message = (login == 'Employee') ? 'Hello' :
// (login == 'Director') ? 'Greetings' :
// (login == '') ? 'No login' :
// 'Get out';

// alert( message);

// let legalAge = 20;
// let clientAge = 19.5;

// if (clientAge >= legalAge){
//     console.log( 'You shall pass' );
// } else {
//     console.log( 'You shall NOT pass!' );
// }

// let name = 'Martynas';
// if (name.length > 6) {
//     console.log( "Ilgas vardas" );
// } else {
//         console.log( 'vardas tinkamo ilgio' );
//     }  

// let myAge = 25;

// if (myAge <= 0 || myAge > 100){
//     console.log( 'Invalid age' );
// }
// else if (myAge > 0 && myAge <=18){
//     console.log( 'Child' )
// }
// else if (myAge > 19 && myAge <=99){
//     console.log( 'Adult' )
// }

// let car = 'Porsche';

// if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche'){
//     console.log( 'Your car belongs to VW group' );
// } else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Rooyce'){
//     console.log( 'Your car belongs to BMW Group' );
// } else{
//     console.log( 'You car belongs to neither VW Group nor BMW Group' );
// }

// let myName = prompt('Name', '');

// let message = (myName.length < 5) ? 'short name' :
// 'long name' ;

// console.log(message);

// let clientAge = 17;
// let legalAge = 18;

// let result = (clientAge >= legalAge) ? 'Can Drive' : 'Cant drive';
//  console.log(result);

// let clientAge = 17;
// let legalAge = 18;

// clientAge < 0 || clientAge > 120 ? console.log( 'Invalid age' ) :
// clientAge >= legalAge ? console.log('Can Drive') : console.log('Cant drive');

// let phone = 'iphone';
// let isIphoneUser = phone === 'iPhone';

// let age = 15;

// if (age >= 14 && age <= 90){
//     console.log( 'Valid age' );
// } else{
//     console.log( 'Invalid' );
// }

// let age = 9;

//  if (!(age >= 14 && age <= 90)){
//      console.log( 'Valid age' );
//  } 

//  if (age < 14 || age > 90);

// let browser = prompt("Enter browser's name");

// if (browser === 'Edge'){
//     alert( "RIP Edge!" );
// } else if (browser === 'Chrome'
//     || browser === 'Firefox'
//     || browser === 'Safari'
//     || browser === 'Opera') {
//     alert( 'Šios naršykles palaikomos' );
// } else{
//     alert( 'Tikimės, kad šis puslapis atrodys puikiai!' );
// }

// let a = +prompt('a?', '');

// switch(a){
//     case 0:
//         alert( 0 );
//         break;
//     case 1:
//         alert( 1 );
//         break;
//     case 2:
//     case 3:
//         alert( '2.3' );
//         break;
// }

// let car = 'Rolls-Royce';

// switch (car){
//     case 'VW':
//     case 'Audi':
//     case 'Bentley':
//     case 'Bugatti':
//     case 'Lamborghini':
//     case 'Porsche':
//         alert ( 'priklauso VW grupei' );
//         break;
//     case 'BMW':
//     case 'Mini':
//     case 'Rolls-Royce':
//         alert ( 'priklauso BMW grupei' );
//         break;
//     default:
//         alert( 'Ivesta marke nepriklauso nei BMW nei VW grupei' )    
// }

// let userInput = 'pupele';

// switch(userInput){
//     case 'arbuzas':
//     case 'melionas':
//     case 'bananas':
//     case 'ananasas':
//     case 'kriause':
//         console.log ( 'vaisius' )
//         break;
//     case 'kalafioras':
//     case 'runkelis':
//     case 'kopustas':
//     case 'morka':
//     case 'pupele':
//         console.log ( 'darzove' )
//         break;
//     default:
//         console.log ( 'nesuprantu' );
// }


let weekDay = 1;

switch (weekDay) {
    case 0:
        weekDay = 'pirmadienis'
        break;
    case 1:
        weekDay = 'antradienis'
        break;
    case 2:
        weekDay = 'treciadienis'
        break;
    case 3:
        weekDay = 'ketvirtadienis'
        break;
    case 4:
        weekDay = 'penktadienis'
        break;
    case 5:
        weekDay = 'sestadienis'
        break;
    case 6:
        weekDay = 'sekmadienis'
        break;
    default:
        alert( 'tokios dienos nera' );
}
console.log(weekDay);