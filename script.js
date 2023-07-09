//////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////en la linea 120 se empiezan a crear los elementos html//////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//OBTENER ELEMENTOS DEL DOM MEDIANTE ID

let titulo = document.getElementById('titulo1');

let boton = document.getElementById('boton1');
console.log(titulo);
console.log(boton);


//llamar por id con otro metodo query selector

let botones = document.querySelector('#boton1');
console.log(botones);


let titulos = document.querySelector('#titulo1');
console.log(titulos);

//query selector p
let enlace = document.querySelector('a');
console.log(enlace);

// queryselector para el formulario 
let formulario = document.querySelector('form');
// console.log(formulario) ;

//selectores


let enlacefb = document.querySelector('a[href="https://wwww.facebook.com"]');
console.log(enlacefb);


let enlacesSeguros = document.querySelectorAll('a[href^="https"]');
console.log(enlacesSeguros);
//cambiar color 

let texto = document.querySelectorAll('.text-danger');

for (const elemento of texto) {
    console.log(elemento)
}

//acceder con childnodes

let conjuntoParrafos = document.getElementById('parrafos');
console.log(conjuntoParrafos.childNodes);
console.log(conjuntoParrafos.children[3].innerText = 'cambio desde js');
console.log(conjuntoParrafos.children[0].innerText = 'hola mundo desde js');

//get atributs


console.log(enlace.getAttribute('href'));
formulario.setAttribute('action', '#');
console.log(formulario.getAttribute('action'));

// let metaTags = document.querySelectorAll('meta')

// for (const tag of metaTags) {
//     console.log(tag.getAttribute('content'))
    
// }
//obtener o setear atributos de esta forma

formulario.action = "/controladores/guardar.php"


console.log(enlace.href)

// acceder al id de diferente manera 
console.log(botones.id)


//acceder al valor de un elemento 


let input = document.querySelector('input');

console.log(input.value);
// obtener la clase de un atributo
// console.log(titulo1.getAttribute('class').replace('fw-bold',' '));
// console.log(titulo2.getAttribute('class').replace(' ','fw-bold'));
// console.log(input3.getAttribute('class'));


console.log(titulo1.classList)
//a;adir clase a traves de js

titulo1.classList.add('fs-4');
titulo1.classList.remove('text-danger');
titulo1.classList.add('text-primary')
titulo2.classList.add('text-primary');

parrafo2.classList.add('text-danger');


//modificar con textcontent

console.log(texto[1].textContent);
texto[1].textContent = "Hola altere el texto desde js";

//modificar html


console.log(conjuntoParrafos.textContent);


//adentro del texto
console.log(conjuntoParrafos.innerText);

// adentro html
console.log(conjuntoParrafos.innerHTML);


//trae afuera lo de html
console.log(conjuntoParrafos.outerHTML);

//crear elementos html

// Crear tabla
const tabla = document.createElement('table');

// Asignar valores a la tabla 
tabla.id = 'miTabla';
tabla.classList.add('table', 'table-striped');

// Añadir la tabla al html
const conjunto = document.getElementById('parrafos');
conjunto.appendChild(tabla);

// Crear parrafo
const parrafoNuevo = document.createElement('p');

// Asignar valores al parrafo
parrafoNuevo.textContent = 'Parrafo creado desde JavaScript';
parrafoNuevo.classList.add('text-primary', 'fw-bold');

// Añadir el parafo al html
conjunto.appendChild(parrafoNuevo);

// Crear input
const inputNuevo = document.createElement('input');

// Asignacion de valores
inputNuevo.type = 'text';
inputNuevo.id = 'miInput';
inputNuevo.classList.add('form-control');

// A;adir el input al HTML
conjunto.appendChild(inputNuevo);

// Creacion de otro parrafo
const otroParrafo = document.createElement('p');

// Asignar valores al otro párrafo (texto, clases, etc.)
otroParrafo.textContent = 'Otro parrafo creado desde JavaScript';
otroParrafo.classList.add('text-danger');

// Añadir el otro parrafo al HTML
conjunto.appendChild(otroParrafo);

// Creacion de boton
const botonNuevo = document.createElement('button');

// Asignacion valores al boton
botonNuevo.textContent = 'Enviar';
botonNuevo.classList.add('btn', 'btn-primary');

// A;adir el botón a html
conjunto.appendChild(botonNuevo);

// se creo enlace
const enlaceNuevo = document.createElement('a');

// Asignacion de  valores al enlace 
enlaceNuevo.textContent = 'Enlace';
enlaceNuevo.href = 'https://www.example.com';
enlaceNuevo.classList.add('link');

 //A;adir el enlace 
  conjunto.appendChild(enlaceNuevo);

// Crear titulo con h1
const tituloH1 = document.createElement('h1');

// Asignar valores alh1 
tituloH1.textContent = 'Comando de informatica y teconlogia';
tituloH1.classList.add('text-primary', 'fw-bold');

// A;adir h1 a html
conjunto.appendChild(tituloH1);

// Crear  h2
const tituloH2 = document.createElement('h2');

// Asignar valores al h2 
tituloH2.textContent = 'INGENIERIA DE SOFTWARE';
tituloH2.classList.add('text-danger');

// Añadir el título h2 al HTML
conjunto.appendChild(tituloH2);




// //acceder a sus hijos
// console.log(conjuntoParrafos.firstChild);
// console.log(conjuntoParrafos.firstElementChild);

// //acceder al siguiente elemento
// console.log(conjuntoParrafos.nextElementSibling);
// console.log(conjuntoParrafos.nextSibling);


// //acceder al elemento padre
// console.log(conjuntoParrafos.parentElement);

































