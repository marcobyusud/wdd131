const currentYear = new Date().getFullYear();
document.querySelector("#anoatual").textContent = currentYear;
document.querySelector("#ultimaModificacao").textContent =
  `Última modificação: ${document.lastModified}`;
