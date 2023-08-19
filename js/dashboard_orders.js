const openModalBtn = document.querySelectorAll(".openModalBtn");
const closeModalBtn = document.getElementById("closeModal");
const buttonUpdate = document.getElementById("button_update");
const modalUpdate = document.getElementById("modal_update");
const form_content = document.getElementById("form_content");
const modalSuccess = document.getElementById("modal_success");
const buttonCloseSuccess = document.getElementById("closeModalSuccess");

// Muestra el modal de actualización
openModalBtn.forEach((openModalBtn) => {
  openModalBtn.addEventListener("click", () => {
    modalUpdate.style.display = "flex";
    form_content.style.display = "flex";
    modalSuccess.style.display = "none";
  });
});

// Cierra el modal de actualización
closeModalBtn.addEventListener("click", () => {
  modalUpdate.style.display = "none";
});

// Cierra el modal de actualización si se hace click fuera de él
window.addEventListener("click", (event) => {
  if (event.target === modalUpdate) {
    modalUpdate.style.display = "none";
    modalSuccess.style.display = "none";
  }
});

buttonUpdate.addEventListener("click", validateForm);

//buttonUpdate.addEventListener("click", showSuccessModal);

// Muestra el segundo modal
function showSuccessModal() {
  form_content.style.display = "none";
  modalSuccess.style.display = "flex";
  cleanForm();
}

// Cierra el segundo modal
buttonCloseSuccess.addEventListener("click", closeSuccessModal);

function closeSuccessModal() {
  modalSuccess.style.display = "none";
  modalUpdate.style.display = "none";
}

function validateForm(e) {
  e.preventDefault();
  var inputField1 = document.getElementById("Nombres");
  var inputField2 = document.getElementById("Email");
  var inputField3 = document.getElementById("Celular");

  // Validar los campos según tus criterios
  if (inputField1.value.trim() === "") {
    alert("Por favor ingresa el nombre.");
    return false;
  }

  if (inputField2.value.trim() === "") {
    alert("Por favor ingresa el correo electrónico.");
    return false;
  } else if (!isValidEmail(inputField2.value)) {
    alert("Por favor ingresa un correo electrónico válido.");
    return false;
  }

  if (inputField3.value.trim() === "") {
    alert("Por favor ingresa el número de celular.");
    return false;
  }

  return showSuccessModal();
}

function cleanForm() {
  document.getElementById("Nombres").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Celular").value = "";
}

function isValidEmail(email) {
  // Validar el formato del correo electrónico
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}
