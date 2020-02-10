// import {init} from "./Init.js"

var story;


function setup() {

  // Run once on start
  createCanvas(windowWidth, windowHeight);

  background(255);

  console.log("SETUP: starting");

  init ();
  init_stories();
  init_style();

  story = story_intro; // The first story


  console.log("SETUP: complete");

}

function draw() {
  // Main function that loops forever

  console.log("Sketch --- Story '"+story.name+"' : Scene " + story.current_scene + "\n" + story);

  background(255);
  story.display();
  story.update();


  if (story.story_change) {
    console.log("Sketch --- Story change !");
    let tmp = story;
    story = tmp.next_story;
    tmp.reinit()
  }


}

function mousePressed() {
  story.interact();
}
