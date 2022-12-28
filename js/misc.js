/*
window.oncontextmenu = (e) => {
  e.preventDefault();
  window.open('https://markchanec.github.io/pycheat')
}
*/
$('#text').load('https://markchanec.github.io/pycheat/contents.txt');

function replace(topic) {
  document.getElementById("replaceText").textContent = topic;
}

window.onload = function() {showContent()};
function showContent() {
  var x = document.getElementById("contentList");
  var y = document.getElementById("contentBtn");
  var z = document.getElementById("example");
  if (x.style.display === "none") {
    x.style.display = "block";
	z.style.display = "none";
	y.innerHTML= "Hide directory";
  } else {
    x.style.display = "none";
	z.style.display = "block";
	y.innerHTML= "Show directory";
  }
}

//show upBtn when 20px from top
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
}

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}