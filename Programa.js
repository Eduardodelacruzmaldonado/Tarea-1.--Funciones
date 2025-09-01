const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = [
  { id: 1, nombre: 'Papas fritas', precio: 17 },
  { id: 2, nombre: 'Vaso de frutas', precio: 25 },
  { id: 3, nombre: 'Jugo de naranja', precio: 30 },
  { id: 4, nombre: 'Agua de Jamaica', precio: 15 },
  { id: 5, nombre: 'Torta de jamón', precio: 25 },
];

const orden = {};
const PALABRA_CLAVE = 'fin';

function mostrarMenu() {
  console.log("\n=== Kiosko FESA ===");
  menu.forEach(item => {
    const nombreFormateado = `${item.id}) ${item.nombre}`.padEnd(25, '.');
    const precioFormateado = `$${item.precio}`;
    console.log(`${nombreFormateado} ${precioFormateado}`);
  });
  console.log('\nEscribe "codigo,cantidad" (por ejemplo 1,2). Escribe "fin" para cobrar.');
}

function validarEntrada(input) {
  const regex = /^\d+,\d+$/;
  if (!regex.test(input)) {
    console.log('Error: Formato inválido. Usa "codigo,cantidad".');
    return null;
  }

  const [idStr, cantidadStr] = input.split(',');
  const id = parseInt(idStr, 10);
  const cantidad = parseInt(cantidadStr, 10);

  const producto = menu.find(item => item.id === id);

  if (!producto) {
    console.log(`Error: El código de producto "${id}" no existe.`);
    return null;
  }

  if (cantidad < 1) {
    console.log('Error: La cantidad debe ser al menos 1.');
    return null;
  }

  return { producto, cantidad };
}

function pedirProducto() {
  rl.question('> ', (userInput) => {
    if (userInput.toLowerCase() === PALABRA_CLAVE) {
      rl.close();
      return;
    }

    const entradaValidada = validarEntrada(userInput);

    if (entradaValidada) {
      const { producto, cantidad } = entradaValidada;

      if (orden[producto.id]) {
        orden[producto.id] += cantidad;
      } else {
        orden[producto.id] = cantidad;
      }
      
      const totalItem = producto.precio * cantidad;
      console.log(`Añadido: ${cantidad} x ${producto.nombre} ($${producto.precio} c/u) = $${totalItem}`);
    }

    pedirProducto();
  });
}

rl.on('close', () => {
  console.log("\n----------- RESUMEN -----------");
  let subtotal = 0;

  for (const id of Object.keys(orden)) {
    const producto = menu.find(item => item.id === parseInt(id, 10));
    const cantidad = orden[id];
    const totalProducto = producto.precio * cantidad;
    subtotal += totalProducto;
    
    const nombreResumen = `${producto.nombre} x${cantidad}`.padEnd(20);
    console.log(`${nombreResumen} = $${totalProducto}`);
  }

  if (subtotal > 0) {
    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    console.log("-------------------------------");
    console.log(`Subtotal`.padEnd(20) + `$${subtotal.toFixed(2)}`);
    console.log(`IVA (16%)`.padEnd(20) + `$${iva.toFixed(2)}`);
    console.log(`TOTAL`.padEnd(20) + `$${total.toFixed(2)}`);
  }

  console.log("\nGracias por su compra.");
});

mostrarMenu();
pedirProducto();