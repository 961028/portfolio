function toggleTheme() {
	const current = document.documentElement.getAttribute("data-theme");
	const next = current === "dark" ? "light" : "dark";
	document.documentElement.setAttribute("data-theme", next);
	localStorage.setItem("theme", next);
}

function toggleFontSize() {
	const current = document.documentElement.getAttribute("data-font-scale");
	if (current === "large") {
		document.documentElement.removeAttribute("data-font-scale");
		document.documentElement.style.removeProperty("--font-scale");
		localStorage.removeItem("fontScale");
	} else {
		document.documentElement.setAttribute("data-font-scale", "large");
		document.documentElement.style.setProperty("--font-scale", "1.15");
		localStorage.setItem("fontScale", "large");
	}
}

window.addEventListener("pageshow", (event) => {
	if (event.persisted) {
		const theme = localStorage.getItem("theme") || "light";
		document.documentElement.setAttribute("data-theme", theme);

		const fontScale = localStorage.getItem("fontScale");
		if (fontScale === "large") {
			document.documentElement.setAttribute("data-font-scale", "large");
			document.documentElement.style.setProperty("--font-scale", "1.15");
		} else {
			document.documentElement.removeAttribute("data-font-scale");
			document.documentElement.style.removeProperty("--font-scale");
		}
	}
});

document.addEventListener("DOMContentLoaded", () => {
	document
		.querySelector(".theme-toggle")
		?.addEventListener("click", toggleTheme);
	document
		.querySelector(".font-size-toggle")
		?.addEventListener("click", toggleFontSize);
});
