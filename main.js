

Webcam.set
({
    width: 350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>';
    });
}

console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Qh65rHLcT/model.json", modelLoaded);

function modelLoaded()
{
    console.log( "Model Loaded");
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The emotion detected is most likely " +prediction1;
    speak_data_2 = "however, if " +prediction1+ "is not the correct prediction, then the emotion may be " +prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

