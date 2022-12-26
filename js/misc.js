window.oncontextmenu = (e) => {
  e.preventDefault();
  window.open('https://markchanec.github.io/pycheat')
}

function replace(topic) {
  document.getElementById("replaceText").textContent = topic;
}