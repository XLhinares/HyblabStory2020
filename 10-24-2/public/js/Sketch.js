// import {init} from "./Init.js"

var story;

function preload() {
  console.log("SETUP: starting");

  init ();

  init_stories();
}

function setup() {

  // Run once on start
  createCanvas(windowWidth, windowHeight);


  init_style();

  story = story_intro; // The first story


  console.log("SETUP: complete");

}

function draw() {
  // Main function that loops forever

  console.log("Sketch --- Story '"+story.name+"' : Scene " + story.current_scene + "\n" + story);

  background(220);
  story.display();
  story.update();


  if (story.story_change) {
    console.log("Sketch --- Story change !");
    story = story.next_story;
  }


}

function mousePressed() {
  story.interact();
}
