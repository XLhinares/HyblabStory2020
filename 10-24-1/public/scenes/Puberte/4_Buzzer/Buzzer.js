import Component from "../../../js/Component.js";

export default class Buzzer extends Component {
  constructor({ goToDiscussion }) {
    super();
    this.html = "";
    this.goToDiscussion = goToDiscussion;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Puberte/4_Buzzer/Buzzer.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("explic-buzzer-4")
      .addEventListener("click", e => this.goToDiscussion(e));
    // Pause sur la musique d'ambiance
    document.getElementById("puberte-global-player").pause();
    document.getElementById("puberte-global-player").elemMusicOn = false;
    // Buzzer player
    document.getElementById("buzzer-player").elemMusicOn = true;
    document.getElementById("buzzer-player").volume = 0.13;
    if (!document.getElementById("buzzer-player").isMuted) {
      document.getElementById("buzzer-player").play();
    }
    // End of buzzer, background music restart
    document.getElementById("buzzer-player").onended = () =>
      document.getElementById("buzzer-player").elemMusicOn = false;
      // document.getElementById("buzzer-player").pause();
      document.getElementById("puberte-global-player").elemMusicOn = true;
      document.getElementById("puberte-global-player").volume = 0.11;
      if (!document.getElementById("puberte-global-player").isMuted) {
        document.getElementById("puberte-global-player").play();
      }
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}
