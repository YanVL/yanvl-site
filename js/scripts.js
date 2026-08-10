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
    .type("Laravel", { delay: 3000 })
    .delete(7)
    .type("Wordpress", { delay: 3000 })
    .delete(10)
    .type("Hubspot", { delay: 3000 })
    .delete(7)
    .type("Docker", { delay: 3000 })
    .delete(6)

    .go();
});
