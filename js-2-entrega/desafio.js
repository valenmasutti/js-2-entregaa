function limpiarFormulario() {
  let campos = document.querySelectorAll(
    "input[type='Text'],input[type='number']"
  );
  for (let x = 0; x < campos.length; x++) {
    campos[x].value = "";
  }
}

let empleados = [];
function agregarEmpleado() {
  let personal = [];
  personal.push(document.getElementById("txtNombre").value);
  personal.push(document.getElementById("txtApellido").value);
  personal.push(document.getElementById("txtEdad").value);
  personal.push(document.getElementById("txtSueldo").value);

  let validarFormulario = true;
  for (let x = 0; x < personal.length; x++) {
    if (personal[x] == "") {
      validarFormulario = false;
    }
  }
  if (validarFormulario) {
    empleados.push(personal);
    let datos = JSON.stringify(empleados);
    localStorage.setItem("listadoEmpleados", datos);
    limpiarFormulario();
    mostrarEmpleados();
  } else {
    alert("por favor llenar los campos requeridos");
  }
}
function mostrarEmpleados() {
  let llenarTabla = document.getElementById("tbDatos");
  llenarTabla.innerHTML = "";

  for (let x = 0; x < empleados.length; x++) {
    tr = document.createElement("tr");
    personal = empleados[x];

    for (y = 0; y < personal.length; y++) {
      celda = personal[y];
      td = document.createElement("td");
      td.innerHTML = celda;
      tr.appendChild(td);
    }
    llenarTabla.appendChild(tr);
  }
}

datos = localStorage.getItem("listadoEmpleados");
if (datos != null) {
  empleados = JSON.parse(datos);
  mostrarEmpleados();
}
