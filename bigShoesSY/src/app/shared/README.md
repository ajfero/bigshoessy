*modulos compartidos de la app*

Cards, header, side-bar, etc.

Shared es un arma de doble filo, si es una aplicación grande, lo que se aconseja que debemos hacer es; crear un *módulo* por cada *componente* ¿porque?.. porque te permite exportar unicamente ese componente cuando lo precisemos.
A nivel carpetas va a ser un proyecto más grande, pero a nivel mantenimiento se vuelve más sencillo.
Además de que a nivel peso de carga, también se vuelve más liviano, porque no carga todos los componentes de shared, sino solo el/los que vamos a utilizar en esa instancia.

Como Nuestra WebApp E-commerce requiere menos recursos compartidos, elejimos hacerlo con un unico *shared.module.ts* para todos los componentes compartidos. 
De igual forma, estamos abiertos al cambio de rumbo con respecto a la estructura si nos aconsejan lo contrario.
Pero queríamos dejar explicita la investigación y acople de la estructura al proyecto, el conocimiento de las buenas prácticas y los conceptos.