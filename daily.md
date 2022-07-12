## Comenzamos a hacer Daily a partir de la mitad del 3er sprint.

El equipo cuenta con 2 reuniones semanales fijas, las mismas se realizan los dias martes y jueves desde las 20hs. Por otro lado el equipo realiza reuniones entre algunos de los miembros durante la semana dependiendo de la dificultad de las tareas a realizar para poder buscar soluciones en conjunto. A diferencia de las reuniones fijas este segundo grupo de reuniones se realizan en horarios aleatorios segun disponibilidad de los integrantes que van a participar. Y, siempre estámos conectado vía la aplicación whatsapp dónde nos repartimos tareas y debatimos dificultades y cambios en el proyecto.

A continuacion detallaremos los temas que se trataron cada día:

**Informe 29/04/2022**
- Parte del grupo se juntó por la mañana para terminar el retro, weekly y las rutas. 
- Luego de la devolución se decidio cambiar el color de los contenedores y fondo a negro.
- Se logro crear el carusel.

**Informe 02/05/2022**
- Nos sentimos medio perdidos por falta de clases pasadas en playground. Nos quedamos con más dudas que certezas.
- Recibimo el feedback del sprint 2.
- Se crearon los bocetos de las vistas del admin.
- Se crearon los bocetos de las vistas de clasificacion de los productos.
- Se decidio cuanto contraste darle a los productos. 

 **Informe 03/05/2022**

- Se pospuso el meet de este día debido a una clase extra.
- Se modifico carpeta partial.
- Se agrego el header.ejs, footer.ejs y el carussel.ejs.

**Informe 04/05/2022**
- En la clase de hoy hicimos parte del sprint 3.
- Terminamos de quitar los Headers y Footers de las diferentes vistas.
- Hicimos el carusel dinamico
- quedo por terminar: El detalledeproducto de manera dinamica, crear las dos vistas del admin.

**Informe 05/05/2022**
- Tuvimos un meet dónde se nos unio Dani para que nos aclare dudas sobre la devolución del Sprint anterior y dudas del nuevo sprint. Luego dividimos las tareas que nos quedan completar para la entrega del lunes:
- Agregar al Header Registro y Admin
- Carrito: Modificar la alineación, colocar "volver" en el contenedor, agregar un disable al cuadro de cantidad del producto
- Detalleproducto: Convertirlo en dinamino, agregar puntaje de clientes, mover el texto por debajo de las imagenes.
- CSS: Todo lo que sea mobile first que quede por fuera de la query, buscar los break points para las medias queries y borrar repetido.
- Carusel: Agregar el transform y transition.
- Crear vista de productos
- Crear vista de administracion (en un futuro se va a agregar como modal con javascript)
- Crear vista de administracion productos (si llegamos con el tiempo)
- Correcion del puntaje del trello siguiendo la frecuencia de Fibonacci.
- Creacion de un daily además del weekly.
- Empezamos a armar un archivo de base de productos.
- Buscamos datos y armamos graficos para la presentacion de nuestro sprint.
- Se modificaron las tarjetas de trello

**Informe 06/05/2022**
- Realizamos varios meet durante la mañana y la tarde para poder terminar el proyecto.
- Terminamos las vistas que faltaban (producto y admin)
- Corregimos todo lo pendiente del carrito.
- Se modifico el carussel.
- Se agrego el registro y admin al header.
- Se modificaron las media queries del CSS.
- Se termino archivo base de productos.
- Se genero el csv de los productos con el cual se armo un json con un array.
- Le agregamos ID a los productos, les agregamos categorias y aumentamos la cantidad en nuestra base.
- Queda para el fin de semana el armado del PDF para la presentación.

**Informe 07/05/2022**
- Quedo pendiente que el logo se vea correcto en el footer y header en detalle de producto.
- Queda modificar que cuando hacemos click en cada producto ese sea el que aparezca en detalle y no sólo el mouse.
- Le agregamos color y contraste a los productos

**Informe 09/05/2022**
- Modificamos el ID de los productos para que queden siempre igual.
- Se separaron los array de productos por categoria.
- Se logro modificar el logo para que se vea correctamente en todas las vistas tanto en header como footer.
- Creamos el archivo products.json.
- Creamos el archivo users.json.
- Le agregamos animación al boton "comprar" de productdetail.
- Nos quedamos post clase y arreglamos productDetail dinamico.
- Modificamos filtros MainController.
- Listo Sprint 3.
- Iniciamos Sprint 4.

