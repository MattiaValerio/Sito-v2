x = new fullpage('#fullpage', {
    anchors: ['#s1','#s3', '#sec4'],
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
