async function getDivisa() {
  const res = await fetch("https://uy.dolarapi.com/v1/cotizaciones");
  const divisa = await res.json();

  let modendalist = `
    <table>
      <thead>
        <tr>
          <th>Moneda</th>
          <th>Nombre</th>
          <th>Compra</th>
          <th>Venta</th>
          <th>Última Actualización</th>
        </tr>
      </thead>
      <tbody>
  `;

  divisa.forEach(estado => {
    modendalist += `
      <tr>
        <td>${estado.moneda}</td>
        <td>${estado.nombre}</td>
        <td>${estado.compra}</td>
        <td>${estado.venta}</td>
        <td>${estado.fechaActualizacion}</td>
      </tr>
    `;
  });

  modendalist += `
      </tbody>
    </table>
  `;

  document.getElementById("emails").innerHTML = modendalist;
}
