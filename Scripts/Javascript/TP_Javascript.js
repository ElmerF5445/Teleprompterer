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