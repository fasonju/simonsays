var order = []
var counter = 0
function playersturn()
{
    if(counter == 0){
        order = curr.slice()
    }
    currentcolor = order.shift()
    switch(currentcolor){
        case 0:
            document.getElementById("one").addEventListener("click",correctnode)
            document.getElementById("two").addEventListener("click",wrongnode)
            document.getElementById("three").addEventListener("click",wrongnode)
            document.getElementById("four").addEventListener("click",wrongnode)
            break
        case 1:
            document.getElementById("one").addEventListener("click",wrongnode)
            document.getElementById("two").addEventListener("click",correctnode)
            document.getElementById("three").addEventListener("click",wrongnode)
            document.getElementById("four").addEventListener("click",wrongnode)
            break
        case 2:
            document.getElementById("one").addEventListener("click",wrongnode)
            document.getElementById("two").addEventListener("click",wrongnode)
            document.getElementById("three").addEventListener("click",correctnode)
            document.getElementById("four").addEventListener("click",wrongnode)
            break
        case 3:
            document.getElementById("one").addEventListener("click",wrongnode)
            document.getElementById("two").addEventListener("click",wrongnode)
            document.getElementById("three").addEventListener("click",wrongnode)
            document.getElementById("four").addEventListener("click",correctnode)
            break
    }
    if(counter == curr.length){
        counter = 0
        playorder()
    }
}

function correctnode()
{
    beep()
    counter +=1
    cleanbuttons()
    playersturn()
}

function cleanbuttons()
{
    var buttons = document.getElementsByClassName("simonsbutton")
    for(var button of buttons)
    {
        var newbutton = button.cloneNode()
        button.parentNode.replaceChild(newbutton,button)
    }
}

function wrongnode()
{
    beep3()
    if(lives == 1){
        stopgame()
        return
    }
    lives -=1
    var liveselements = document.getElementById("lives").children
    document.getElementById("lives").removeChild(liveselements[0])

}