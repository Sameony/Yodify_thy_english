//input
var btn = document.querySelector("#btn-check");
var txt_input = document.querySelector("#txt-input");
var txt_output = document.querySelector("#txt-output");

var serverURL ="https://api.funtranslations.com/translate/yoda.json";


/* fetching n stuffs*/ 
//processing
function makeUrl(text1)
{
    return (serverURL+"?" + "text=" + text1);
}
function errorHandler(error)
{
    console.log("Unexpected error occurred: "+error);
}
function fetchit(url)
{
    fetch(url)
    .then(response=>response.json())
    .then(json=>{
        txt_output.innerText=json.contents.translated})
    .catch(errorHandler)
}


function clickEventHandler()
{
    console.log("You clicked it!!!!");
    fetchit(makeUrl(txt_input.value)); //output
    
}

btn = addEventListener("click",clickEventHandler);

