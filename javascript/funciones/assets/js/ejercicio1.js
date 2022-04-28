 //Pedir entrada del usuario
 var int= prompt("Ingrese el número a calcular");
 
 /*var int = document.getElementById('num').addEventListener('keyenter', ()=>{
   console.log(int)
 });

 
 document.querySelector
  ('#btn').addEventListener('click', factorial);*/
 
 //Ingresar soporte a errores

 //Crear función:
   let out=1;

  function factorial(int){
     let cont=int;
     while(cont>=1)
   {
      out= out*cont;
      cont--;
      console.log(out);
   }

return out;
 }

 //Llamar la función
 factorial(int);
  document.write(out);