function gotoLink(link) {
	window.open(link.value);
}
function gotoHome(link) {
	location.href = link.value;
}
function topFunction() {
	document.documentElement.scrollTop = 0;
}
function bottomFunction() {
	document.documentElement.scrollTop = document.documentElement.scrollHeight;
}