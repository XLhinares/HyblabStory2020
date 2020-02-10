import Component from "../../../js/Component.js";

export default class Porte extends Component {
  constructor({ onGoRentrer }) {
    super();
    this.html = "";
    this.onGoToRentrer = onGoToRentrer;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Ecrans/PorteChoix/PorteChoix.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("toquer")
      .addEventListener("click", this.onGoToRentrer);
    document
      .getElementById("partir")
      .addEventListener("click", this.onGoToCarousel);
  }

  componentWillUnmount() {
    document
      .getElementById("toquer")
      .removeEventListener("click", this.onGoToRentrer);
    document
      .getElementById("partir")
      .addEventListener("click", this.onGoToCarousel);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
