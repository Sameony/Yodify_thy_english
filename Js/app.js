var btn = document.querySelector("#btn-check");
var txt_input = document.querySelector("#txt-input");
console.log(txt_input);
function clickEventHandler()
{
    console.log("You clicked it!!!!");
    console.log("input is",txt_input.value);
}
btn = addEventListener("click",clickEventHandler);

