const botaoMenu = document.querySelector(".botao-menu");
const menu = document.querySelector("nav");
const linksMenu = document.querySelectorAll("nav a");

botaoMenu.addEventListener("click", function() {
    menu.classList.toggle("menu-aberto");
    const menuEstaAberto = menu.classList.contains("menu-aberto");
    botaoMenu.setAttribute("aria-expanded", menuEstaAberto);
    botaoMenu.setAttribute("aria-label", menuEstaAberto ? "Fechar menu" : "Abrir menu");
});

linksMenu.forEach(function(link) {
    link.addEventListener("click", function() {
        menu.classList.remove("menu-aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    });
});