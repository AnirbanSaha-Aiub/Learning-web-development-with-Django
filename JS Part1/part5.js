// var hot = false
// var temp = 10
//
// if (temp>80){
//   console.log("hot today!")
// }
// else if (temp<=80 && temp >=50) {
//   console.log("Avarage temp outside!")
//
// }else if (temp<50 && temp>= 32) {
//   console.log("its pretty cold out side")
//
// }else{
//   console.log("it is very cold today")
// }

var ham = 1;
var cheese = 10;
var report = "blank";

if (ham>=10 && cheese >= 10){
  report = "strong sales of both ham and cheese!"

}
else if (ham===0 && cheese===0){
  report = "nothing sold"
}
else {
  report = "we have sales of item"
}

console.log(report)
