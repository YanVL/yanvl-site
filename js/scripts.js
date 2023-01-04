document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".animated", {
    speed: 200,
    loop: true,
  })
    .type("Web", { delay: 1500 })
    .delete(3)
    .type("VueJs", { delay: 1500 })
    .delete(5)
    .type("Laravel", { delay: 1500 })
    .delete(7)

    .go();
});
