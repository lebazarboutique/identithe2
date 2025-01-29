stage = 0; // Variable pour suivre l'étape
let questionIndex1 = 0; // Index pour la réponse à la première question
let questionIndex2 = 0; // Index pour la réponse à la deuxième question
let questionIndex3 = 0; // Index pour la réponse à la troisième question
let girlImages = []; // Tableau pour stocker les images
let displayImageDuration = 3; // Durée d'affichage de chaque image en secondes
let imageShownAt = 0; // Temps auquel l'image a été affichée
let imageVisible1 = false; // Pour savoir si l'image 1 est visible
let imageVisible2 = false; // Pour savoir si l'image 2 est visible
let imageVisible3 = false; // Pour savoir si l'image 3 est visible

function preload() {
    customFont = loadFont('assets/ecritureautre.ttf');
    startImage = loadImage('assets/start.png'); 
    girlImages.push(loadImage('assets/afille.png')); 
    girlImages.push(loadImage('assets/bfille.png'));
    girlImages.push(loadImage('assets/cfille.png'));
    girlImages.push(loadImage('assets/dfille.png'));
    girlImages.push(loadImage('assets/efille.png'));
    girlImages.push(loadImage('assets/a2fille.png'));
    girlImages.push(loadImage('assets/b2fille.png'));
    girlImages.push(loadImage('assets/c2fille.png'));
    girlImages.push(loadImage('assets/d2fille.png'));
    girlImages.push(loadImage('assets/e2fille.png'));
    girlImages.push(loadImage('assets/a3fille.png'));
    girlImages.push(loadImage('assets/b3fille.png'));
    girlImages.push(loadImage('assets/c3fille.png'));
    girlImages.push(loadImage('assets/d3fille.png'));
    girlImages.push(loadImage('assets/e3fille.png'));
}



