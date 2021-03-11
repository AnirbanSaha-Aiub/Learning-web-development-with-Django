var fname = prompt("What is your first name:" )
var lname = prompt("What is your last name:" )
var age = prompt("What is your age:")
var height = prompt("What is your height:")
var pet = prompt("What is your pet name:")



if (fname[0]===lname[0] && age<30 && age>20 && height>170 && pet[pet.length-1] === "y") {
  console.log("you are a Spy.")
}
else {
  console.log("sorry there")
}
