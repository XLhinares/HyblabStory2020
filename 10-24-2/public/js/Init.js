// import Scene from "./Scene.js";
// import Story from "./Story.js";
// INITIALISATION --------------------------------------------------------------

var w, h;
var fact;
var iw, ih, iwm, ihm;
var bm, bw, bh;
var st
var story_intro;
var story_bullying;
var story_laziness;
var story_screens;
var story_puberty;
var story_pubertyM;
var story_pubertyF;

function init () {

  w = windowWidth;         // Screen width
  h = windowHeight;         // Screen height
  console.log("actual width : "+w);
  console.log("actual height : "+h);
  if (h*16/9 < w) {
    fact = h/1080;
  } else {
    fact = w/1920;
  }
  iw = 1280;        // Image width
  iwm = (w-iw)/2;   // Image width margin
  ih = 720;         // Image height
  ihm = (h-ih)/2;   // Image height margin
  bm = w/20;        // Box margin
  bw = 8*w/9;         // Box width
  bh = h/20;        // Box height

}

function init_style () {

    stroke(0);
}

function init_stories () {

  // story_bullying = init_story_bullying();   // Initialisation of the "bullying" story
  story_laziness = init_story_laziness();   // Initialisation of the "laziness" story
  // story_screens = init_story_screens();     // Initialisation of the "screens" story
  // story_pubertyM = init_story_pubertyM();   // Initialisation of the "male puberty" story
  // story_pubertyF = init_story_pubertyF();   // Initialisation of the "female puberty" story
  // story_puberty = init_story_puberty();     // Initialisation of the "puberty" story
  story_intro = init_story_intro();         // Initialisation of the "intro" story

}

// Function initializing of the "intro" story
function init_story_intro () {

  // Name of the story
  let story_name = "intro";
  // The story itself
  var story1 = new Story(story_name);

  // All the scenes
  var scene1 = new Scene(story_name, "laziness", 1); // "intro" is the story used to start the other stories
  // scene1.add_choice("Harcelement",story_bullying,cs=true);
  scene1.add_choice("Flemmardise",story_laziness,cs=true);
  // scene1.add_choice("Ecrans",story_screens,cs=true);
  // scene1.add_choice("Puberte",story_puberty,cs=true);
  story1.add_scene(1, scene1);


  return story1;
}


// Function initializing of the "bullying" story
function init_story_bullying() {

  // Name of the story
  let story_name = "bullying";
  // The story itself
  var story_bullying = new Story(story_name);


  var scene1 = new Scene(story_name, "enfant_s_enferme", 2);


  var scene2 = new Scene(story_name, "choix_1_aller_le_voir", 3);
  var choice1 = new Choice();
  choice1.add_choice("aller_voir",2);
  choice1.add_choice("on_a_tous_des_mauvais_jours",2);
  // Peut être créer une scène intermédiare entre le fait de ne pas y aller
  scene2.add_choice(choice1);


  var scene3 = new Scene(story_name, "tu_es_sur", 4);


  var scene4 = new Scene(story_name, "choix_2_insister", 5);
  var choice2 = new Choice();
  choice2.add_choice("non_ca_ne_va_pas",4);
  choice2.add_choice("je_te_laisse_tranquille",4);
  scene4.add_choice(choice2);

  var scene5 = new Scene(story_name, "flashback", 6);

  var scene6 = new Scene(story_name, "insister_encore", 7);

  var scene7 = new Scene(story_name, "fin", 7, cs=story_intro);


  story_bullying.add_scene(1, scene1);
  story_bullying.add_scene(2, scene2);
  story_bullying.add_scene(3, scene3);
  story_bullying.add_scene(4, scene4);
  story_bullying.add_scene(5, scene5);
  story_bullying.add_scene(6, scene6);
  story_bullying.add_scene(7, scene7);

  return story_bullying;

}
  // END BULLYING STORY


