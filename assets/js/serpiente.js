import { Animal } from "./animal.js";

export class Serpiente extends Animal {
  constructor(nombre, edad, comentarios) {
    super(
      nombre,
      edad,
      "assets/imgs/Serpiente.jpg",
      comentarios,
      "assets/sounds/Siseo.mp3"
    );
  }
  sisear() {
    const player = document.getElementById("player");
    player.innerHTML = `<source src="${this.sonidos}" type="audio/mpeg">`;
    player.play();
  }
}
