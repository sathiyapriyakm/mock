
//code here to fetch the meaning of the word from API
var formres=document.getElementById("myform");
formres.addEventListener("submit",(event)=>{
event.preventDefault();//to overcome default behaviour
var word=document.getElementById("searchword").value;
var url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

dictionary(url);
});

async function dictionary(url){
try{
    let response=await fetch(url);
    let data=await response.json();
    let phonetic=document.getElementById("phonetic");
    let meanings=document.getElementById("meaning");
    let partOfSpeech=document.getElementById("partofspeech");
    phonetic.innerHTML="";
    meanings.innerHTML="";
    partOfSpeech.innerHTML="";
    phonetic.append(`Phonetic :${data[0].phonetic}`);
    meanings.append(`Meaning :${data[0].meanings[0].definitions[0].definition}`);
    partOfSpeech.append(`Parts Of Speech :${data[0].meanings[0].partOfSpeech}`);
}
catch(error){
    console.log(error);
}

}