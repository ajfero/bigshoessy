*Una estructura sencilla*
#En el caso de que estés trabajando en un proyecto pequeño seguramente 
no necesitéis una estructura compleja para organizar vuestros archivos.

Como veis, tenemos un archivo principal denominado styles.scss que importará tres partials principales:

*_base.scss* : donde aparecerán los resets, las variables, los mixins que necesitemos y las clases de utilidades.


*_layout.scss* , en donde se encontrarán las clases relacionadas con el layout de nuestra aplicación como el grid que estemos empleando.

*_tools.scss* , que se encargará de importar los componentes que necesitemos de la carpeta components . Estos componentes se corresponden con elementos como botones, barra de navegación, jumbos…

*vendor.scss* : aca vamos a importar las librerías externas pero en un único, comentado de mamera que podamos encontrar tales importaciones.

Con esto contaremos con una estructura básica para nuestro proyecto. Ahora bien, si éste comienza a crecer es probable que nos veamos obligados a extraer a nuevas partials.