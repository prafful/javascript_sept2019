console.log("hello from external JS!")
document.write("<b>from external JS</b><br>")

var name = "prafful"
console.log(name )
document.write(name )
window.alert("Hello: ")

//message = prompt("hello: ")

//document.write("<br> " + message)


meToo = function(){
    console.log("Next will be callback functions!")
}

welcome()
meToo()

function welcome(){
    console.log("I am In function!");
}


