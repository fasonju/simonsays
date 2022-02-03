currentindex = 0
var curr = []
let lives = 3

function startgame(){
    curr = []
    lives = 3
    currentindex = 0
    order = []
    counter = 0
    playorder()
    document.getElementById("start").toggleAttribute("disabled")
}

async function playorder(){
    var buttons = document.getElementsByClassName("simonsbutton")
    for(var button of buttons)
    {
        button.toggleAttribute("beeping",true)
    }
    color = Math.floor(Math.random() * 4)
    curr.push(color)
    timeout = 300
    for(let nums of curr)
    {
        setTimeout(function(){lightup(nums);beep()},timeout)
        timeout+=300
    }
    setTimeout(function(){for(var button of buttons)
        {
            button.toggleAttribute("beeping",false)
        }},timeout)
    playersturn()
}

async function lightup(color)
{
    switch(color){
        case 0:
            var couleur = document.getElementById("one")
            couleur.classList.add("active")
            setTimeout(() => {
                couleur.classList.remove("active")
            }, 200);
            break
        case 1:
            var couleur = document.getElementById("two")
            couleur.classList.add("active")
            setTimeout(() => {
                couleur.classList.remove("active")
            }, 200);
            break
        case 2:
            var couleur = document.getElementById("three")
            couleur.classList.add("active")
            setTimeout(() => {
                couleur.classList.remove("active")
            }, 200);
            break
        case 3:
            var couleur = document.getElementById("four")
            couleur.classList.add("active")
            setTimeout(() => {
                couleur.classList.remove("active")
            }, 200);
            break
    }

    
}

function stopgame(){
    curr = []
    currentindex = 0
    for(let i = 0; i < 3-lives; i++)
    {
        var live = document.createElement("div");
        live.classList.add("life")
        document.getElementById("lives").appendChild(live)
    }
    lives = 3
    cleanbuttons()
    beep2()
    for(color of document.getElementsByClassName("simonsbutton"))
    {
        color.classList.add("active")
    }
    setTimeout(function(){
        for(color of document.getElementsByClassName("simonsbutton"))
    {
        color.classList.remove("active")
    }
    },300)
    document.getElementById("start").toggleAttribute("disabled")
}
