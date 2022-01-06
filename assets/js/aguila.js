import { Animal } from "./animal.js";

export class Aguila extends Animal {
  constructor(nombre, edad, comentarios) {
    super(
      nombre,
      edad,
      "assets/imgs/Aguila.png",
      comentarios,
      "assets/sounds/Chillido.mp3"
    );
  }
  chillar() {
    const player = document.getElementById("player");
    player.innerHTML = `<source src="${this.sonidos}" type="audio/mpeg">`;
    player.play();
  }
}
