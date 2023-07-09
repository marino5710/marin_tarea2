// en la linea 118 se empiezan a crear los elementos html
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

///tabla
const tabla = document.createElement('table');
conjuntoParrafos.appendChild(tabla);
const parrafonuevo = document.createElement('p');


//parrafos
parrafonuevo.textContent = "parrafo creado desde js"; 
parrafonuevo.classList.add('text-primary', 'fw-bold');
conjuntoParrafos.appendChild(parrafonuevo);

//acceder a sus hijos
console.log(conjuntoParrafos.firstChild);
console.log(conjuntoParrafos.firstElementChild);

//acceder al siguiente elemento
console.log(conjuntoParrafos.nextElementSibling);
console.log(conjuntoParrafos.nextSibling);


//acceder al elemento padre
console.log(conjuntoParrafos.parentElement);

