function setup() {
  // Définir la toile aux dimensions A4 en pixels (600px x 842px)
  createCanvas(900, 800);
}
function windowResized() {
  centerCanvas(); // Réajuster si la fenêtre est redimensionnée
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function draw() {
  background(255);
  function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function windowResized() {
  resizeCanvas(400, 400);
  centerCanvas(); // Recentrer le canvas en cas de redimensionnement
}

  if (stage === 0) {
    // Écran d'accueil
    textFont(customFont);
    textSize(32);
    textAlign(CENTER);
    text("Prêt à construire ton identi_thé ?", width / 2, height / 4);
    
    // Encadré pour "Commencer"
   // Affiche l'image "Commencer" au lieu du texte
 //   image(startImage, (width - 200) / 2, height / 2 - 40, 200, 60);
    textFont(customFont);
    text("Commencer", width / 2, height / 2);
  } else if (stage === 1) {
    // Pose la première question
    displayQuestions1();
  } else if (stage === 2) {
    // Affiche l'image correspondant à la réponse de la première question
    displayImage1();
  } else if (stage === 3) {
    // Pose la deuxième question après la première
    displayQuestions2();
  } else if (stage === 4) {
    // Affiche l'image correspondant à la réponse de la deuxième question
    displayImage2();
  } else if (stage === 5) {
    // Pose la troisième question après la deuxième
    displayQuestions3();
  } else if (stage === 6) {
    // Affiche l'image correspondant à la réponse de la troisième question
    displayImage3();
  }
}

function mousePressed() {
  // Vérifie si l'utilisateur a cliqué sur "Commencer"
  if (stage === 0) {
    if (mouseX > (width - 200) / 2 && mouseX < (width + 200) / 2 &&
        mouseY > height / 2 - 30 && mouseY < height / 2 + 30) {
      stage = 1; // Passer à l'étape suivante
    }
  } else if (stage === 1) {
    // Vérifie quel choix a été cliqué pour la première question
    if (mouseY > height / 2 - 20 && mouseY < height / 2 + 20) { // A
      questionIndex1 = 0;
      imageShownAt = millis();
      imageVisible1 = true;
      stage = 2; // Passer à l'étape d'affichage de l'image
    } else if (mouseY > height / 2 + 20 && mouseY < height / 2 + 60) { // B
      questionIndex1 = 1;
      imageShownAt = millis();
      imageVisible1 = true;
      stage = 2; // Passer à l'étape d'affichage de l'image
    } else if (mouseY > height / 2 + 60 && mouseY < height / 2 + 100) { // C
      questionIndex1 = 2;
      imageShownAt = millis();
      imageVisible1 = true;
      stage = 2; // Passer à l'étape d'affichage de l'image
    } else if (mouseY > height / 2 + 100 && mouseY < height / 2 + 140) { // D
      questionIndex1 = 3;
      imageShownAt = millis();
      imageVisible1 = true;
      stage = 2; // Passer à l'étape d'affichage de l'image
    } else if (mouseY > height / 2 + 140 && mouseY < height / 2 + 180) { // E
      questionIndex1 = 4;
      imageShownAt = millis();
      imageVisible1 = true;
      stage = 2; // Passer à l'étape d'affichage de l'image
    }
  } else if (stage === 3) {
    // Vérifie quel choix a été cliqué pour la deuxième question
    if (mouseY > height / 2 - 20 && mouseY < height / 2 + 20) { // A
      questionIndex2 = 0;
      imageShownAt = millis();
      imageVisible2 = true;
      stage = 4; // Passer à l'étape d'affichage de l'image
    } else if (mouseY > height / 2 + 20 && mouseY < height / 2 + 60) { // B
      questionIndex2 = 1;
      imageShownAt = millis();
      imageVisible2 = true;
      stage = 4; // Passer à l'étape d'affichage de l'image
    } else if (mouseY > height / 2 + 60 && mouseY < height / 2 + 100) { // C
      questionIndex2 = 2;
      imageShownAt = millis();
      imageVisible2 = true;
      stage = 4; // Passer à l'étape d'affichage de l'image
    } else if (mouseY > height / 2 + 100 && mouseY < height / 2 + 140) { // D
      questionIndex2 = 3;
      imageShownAt = millis();
      imageVisible2 = true;
      stage = 4; // Passer à l'étape d'affichage de l'image
    } else if (mouseY > height / 2 + 140 && mouseY < height / 2 + 180) { // E
      questionIndex2 = 4;
      imageShownAt = millis();
      imageVisible2 = true;
      stage = 4; // Passer à l'étape d'affichage de l'image
    }
  } else if (stage === 5) {
    // Vérifie quel choix a été cliqué pour la troisième question
    if (mouseY > height / 2 - 20 && mouseY < height / 2 + 20) { // A
      questionIndex3 = 0;
      imageShownAt = millis();
      imageVisible3 = true;
      stage = 6; // Passer à l'étape d'affichage de l'image
    } else if (mouseY > height / 2 + 20 && mouseY < height / 2 + 60) { // B
      questionIndex3 = 1;
      imageShownAt = millis();
      imageVisible3 = true;
      stage = 6; // Passer à l'étape d'affichage de l'image
    } else if (mouseY > height / 2 + 60 && mouseY < height / 2 + 100) { // C
      questionIndex3 = 2;
      imageShownAt = millis();
      imageVisible3 = true;
      stage = 6; // Passer à l'étape d'affichage de l'image
    } else if (mouseY > height / 2 + 100 && mouseY < height / 2 + 140) { // D
      questionIndex3 = 3;
      imageShownAt = millis();
      imageVisible3 = true;
      stage = 6; // Passer à l'étape d'affichage de l'image
    } else if (mouseY > height / 2 + 140 && mouseY < height / 2 + 180) { // E
      questionIndex3 = 4;
      imageShownAt = millis();
      imageVisible3 = true;
      stage = 6; // Passer à l'étape d'affichage de l'image
    }
  }
}

function displayQuestions1() {
  textFont(customFont);
  textSize(32);
  textAlign(CENTER);
  text("Au quotidien, tu es plutôt...", width / 2, height / 4);
  
  // Options de réponses pour la première question
  textSize(24);
  textFont(customFont);
  text("A. Ebouriffé, comme si tu sortais du lit", width / 2, height / 2);
  text("B. Soigné, avec une coiffure impeccable", width / 2, height / 2 + 40);
  text("C. Excentrique, toujours prêt à surprendre", width / 2, height / 2 + 80);
  text("D. Mystérieux, avec une aura intrigante", width / 2, height / 2 + 120);
  text("E. Têtu, comme une bourrique", width / 2, height / 2 + 160);
}

function displayImage1() {
  // Affiche l'image de la réponse 1 en haut de la toile
  let imgIndex = questionIndex1;
  if (imageVisible1) {
    let img = girlImages[imgIndex];
    image(img, (width - height / 3) / 2, 5, height / 3, height / 3); // Position en haut de l'écran
    if (millis() - imageShownAt > displayImageDuration * 1000) {
      imageVisible1 = false; // Masque l'image après 5 secondes
      stage = 3; // Passer à la question 2
    }
  }
}

function displayQuestions2() {
  textFont(customFont);
  textSize(32);
  textAlign(CENTER);
  text("Dans une fête, tu serais plutôt celui qui...", width / 2, height / 4);
  
  // Options de réponses pour la deuxième question
  textFont(customFont);
  textSize(24);
  text("A. A une tenue qui attire tous les regards", width / 2, height / 2);
  text("B. Se mêle aux autres sans se faire remarquer", width / 2, height / 2 + 40);
  text("C. Porte une tenue décalée et extravagante", width / 2, height / 2 + 80);
  text("D. Est toujours chic et élégant", width / 2, height / 2 + 120);
  text("E. Des vêtements ? Pourquoi faire ?", width / 2, height / 2 + 160);
}

function displayImage2() {
  // Affiche l'image de la réponse 2 juste en dessous de l'image 1
  let imgIndex1 = questionIndex1;
  let imgIndex2 = questionIndex2 + 5; // Décale l'index pour accéder aux images de la question 2
  
  if (imageVisible2) {
    // Affiche les deux images collées l'une à l'autre
    let img1 = girlImages[imgIndex1];
    let img2 = girlImages[imgIndex2];

    // Affiche l'image 1 en haut
    image(img1, (width - height / 3) / 2, 5, height / 3, height / 3);

    // Affiche l'image 2 juste en dessous de l'image 1
    image(img2, (width - height / 3) / 2, 5 + height / 3, height / 3, height / 3);

    // Masque les images après 5 secondes
    if (millis() - imageShownAt > displayImageDuration * 1000) {
      imageVisible1 = false;
      imageVisible2 = false;
      stage = 5; // Passer à la question 3
    }
  }
}

function displayQuestions3() {
  textFont(customFont);
  textSize(32);
  textAlign(CENTER);
  text("Si tu partais à l'aventure, où irais tu ?", width / 2, height / 4);
  
  // Options de réponses pour la troisième question
  textFont(customFont);
  textSize(24);
  text("A. Traverser la mer à la nage", width / 2, height / 2);
  text("B. Partir gravir une montagne pendant des mois", width / 2, height / 2 + 40);
  text("C. Partir dans une forêt à la recherche d'un trésor", width / 2, height / 2 + 80);
  text("D. Faire un festival des danses du monde", width / 2, height / 2 + 120);
  text("E. Moi ? Partir à l'aventure ? J'aime trop mon canapé pour ça", width / 2, height / 2 + 160);
}

function displayImage3() {
  let imgIndex1 = questionIndex1;
  let imgIndex2 = questionIndex2 + 5;
  let imgIndex3 = questionIndex3 + 10;

  if (imageVisible3) {
    let img1 = girlImages[imgIndex1];
    image(img1, (width - height / 3) / 2, 5, height / 3, height / 3);

    let img2 = girlImages[imgIndex2];
    image(img2, (width - height / 3) / 2, 5 + height / 3, height / 3, height / 3);

    let img3 = girlImages[imgIndex3];
    image(img3, (width - height /3) / 2, 2 + 2 * height / 3, height / 3, height / 3);


    // Afficher le message final sur deux lignes
    fill(0);
    textSize(22);
    textAlign(CENTER);
    text("Merci d'envoyer votre dessin à lebazarboutique@gmail.com", width / 2, height - 760); // Première ligne
    text("pour que vos tasses soient réalisées.", width / 2, height - 740); // Deuxième ligne

    // Après l'affichage des trois images pendant 5 secondes, on enregistre le canvas
    if (millis() - imageShownAt > displayImageDuration * 1000) {
      imageVisible3 = false;

      // Ajouter la fonction pour enregistrer le canvas
      saveCanvas('identithe_image_finale', 'png');
    }
  }
}