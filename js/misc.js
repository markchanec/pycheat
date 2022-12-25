window.oncontextmenu = (e) => {
  e.preventDefault();
  window.open('https://markchanec.github.io/pycheat')
}

function replace(topic) {
  alert(topic);
  document.getElementById("demo").textContent = topic;
}