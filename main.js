Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera=document.getElementById("camera");
 Webcam.attach("#camera");

 console.log("ml5 version :",ml5.version);
 function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Aoe6W_KiP/mode.json",modelLoaded);
 function modelLoaded(){
     console.log("model loadded true");
 }
 var prediction1="";
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
 function gotResult(error,results){
     if(error){
         console.error(error);
     }else{
         console.log(results);
         document.getElementById("name_pose_name").innerHTML=results[0].label;
        prediction1=results[0].label;
        speak();
        if(prediction1=="thumb up"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        if(prediction1=="thumb down"){
            document.getElementById("update_emoji").innerHTML="&#128078;";
        }
        if(prediction1=="xy"){
            document.getElementById("update_emoji").innerHTML="&#128079;"; 
        }
     }
 }