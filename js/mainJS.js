function toggleAboutMe(state) {
  var x = document.getElementById("aboutMeBox");
  // var y = document.getElemendById("c1");


  x.style.display = state;
  // y.style.display = state;

  if (x.style.display === "block") {
    x.style.display = "none";
    // y.style.display = "none";

  } else {
    toggleAboutProjectos("block");
    toggleAboutSom("block");
    toggleAboutImagem("block");
    // y.style.display = "block";
    x.style.display = "block";
  }
}

function toggleAboutProjectos(state) {
  var x = document.getElementById("aboutProjectos");
  x.style.display = state;
  if (x.style.display === "block") {

    x.style.display = "none";
  } else {
    toggleAboutMe("block");
    toggleAboutSom("block");
    toggleAboutImagem("block");
    x.style.display = "block";
  }
}

function toggleAboutSom(state) {
  var x = document.getElementById("aboutSom");
  x.style.display = state;
  if (x.style.display === "block") {

    x.style.display = "none";
  } else {
    toggleAboutMe("block");
    toggleAboutProjectos("block");
    toggleAboutImagem("block");
    x.style.display = "block";
  }
}

function toggleAboutImagem(state) {
  var x = document.getElementById("aboutImagem");
  x.style.display = state;
  if (x.style.display === "block") {

    x.style.display = "none";
  } else {
    toggleAboutMe("block");
    toggleAboutProjectos("block");
    toggleAboutSom("block");
    x.style.display = "block";
  }
}
