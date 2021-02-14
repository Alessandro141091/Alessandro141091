window.onscroll = function() {
    scrollFunction()
};

/* navbar */
function scrollFunction() {
  let min_navbar_size = 20;
  if (document.body.scrollTop > min_navbar_size || document.documentElement.scrollTop > min_navbar_size) {
    document.getElementById("navbar").style.padding = "20px 10px";
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
  }
} 

/* change emojis about me */
var emojis = ["&#128540;", "&#128512;"];
var wink = 0;
function changeFace() {
  var elem = document.getElementById("change-emoji");
  elem.innerHTML = emojis[wink];
  wink++;
  if (wink >= emojis.length) {
    wink = 0;
  }
}
setInterval(changeFace,1000);

/* enlarge/resize projects */
function enlarge(x) {
  x.style.width = "27rem";
}

function resize(x) {
  x.style.width = "24rem";
}