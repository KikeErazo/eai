
// Reemplaza con tus contraseñas
const contrasenasValidas = ["reeb", "lafv", "dlmv", "jfvg", "lfaa", "pcjo", "76327133"]; 

document.getElementById("password-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const passwordIngresada = document.getElementById("password-input").value;
  if (contrasenasValidas.includes(passwordIngresada)) {
    document.getElementById("content").style.display = "block";
  } else {
    alert("Contraseña incorrecta. Inténtalo de nuevo.");
  }
});