// 2nd diagram : screens
function init_story_screens() {

  // Name of the story
  let story_name = "screens";
  // The story itself
  var story_screens = new Story(story_name);

  var scene1 = new Scene(story_name, "bruits_chambre", 2);


  var choice1 = new Choice();
  choice1.add_choice("aller_voir",2);
  choice1.add_choice("cest_son_cote_creatif",2);


  var scene2 = new Scene(story_name, "choix_1_aller_voir", 2);
  scene2.add_choice(choice1);
  var scene3 = new Scene(story_name, "cest_son_cote_creatif", 1);
  var scene4 = new Scene(story_name, "entrer_chambre", 5);
  var scene5 = new Scene(story_name, "il_est_23h", 6);


  var slider = new Slider();
  // Ajouter un slider pour définir la plage horaire


  var scene7 = new Scene(story_name, "mauvaise_reponse", 6);
  var scene8 = new Scene(story_name, "bonne_reponse", 9);
  var scene6 = new Scene(story_name, "choix_plage_horaire", 6);
  scene6.new_top_layer(slider);
  var scene9 = new Scene(story_name, "informations_techniques", 10);
  var scene10 = new Scene(story_name, "fin", 10, cs=story_intro);

  story_screens.add_scene(1, scene1);
  story_screens.add_scene(2, scene2);
  story_screens.add_scene(3, scene3);
  story_screens.add_scene(4, scene4);
  story_screens.add_scene(5, scene5);
  story_screens.add_scene(6, scene6);
  story_screens.add_scene(7, scene7);
  story_screens.add_scene(8, scene8);
  story_screens.add_scene(9, scene9);
  story_screens.add_scene(10, scene10);

  return story_screens;
// END SCREENS STORY
}


function init_story_puberty() {
    //This story will start one of the 2 stories for puberty (girl or boy)

    // Name of the story
    let story_name = "puberty_choice";
    // The story itself
    var story_puberty_choice = new Story(story_name);


    var choice1 = new Choice();
    choice1.add_choice("garcon", 1, cs=story_pubertyM);
    choice1.add_choice("fille", 1, cs=story_pubertyF);

    var scene = new Scene(story_name, "choix_du_sexe", 1);
    scene.add_choice(choice1);

    story_puberty_choice.add_scene(1, scene);
    // story_puberty_choice.add_scene(0, scene_retour_choix_porte);

    return story_puberty_choice;

}


function init_story_pubertyF() {

  // Name of the story
    let story_name = "pubertyF";
    // The story itself
    var story_pubertyF = new Story(story_name);

    var scene1 = new Scene(story_name, "montre_la_culotte", 1);


    var choice3 = new Choice();
    choice3.add_choice("faire_courses",2);
    choice3.add_choice("expliquer_situation",2);


    var scene2 = new Scene(story_name, "faire_les_courses", 3);
    scene2.add_choice(choice3);
    var scene3 = new Scene(story_name, "je_communique_ecouter_10_24", 4);


    var choice4 = new Choice();
    choice4.add_choice("serviettes",2);
    choice4.add_choice("culottes",2);
    choice4.add_choice("tampons",2);


    var scene4 = new Scene(story_name, "achat_produits_hygieniques", 4);
    scene4.add_choice(choice4);
    var scene5 = new Scene(story_name, "explication_serviette", 8);
    var scene6 = new Scene(story_name, "explication_tampon", 8);
    var scene7 = new Scene(story_name, "explication_couche", 8);
    var scene8 = new Scene(story_name, "fin", 8, cs=story_intro);

    story_pubertyF.add_scene(1, scene1);
    story_pubertyF.add_scene(2, scene2);
    story_pubertyF.add_scene(3, scene3);
    story_pubertyF.add_scene(4, scene4);
    story_pubertyF.add_scene(5, scene5);
    story_pubertyF.add_scene(6, scene6);
    story_pubertyF.add_scene(7, scene7);
    story_pubertyF.add_scene(8, scene8);

    return story_pubertyF;

}


