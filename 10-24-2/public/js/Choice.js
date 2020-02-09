// import Interactable from "./Interactable.js"

/* Displays several choices and */

class Choice extends Interactable {

  constructor () {
    super();
    this.choices = new Array();
  }

  add_choice (text, id_linked_scene,cs=false) {
    // text is what is displayed for this choice
    // id_linked_scene is the id of the scene which relates to this choice
    this.choices.push([text,id_linked_scene,cs]);
  }

  // DISPLAY -------------------------------------------------------------------

  display () {

      noFill();
      for (let i = 0 ; i < this.choices.length ; i++) {
        rect( bm,           // top left x coordinate
              h-(i+1.5)*bh,       // top left y coordinate
              bw,                 // box width
              bh,                 // box height
              10                  // rounded corners
        );
        text( this.choices[i][0],    // text
              (w-bw)/1.5,         // x coordinate
              h-(i+1.1)*bh        // y coordinate
        );

      } // END FOR
  } // END DISPLAY

  // PSEUDO GETTERS

  change_story (choice) {
    console.log("Choice --- ("+choice+") asked if story changes");
    return this.choices[choice][2];
  }

  next_element (choice) {
    console.log("Choice --- ("+choice+") asked next element : "+this.choices[choice][1]+" ("+this.choices[choice][0]+")");
    return this.choices[choice][1];
  }

  // INTERACTION ---------------------------------------------------------------

  interact () {
    if (mouseX > bm && mouseX < (w-bm)) {
      let closest_choice = parseInt((h-mouseY)/(1.5*bh));
      console.log("You chose the choice : "+ closest_choice);
      if (mouseY-closest_choice*bh*1.5 > 0.5*bh && closest_choice<this.choices.length) {
        console.log("Choice accepted");
        return closest_choice;
      } else {
        console.log("Choice refused");
      }
    } // END IF
    return (-1);
  } // END INTERACTION


}
