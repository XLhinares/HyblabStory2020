/* A story is a set of scenes, one linking to another through user choices */

class Story {

  // CONSTRUCTOR ---------------------------------------------------------------

  constructor (story_name) {
    this.name = story_name;
    this.scenes = {};
    this.default_current_scene = 1;
    this.default_story_change = false;
    this.default_next_story = this;
    this.current_scene = this.default_current_scene;
    this.story_change = this.default_story_change;
    this.next_story = this.default_next_story;

  }

  reinit () {
    this.current_scene = this.default_current_scene;
    this.story_change = this.default_story_change;
    this.next_story = this.default_next_story;
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

    let tmp = this.scenes[this.current_scene];
    tmp.update();

    if (tmp.next_element) {

      // checks if story changes
      if (tmp.change_story) {
        this.story_change = true;
        this.next_story = tmp.next_story;
        console.log("Story will change into : "+ this.next_story);
      } else {
        this.current_scene = tmp.next_scene;
        console.log("Scene changed into : "+ this.current_scene);
      }

      tmp.reinit(); // The scene will be as good as new if we come back to it at some point

    }
  } // END UPDATE

  interact() {
    this.scenes[this.current_scene].interact();
  }

}
