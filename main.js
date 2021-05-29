var myBtn = document.getElementById("myBtn");
var selectText = document.getElementById("selectText");
var social = document.getElementsByClassName("social");
var social_media = document.getElementById("social_media");
var fast_down = document.getElementById("fast_down");

myBtn.onclick = function(){
    social_media.classList.toggle("hide");
    fast_down.classList.toggle("rotate");
}
for(containar of  social){
    containar.onclick = function(){
        selectText.innerHTML = this.textContent;
        social_media.classList.toggle("hide");
        fast_down.classList.toggle("rotate");
    } 
}