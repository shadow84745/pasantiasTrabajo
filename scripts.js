// Selecciona los canvas dentro del div con el id "bloque-1"
const canvasEntidades = document.getElementById("selector-entidades");
const canvasAtributos = document.getElementById("selector-atributos");
const canvasMetodos = document.getElementById("selector-metodos");

// Crea un campo de texto
const createTextField = () => {
    const textField = document.createElement("input");
    textField.type = "text";
    textField.style.position = "absolute";
    textField.style.width = "100px";
    textField.style.height = "20px";
    return textField;
  };
  
  const canvases = document.querySelectorAll("#bloque-1 canvas");
  canvases.forEach((canvas) => {
    const textField = createTextField();
    canvas.parentNode.style.position = "relative";
    canvas.parentNode.appendChild(textField);
  });
  

// Agrega un campo de texto arrastrable a un canvas
const addDraggableTextField = (canvas) => {
    const textField = createTextField();
    const container = canvas.parentNode;
    container.style.position = "relative";
    container.insertBefore(textField, canvas.nextSibling);
  
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
  
    textField.addEventListener("mousedown", (event) => {
      isDragging = true;
      prevX = event.clientX;
      prevY = event.clientY;
    });
  
    textField.addEventListener("mouseup", () => {
      isDragging = false;
    });
  
    textField.addEventListener("mousemove", (event) => {
      if (isDragging) {
        const dx = event.clientX - prevX;
        const dy = event.clientY - prevY;
        const left = parseInt(textField.style.left || 0);
        const top = parseInt(textField.style.top || 0);
        textField.style.left = `${left + dx}px`;
        textField.style.top = `${top + dy}px`;
        prevX = event.clientX;
        prevY = event.clientY;
      }
    });
  };
  

// Agrega campos de texto arrastrables a los canvas
addDraggableTextField(canvasEntidades);
addDraggableTextField(canvasAtributos);
addDraggableTextField(canvasMetodos);
