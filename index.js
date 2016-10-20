var command = process.argv[2]
var chalk = require('chalk');

function calcula(m, h, w) {
var Bac = (((.54 * m * 5.14) /(w * 0.69)) - (.015 * h ))
var result = Math.round(Bac * 100) / 100
return result;
}

function message(result){
if (result < 0.08) {
  return chalk.green('% ' + result + 'Su resultado fue favorable, maneje con precaucion');

} else {
  return chalk.red('% ' + result + 'Su resultado no fue favorable. Usted no esta apto para manejar');
 }
}


if(command === "help"){
  console.log(chalk.yellow("Este programa calcula su porcentaje de alcohol en sangre y determina si esta o no capacitado para conducir"));

}else if(command === 'bac'){
 var prompt = require('prompt-sync')();

 var name = String(prompt('Cual es su nombre?'));
 var gender = String(prompt('Cual es su genero?'));

 var w = Number(prompt('Cual es su peso en libras?'));
 var m = Number(prompt('Cual es el numero de medallas que consumio?'));
 var h = Number(prompt('Cual es la cantidad de tiempo (horas) desde su ultima cerveza?'));

calcula(m, h, w);
result = calcula(m, h, w);

console.log(message(result));



}

module.exports = calcula;
