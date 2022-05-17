function startTheShow(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/RboMLhJ4Q/model.json", modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotresults);
}

function gotresults(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);

        random_num_r = Math.floor(Math.random()*255) + 1;
        random_num_g = Math.floor(Math.random()*255) + 1;
        random_num_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("accuracy_label").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+random_num_r+","+random_num_g+","+random_num_b+")";
        document.getElementById("accuracy_label").style.color = "rgb("+random_num_r+","+random_num_g+","+random_num_b+")";

        dog =0;
        cat=0;
        cow=0;
        sheep=0;

        if (results[0].label =="Cat"){
            document.getElementById("picofan").src = "meowimg.png";
            console.log("cat");
        }
        else if (results[0].label =="Cow"){
            document.getElementById("picofan").src = "moo.png";
            console.log("cow");
        }
        else if (results[0].label =="Dog"){
            document.getElementById("picofan").src = "BARKINGMAD.jpg";
            console.log("dog");
        }
        else if (results[0].label =="Sheep"){
            document.getElementById("picofan").src = "Maa.png";
            console.log("sheep");
        }
    }
}