function init_story_pubertyM() {

  // Name of the story
    let story_name = "pubertyM";
    // The story itself
    var story_pubertyM = new Story(story_name);

    var scene1 = new Scene(story_name, "mere_entre_chambre", 2);
    var scene2 = new Scene(story_name, "tu_es_enrhume", 3);
    var scene3 = new Scene(story_name, "AH", 4);


    var choice2 = new Choice();
    choice2.add_choice("public",2);
    choice2.add_choice("prive",2);
    choice2.add_choice("ne_pas_en_parler",2);


    var scene4 = new Scene(story_name, "que_faire", 4);
    scene4.add_choice(choice2);
    var scene5 = new Scene(story_name, "jamais_en_parler", 8);
    var scene6 = new Scene(story_name, "parler_en_prive", 8);
    var scene7 = new Scene(story_name, "parler_devant_tout_le_monde", 8);
    var scene8 = new Scene(story_name, "temoignage_fin", 0);

    story_pubertyM.add_scene(1, scene1);
    story_pubertyM.add_scene(2, scene2);
    story_pubertyM.add_scene(3, scene3);
    story_pubertyM.add_scene(4, scene4);
    story_pubertyM.add_scene(5, scene5);
    story_pubertyM.add_scene(6, scene6);
    story_pubertyM.add_scene(7, scene7);
    story_pubertyM.add_scene(8, scene8);

    return story_pubertyM;

}


function init_story_laziness() {

  // Name of the story
    let story_name = "laziness";
    // The story itself
    var story_laziness = new Story(story_name);

    // OLD VERSION -------------------------------------------------------------
    //
    // var scene1 = new Scene(story_name, "entree_chambre", 2);
    //
    // var scene2 = new Scene(story_name, "paresseux_jungle", 3);
    //
    // var choice1 = new Choice();
    // //Ajouter d'autres possibilites
    //
    // //  CYCLE DES REFUS DE L'ADO (plus simple que tenir le compte des jours)
    // var scene3 = new Scene(story_name, "proposition_1", 4);
    // scene3.add_choice("Viens jouer dehors",2);
    // scene3.add_choice("Viens faire un jeu de société",2);
    // scene3.add_choice("Viens faire les courses",2);
    //
    // var scene4 = new Scene(story_name, "refus_1", 5);
    // var scene5 = new Scene(story_name, "proposition_2", 6);
    // scene5.add_choice("Viens jouer dehors",2);
    // scene5.add_choice("Viens faire un jeu de société",2);
    // scene5.add_choice("Viens faire les courses",2);
    //
    // var scene6 = new Scene(story_name, "refus_2", 7);
    // var scene7 = new Scene(story_name, "proposition_3", 8);
    // scene7.add_choice("Viens jouer dehors",2);
    // scene7.add_choice("Viens faire un jeu de société",2);
    // scene7.add_choice("Viens faire les courses",2);
    //
    //
    // var scene8 = new Scene(story_name, "choix_reaction", 8);
    // scene8.add_choice("Le forcer a venir",8);
    // scene8.add_choice("chercher le dialogue",10);
    // scene8.add_choice("le laisser tranquille",11);
    // //var scene9 = new Scene(story_name, "le_forcer", 12);
    // var scene10 = new Scene(story_name, "chercher_dialogue", 12);
    // var scene11 = new Scene(story_name, "ne_rien_faire", 12);
    // var scene12 = new Scene(story_name, "fin", 12, cs=story_intro);

    // NEW VERSION -------------------------------------------------------------

    var scene1 = new Scene(story_name, "1", 2);
    var scene2 = new Scene(story_name, "2", 3);
    var scene3 = new Scene(story_name, "3", 4);
    var scene4 = new Scene(story_name, "4", 5);
    var scene5 = new Scene(story_name, "5", 6);
    var scene6 = new Scene(story_name, "6", 7);
    var scene7 = new Scene(story_name, "7", 8);
    var scene8 = new Scene(story_name, "8", 9);
    var scene9 = new Scene(story_name, "9", 10);
    var scene10 = new Scene(story_name, "10", 11);
    var scene11 = new Scene(story_name, "11", 12);
    var scene12 = new Scene(story_name, "12", 12, cs=story_intro);

    story_laziness.add_scene(1, scene1);
    story_laziness.add_scene(2, scene2);
    story_laziness.add_scene(3, scene3);
    story_laziness.add_scene(4, scene4);
    story_laziness.add_scene(5, scene5);
    story_laziness.add_scene(6, scene6);
    story_laziness.add_scene(7, scene7);
    story_laziness.add_scene(8, scene8);
    story_laziness.add_scene(9, scene9);
    story_laziness.add_scene(10, scene10);
    story_laziness.add_scene(11, scene11);
    story_laziness.add_scene(12, scene11);

    return story_laziness;
}
