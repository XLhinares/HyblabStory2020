/* A story is a set of scenes, one linking to another through user choices */

class Story {

  // CONSTRUCTOR ---------------------------------------------------------------

  constructor () {
    this.scenes = new Array();
    this.current_scene = 0;
  }

  // ADDING NEW ELEMENTS -------------------------------------------------------

  add_scene (id_scene, scene) {
    this.scenes.push([id_scene, scene]);
  }

  // DISPLAYING ----------------------------------------------------------------

  display () {
    this.scenes[this.current_scene][1].display();
  }

  // UPDATING ------------------------------------------------------------------

  reinit() {
    this.current_scene = 0;
  }

  update() {
    let aux = this.scenes[this.current_scene][1].change_story;
    this.current_scene = this.scenes[this.current_scene][1].update();
    if (aux) {
      return this.current_scene;
    }
    return this;
  }
}
