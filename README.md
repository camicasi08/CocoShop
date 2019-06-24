# COCOSHOP

Es una tienda en línea para la venta de productos a base de coco.

## Getting Started

#### Prerequisitios
Antes de ejecutar la aplicación asegurese de instalar [Nodejs](https://nodejs.org/es/download/ "Nodejs") version 10+. Posteriormente es necesario instalar MongoDB como motor de base de datos.

- [Mongo Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/ "Mongo Windows")
- [Mongo Linux](https://docs.mongodb.com/manual/administration/install-on-linux/ "Mongo Linux")

Después de instalado Mongo en el equipo, es necesario crear una base de datos inicial con el nombre de **cocoshop**

#### Módulos
Instalar los módulos necesarios para ejecutar el api

`$npm install `

Acceder a la  carpeta donde se encuentra alojado el Front-End

`$cd angular_src `
`$npm install`

Abrir dos consolas una en la raíz del proyecto y otra dentro de la carpeta del Front-End, en ambas ejecutar:
`$npm start`

El api estará corriendo en el puerto 3000, el [Front-End](http://localhost:4200 "Front-End")en el puerto 4200 

#### Navegación

- Página Princial['/']: Presenta los productos que se encuentran en la base de datos con la información correspondiente.

- Menu Administración: Contiene un enlace al CRUD de productos /admin/products

- Botón carrito: Al hacer click muestra los productos actualmente en el carrito de compras.

