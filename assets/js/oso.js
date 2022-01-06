import { Animal } from "./animal.js";

export class Oso extends Animal {
  constructor(nombre, edad, comentarios) {
    super(
      nombre,
      edad,
      "assets/imgs/Oso.jpg",
      comentarios,
      "assets/sounds/Gruñido.mp3"
    );
  }
  gruñir() {
    const player = document.getElementById("player");
    player.innerHTML = `<source src="${this.sonidos}" type="audio/mpeg">`;
    player.play();
  }
}
