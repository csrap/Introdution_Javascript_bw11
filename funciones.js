function serHobbit() {
  //caminar
  caminar(); 
  //comer
  comer('7AM', desayuno);
  caminar();
  comer('10AM',segundoDesayuno);
  caminar();
  comer('11AM', temtempie); 
  caminar();
  caminar();
  comer('1PM', almuerzo); 
}

function caminar () {
  console.log('Camina');
}

function comer(hora, functionComida) {
  functionComida(hora); 
}

function desayuno(hora) {
  console.log(`${hora}: Toca comer el desayuno`); 
}

function segundoDesayuno(hora) {
  console.log(`${hora}: Toca comer el segundoDesayuno`); 
}

function temtempie(hora) {
  console.log(`${hora}: Toca comer el tentempie`); 
}
function almuerzo(hora) {
  console.log('Tengo que cazar primero');
  cazar('conejo')
  console.log(`${hora}:Toca comer el almuerzo`);
}
function cazar(animal){
  console.log('he cazado un' + animal); 
}
console.log('Ejecucion de serHobbit')
serHobbit(); 