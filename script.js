// Seleccionar el input principal
const input = document.querySelector(".input");

// Seleccionar el botón agregar
const botonAgregar = document.querySelector(".boton-agregar");

// Seleccionar el container
const container = document.querySelector(".container");

class Item {
  constructor(nuevaTarea) {
    // Crear div del item
    this.crearDiv(nuevaTarea);
  }

  crearDiv(nuevaTarea) {
    // Crear div contenedor del item
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    // Crear input para la tarea
    let inputItem = document.createElement("input");
    inputItem.type = "text";
    inputItem.disabled = true;
    inputItem.classList.add("item-input");
    inputItem.value = nuevaTarea;

    // Crear botón de editar
    let botonEditar = document.createElement("button");
    botonEditar.classList.add("boton-editar");
    botonEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';

    // Crear botón remover
    let botonRemover = document.createElement("button");
    botonRemover.classList.add("boton-remover");
    botonRemover.innerHTML = '<i class="fas fa-trash-alt"></i>';

    // Agregar input, botones y sus eventos al div
    itemDiv.appendChild(inputItem);
    itemDiv.appendChild(botonEditar);
    itemDiv.appendChild(botonRemover);
    container.appendChild(itemDiv);

    // Comportamiento botón editar
    botonEditar.addEventListener("click", () => {
      if (inputItem.disabled === true) {
        inputItem.disabled = false;
        botonEditar.innerHTML = "<i class='fa-solid fa-lock-open'></i>";
      } else {
        inputItem.disabled = true;
        botonEditar.innerHTML = "<i class='fa-solid fa-lock'></i>";
      }
    });

    // Comportamiento botón remover
    botonRemover.addEventListener("click", () => {
      itemDiv.remove();
    });
  }
}

// Verificando Input
function chequearInput() {
  if (input.value === "") {
    alert("Debe introducir una tara");
  } else {
    new Item(input.value);
    input.value = "";
  }
}

botonAgregar.addEventListener("click", () => {
  chequearInput();
});
