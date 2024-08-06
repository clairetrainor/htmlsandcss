$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

const arr= ["https://www.google.com", "https://www.youtube.com", "https://www.twitter.com"];

function randSite(){
    document.getElementById("random").href= arr[Math.floor(Math.random()*arr.length)];
    return false;
}

document.getElementById("random").addEventListener("click", randSite());

function goLogin() {
    window.location.href="login.html";
}

document.getElementById("createButton").addEventListener("click",goLogin())


function gotoMain() {
window.location.href="mainPage.html";
}

document.getElementById("loginButton").addEventListener("click", gotoMain());