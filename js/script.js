function gotoLink(link) {
	window.open(link.value);
}
function gotoHome(link) {
	location.href = link.value;
}
let upButton = document.getElementById("upBtn");
function topFunction() {
	document.documentElement.scrollTop = 0;
}