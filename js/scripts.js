document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".animated", {
    speed: 200,
    loop: true,
  })
    .type("Web", { delay: 3000 })
    .delete(3)
    .type("Js", { delay: 3000 })
    .delete(2)
    .type("Php", { delay: 3000 })
    .delete(3)

    .go();
});
