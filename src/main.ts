import * as ROT from "rot-js";

class Engine {
  public static readonly WIDTH = 80;
  public static readonly HEIGHT = 50;

  display: ROT.Display;

  playerX: number;
  playerY: number;

  constructor() {
    this.display = new ROT.Display({
      width: Engine.WIDTH,
      height: Engine.HEIGHT,
    });

    this.playerX = Engine.WIDTH / 2;
    this.playerY = Engine.HEIGHT / 2;

    const container = this.display.getContainer()!;
    document.body.appendChild(container);

    this.render();
  }

  render() {
    this.display.draw(this.playerX, this.playerY, "@", "#fff", "#000");
  }
}

declare global {
  interface Window {
    engine: Engine;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.engine = new Engine();
});
