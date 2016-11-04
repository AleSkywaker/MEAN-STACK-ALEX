$(document.body).ready(initializeEvents);
function initializeEvents() {
$("#agregar").click(agregarFila);
$("#eliminar").click(eliminarFila);
$("#actualizar").click(actualizarFila);
}

function agregarFila() {
var iden = document.getElementById("id").value;   
if (iden == undefined || iden == null || iden == 0){
    alert("Debe rellenar los campos antes de agregar");
} else{
var identificador = document.getElementById("id").value;
var tituloPeli = document.getElementById("titulo").value;
var directorPeli = document.getElementById("director").value;
var sipnosisPeli = document.getElementById("sipnosis").value;
var fechaPeli = document.getElementById("fecha").value;
 
    $.ajax({
        url: 'http://localhost:3000/peliculas',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
        id:identificador,
        titulo:tituloPeli,
        director:directorPeli,
        genero:sipnosisPeli,
        fecha:fechaPeli
        }),
        dataType: 'json'
        });
             
       $.ajax({
        url: 'http://localhost:3000/peliculas',
        type: 'GET',
        contentType: 'application/json',
        data: JSON.stringify({
        id:identificador,
        titulo:tituloPeli,
        director:directorPeli,
        genero:sipnosisPeli,
        fecha:fechaPeli
        }),
        dataType: 'json'
        });
  
      $("#tabla").append("<tr><td>" + identificador + "</td>" + "<td>" + tituloPeli
      + "</td>" + "<td>" + directorPeli + "</td>" + "<td>" + sipnosisPeli + "</td>" + 
      "<td>" + fechaPeli + "</td></tr>");

      document.getElementById("id").value = "";
      document.getElementById("titulo").value = "";
      document.getElementById("director").value = "";
      document.getElementById("sipnosis").value = "";
      document.getElementById("fecha").value = "";
      };
}
      function cargarDatos(){

      $.getJSON("http://localhost:3000/peliculas", function (data) {

      for (var i = 0; i < data.length; i++) {
      $("#tabla").append("<tr><td>" + data[i].id + "</td>" + "<td>" + data[i].titulo
      + "</td>" + "<td>" + data[i].director + "</td>" + "<td>" + data[i].genero + "</td>" +
      "<td>" + data[i].fecha + "</td></tr>");
               }
           });
       }
      function eliminarFila(){
      var dato = prompt ("Por favor indique el ID que desea eliminar", "Escriba id");
      var dato = Number(dato);
      $.ajax( "http://localhost:3000/peliculas/"+dato, {
      method: 'DELETE'
            });
         //   console.log(peliculasArray);
      location.reload(true);
       };  
      function actualizarFila(){
      var ide = document.getElementById("id").value;   
      if (ide == undefined || ide == null || ide == 0){
      alert("Debe rellenar campo id del registro y datos a modificar");
      } else{
      agregarFila(); 
          }
      }
