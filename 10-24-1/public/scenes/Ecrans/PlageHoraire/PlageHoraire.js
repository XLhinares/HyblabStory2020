import Component from "../../../js/Component.js";

export default class PlageHoraire extends Component {
  constructor({ goToPlageHoraire3, goToPlageHoraire2, goToPlageHoraire2_2, goToPlageHoraire2_3 }) {
    super();
    this.html = "";
    this.valuemin = 0;
    this.valuemax = 24;
    this.plage = this.valuemax - this.valuemin;
    this.goToPlageHoraire3 = goToPlageHoraire3;
    this.goToPlageHoraire2 = goToPlageHoraire2;
    this.goToPlageHoraire2_2 = goToPlageHoraire2_2;
    this.goToPlageHoraire2_3 = goToPlageHoraire2_3;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Ecrans/PlageHoraire/PlageHoraire.html"
    );
  }

  componentDidMount() {
    document.getElementById("ecran-player").pause();
    document.getElementById("ecran-player").elemMusicOn = false;
    document
      .getElementById("e_validation")
      .addEventListener("click", e => {
        this.valuemin = document.getElementById('min_slider').value;
        this.valuemax = document.getElementById('max_slider').value;
        this.plage = this.valuemax - this.valuemin;
        if ((this.plage <= 2) && (this.valuemin >= 8) && (this.valuemax <= 21)) {
          this.goToPlageHoraire3(e);
        }
        else if ((this.plage <= 2) && (this.valuemin < 8)) {
          this.goToPlageHoraire2_2(e);
        }
        else if ((this.plage <= 2) && (this.valuemax > 21)) {
          this.goToPlageHoraire2_3(e);
        }
        else {
          this.goToPlageHoraire2(e);
        }
      });
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
