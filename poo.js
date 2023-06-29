class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, año_nacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.año_nacimiento = año_nacimiento;
  }
  mostrarGeneracion() {
    let generacion = "";
    let rasgos_caracteristicos = "";
    let marco_temporal = "";
    if (this.año_nacimiento >= 1994 && this.año_nacimiento <= 2010) {
      generacion = "Generacion Z";
      rasgos_caracteristicos = "irreverencia";
      marco_temporal = "1994-2010";
    } else if (this.año_nacimiento >= 1981 && this.año_nacimiento <= 1993) {
      generacion = "Generacion Y (Millenials)";
      rasgos_caracteristicos = "frustracion";
      marco_temporal = "1981- 1993";
    } else if (this.año_nacimiento >= 1969 && this.año_nacimiento <= 1980) {
      generacion = "Generacion X";
      rasgos_caracteristicos = "obsesion por el exito";
      marco_temporal = "1969-1980";
    } else if (this.año_nacimiento >= 1949 && this.año_nacimiento <= 1968) {
      generacion = "Baby Boom";
      rasgos_caracteristicos = "Ambicion";
      marco_temporal = " 1949-1968";
    } else if (this.año_nacimiento >= 1930 && this.año_nacimiento <= 1948) {
      generacion = "Silent Generacion(Los niños de la post guerra)";
      rasgos_caracteristicos = "Austeridad";
      marco_temporal = "1930-1948";
    }
    let poblacion = this.get_poblacion(generacion);
    let mensaje = `generacion: ${generacion}\nMarco_temporal : ${marco_temporal}\nPoblacion: ${poblacion}\nRasgos: ${rasgos_caracteristicos}`;
    return mensaje;
  }
  get_poblacion(generacion) {
    let poblaciones = "";
    switch (generacion) {
      case "Generacion Z":
        poblaciones = "7.800.000";
        break;
      case "Generacion Y (Millenials)":
        poblaciones = "7.200.000";
        break;
      case "Generacion X":
        poblaciones = "9.300.000";
        break;
      case "Baby Boom":
        poblaciones = "12.200.000";
        breack;
      case "Silent Generacion(Los niños de la post guerra)":
        poblaciones = "6.300.000";
        break;
      default:
        poblaciones = "Datos no encontrados";
        break;
    }
    return poblaciones;
  }
}

let form = document.querySelector("form");
let resDiv = document.querySelector("#resultado");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let nombre = form.nombre.value;
  let edad = parseInt(form.edad.value);
  let dni = form.dni.value;
  let sexo = form.sexo.value;
  let peso = parseFloat(form.peso.value);
  let altura = parseFloat(form.altura.value);
  let año_nacimiento = parseInt(form.año_nacimiento.value);

  let persona = new Persona(
    nombre,
    edad,
    dni,
    sexo,
    peso,
    altura,
    año_nacimiento
  );
  let genpers = persona.mostrarGeneracion();
  let esMayorEdad =
    persona.edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
  resDiv.innerHTML = `<p>${genpers}</p><p>${esMayorEdad}</p>`;
});
