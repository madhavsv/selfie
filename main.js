var SpeechRecognition=window.webkitSpeechRecognition;
var recogintion=new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
    recogintion.start();


}
recogintion.onresult=function run(event) {
    
    console.log(event);
    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    speak();
}