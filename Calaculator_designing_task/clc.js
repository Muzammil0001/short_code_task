
let input = document.getElementById("input_box");
let buttons = Array.from(document.getElementsByClassName("Button"));
console.log(buttons);
let input_txt = "";

buttons.forEach(function(btn){
    btn.addEventListener("click",ClickFun)
        }
)

function ClickFun(e) {
    if (e.target.innerHTML === "=") {
      
        input_txt = eval(input_txt);
        input.value = input_txt;
    }
    else if (e.target.innerHTML === "C") {
      
        input_txt = "";
        input.value = input_txt;
    }
    else {
       
        input_txt = input_txt + e.target.innerHTML;
        input.value = input_txt;
    }
}