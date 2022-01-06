x = new fullpage('#fullpage', {
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: true,
    anchors: ['#s1', '#s2', '#s3', '#s4']
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
    menu.removeAttribute("class", "on")
    menu.setAttribute("class", "off");
}

function exitp(){
    menu.removeAttribute("class", "on")
    menu.setAttribute("class", "off");
    
}

