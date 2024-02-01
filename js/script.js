function gotoLink(link) {
	window.open(link.value);
}
function gotoHome(link) {
  location.href = link.value;
}
let upButton = document.getElementById("upBtn");

window.onscroll = function() {scrollFunction()};
function topFunction() {
  document.documentElement.scrollTop = 0;
}