document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".animated", {
    speed: 200,
    loop: true,
  })
    .type("Web", { delay: 1500 })
    .delete(3)
    .type("JavaScript", { delay: 1500 })
    .delete(10)
    .type("Php", { delay: 1500 })
    .delete(3)

    .go();
});
