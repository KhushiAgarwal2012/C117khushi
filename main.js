// https://teachablemachine.withgoogle.com/models/blJg_T1s3/

function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier(
    "https://teachablemachine.withgoogle.com/models/blJg_T1s3/model.json",
    modelReady
  );
}

function modelReady() {
  classifier.classify(gotResults);
}

function gotResults() {
  if (error) {
    console.error(error);
  } else {
    console.log(results);

    random_number_r = Math.floor(Math.random() * 225) + 1;
    random_number_g = Math.floor(Math.random() * 225) + 1;
    random_number_b = Math.floor(Math.random() * 225) + 1;

    document.getElementById("result_confidence").innerHTML =
      "Accuracy -" + (results[0].confidence * 100).toFixed(2) + "%";
    document.getElementById("result_label").innerHTML =
      "I can hear -" + results[0].label;
    document.getElementById("result_confidence").style.color =
      "rgb(" +
      random_number_r +
      "," +
      random_number_g +
      "," +
      random_number_r +
      ")";
    document.getElementById("result_label").style.color =
      "rgb(" +
      random_number_r +
      "," +
      random_number_g +
      "," +
      random_number_r +
      ")";

    img = document.getElementById("cat");
    img1 = document.getElementById("dog");
    img2 = document.getElementById("cow");
    img3 = document.getElementById("lion");

    if (results[0].label == "meowing") {
      img.src = "cat.gif";
      img1.src = "dog.jpeg";
      img2.src = "cow.jpeg";
      img3.src = "lion.jpeg";
    } else if (results[0].label == "barking") {
      img.src = "cat.jpeg";
      img1.src = "dog.gif";
      img2.src = "cow.jpeg";
      img3.src = "lion.jpeg";
    } else if (results[0].label == "mooing") {
      img.src = "cat.jpeg";
      img1.src = "dog.jpeg";
      img2.src = "cow.gif";
      img3.src = "lion.jpeg";
    } else results[0].label == "roar";
    {
      img.src = "cat.jpeg";
      img1.src = "dog.jpeg";
      img2.src = "cow.jpeg";
      img3.src = "lion.gif";
    }
  }
}
