function gotoLink(link) {
	window.open(link.value);
}
function topFunction() {
	document.documentElement.scrollTop = 0;
}
function bottomFunction() {
	document.documentElement.scrollTop = document.documentElement.scrollHeight;
}
// window.addEventListener("scroll", () => {
// 	if (window.scrollY > 1) {
// 		downBtn.style.visibility = "hidden";
// 	} else {
// 		downBtn.style.visibility = "visible";
// 	}
// });