import Component from "../../../js/Component.js";

export default class S10 extends Component {
  constructor({ onGoToS11 }) {
    super();
    this.html = "";
    this.onGoToS11 = onGoToS11;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Flemme/S10/S10.html"
    );
  }

  componentDidMount() {
    document.getElementById("flemme-mid-player").pause();
    document.getElementById("flemme-mid-player").elemMusicOn = false;
    document.getElementById("choix-portes").style.display = "none";
  }

  componentWillUnmount() {
    document.getElementById("choix-portes").style.display = "block";
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
