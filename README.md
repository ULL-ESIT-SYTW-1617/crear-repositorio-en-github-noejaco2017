#
# Práctica: Nueva funcionalidad para el paquete NPM plugins


![imagen1][logo]
[logo]: https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmTdns2SIHRywqRrwjOmWCewbAPJKjv5s_iblApWlTryhkwB1n

### Requisitos

Descripción

El objetivo de esta práctica es extender el package NodeJS publicado en npm en una práctica anterior con una nueva funcionalidad que permita
* Obtener el email y el nombre del autor
* Crear el repositorio del libro en GitHub
* Hacer un push del repositorio inicial para actualizar los ficheros necesarios al repositorio del libro en la máquina virtual.


# Instalacion crear repo:

Para ello lo unico que debemos hacer es instalar el paquete gitbook-start-team-noejaco2017-3.0 y aplicar el comando gitbook-start --repo, ello ya nos creara el respositorio en github,
Recuerde que debe de estar logeado anteriormente en github, para la generacion del token.
ATENCION : DEBE TENER GENERADO ANTERIORMENTE LOS DIRECTORIOS DE SU PRACTICA(Ya que el comando ha sido desarrollado sin minimist.DIsulpen las molestias(En proximas practicas los introduciremos)


# Instalacion plugin heroku
```
Lo primero que debemos hacer es instalar el paquete NPM _gitbook-start-team-noejaco2017-2.0_ => npm install -g  gitbook-start-team-noejaco2017-2.0
Seguidamente, instalamos el paquete en nuestras Dependencies => npm install --save gitbook-start-team-noejaco2017-2.0(Recuerde que tiene que tener generado un package.json)
Y por ultimo instalamos el plugin para poder desplegarlo en heroku , para ello usamos npm install --save gitbook-start-plugin-heroku-noejaco2017

Una vez instalados los paquetes podemos consultar nuestro plugin para ver sus opciones, a traves de gitbook-start --help

Para poder realizar correctamente el desplique en heroku, recuerde que debe al menos realizar la prueba con estos 3 campos y recuerde de poner en el campo --heroku el nombre de su app en heroku:
gitbook-start --deploy p --heroku heroku-deploy-plugins --directorio prueba --autor new_usuario

Para la correcta realizacion del libro y del despliuque debera rellenar todos los campos.

Una vez ejecutado el comando se nos generara el directorio que hemos dado nombre. Nos situamos en el, e instalamos el package.json (npm install).
Luego de esta logeese desde la terminal en heroku, a traves de: heroku login para luego, lo unico que tendremos que hacer son las tareas automatizadas del gulp, donde con gulp deploy-heroku(crearemos nuestro remoto de heroku)y justamente cuando se nos genere
el remoto, se nos creara una nueva tarea, llamada gulp push-heroku(que nos permitira empujar nuestro repo. a heroku)

*** RECUERDE QUE DEBE DE HABER GENERADO EL LIBRO PARA SU CORRECTO DESPLIUEGE EN HEROKU



```

# Instalación de plugin npm iaas


```
Lo primero que debemos hacer es instalar el paquete NPM _gitbook-start-team-noejaco2017-1.0_ => npm install -g  gitbook-start-team-noejaco2017-1.0
Seguidamente, instalamos instalamos el paquete en nuestras devDependencies => npm install --save-dev gitbook-start-team-noejaco2017-1.0
Y por ultimo instalamos el plugin para poder desplegarlo en heroku , para ello usamos npm install --save-dev gitbook-start-plugin-iaas-ull-es-noejaco2017

Una vez instalados los paquetes podemos consultar nuestro plugin para ver sus opciones, a traves de gitbook-start --help

Para poder realizar correctamente el desplique en IAAS, recuerde que debe al menos realizar la prueba con estos 2 campos y recuerde de poner en el campo --iaasIP su direccion IP de su maquina y el path donde se desplpegara:
- gitbook-start --deploy p --iaaspath ./Mypath --iaasIP 192.126.3.2 --directorio prueba --autor new_usuario   ||
- gitbook-start --deploy iaas-ull-es --iaasIP 192.162.30.50 --iaaspath ./MyPath --directorio prueba --autor juanito --url juanito@ull.edu.es --wiki wiki@ull.es --email github@github.es --version 1.0.1

Para la correcta realizacion del libro y del despliuque debera rellenar todos los campos.

Una vez ejecutado el comando se nos generara el directorio que hemos dado nombre. Nos situamos en el, e instalamos el package.json (npm install).
Una vez aqui, lo que tendremos que hacer son las tareas automatizadas del gulp, donde con gulp deploy-iaas-ull-es(crearemos nuestro proyecto en nuestra maquina remota)
```


## Manual de ayuda IAAS

````````````````````
gitbook-start-iaas [OPTIONS](OBLIGATORIAS MINIMAS)
--iaasIP: Direccion de la maquina virtual
--iaaspath: repositorio que va a contener el libro en iaas
--directorio: directorio a crear con el nombre que quiera
````````````````````

## Manual de ayuda de Heroku
```
gitbook-start [OPTIONS](OBLIGATORIAS MINIMAS)
--directorio: nombre del directorio a crear
--deploy: Deploy en IaaS(iaas.ull.es)
--heroku: Nombre de su api en heroku
```


## Manual de ayuda
_gitbook-start --h || --help_
````````````````````
gitbook-start [OPTIONS]
--autor: autor del libro a crear node gitbook-star -
--email: email de contacto del usuario
--version: version repositorio github contra el que se va a trabajar
--url: repositorio github contra el que se va a trabajar
--wiki: direccion web de la wiki en github
--directorio: nombre del directorio a crear
--help: muestra ayuda sobre las opciones disponibles
--deploy: Deploy en IaaS(iaas.ull.es)
--iaasIP: Direccion de la maquina virtual
--iaaspath: Repositorio que va a contener el libro en iaas
--heroku: Nombre de su api en heroku

````````````````````


## Enlace a github gh-pages
[gh-pages](https://ull-esit-sytw-1617.github.io/tareas-iniciales-noejaco2017/)

## Enlace a gitbook
[gitbook](https://alu0100836059.gitbooks.io/apuntessytw/content/)

## Enlace a npm gitbook-start-2.0
[npm-gitbook-start](https://www.npmjs.com/package/gitbook-start-team-noejaco2017-2.0)

## Enlace a npm plugin Heroku
[npm-heroku](https://www.npmjs.com/package/gitbook-start-plugin-heroku-noejaco2017)

## Enlace al paquete npm iaas
[npm-plugin-iaas](https://www.npmjs.com/package/gitbook-start-plugin-iaas-ull-es-noejaco2017)

## Enlace a la aplicación desplegada en heroku
[heroku](https://herokuiaass.herokuapp.com/)



## Autor
[Noé Campos](http://dsi1516.github.io/Practica1/)
[Jacobo]()
