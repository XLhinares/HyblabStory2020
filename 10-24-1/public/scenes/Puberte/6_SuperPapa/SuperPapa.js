import Component from "../../../js/Component.js";

export default class SuperPapa extends Component {
  constructor({ goToRayon }) {
    super();
    this.html = "";
    this.goToRayon = goToRayon;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Puberte/6_SuperPapa/SuperPapa.html"
    );
  }

  componentDidMount() {
    document.getElementById("choix-portes").style.display = "none";
    setTimeout(() => this.goToRayon(), 5000);
    // End dad discussion
    document.getElementById("papa-player").pause();
    document.getElementById("papa-player").elemMusicOn = false;
    // Superdad inc
    document.getElementById("super-papa-player").elemMusicOn = true;
    document.getElementById("super-papa-player").volume = 0.11;
    if (!document.getElementById("super-papa-player").isMuted) {
      document.getElementById("super-papa-player").play();
    }
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
