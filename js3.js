var phone = prompt("Enter your phone number xxx-xxx-xxxx (This will not be used for SPAM)")

if(phone.charAt(3) && phone.charAt(7) === "-"){
    alert("Thank you for your phone number!")
}
else{
    alert("Please use xxx-xxx-xxxx format!")
}

var dob = prompt("Enter your date of birth xx/xx/xx)")

if(dob.charAt(2) && dob.charAt(5) === "/"){
    alert("Thank you for your date of birth!")
}
else{
    alert("Please use xx/xx/xx format!")
}

var code = prompt("Enter your postal code xxxxx OR xxxxx-xxxx)")

if(code.length === 5 || 10){
    alert("Thank you for your postal code!")
}
else{
    alert("Please use xxxxx OR xxxxx-xxxx format")
}

var state = prompt("Enter your state abbreviation XX")
var capital = state.toUpperCase()

if(state === capital){
    alert("Thank you for your State!")
}
else{
    alert("Please use XX format")
}

var married = prompt("Are you married? yes or no")

if(married === "yes" || married === "Yes" || married === "YES"){
    alert("Congratulations and you are done with this form!")
}
else{
    alert("There are plenty of fish in the sea, but at least you are done with this form!")
}