import Component from "../../../js/Component.js";

export default class PorteClaque extends Component {
  constructor({ goToPremierChoix}) {
    super();
    this.html = "";
    this.goToPremierChoix = goToPremierChoix;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Harcelement/2_PorteClaque/2_PorteClaque.html"
    );
  }

  componentDidMount() {
    document.getElementById("porte-claque-player").elemMusicOn = true;
    document.getElementById("porte-claque-player").volume = 0.15;
    if (!document.getElementById("porte-claque-player").isMuted) {
      document.getElementById("porte-claque-player").play();
    }
    document.getElementById("choix-portes").style.display = "none";
    setTimeout(() => this.goToPremierChoix(), 3000);
  }

  componentWillUnmount() {
    document.getElementById("choix-portes").style.display = "block";
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
