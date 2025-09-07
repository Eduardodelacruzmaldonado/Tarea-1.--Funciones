let base =document.getElementById("base")
const colores=["primary","secondary","info"]
const colores_boton=["success","danger","warning"]
const colores_boton2=["dark","secondary"]
//   <h5 class="card-title bg-${i%3==0?'primary':i%3==1?'success':'danger'}">Titulo${i}</h5>
for(let i=0; i<8;i++){
  let tarjeta=document.createElement("div");
  tarjeta.className="card col-3 m-1 mb-1"
  tarjeta.innerHTML=`
        <div class="card-body">
          <h5 class="card-title bg-${colores[i%3]}">Titulo${i}</h5>
          <p class="card-text bg-${colores_boton[i%3]}">Contenido</p>
          <a href="#" class="btn btn-${colores_boton2[i%2]}">Ir</a>
        </div>`
  base.appendChild(tarjeta)
}
