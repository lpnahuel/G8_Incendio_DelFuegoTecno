## Comenzamos a hacer weekly a partir del 3er sprint.

El equipo cuenta con 2 reuniones semanales fijas, las mismas se realizan los dias martes y jueves de 19:30hs. Por otro lado el equipo realiza reuniones entre algunos de los miembros durante la semana dependiendo de la dificultad de las tareas a realizar para poder buscar soluciones en conjunto. A diferencia de las reuniones fijas este segundo grupo de reuniones se realizan en horarios aleatorios segun disponibilidad de los integrantes que van a participar.

A continuacion detallaremos los temas que se trataron en cada reunion semanal y las tareas realizadas como consecuencia de esas reuniones. Las tareas que figuran como opcionales son aquellas que determinamos que van a ser realizadas durante determinado weekly en caso de tener tiempo suficiente pero que no impiden el avance del desarrollo del sitio.

**Informe comienzo de semana 27/04/2022**

En la reunion se trataron los siguientes puntos:
- Realizamos retrospectiva estrella de mar del 2do sprint
- Revision de pdf del tercer sprint
- Actualizar tareas en trello y dividir las mismas
- Creamos redes sociales del sitio web.
- Boceto carga de producto
- Boceto listado categoria
(opcional) Generar nuevas vistas para la web.

**Informe comienzo de semana 04/05/2022**
- Se reprogramó la reunión del 03/05 debido a una clase extra
- Tuvimos el segundo meet semanal el día 05/05/2022 dónde se nos unio Dani para que nos aclare dudas sobre la devolución del Sprint anterior y dudas del nuevo sprint. Luego dividimos las tareas que nos quedan completar para la entrega del lunes:
- Agregar al Header Registro y Admin
- Carrito: Modificar la alineación, colocar "volver" en el contenedor, agregar un disable al cuadro de cantidad del producto
- Detalleproducto: Convertirlo en dinamino, agregar puntaje de clientes, mover el texto por debajo de las imagenes.
- CSS: Todo lo que sea mobile first que quede por fuera de la query, buscar los break points para las medias queries y borrar repetido. Colocar un contraste a todo entre 4.5 y 7.
- Carusel: Agregar el transform y transition.
- Crear vista de productos
- Crear vista de administracion (en un futuro se va a agregar como modal con javascript)
- Crear vista de administracion productos (si llegamos con el tiempo)
- Correcion del puntaje del trello siguiendo la frecuencia de Fibonacci.
- Creacion de un daily además del weekly.
- Armado de un archivo de base de productos.

**Informe comienzo de semana 09/05/2022**
- Finalizamos con el Sprint 3
- Agregamos las tarjetas del nuevo sprint a Trello
- Creamos carpeta data con archivo users.json y products.json
- Realizamos el meet
- Realizamos la restrospectiva

**Informe comienzo de semana 16/05/2022**
- Recibimos el feedback del ultimo sprint y debatimos estrategias.
- Decidimos crear menos tareas en el Trello, basandonos en el feedback.
- Crear partials del producto.
- products.jason: Creamos el archivo, modificamos las imagenes alternativas para que aparezcan como un array, agregamos stock, quitamos cuotas y el signo de pesos en price para que quede como division dentro de detalleproducto.
- Pasamos todas las imagenes a WEBP y le colocamos el nombre con la extnsión completa en la base de datos.
- Creamos los archivos: productscontrollers.j y usercontrollers.js.
- creamos archivos de rutas: users.js y products.js.
- Instalamos method-override.
- instalamos multer.
- Ordenamos el archivo de app.js
- Decidimos crear una vista de perfil de usuario (con todos los campos, incluido contraseña), editar usuario y hacer otra de mis pedidos para ver el historial de pedidos.
- carrito: convertimos el producto como component.
- Armamos las primeras rutas que necesitamos para este sprint.
- Se nos generaron varios errores (No carga el nuevo producto entero, sólo el ID y Los componentes se ven raros en la lista), le preguntamos a Dany si podía ayudarnos.
- Día jueves 19/05 realizamos la reu semanal.


**Informe comienzo de semana 23/05/2022**
- Logramos que funcione el thumbnails.
- Creamos la vista de perfil de usuario.
- Modificamos el registro para que sea funcional.
- Cargamos todos los usuarios con avatars.
- Agregamos un cartel de advertencia a la hora de eliminar productos.
- separamos el CSS en 4: general, header y footer, usuario y producto.
- Arreglamos la imagen de registro.
- Agregamos la validación.
- Retocamos el CSS de algunas vistas.

