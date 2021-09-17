var inputs = document.querySelector(".textarea1");

var output = document.querySelector(".textarea2");

var convertButton = document.querySelector(".btn");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function translationURL (input){
    return serverURL +"?"+ "text="+ input
}

function errorHandler(error){
    console.log("error accured", error);
    alert("server isn't working! try later")
}

function clickHandler(event){
    var inputText = inputs.value
    fetch(translationURL(inputText))
    .then(response => response.json())
    .then(json => {
    var convertedText = json.contents.translated;
    output.innerText = convertedText; })
    .catch(errorHandler)
}

convertButton.addEventListener("click", clickHandler)