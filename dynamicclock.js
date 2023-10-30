
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

	// declares the d variable
	let d; 
	d = hour < 12 ? "AM" : "PM"; // if hour is less than 12 value of D is set to AM, otherwise PM
	hour = hour > 12 ? hour - 12 : hour; // if hour is greater than 12, subtract 12 from hour for format
	hour = hour == 0 ? hour = 12 : hour; // if hour value is 0 then it is midnight, which is 12

	hour = hour < 10 ? "0" + hour : hour; // if hour is less than 10, prepend "0" as string concatenation, if greeater leave same
	min = min < 10 ? "0" + min : min; //similar for min
	sec = sec < 10 ? "0" + sec : sec; //same for sec

	document.querySelector(".hour_num").innerText = hour;
	document.querySelector(".min_num").innerText = min;
	document.querySelector(".sec_num").innerText = sec;
	document.querySelector(".am_pm").innerText = d;

}, 1000)