**Informe comienzo de semana 30/05/2022**
- Ya colocamos el encriptado en el registor de usuario.
- Del login redireccion al perfil en caso de exito y en caso de error de nuevo al login mostrando los errores.
- Funcion de recordar el usuario con el checkbox. Guarda en session y en cookies.
- Hicimos un middleware si existe la cookie logee al usuario y middlewares que si el usuario esta logeado en el header no muestra login ni registro, y si el usuario no esta logeado no se puede acceder al perfil.
- Nos abandono Salva.
- Realizamos el meet semanal. 
- Se modifico el CSS. 

**Informe Comienzo de semana 06/06/2022**
- Nicky no asistió a la clase del lunes debido a un examen en la facultad.
- Se creo usuario de Pali, y Nicky como Admin
- Se creo página de error 
- Se agrego el rol a cada usuario 

**Informe Comienzo de semana 11/06/2022**
- Pospusimos el meet para el día viernes (Pali, Pabli y Nicky)
- Se agrego el rol a cada usuario (nicky)
- Se creo usuario de Nicky
- Verificar que queda en página de error cuando se crea un usuario.
- Se terminaron las rutas de admin y user (pabli)
- Se creo la vista de error (Pali)

**Informe Comienzo de semana 18/06/2022**
- Una vez que te registrar aparece un cartel con usuario creado y te redirigue a la pagina de login
- Funcional el newsletter
- Arreglamos validacion de la imagen de los usuarios.
- Terminamos con el sprint 5

**Informe Comienzo de semana 20/06/2022**
- Creamos la retrospectiva del sprint 5.
**----- Sprint 6 -----**
- Realizamos el meet semanal (nicky, pali y pabli).
- Realizamos las tablas de las base de datos y las rearmamos varias veces.
- Buscamos diferentes proyectos para guiarnos en el nuestro.
- Armamos el Diagrama de Entidades y Relaciones (DER).
- Creamos la carpeta para Sequelize.

**Informe Comienzo de semana 27/06/2022**
- Realizamos el meet semanal (nicky, pali y pabli).
- Volvimos a modificar tablas.
- Agregamos archivos de configuración para que Sequelize se conecte a la base de datos.
- El grupo se encontro con muchas incognitas que no podíamos encontrar un camino adecuado para continuar realizando el sprint sin ayuda.
- Volvimos al material de playgroung pero no fue suficiente. 
- Pospusimos el segundo meet semanal hasta poder entender mejor (nicky, pali y pabli).

**Informe Comienzo de semana 4/06/2022**
- Nos reunimos con Dani y nos ayudo a poder avanzar con el proyecto y a sacarnos muchas dudas.
- Armamos un esqueleto.
- Incluimos los tipos de datos de los campos y sus restricciones.
- Arrancamos a armar la base de datos en MySQL.
- Creamos la database.
- Cambiamos las tablas a todas en minusculas, plural (lo que iba en plural) e ingles.
- Agregamos los archivos de configuración para que Sequelize se conecte a la base de datos.
- Agregamos los archivos de modelos para representar las tablas de users y products.
- Logramos que se vea un producto desde la DB de MySQL.
- Nos quedamos con dos branches.
- Modificamos los controladores para obtener datos de los modelos.
- Relizamos el CRUD de usuarios.

**Informe Comienzo de semana 11/06/2022**
- Realizamos el CRUD de productos.
- Se ajusta el CRUD de usuarios y productos con la nueva configuracion de base de datos
- Falta terminar agregar paginado a los listados y buscadores (quedo pendiente para próxima entrega).
- Realizamos scrypt de datos e incluimos las relaciones entre las diferentes tablas.
- Nos quedan pendientes las opcionales del carrito de compra (quedo pendiente para próximo sprint).
- Realizamos tabla secundaria de categorias.
- Realizamos el meet semanal y luego recibimos ayuda de Dani y Joe para poder exportar la base de datos ya que teníamos un inconveniente en MySQL.
- La base en MySQL Workbench no nos fue posible importala.
- Volvimos a crear la base de datos en Heidi, ya que nos recomendaron (Joe) que podíamos conectarla directamente con Heroku.
- Subimos el archivo a Heroku.
- Creamos el archivo de entrega en PDF y lo compartimos por Slack.



