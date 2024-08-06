$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

const arr= ["google.com", "youtube.com", "twitter.com"];

function randSite(){
    document.getElementById("random").href= "http://" + arr[Math.floor(Math.random()*arr.length)];
    return false;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("random").addEventListener("click", randSite);
})