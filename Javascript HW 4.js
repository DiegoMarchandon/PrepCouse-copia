// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto (luego de la llave violeta)
  // Tu código:
  var NuevoObjeto = {
    nombre: nombre,
    edad: edad,
    meow: function () { 
      return "Meow!";
    }
  }
  return NuevoObjeto;
}

function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto (Devuelve = return, no console.log)
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null;
  return objeto;
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  var resultado = objetoMisterioso.numeroMisterioso*5; {
 return resultado;
  }
}

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
 var NuevoObjeto = {
  nombre: nombre,
  email: email,
  password: password
}; 
return NuevoObjeto;
}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if(usuario["email"]){
    return true;
  } else {
    return false;
  }
}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if(objeto[propiedad]){
    return true;
  } else {
    return false;
  }
}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
if(usuario.password === password){
  return true;
} else {
  return false;
}
}

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
usuario.password = nuevaPassword;
return usuario;
}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
usuario.amigos.push(nuevoAmigo);
return usuario;
}

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  // se que tengo que usar le bucle for porque me pide que CADA objeto tenga la propiedad "esPremium".
  // porque tengo que pasar por cada elemento de array (iteramos sobre cada elemento usuario).
for (let i = 0; i < usuarios.length; i++)
 {
  usuarios[i].esPremium = true;
 }
return usuarios;
}

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
// se busca acceder a los likes de cada post y sumarlos a la variable.
  // usuario.poosts => [p1.likes, p2, p3, p4]
  //
  // Tu código:
  var suma = 0;
  for(let i = 0; i < usuario.posts.length; i++){
  suma = suma + usuario.posts[i].likes;                //cambiamos el valor con un = y le sumamos la cantidad de likes que tenga el primer post del array
}
return suma;
}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

producto.calcularPrecioDescuento = function () {            // sabemos que caluclarPrecioDescuento no existe, así que lo creamos
  var descuento = producto.precio * producto.porcentajeDeDescuento;
var nuevoPrecio = producto.precio - descuento;
return nuevoPrecio;
} 
return producto;
}

/* producto.calcularPrecioDescuento = function () {
  let descuento = this.precio * this.porcentajeDeDescuento;
  return (precioFinal = this.precio - descuento);
};
return producto;
 */

// No modificar nada debajo de esta línea
// --------------------------------