let listaProductos = [];
let productShown = 0; // contador de productos
let productPerPage = 3; // cantidad de productos
/* 
// Consumo de API con fetch y promesas
function apiProduts() {
   fetch('https://dummyjson.com/products')
      .then( res => {
         return res.json();
      })
      .then( data => {
         console.log(data);
         listaProductos = data.products;
         console.log(listaProductos);
         
         crearProductos();
      })
      .catch( err => {console.log(err) })
}
 */
/* 
// Consumo de API con fetch y async/await
async function apiProduts() {
   try {
         const res = await fetch('https://dummyjson.com/products')
      //console.log(res);
         const data = await res.json();
     //console.log(data.products);
     
         listaProductos = data.products;
         console.log(listaProductos);
         
         crearProductos(); 
   }
   catch (err) {
      console.log(err);
   }
}
 */
// Consumo de API con axios y async/await
async function apiProduts() {
    try {
        const res = await axios.get('https://dummyjson.com/products');
        console.log(res);

        listaProductos = res.data.products;
        console.log(listaProductos);

        crearProductos();
    }
    catch (err) {
        console.log(err);
    }
}

// Recupera el carrito almacenado en localStorage.
// Si no existe, inicializa un array vacío.
let shoppingCart = JSON.parse(localStorage.getItem('productarticle')) || [];

// Recupera el precio total almacenado.
// Si no existe, comienza en 0.
let totalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;

// Recupera la cantidad total de productos agregados.
// Si no existe, comienza en 0.
let count = parseInt(localStorage.getItem('totalCount')) || 0;


function crearProductos() {
    //                                     .slice(inicio = 0, hasta donde tomar = 3)         
    const nextProducts = listaProductos.slice(productShown, productPerPage + productShown);

    const cardProductos = document.getElementById('productCard');

    nextProducts.forEach(productos => {

        const card = document.createElement('article');
        card.className = 'product-card';

        // <img src="${productos.img}" alt="imagen de ${productos.title}"
        card.innerHTML = `
    
                   <img src="${productos.images[0]}" alt="imagen de ${productos.title}"
                        class="product-image">

                    <div class="product-content">

                        <h3 class="product-title">
                            ${productos.title}
                        </h3>

                        <p class="pr-description">
                            ${productos.description}
                        </p>

                        <p class="pr-price">
                           <span>Precio:</span> 
                           <span class="price">$${productos.price}</span>
                        </p>

                        <button type="button" class="pr-button">
                            Agregar al carrito
                        </button>

                    </div>
          `;
        cardProductos.appendChild(card);
    });

    // Obtiene todas las tarjetas de productos de la página.
    const articles = document.querySelectorAll('.product-card');

    // Recorre cada tarjeta para asociarle la funcionalidad del botón Comprar.
    articles.forEach(article => {

        // Obtiene el botón Comprar.
        const button = article.querySelector('.pr-button');

        // Obtiene el nombre del producto.
        const titleProduct = article.querySelector('.product-title').textContent;

        // Obtiene el precio eliminando el símbolo "$".
        const priceProduct = article.querySelector('.pr-price .price').textContent.slice(1);

        // Evento que se ejecuta al hacer clic en Comprar.
        button.addEventListener('click', () => {

            // Variable para saber si encontramos el producto en el carrito
            let existe = false;

            // USANDO FOR: Recorremos el carrito para ver si el producto ya está dentro
            for (let i = 0; i < shoppingCart.length; i++) {
                if (shoppingCart[i].title === titleProduct) {
                    // Si ya existe, aumentamos la propiedad 'count' de ESE producto
                    shoppingCart[i].count += 1;
                    existe = true;
                    break; // Rompemos el bucle porque ya lo encontramos
                }
            }

            // Si después de revisar todo el array 'existe' sigue siendo false, lo agregamos por primera vez
            if (!existe) {
                // Crea un objeto producto.
                const product = {
                    title: titleProduct,
                    price: priceProduct,
                    count: 1,
                };
                // Agrega el producto al array del carrito.
                shoppingCart.push(product);
            }

            /*
               MEJORA PENDIENTE:
      
               Actualmente cada clic agrega un nuevo objeto al carrito.
      
               Ejemplo:
               [
                  { title: 'Vestido', count: 1 },
                  { title: 'Vestido', count: 1 }
               ]
      
               Lo ideal sería verificar si el producto ya existe.
               Si existe:
                  - aumentar su propiedad count
               Si no existe:
                  - agregarlo al carrito
      
               Esto evitaría productos duplicados.
            */


            // Acumula el precio total.
            totalPrice += parseFloat(priceProduct);

            // Incrementa el contador general.
            count += 1;

            // Guarda el carrito actualizado.
            localStorage.setItem('productarticle', JSON.stringify(shoppingCart));

            // Guarda el total con dos decimales.
            localStorage.setItem('totalPrice', totalPrice.toFixed(2));

            // Guarda la cantidad total de productos.
            localStorage.setItem('totalCount', count);

            // Actualiza el contador visual del carrito.
            document.querySelector('.count').textContent = count;
        });
    });
    productShown += 3
}


