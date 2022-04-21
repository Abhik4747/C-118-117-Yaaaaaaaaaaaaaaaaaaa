function preload()
{}

function setup()
{
    canvas = createCanvas(180, 180);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MP4aLQ91h/model.json', modelLoaded);
}

function draw()
{
    image(video, 0, 0, 180, 180);
    classifier.classify(video, gotResult);
}

function modelLoaded()
{
    console.log( 'Model Loaded!!' );
}

function gotResult(error, results)
{
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}