**Informe 10/05/2022**
- Se actualizó el archivo en Heroku
- Agregamos las tarjetas del nuevo sprint a Trello
- Modificamos los parciales del carrito que los ejs estaban mal escritos.
- Modificamos las rutas del ejs.
- Declaramos constantes en el controlador.

**Informe 11/05/2022**
- Hicimos un cambio en la hoja de estilo: modificamos descripcion del meta correctamente.

**Informe 12/05/2022**
- Realizamos meet semanal.
- Repartimos tareas.
- Planificamos el siguiente meet
- Realizamos un analisis FODA y comparamos con nuestra competencia

**Informe 13/05/2022**
- Nos sentiamos todos mal, no pudimos juntarnos como planeamos.


**Informe 16/05/2022**
- Nos reunimos para terminar el proyecto de la clase.
- Recibimos el feedback del ultimo sprint y debatimos estrategias.
- Decidimos crear menos tareas en el Trello, basandonos en el feedback.
- Crear partials del producto.
- Eliminar fotos alternativas y agregar todas en un mismo campo.
- Creamos los archivos: productscontrollers.j y usercontrollers.js
- creamos archivos de rutas: users.js y products.js
- Instalamos method-override
- instalamos multer
- Ordenamos el archivo de app.js
- Decidimos crear una vista de perfil de usuario (con todos los campos, incluido contraseña), editar usuario y hacer otra de mis pedidos para ver el historial de pedidos.
- Nos quedamos tiempo post clase para seguir con el proyecto.


**Informe 17/05/2022**
- Modificamos el products.json

**Informe 18/05/2022**
- clase de middleworms
- pasamos todas las imagenes a webp y le pusimos el nombre con la extensión completa en la base de datos

**Informe 19/05/2022**
- convertimos el producto del carrito como component
- armamos las primeras rutas 
- se nos generaron varios errores (No carga el nuevo producto entero, sólo el ID y Los componentes se ven raros en la lista)
- modificamos el array de las imagenes en el listado de productos
- agregamos stock al listado de productos.
- Arreglamos el texarea
- agregamos un foreach al total del carrito
- creamos varios componentes: cartAddedProduct, adminBar, buyButton y buyDetail.
- Creamos las vistas admin-edit y admin-create
- No logramos que el form agregue o modifique productos al json, sólo agrega el ID. --> le preguntaremos mañana a dany luego de una extensa investigación sin respuesta a nuestro error.
- Logramos utilizar DELETE para los productos del admin
- Ajustamos el CSS del panel del admin.

**Informe 20/05/2022**
- Tenemos que arreglar el Multer.
- Modificar la barra de busqueda. Logramos que encuentre lo que tenemos en la DataBase, sino se rompe.
- Hicimos Meet para seguir con lo que nos queda del proyecto.
- Logramos agregar y que se vean nuevos productos con sus respectivas imagenes.
- Agregamos un map para crear el array de imagenes que se cargan.
- Modificamos la ecuacion de cuotas para que solo se vean dos decimales

**Informe 21/05/2022**
- Hicimos el Newsletter del footer funcional, que almacene los mails en un json

**Informe 22/05/2022**
- En el Header: Modificamos la vista celular, Agregamo un burger menú que funciona y así todos pueden acceder desde cualquier dispositivo.
- Se ajusto el diseño del sitio.

**Informe 23/05/2022**
- Logramos que funcione el thumbnails.
- Creamos la vista de perfil de usuario, falta que la imagen se cargue de una y no sólo se guarde.
- Modificamos el registro para que sea funcional.
- Falta que en phone acepte solo numbers.
- falta validación
- Cargamos todos los usuarios con avatars.
- Agregamos un cartel de advertencia a la hora de eliminar productos.
- separamos el CSS en 3: general, usuario y producto.
- Arreglamos la imagen de registro.

**Informe 24/05/2022**
- Agregamos la validación.
- Retocamos el CSS de algunas vistas.
- Modificamos las tarjetas de trello para agregar detalle y objetivos que no habíamos entendido que eran para está entrega.

**Informe 27/05/2022**
- Realizamos el meet semanal. (Pali, Pabli, Salva y Nicky)
- Vimos el sprint y separamos las tareas. (Pali, Pabli, Salva y Nicky)
- Arreglamos el trello. (Pali, Salva y Nicky)

