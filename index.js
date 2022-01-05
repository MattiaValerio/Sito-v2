new fullpage('#fullpage', {
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: true,
});


let menu = document.getElementById("tend");
function navbar() {
    menu.setAttribute("class", "on");
    menu.classList.contains('on');
}

function exit(){
    menu.setAttribute("class", "off");
    menu.classList.contains('off');
}