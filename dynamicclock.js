
// Initialize section and icon variables. First line selects section element, second line seles icon class. Uses CSS for selection
let section = document.querySelector("section"),
		icons = document.querySelector(".icons");

// icons.onclick assigns event handler function to onclick event, next line toggles the dark class on section element.  
icons.onclick = () => {
	section.classList.toggle("dark");
}

// setInterval is used as a callback function that is to be executed repeatedly
setInterval(() => {
	let date = new Date(), // creates a new Date object to get current date and time 
	hour = date.getHours(), // store hour from date object
	min = date.getMinutes(), // store minute from date object
	sec = date.getSeconds(); // store seconds from date object 


})