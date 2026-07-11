# Proyecto final - Front

Este proyecto es parte del curso de Front-End JS, enfocándose en el aprendizaje y progreso del uso de HTML y CSS. 

## Descripción

El proyecto es una página web de venta de Hardware, accesorios y periféricos de PC para Gamers. Desarrollado como parte del curso de Front-End JS. El proyecto consiste en un sitio web de e-commerce dinámico e interactivo, que consuma datos de una API REST para mostrar productos. Se utilizó una API gratuita de productos genéricos, ya que no pude conseguir una gratis de productos de hardware.

## Contenido - Estructura del Proyecto

- **index.html**: Archivo principal que contiene la Estructura Básica de HTML.
  - Etiquetas semánticas principales: header, nav, main, section, footer.
  - Listas no ordenadas.

- **styles.css**: Archivo que contiene los Estilos con CSS para header, nav, main, section, footer.

- **carrito.js**: Integración de una API REST para obtener datos y renderizar productos en el DOM, además de la funcionalidad de un carrito de compras usando localStorage.

- **login.js**: simulación de inicio de sesión ingresando usuario y contraseña, verificando los datos almancenados en localStorage.

- **favicon.ico**: Archivo icono de la página, muestra imagen en la pestaña del navegador.

- **README.md**: Archivo con descripción del proyecto y propósito de la página.

- **Estructura de carpetas**: Raiz: css - assets/img - js - pages

La página está estructurada con:

1. Estructura Básica de HTML.
2. Formulario de Contacto (utiliza Formspree para manejar el envío de datos).
3. Estilos Básicos Aplicados con CSS.
4. Diseño Responsivo con Flexbox y Grid.
5. Contenido Multimedia y Navegación.
6. Subida del Proyecto a hosting gratuito (Netlify o GitHub Pages).
7. JavaScript, Script.js: para manejar toda la interactividad de la página. DOM: manipulación de elementos del DOM. Fetch Api: Consumo de API con axios y async/await. Muestra los productos obtenidos de la API en la página en forma de tarjetas (cards).
8. Carrito de compras dinámico: Agregar Productos al Carrito. Uso de localStorage: Guarda el estado del carrito. Contador Dinámico: Muestra el número total de productos en el carrito con actualización en tiempo real.
9. Visualización del carrito: Muestra una lista de productos añadidos al carrito, incluyendo cantidad, precio y total.
10. Persistencia del carrito: El carrito se mantiene activo incluso si el usuario cierra o actualiza la página, usando localStorage.

## Tecnologías Utilizadas

- **HTML**: Lenguaje de marcado para la estructura de la página.
- **CSS**: Para el estilo de la extructura e implementando Media Queries para el diseño responsivo.
- **Javascript** Para la lógica e interactividad.

## Cómo Usar

1. Abre el archivo `index.html` en tu navegador web preferido.
2. Explora los diferentes secciones.

## Fecha de Creación

2026-07-10

## Autor

Hernán Darío Juárez

## Colaboradores

- No.
