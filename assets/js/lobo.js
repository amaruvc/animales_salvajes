import { Animal } from "./animal.js";

export class Lobo extends Animal {
  constructor(nombre, edad, comentarios) {
    super(
      nombre,
      edad,
      "assets/imgs/Lobo.jpg",
      comentarios,
      "assets/sounds/Aullido.mp3"
    );
  }
  aullar() {
    const player = document.getElementById("player");
    player.innerHTML = `<source src="${this.sonidos}" type="audio/mpeg">`;
    player.play();
  }
}
