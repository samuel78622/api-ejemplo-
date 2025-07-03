async function getDivisa() {
  const res = await fetch("https://uy.dolarapi.com/v1/cotizaciones");
  const divisa = await res.json();
modendalist = ""
divisa.forEach(estado => {
    modendalist+=
    estado.moneda +" / "+ 
    estado.nombre +" / "+ 
    estado.compra +" / "+ 
    estado.venta +" / "+ 
    
    estado.fechaActualizacion + "<br>"
});
console.log(modendalist);
document.getElementById("emails").innerHTML= modendalist
}

