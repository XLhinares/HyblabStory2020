import Component from "../../../js/Component.js";

export default class Porte extends Component {
  constructor({ onGoToArriveeEnfant }) {
    super();
    this.html = "";
    this.onGoToArriveeEnfant = onGoToArriveeEnfant;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Harcelement/Porte/Porte.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("arrivee-enfant")
      .addEventListener("click", e => this.onGoToArriveeEnfant(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
