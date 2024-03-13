function agregarProveedor(){
	const proveedores = document.getElementById('listaProveedores')
	const identificacion = document.getElementById('idProveedor').value;
	const nombre = document.getElementById('nombreProveedor').value;
	const email = document.getElementById('emailProveedor').value;
	const activo = {
		identificacion,
		nombre,
		email
	};
	const urlServidor = 'http://localhost:3000/proveedor';

// Configuración de la solicitud POST
const opciones = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(activo),
};

// Realizar la solicitud POST al servidor JSON
	fetch(urlServidor, opciones)
	.then(response => response.json())
	.then(data => {
		alert('Proveedor agregado:', data);
		
	})
	.catch(error => {
		console.log('Error al agregar proveedor:', error);
  });
}
// Código para obtener los valores del ID de la llave proveedores y poder utilizarlas como opciones del 
// selector de ID de proveedor y proseguir con su edicion

const iddeProveedor = document.getElementById('iddeProveedor');
const idProveedorEliminar = document.getElementById('idProveedorEliminar');
const idProveedorBuscar = document.getElementById('idProveedorBuscar');
const listaProveedores= document.getElementById('listaProveedores');
const listaProveedores2= document.getElementById('listaProveedores2');
const urlServidorProveedor = 'http://localhost:3000/proveedor';
fetch(urlServidorProveedor)
  .then(response => {
	if (response.ok) {
	  return response.json();
	} else {
	  throw new Error('No se encontró el proveedor.');
	}
  })
  .then(data => {
	console.log('Activo encontrado:', data);
	JSON.stringify(data);	
	data.forEach (proveedor =>{
		const option = document.createElement('option');
		option.textContent = `${proveedor.id}`
		const optionCloned = option.cloneNode(true);
		const optionCloned2 = option.cloneNode(true)
		iddeProveedor.appendChild(option);
		idProveedorEliminar.appendChild(optionCloned);
		idProveedorBuscar.appendChild(optionCloned2);
		const h5 = document.createElement('h5');
		h5.textContent = `ID: ${proveedor.id} / Identificacion: ${proveedor.identificacion} / Nombre: ${proveedor.nombre} / Email: ${proveedor.email} `
		const h5Cloned = h5.cloneNode(true);
		listaProveedores.appendChild(h5)
		listaProveedores2.appendChild(h5Cloned)
	})
		
  })
  .catch(error => {
	console.error('Error al buscar la categoria por ID:', error);
  });
function editarProveedor(){

	const iddeProveedor = document.getElementById('iddeProveedor').value;
	const nuevoIdProveedor = document.getElementById('nuevoIdProveedor').value;
	const nuevoNombreProveedor = document.getElementById('nuevoNombreProveedor').value;
	const nuevoEmailProveedor = document.getElementById('nuevoEmailProveedor').value;
	const urlServidor = `http://localhost:3000/proveedor/${iddeProveedor}`;


  // Configuración de la solicitud PUT o PATCH
  const opciones = {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
		identificacion: nuevoIdProveedor,
    	nombre: nuevoNombreProveedor,
		email: nuevoEmailProveedor
    }),
  };

  // Realizar la solicitud PUT o PATCH al servidor JSON
  fetch(urlServidor, opciones)
    .then(response => response.json())
    .then(data2 => {
      alert('Proveedor Editado Exitosamente', data2);
    })
    .catch(error => {
      console.error('Error al editar proveedor:', error);
	  alert('Por favor, ingrese un ID de activo válido.');
    });
}
function eliminarProveedor() {
	const idProveedorEliminar = document.getElementById('idProveedorEliminar').value;
	const urlServidor = `http://localhost:3000/proveedor/${idProveedorEliminar}`;
  
	// Configuración de la solicitud DELETE
	const opciones = {
	  method: 'DELETE',
	};
  
	// Realizar la solicitud DELETE al servidor JSON
	fetch(urlServidor, opciones)
	  .then(response => {
		if (response.ok) {
		  alert(`Proveedor con ID ${idProveedorEliminar} eliminado exitosamente.`);
		} else {
		  console.error('Error al eliminar el proveedor');
		}
	  })
	  .catch(error => {
		console.error('Error al realizar la solicitud DELETE:', error);
	  });
  }
  function buscarProveedor() {
	const idProveedorBuscar = document.getElementById('idProveedorBuscar').value;
	const resultado = document.getElementById('contenidoBuscarProveedor');
	const urlServidor = `http://localhost:3000/proveedor/${idProveedorBuscar}`;
		
	// Realizar la solicitud GET al servidor JSON
	fetch(urlServidor)
		.then(response => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error('No se encontró la categoria.');
		}
		})
		.then(data => {
		console.log('Proveedor encontrado:', data);
		contenidoBuscarTipoActivo.innerHTML = `
			<h3 style="color:red">Proveedor</h3><br>
			<h5>Id: ${data.id} <br> Identificacion: ${data.identificacion} <br> Nombre: ${data.nombre} <br> Email: ${data.email}</h5>
		`;
		resultado.appendChild(contenidoBuscarTipoActivo)
		// Puedes realizar acciones con el activo encontrado
		})
		.catch(error => {
		console.error('Error al buscar la categoria por ID:', error);
		});
		
	}
	
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });