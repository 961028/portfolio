function toggleTheme() {
	var current = document.documentElement.getAttribute("data-theme");
	var next = current === "dark" ? "light" : "dark";
	document.documentElement.setAttribute("data-theme", next);
	localStorage.setItem("theme", next);
}

window.addEventListener("pageshow", function (event) {
	if (event.persisted) {
		var theme = localStorage.getItem("theme") || "light";
		document.documentElement.setAttribute("data-theme", theme);
	}
});
