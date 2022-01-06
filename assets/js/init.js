(async () => {
  let data = await fetch("data/animales.json");
  data = await data.json();
  const animales = data.animales;

  $("#animal").change(() => {
    let nombreAnimal = $("#animal").val();
    const animal = animales.find((a) => a.name == nombreAnimal);

    $("#preview").css(
      "background-image",
      `url("assets/imgs/${animal.imagen}")`
    );
  });
})();
