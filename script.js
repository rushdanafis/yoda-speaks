let input =document.querySelector("#input-element");
let translateBtn= document.querySelector(".Translate-button");
let output= document.querySelector(".output");
let url="https://api.funtranslations.com/translate/yoda.json"



function constructUrl(text){
    return url +"?"+"text="+text
}

 translateBtn.addEventListener("click",function translator(){
    console.log("clicked");
    console.log(input.value)
    fetch(constructUrl(input.value))
    .then(response=>response.json())
    .then(response=>{
        output.innerText=response.content.translated
    })
})