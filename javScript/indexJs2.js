console.log("Primera linea");

const add =(x, p, h) =>{
let sum = x + p + h;
console.log(sum);
};

console.log("Pruebas.com")


alert("Prueba de alertas");




let prop ='name';
let id = '1234';
let mobilr ='08923';

let user = {
    [prop]: 'jack',
    ['user_${id}']:'${mobile}'
};

var i = 0;
var a ={
    ['foo' + ++i]: i,
    ['foo' + ++i]: i,
    ['foo' + ++i]: i
};


var param ='size';
var config ={
    [param]: 12,
    ['mobile' +
param.charAt(0).toUpperCase() +
param.slice(1)]: 4
};
console.log(config);


function capturar(){
    function Persona(nombre, edad, estado)
    this.nombre= nombre;
    this.edad=edad;
    this.estado=estado;
}
var nombre="Javier Buitrago",
var edad= 23,
estado= true;

    