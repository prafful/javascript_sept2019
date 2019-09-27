setTimeout( callMe, 2000 )

function callMe(){
    document.write("<br>I am called after 2 seconds 1!")
    setTimeout(callMe2, 2000)
}

function callMe2(){
    document.write("<br>I am called after 2 seconds 2!")
}

//callback function
setTimeout( function(){ 
    document.write("<br> Called Again 1!")
    setTimeout( function(){
        document.write("<br> Called Again 2!")
        setTimeout(function(){
            document.write("<br> Called Again 3!")
            document.write("<hr>")
        }, 3000)
    }, 3000)
}, 3000 )

/* setInterval(bestFriends, 1000)

function bestFriends(){
    document.write("<br> Meet again!")
}
 */

 setTimeout(function(){
    setTimeout(function(){
        setTimeout(function(){
            document.write("<br> 10 +2 +2 sec gone!")
            document.write("<hr>")
        }, 2000)
        document.write("<br>10 + 2 sec gone!")
    }, 2000) 
    document.write("<br>10 sec gone!")
     
 }, 10000)
