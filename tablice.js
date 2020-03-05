

var produkty = [
    "php",
    "Mysql",
    "javascript",
    "programowanie",
    "audyty"
];

var tmp = [
    "ziemia",
    "ksiezyc",
];

// produkty[produkty.length] = "nowy";
// produkty.push("dodaj");
//alert(produkty);

// associative arrays

var osoba = [];
osoba["imie"] = "arek";

//alert(osoba["imie"]);


var ul = document.getElementById("kursyTworzeniaStronWWW");
//alert(ul.innerHTML);
var liArray = ul.getElementsByTagName("li");
// alert(liArray[3].innerHTML);


var li = document.getElementsByTagName("li");


var pokaz = document.getElementById("pokaz");
//    pokaz.innerText =  li[5].innerHTML;

produkty[produkty.length] = "samochody";

document.getElementById("pokaz").innerHTML += produkty.concat(tmp).join("__");
// produkty = produkty.concat(tmp);
// join("_*_") <--- zamiast ,
document.getElementById("pokaz").innerHTML += "</br>----------------------------------------------</br>";
// document.getElementById("pokaz").innerHTML += produkty.pop();
// document.getElementById("pokaz").innerHTML += produkty.push("w");

document.getElementById("pokaz").innerHTML += "</br>----------------------------------------------</br>";
document.getElementById("pokaz").innerHTML += "liczba elementow tablicy oryginalnej = "+produkty.length;
document.getElementById("pokaz").innerHTML += "</br>----------------------------------------------</br>";
document.getElementById("pokaz").innerHTML += ".>...."+produkty.toString();
document.getElementById("pokaz").innerHTML += "</br>----------------------------------------------</br>";


//   function test() {
//       var x = 0;
//       while ( x < 20){
//
//            if(( (x % 2) === 0) && ( x !== 0) ){
//                produkty.push(x);
//            }
//           x++;
//
//       }
//   }
// test();

// document.getElementById("pokaz").innerHTML += produkty.join("</br>");


var zmienna = document.getElementById('tablica');


var ulElement = document.getElementById("kursyTworzeniaStronWWW");
var ulElementLi =  ul.getElementsByTagName("li");

var nowaTablica = [


];

var y = 0;
while ( y < ulElementLi.length){

    // zmienna.innerHTML += liArray[y].innerHTML;
    // nowaTablica.push(liArray[y]);



    nowaTablica.push("<div class='red'>"+liArray[y].innerHTML+"<a href='#'>wp</a>"+"</div>");

    y++;
}



document.getElementById("tablica").innerHTML += "</br>----------------------------------------------</br>";


nowaTablica = [nowaTablica.join("")];

document.getElementById("kursyTworzeniaStronWWW").innerHTML = nowaTablica.sort();


document.getElementById("kursyTworzeniaStronWWW").style.background = 'beige';
