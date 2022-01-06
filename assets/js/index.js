import { Leon } from "./leon.js";
import { Aguila } from "./aguila.js";
import { Lobo } from "./lobo.js";
import { Oso } from "./oso.js";
import { Serpiente } from "./serpiente.js";

const animales = {};

$("#btnRegistrar").click(async () => {
  const nombreAnimal = $("#animal").val();
  const edad = $("#edad").val();
  const comentarios = $("#comentarios").val();
  $("#animal").prop("selectedIndex", 0);
  $("#edad").prop("selectedIndex", 0);
  $("#comentarios").val("");
  $("#preview").css("background-image", "");

  let animal;
  if (nombreAnimal == "Leon") {
    animal = new Leon(nombreAnimal, edad, comentarios);
  } else if (nombreAnimal == "Aguila") {
    animal = new Aguila(nombreAnimal, edad, comentarios);
  } else if (nombreAnimal == "Lobo") {
    animal = new Lobo(nombreAnimal, edad, comentarios);
  } else if (nombreAnimal == "Oso") {
    animal = new Oso(nombreAnimal, edad, comentarios);
  } else if (nombreAnimal == "Serpiente") {
    animal = new Serpiente(nombreAnimal, edad, comentarios);
  } else {
    console.log("Animal no válido");
  }
  insertarAnimal(animal);
  animales[nombreAnimal] = animal;
});

const insertarAnimal = (animal) => {
  $("#Animales").append(
    `<div class="col-4 animal">
        <img src="${animal.img}" class="foto" />
        <div class="bg-secondary audio-btn">
          <img src="assets/imgs/audio.svg" />
          <input type="hidden" value="${animal.nombre}" />
        </div>
      </div>`
  );
  $(".audio-btn").click(function () {
    const nombreAnimal = $(this).find("input").val();
    const animal = animales[nombreAnimal];
    if (animal.nombre == "Leon") {
      animal.rugir();
    } else if (animal.nombre == "Aguila") {
      animal.chillar();
    } else if (animal.nombre == "Lobo") {
      animal.aullar();
    } else if (animal.nombre == "Oso") {
      animal.gruñir();
    } else if (animal.nombre == "Serpiente") {
      animal.sisear();
    }
  });
  $(".foto").click(function () {
    const padre = $(this).parent();
    const nombreAnimal = $(padre).find("input").val();
    const animal = animales[nombreAnimal];
    const modalElem = document.getElementById("exampleModal");
    const modal = $("#exampleModal").modal();
    $(".modal-body").html(`
    <div class="text-light text-center">
        <img src="${animal.img}" style="width: 150px;" />
        <p class="py-1">${animal.edad}</p>
        <h5>Comentarios</h5>
        <p>${animal.comentarios}</p>
    </div>
    `);
  });
};
