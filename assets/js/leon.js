import { Animal } from "./animal.js";

export class Leon extends Animal {
  constructor(nombre, edad, comentarios) {
    super(
      nombre,
      edad,
      "assets/imgs/Leon.png",
      comentarios,
      "assets/sounds/Rugido.mp3"
    );
  }

  rugir() {
    const player = document.getElementById("player");
    player.innerHTML = `<source src="${this.sonidos}" type="audio/mpeg">`;
    player.play();
  }
}