**Informe 29/05/2022**
- comenzamos con las cookies y login.  (Pali y Nicky)
- Agregamos Checkbox al login (Nicky)
- modificamos los archivos: app.js, daily.ms, weekly.md, login.ejs, UsersController.js. (Pali y Nicky)
- Se creo la carpeta models con el archivo User.js. (Pali y Nicky)
- Se creo el archivo recordameMiddleware.js. (Pali y Nicky)
- en app.js.
- Se agrego express-session. (Pali y Nicky)
- Se agrego cookie-parse. (Pali y Nicky)
- en mainRoutes.js agregamos un contador de visitas. (Pali)
- comenzamos el método processLogin (Pali y Nicky)
- Logramos que funcione el encrypt (Pali)
- No logramos que funcionen cookies y "recordame" (Nicky y pali)

**Informe 01/06/2022**

- Ya colocamos el encriptado en el registor de usuario.
- Del login redireccion al perfil en caso de exito y en caso de error de nuevo al login mostrando los errores.
- Funcion de recordar el usuario con el checkbox. Guarda en session y en cookies. (Pali)
- Hicimos un middleware si existe la cookie logee al usuario y middlewares que si el usuario esta logeado en el header no muestra login ni registro, y si el usuario no esta logeado no se puede acceder al perfil.(Pali)

**Informe 03/06/2022**
- Faltan las rutas de huespedes y usuarios.
- Nos abandono Salva.
- Realizamos el meet semanal (Pali, Nicky y Pablo).
- falta agregar a la base de datos y a la pagina de edicion lo de los roles.
- falta la validación de la imagen , queremos que la imagen de perfil sea opción y el validator no nos permite.
- Que funcione el formulario de contacto.


**Informe 06/06/2022**
- Se modifico el CSS. (Pali)
- Nicky no asistió a clase debido a un examen en la facultad.
- Se creo usuario de Pali
- Se creo página de error (Pali)

**Informe 07/06/2022**
- Pospusimos el meet para el día viernes (Pali, Pabli y Nicky)
- Se agrego el rol a cada usuario (nicky)
- Se creo usuario de Nicky
- Verificar que queda en página de error cuando se crea un usuario.

**Informe 09/06/2022**
- Se terminaron las rutas de admin y user (pabli)
- Se creo la vista de error (Pali)

**Informe 11/06/2022**
- Una vez que te registrar aparece un cartel con usuario creado y te redirigue a la pagina de login

**Informe 13/06/2022**
- Funcional el newsletter
- Arreglamos validacion de la imagen de los usuarios.
- Terminamos con el sprint 5

**Informe 20/06/2022**
- Creamos la retrospectiva del sprint 5. (nicky y pali)
- Creamos el trello de este sprint y dividimos tareas (nicky y pali)
- Agregamos brands a products.json

**Informe 21/06/2022**
- Realizamos el meet semanal (nicky, pali y pabli)
- Realizamos las tablas de las base de datos

**Informe 22/06/2022**
- Buscamos diferentes proyectos para guiarnos en el nuestro.

**Informe 24/06/2022**
- Modificamos las tablas de la base de datos

**Informe 26/06/2022**
- Armamos el Diagrama de Entidades y Relaciones (DER)
- Creamos la carpeta para Sequelize

**Informe 28/06/2022**
- Realizamos el meet semanal (nicky, pali y pabli)
- Volvimos a modificar tablas.
- agregamos archivos de configuración para que Sequelize se conecte a la base de datos

**Informe 29/06/2022**
- El grupo se encontro con muchas incognitas que no podíamos encontrar un camino adecuado para continuar realizando el sprint sin ayuda.
- Volvimos al material de playgroung pero no fue suficiente. 

**Informe 30/06/2022**
- Pospusimos el meet semanal (nicky, pali y pabli)

**Informe 03/07/2022**
- Armamos un esqueleto.
- incluimos los tipos de datos de los campos y sus restricciones.


**Informe 05/07/2022**
- Arrancamos a armar la base de datos en MySQL
- Creamos la database
- Nos reunimos con Dani y nos ayudo a poder avanzar con el proyecto y a sacarnos muchas dudas.

**Informe 06/07/2022**
- Cambiamos las tablas a todas minusculas y plural a lo que iba en plural.
- Agregamos los archivos de configuración para que Sequelize se conecte a la base de datos
- Agregamos los archivos de modelos para representar las tablas de users y products.

**Informe 07/07/2022**
- Logramos que se vea un producto desde la DB de MySQL.
- Nos quedamo con dos branches.

**Informe 07/07/2022**
- Relizamos el CRUD de usuarios.
- Falta terminar agregar paginado a los listados y buscadores

**Informe 12/07/2022**
- Realizamos scrypt de datos e incluimos las relaciones entre las diferentes tablas
- Nos quedan pendientes las opcionales del carrito de compra.
- Realizamos tabla secundaria de categorias


