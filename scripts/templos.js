const currentYear = new Date().getFullYear();
document.querySelector("#anoatual").textContent = currentYear;
document.querySelector("#ultimaModificacao").textContent =
  `Última modificação: ${document.lastModified}`;

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector("#primaryNavigation");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.textContent = isOpen ? "×" : "☰";
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});
