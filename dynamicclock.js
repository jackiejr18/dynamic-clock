
// Initialize section and icon variables. First line selects section element, second line seles icon class. Uses CSS for selection
let section = document.querySelector("section"),
		icons = document.querySelector(".icons");

// icons.onclick assigns event handler function to onclick event, next line toggles the dark class on section element.  
icons.onclick = () => {
	section.classList.toggle("dark");
}