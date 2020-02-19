import Component from "../../../js/Component.js";

export default class Rayon extends Component {
  constructor({ goToChoix }) {
    super();
    this.html = "";
    this.goToChoix = goToChoix;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Puberte/7_Rayon/Rayon.html"
    );
  }

  componentDidMount() {
    document.getElementById("choix-portes").style.display = "none";
    setTimeout(() => this.goToChoix(), 7000);
    setTimeout(() => this.goToChoix(), 5000);
    //End superdad
    document.getElementById("super-papa-player").pause();
    document.getElementById("super-papa-player").elemMusicOn = false;
    // Supermarket background on
    document.getElementById("rayon-player").elemMusicOn = true;
    document.getElementById("rayon-player").volume = 0.11;
    if (!document.getElementById("rayon-player").isMuted) {
      document.getElementById("rayon-player").play();
    }
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
