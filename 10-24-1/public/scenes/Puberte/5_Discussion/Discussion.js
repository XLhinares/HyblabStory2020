import Component from "../../../js/Component.js";

export default class Discussion extends Component {
  constructor({ goToSuperPapa }) {
    super();
    this.html = "";
    this.goToSuperPapa = goToSuperPapa;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Puberte/5_Discussion/Discussion.html"
    );
  }

  componentDidMount() {
    document.getElementById("go-to-super-papa").addEventListener("click", e => {
      this.goToSuperPapa(e);
    });
    //end buzzer just in case
    document.getElementById("buzzer-player").elemMusicOn = false;
    // Pause sur la musique d'ambiance jusqu'à la scene des choix
    document.getElementById("puberte-global-player").pause();
    document.getElementById("puberte-global-player").elemMusicOn = false;
    // Dad discussion
    document.getElementById("papa-player").elemMusicOn = true;
    document.getElementById("papa-player").volume = 0.11;
    if (!document.getElementById("papa-player").isMuted) {
      document.getElementById("papa-player").play();
    }
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
