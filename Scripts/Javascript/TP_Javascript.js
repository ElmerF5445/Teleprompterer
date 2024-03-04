var TP_Prompt;
function TP_Prompt_Save(){
    TP_Prompt = document.getElementById("TP_InputPrompt").value;
    console.log(TP_Prompt);
    localStorage.setItem("TP_LastPrompt", TP_Prompt);
    window.location.href = "Pages/TP_Prompter.html";
}

function TP_Prompt_Load(){
    // if(localStorage.getItem("TP_LastPrompt") != null){
        TP_Prompt = localStorage.getItem("TP_LastPrompt");
        console.log(TP_Prompt);
        document.getElementById("TP_Prompter_Text").innerHTML = TP_Prompt;
        Subwindows_Open("TP_Prompter");
    // } else {
    //     TP_Prompt = "";
    // }
}


var TP_Step_Distance = 100;
var TP_Step_Location = 0;
function TP_Prompt_Step(Direction){
    if (Direction == "Up"){
        if (TP_Step_Distance != NaN || (TP_Step_Distance != null || TP_Step_Distance != undefined)){
            TP_Step_Location -= TP_Step_Distance;
        }
        document.getElementById("TP_Prompter_Text").style.transform = "translateY(" + TP_Step_Location + "px)";
    } else if (Direction == "Down") {
        if (TP_Step_Distance != NaN || (TP_Step_Distance != null || TP_Step_Distance != undefined)){
            TP_Step_Location += TP_Step_Distance;
        }
        document.getElementById("TP_Prompter_Text").style.transform = "translateY(" + TP_Step_Location + "px)";
    }
}

var TP_Prompt_MoveContent = false;
function TP_Prompt_ToggleMovement(){
    if (TP_Prompt_MoveContent == false){
        TP_Prompt_MoveContent = true;
    } else if (TP_Prompt_MoveContent = true){
        TP_Prompt_MoveContent = false;
    }
}

function TP_Prompt_MoveText(){
    if (TP_Prompt_MoveContent == true){
        while (TP_Prompt_MoveContent == true){
            TP_Prompt_Step('Up');
        }
    }
}

function TP_Settings_ApplyChanges(){
    TP_Step_Distance = document.getElementById("TP_Setting_StepValue").value;
    document.getElementById("TP_Prompter_Text").style.fontSize = document.getElementById("TP_Setting_FontSize").value + "rem";
}
