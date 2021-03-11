

//Global scope
var v = " Golbal V"
var stuff = "Global Stuff"

function fun(stuff){
  console.log(v);
  stuff = "Reassign Stuff inside func"
  console.log(stuff);
}
fun()
console.log(stuff);
