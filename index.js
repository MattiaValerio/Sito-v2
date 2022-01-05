new fullpage('#fullpage', {
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: true,
});

var x = document.getElementById("tend");
function navbar() {
    x.setAttribute("class", "on")

  }

let g = x.classList.contains('on');
if(g == true){
    fullpage.navigation=false
}