// Función encargada de mostrar los productos en carrito.html
const handleCart = () => {

    // Recupera el carrito almacenado.
    const shoppingCart =
        JSON.parse(localStorage.getItem('productarticle')) || [];

    // Recupera el total almacenado.
    const total =
        JSON.parse(localStorage.getItem('totalPrice')) || 0;

    // Obtiene el contenedor donde se mostrará el carrito.
    const carritoProduct = document.getElementById('itemProducts');

    // Si el contenedor no existe, sale de la función.
    if (!carritoProduct) return;

    // Si el carrito está vacío, muestra un mensaje.
    if (shoppingCart.length === 0) {
        carritoProduct.innerHTML =
            '<p>El carrito está vacío</p>';
        return;
    }

    // Elimina el mensaje inicial de carrito vacío.
    const emptyMessage = document.querySelector('.carrito-empty');

    if (emptyMessage) {
        emptyMessage.remove();
    }

    // Crea una tabla para mostrar los productos.
    const tabla = document.createElement('table');

    tabla.classList.add('name-class-tabla');

    // Encabezado de la tabla.
    let encabezado = `
       <thead>
          <tr>
             <th>Nombre del Producto</th>
             <th>Precio</th>
             <th>Cantidad</th>
          </tr>
       </thead>
    `;

    // Inicio del cuerpo de la tabla.
    let cuerpo = '<tbody>';

    // Recorre todos los productos del carrito.
    shoppingCart.forEach(producto => {

        cuerpo += `
          <tr>
             <td>${producto.title}</td>
             <td>$${producto.price}</td>
             <td>${producto.count}</td>
          </tr>
       `;
    });

    // Cierre del cuerpo de la tabla.
    cuerpo += '</tbody>';

    let totalItems = `
      <tr>
         <td>Total</td>
         <td>${total}</td>
         <td></td>
      </tr>
   `;

    // Inserta encabezado y cuerpo en la tabla.
    tabla.innerHTML = encabezado + cuerpo + totalItems;

    // Agrega la tabla al contenedor.
    carritoProduct.appendChild(tabla);
};


// Función para vaciar completamente el carrito.
function limpiarCarrito() {

    // Solicita confirmación al usuario.
    if (confirm('¿Estás seguro de vaciar el carrito?')) {

        // Reinicia las variables en memoria.
        shoppingCart = [];
        totalPrice = 0;
        count = 0;

        localStorage.clear();

        // Recarga la página para actualizar la vista.
        location.reload();
    }
    
}

function finalizarCompra() {

    const isLogin = localStorage.getItem('isLogin') || null;
    if (isLogin === null) {
        alert('¿Ya tenes una cuenta? Inicia Sesión');
        window.location.href = '../pages/login.html';
        return;
    }

    // Solicita confirmación al usuario.
    if (confirm('Revise su pedido antes de finalizar la operación')) {

        // Reinicia las variables en memoria.
        shoppingCart = [];
        totalPrice = 0;
        count = 0;

        localStorage.clear();

        // Recarga la página para actualizar la vista.
        location.reload();
    }
}


// Espera a que el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {
    // Si existe el contenedor de productos, estamos en index.html
    if (document.getElementById('productCard')) {
        //crearProductos();
        apiProduts();

        const btnMas = document.getElementById('mostrarProducts');
        btnMas.addEventListener('click', crearProductos);

    }

    if (count > 0) {
        document.querySelector('.count').textContent = count;
    }

    // Si existe el contenedor del carrito, estamos en carrito.html
    if (document.getElementById('itemProducts')) {
        handleCart();
    }
});