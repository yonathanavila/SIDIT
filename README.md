# SIDIT Protocol
## _Herramienta de Digitalizacion y Transparencia_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/yonathanavila/SIDIT/tree/main/blockchain)

SIDIT Protocol es una herramienta digital, transparente y descentralizada, que busca automatizar y hacer mas eficiente la reporteria del sistema de emergencias de Honduras.

- Abre la aplicacion
- Llena los formularios
- Saca reportes
- ✨Magia ✨

## Caracteristicas

- Llenar reportes de manera mas eficiente para poder optimizar tiempo en llamados de emergencia.
- Almacenamiento de los reportes en el blockchain para seguridad y transparencia.
- Exporta reportes facilmente referenciando a los datos guardados en la blockchain.
- Acceso rapido desde cualquier dispositivo con acceso a internet.

## Tech

SIDIT Protocol utiliza una variedad de distintos proyectos para poder funcionar correctamente:

- [Next.JS] - Creacion de SPA para interaccion con SmartContracts
- [Remix IDE] - Despliegue y pruebas de SmartContracts
- [Solidity] - Lenguaje para creacion de SmartContracts
- [Tailwind] - Creacion de componentes de interfaz de usuario
- [MagicLink] - Interfaz y conexion de billetera "USER-FRIENDLY"
- [Arbitrum] - L2 optimo para transacciones a bajo costo

SIDIT Protocol es un programa de codigo abierto y lo puedes ubicar en el siguiente [repositorio publico][dill]
 en GitHub.

## Instalacion

SIDIT Protocol requiere [Node.js](https://nodejs.org/) v10+ para correr.

Instala las dependencias y devDependencies para comenzar el servidor.

```sh
cd SIDIT
npm i
npm run dev
```

Para ambientes de produccion...

```sh
npm run build 
NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY=
MAGIC_SECRET_KEY=
```

## License

[SmartContract Deployment]

**Contribuyendo con Honduras! #weMerge**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/yonathanavila/SIDIT/tree/main/blockchain>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>
   [SmartContract Deployment]: <https://goerli-rollup-explorer.arbitrum.io/address/0x8a1cfac91F05e37C42Ac70053Fa8eB602Fc60691>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
