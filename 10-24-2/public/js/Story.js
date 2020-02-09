/* A story is a set of scenes, one linking to another through user choices */

class Story {

  // CONSTRUCTOR ---------------------------------------------------------------

  constructor (story_name) {
    this.name = story_name;
    this.scenes = {};
    this.current_scene = 1;
    this.story_change = false;
    this.next_story = this;
  }

  // ADDING NEW ELEMENTS -------------------------------------------------------

  add_scene (id_scene, scene) {
    this.scenes[id_scene] = scene;
  }

  // DISPLAYING ----------------------------------------------------------------

  display () {
    this.scenes[this.current_scene].display();
  }

  // UPDATING ------------------------------------------------------------------

  reinit() {
    this.current_scene = 0;
  }

  update() {
    this.scenes[this.current_scene].update();

    if (this.scenes[this.current_scene].next_element) {

      // checks if story changes
      if (this.scenes[this.current_scene].change_story) {
        this.story_change = true;
        this.next_story = this.scenes[this.current_scene].next_story;
        console.log("Story will change into : "+ this.next_story);
      } else {
        this.current_scene = this.scenes[this.current_scene].next_scene;
        console.log("Scene changed into : "+ this.current_scene);
      }
    }
  } // END UPDATE

  interact() {
    this.scenes[this.current_scene].interact();
  }

}
