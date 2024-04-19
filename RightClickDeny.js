document.oncontextmenu = () => {
	alert("Oooops Ooooops, no inspecting!")
	return false
}

document.onkeydown = e => {

	if(e.key == "F12"){
		alert("Inspect Element Disabled")
		return false
	}

	if((e.ctrlKey && e.key == "u") || (e.ctrlKey && e.key == "U")){
		alert("Viewing Page Source Disabled")
		return false
	}

	if((e.ctrlKey && e.key == "c") || (e.ctrlKey && e.key == "C")) {
		alert("Copying Disabled")
		return false
	}

	if((e.ctrlKey && e.key == "v") || (e.ctrlKey && e.key == "V")){
		alert("Disabled")
		return false
	}

	if((e.ctrlKey && e.key == "s") || (e.ctrlKey && e.key == "S")){
		alert("Disabled")
		return false
	}
}