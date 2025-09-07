//Selección (Condicionales) IF
let edad=20
if(edad>=18){
    console.log("Eres mayor de edad")
}
console.log("Fin")
console.log("------------------")
console.log("------------------")
console.log("------------------")

//Selección(Condicionales)IF-ELSE
let edad1=20
if(edad1>=18){
    console.log("Eres mayor de edad")
}else{
    console.log("Eres menor de edad")
}
console.log("Fin")
console.log("------------------")
console.log("------------------")
console.log("------------------")

//Condicionales anidadas
let edad2=20
let traeIne=true
if(edad2>=18){
    if(traeIne){
        console.log("Bienvenido al Shine")
    }else{
        console.log("No puedes entrar")
    }
}else{
    console.log("Eres menor de edad")
}
console.log("Fin")
console.log("------------------")
console.log("------------------")
console.log("------------------")


//Selección multiple con IF
let dia='lunes'
if(dia=='lunes'){
    console.log("Inicio de semana")
} else if(dia=='martes'){
 console.log("Segundo Lunes")
}else if(dia=='mmiercoles'){
 console.log("Ombligo de la semana")
}else if(dia=='jueves'){
 console.log("Precopeo")
}else if(dia=='viernes'){
 console.log("Hoy toca")
}else{
    console.log("A descansar!!!")
}

console.log("------------------")
console.log("------------------")
console.log("------------------")


//Selección multiple con SWITCH
let dia1= 'sabado'
switch(dia1){
  case'lunes':
  console.log("Inicio de semana");
  break;
  case'martes':
  console.log("Segundo lunes");
  break;
  case'miercoles':
  console.log("Ombligo de la semana");
  break;
  case'jueves':
  console.log("Pre viernes");
  break;
  case'viernes':
  console.log("Hoy tooca y el cuerpo lo sabe!!!");
  break;
  default:
  console.log("A descansar");
  break;
}

console.log("------------------")
console.log("------------------")
console.log("------------------")


//Repetición (Ciclos) FOR
console.log("Ejemplo for")
for(let i=0;i<5;i++)
  console.log("Hola"+i)

//Repetición (Ciclos) FOR IN
const miArray=["a","b","c"]
for(let indice in miArray){
    console.log(indice)
}
console.log("------------------")
console.log("------------------")
console.log("------------------")


//Repetición(Ciclos)WHILE
let contador=1
while(contador<=5){
    console.log("contador:"+contador)
    contador++
}
console.log("------------------")
console.log("------------------")
console.log("------------------")

const calificaciones=[9,7,10,5,8]
for(let i=0;i<calificaciones.length;i++){
   console.log(calificaciones[1])
}
console.log("------------------")
console.log("------------------")
console.log("------------------")


//Repetición (Ciclos)DO-WHILE
let numero=0
do{
    console.log("Numero: "+numero)
    numero++
} while(numero<3)
console.log("------------------")
console.log("------------------")
console.log("------------------")


//Break y Continue
for(let i=1;i<=10;i++){
    if(i==3) continue
    if(i==3) break
    console.log("i ="+i)
}
console.log("------------------")
console.log("------------------")
console.log("------------------")


//Extra
function recorreArray(array,callback){
    for(let i=0;i<array.length;i++){
        callback(array[i])
    }
}
recorreArray([1,2,3],function(num){
    console.log("Numero:",num)
})
