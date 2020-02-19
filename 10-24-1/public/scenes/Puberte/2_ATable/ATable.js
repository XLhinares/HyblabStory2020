import Component from "../../../js/Component.js";

export default class ATable extends Component {
  constructor() {
    super();
    this.html = "";
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Puberte/2_ATable/ATable.html"
    );
  }

  componentDidMount() {
    document.getElementById("puberte-global-player").elemMusicOn = true;
    document.getElementById("puberte-global-player").volume = 0.11;
    if (!document.getElementById("puberte-global-player").isMuted) {
      document.getElementById("puberte-global-player").play();
    }
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
