Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera=document.getElementById("camera");
 Webcam.attach("#camera");

 function takeSnapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
     });
 }
 console.log("ml5 version - ",ml5.version);
 classifier=ml5.imageClassifier("",modleLoaded);
 function modleLoaded(){
     console.log("model loaded true");
 }
 var prediction1="";
 var prediction2="";
 function speak(){
     synth=window.speechSynthesis;
     speak_data1="the first prediction is- ",prediction1;
     speak_data2="and the second prediction is- ",prediction2;
     uttethis=new SpeechSynthesisUtterance(speak_data1 , speak_data2);
     synth.speak(uttethis);
 }
 function check(){
     img=document.getElementById("captured_image");
     classifier.classify(img ,gotResult);
 }