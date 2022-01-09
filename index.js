x = new fullpage('#fullpage', {
    anchors: ['#s1','se2', '#s3', '#sec4'],
    navigation: true,
    navigationPosition: 'right',
});



let menu = document.getElementById("tend");
function navbar() {
    menu.setAttribute("class", "on");
    let d = menu.classList.contains("on");

    if(d == true){
        x.navigation = false;
    }else{
        x.navigation = true;
    }
}
//Anuimazione navbar
function home(){
    x.moveTo('#s1', 1)
}

function projects(){
    x.moveTo('#s3', 1)
}

function contacts(){
    x.moveTo('#sec4', 1)
}
//Animazioni mobile-navbar
function exit(){
    menu.removeAttribute("class", "on");
    menu.setAttribute("class", "off");
}

function exitp(){
    menu.removeAttribute("class", "on");
    menu.setAttribute("class", "off");
    setTimeout(()=>{
        x.moveTo('#s3', 1)
    }, 1000);
}

function exitc(){
    menu.removeAttribute("class", "on");
    menu.setAttribute("class", "off");
    setTimeout(()=>{
        x.moveTo('#sec4', 1)
    }, 1000);
}
