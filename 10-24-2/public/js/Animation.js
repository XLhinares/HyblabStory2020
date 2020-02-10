// import Interactable from "./Interactable.js"

/* An animation is a set of images that are displayed one after the other at a certain speed */



class Animation extends Interactable {

  // CONSTRUCTOR ---------------------------------------------------------------

  constructor (path, auto_import=false) {
    super();
    this.path = path;
    this.images = new Array();
    this.freq = 24;

    if (auto_import) {
      this.auto_add_image();
    } else {
      this.add_image(this.path+".png");
    }

  }

  // ADDING NEW ELEMENTS -------------------------------------------------------

  add_image (image_path) {
    // Images should all be the same size : 1080x720
    console.log("Trying to load image at path : "+image_path)
    try{
      this.images.push(loadImage(image_path));
    }catch (exception) {
      console.log(exception);
      return false;
    }
    console.log("success");
    return true;
  }

  auto_add_image () {
    let i = 0;
    while (this.add_image(this.path+"_"+i+".png") && i < 5) {
      i++;
    }
    // Done importing
    if (i==0) {
      return false;
    }
    // return false if there was no animation to be found
  }

  // DISPLAYING ----------------------------------------------------------------

  display(time) {
    if (this.images.length == 0) {
      rect(iwm,ihm,iw,ih);
    } else {
      let a = time%this.images.length;
      image(this.images[time%this.images.length], iwm, ihm, iw, ih);
    }
  }

  // INTERACTING ---------------------------------------------------------------

  interact() {

  }

}
