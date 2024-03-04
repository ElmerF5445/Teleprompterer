let keysPressed = {}; 
document.addEventListener('keydown', (event) => {
	keysPressed[event.key] = true;
	

	if (keysPressed['Control'] && event.key == 'b') {
        if(Element_Attribute_Get("ClockScreen", "UI_Status") != "Disabled"){
            ClockScreen_Toggle();
        }
        
	}
	
	if (keysPressed['Control'] && event.key == 'ArrowUp') {
		scrollToPosition('top');
	}
	
	if (keysPressed['Control'] && event.key == 'ArrowDown') {
		scrollToPosition('bottom');
	}
	
	if (keysPressed['Escape']){
		if (Subwindows_CurrentlyActiveSubwindow != undefined || Subwindows_CurrentlyActiveSubwindow != null){
			Subwindows_Close(Subwindows_CurrentlyActiveSubwindow);
		}
		
	}
	
	if (keysPressed['Alt'] && event.key == 'ArrowDown') {
		if(App_Property.Sidebar_UseTabs == true){
			Tabs_ChangeTab_Direction("Forwards", "Sidebar");
		}
	}
	
	if (keysPressed['Alt'] && event.key == 'ArrowUp') {
		if(App_Property.Sidebar_UseTabs == true){
			Tabs_ChangeTab_Direction("Backwards", "Sidebar");
		}
	}

	if (keysPressed['PageUp']) {
		console.log("UP");
		TP_Prompt_Step("Down");
		event.preventDefault();
	}

	if (keysPressed['PageDown']) {
		console.log("DOWN");
		TP_Prompt_Step("Up");
		event.preventDefault();
	}

	if (keysPressed['Tab']) {
		console.log("ENTER");
		TP_Prompt_ToggleMovement();
		event.preventDefault();
	}
});

document.addEventListener('keyup', (event) => {
	delete keysPressed[event.key];
});

// var interval = window.setInterval(function () {
//     // do your thing, do your thing
// }, 1000);

// document.onkeypress = function () {
//     if (/* some specific character was pressed */) {
//         window.clearInterval(interval);

//         // do some other thing, other thing
//     }
// };
