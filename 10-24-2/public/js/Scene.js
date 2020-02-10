// import Animation from "./Animation.js"
// import Choice from "./Choice.js"


/* A scene is a set of layers which each represents one element (i.e. the background, a character, ...) */

class Scene {

  constructor (name_story, name_scene, next, auto_import=true, cs=false, duration=-1) {
    // cs : change story
    // ai : auto import

    // Variables related to the outside
    this.name_scene = name_scene;         // Name of the scene
    this.name_story = name_story;   // Name of the related story
    this.default_next_element = false;
    this.default_next_scene = next;               // ID of next scene

    this.default_change_story = false;            // true if next_scene is linked to the next story (false by default)
    if (cs != false && cs != undefined) {
      console.log("story change ("+cs+") defined for scene : "+this.name_scene);
      this.default_next_story = cs;
      this.default_change_story = true;     //
    }

    // Variables related to the inside
    this.layers = new Array();            // layers is an array of Interactable, essentiellement des animations
    this.choices = new Choice();          // the different choices available to the user
    this.time = 0;                        // time starts at 0
    this.max_time = duration;             // Set a time lime in milliseconds (-1 if no time limit)

    // Initialisation methods
    if (auto_import) {
      this.auto_add_element();
    }
    this.add_choice("suivant",next);
  }

  reinit () {
    this.next_element = false;
    this.next_scene = this.default_next_scene;
    this.change_story = this.default_change_story;
    this.next_story = this.default_next_story;
    this.time = 0;
  }

  // ADDING NEW ELEMENTS -------------------------------------------------------

  new_top_layer (inter) {
    try {
      this.layers.push(inter);
    } catch (e) {
      return false;
    }
  }

  new_bottom_layer (inter) {
    this.layers.unshift(inter);
  }

  add_choice(text,id,cs=false){
    this.choices.add_choice(text,id,cs);
  }

  auto_add_element () {
    console.log("Scene --- Adding animations to "+this.name_scene);
    let i = 0;
    while (this.new_top_layer(new Animation("img/" + this.name_story + "/" + this.name_scene))) {
      i++;
    }
    if (i == 0) {
      return true;
    } else {
      return false;
    }
    // Done importing
  }

  // DISPLAYING ----------------------------------------------------------------

  display () {
    for (let i=0 ; i<this.layers.length ; i++) {
      this.layers[i].display(this.time);
    }

    this.choices.display();
  }

  // UPDATING ------------------------------------------------------------------

  update () {
    // Time is going on to make the scene advance
    this.time++;

    // Updates every layer
    this.layers.forEach(inter => inter.update(this.time));

  }

  interact() {
    // Test the interaction for every layer
    this.layers.forEach(inter => inter.interact());

    // Test interaction for the choices
    let choice = this.choices.interact();
    console.log("Scene --- choice : "+choice);
    if(choice!=-1){
      // if that choice changes the story
      if (this.choices.change_story(choice)){
        console.log("Scene --- choice will change story");
        this.change_story=true;
        this.next_story = this.choices.next_element(choice);
      } else { // if the choice only changed the scene
        console.log("Scene --- choice will change scene");
        this.next_scene = this.choices.next_element(choice);
      }
      this.next_element = true;
    }
  }

}
